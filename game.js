class ParserGame {
    constructor() {
        this.currentLanguage = 'en';
        this.currentChallenge = 'verbs';
        this.currentSentence = null;
        this.currentQuestionIndex = 0;
        this.totalQuestions = 250;
        this.timeLimit = 0; // 0 means no time limit
        this.timeLeft = 0;
        this.timer = null;
        this.score = 0;
        this.selectedWords = new Set();
        this.isAnswerChecked = false;
        this.availableSentences = []; // Array to hold randomized sentences for current game
        
        this.loadSettings();
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.generateGameSentences();
        this.updateUI();
        this.loadNewQuestion();
        
        // Start timer if time limit is set
        if (this.timeLimit > 0) {
            this.startTimer();
        }
    }
    
    loadSettings() {
        // Load settings from localStorage
        const savedSettings = localStorage.getItem('parserGameSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            this.totalQuestions = settings.totalQuestions || 250;
            this.timeLimit = settings.timeLimit || 0;
            this.currentLanguage = settings.language || 'en';
            this.currentChallenge = settings.challenge || 'verbs';
        }
    }
    
    saveSettings() {
        // Save settings to localStorage
        const settings = {
            totalQuestions: this.totalQuestions,
            timeLimit: this.timeLimit,
            language: this.currentLanguage,
            challenge: this.currentChallenge
        };
        localStorage.setItem('parserGameSettings', JSON.stringify(settings));
    }
    
    generateGameSentences() {
        // Get all sentences for current language and create a randomized subset with no duplicates
        const allSentences = sentences[this.currentLanguage] || sentences.en;
        
        // Use Fisher-Yates shuffle for better randomization
        const shuffled = [...allSentences];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        // Ensure we don't have more questions than unique sentences
        const maxQuestions = Math.min(this.totalQuestions, shuffled.length);
        
        // Create unique sentence set by text to prevent duplicates
        const uniqueSentences = [];
        const seenTexts = new Set();
        
        for (let i = 0; i < shuffled.length && uniqueSentences.length < maxQuestions; i++) {
            const sentence = shuffled[i];
            if (!seenTexts.has(sentence.text)) {
                seenTexts.add(sentence.text);
                uniqueSentences.push(sentence);
            }
        }
        
        this.availableSentences = uniqueSentences;
        
        // Update total questions if we couldn't get enough unique sentences
        if (uniqueSentences.length < this.totalQuestions) {
            console.warn(`Only ${uniqueSentences.length} unique sentences available for ${this.currentLanguage}, reducing total questions`);
            this.totalQuestions = uniqueSentences.length;
        }
    }
    
    bindEvents() {
        // Game control buttons
        document.getElementById('checkAnswer').addEventListener('click', () => {
            this.checkAnswer();
        });
        
        document.getElementById('nextQuestion').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        document.getElementById('resetSelection').addEventListener('click', () => {
            this.resetSelection();
        });
        
        // Settings modal
        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.openSettingsModal();
        });
        
        document.getElementById('closeSettings').addEventListener('click', () => {
            this.closeSettingsModal();
        });
        
        document.getElementById('cancelSettings').addEventListener('click', () => {
            this.closeSettingsModal();
        });
        
        document.getElementById('applySettings').addEventListener('click', () => {
            this.applySettings();
        });
        
        // Close modal when clicking outside
        document.getElementById('settingsModal').addEventListener('click', (e) => {
            if (e.target.id === 'settingsModal') {
                this.closeSettingsModal();
            }
        });
    }
    
    updateUI() {
        const t = translations[this.currentLanguage];
        
        // Update text content
        document.getElementById('gameTitle').textContent = t.gameTitle;
        document.getElementById('gameSubtitle').textContent = t.gameSubtitle;
        document.getElementById('languageLabel').textContent = t.languageLabel;
        document.getElementById('challengeLabel').textContent = t.challengeLabel;
        document.getElementById('checkAnswer').textContent = t.checkAnswer;
        document.getElementById('nextQuestion').textContent = t.nextQuestion;
        document.getElementById('resetSelection').textContent = t.resetSelection;
        document.getElementById('sourceLink').textContent = t.sourceLink;
        document.getElementById('copyright').textContent = t.copyright;
        
        // Update version info
        if (typeof APP_VERSION !== 'undefined') {
            document.getElementById('versionInfo').textContent = formatString(t.version, APP_VERSION);
        }
        
        // Update settings modal translations
        if (t.settings) {
            document.getElementById('settingsTitle').textContent = t.settings.title;
            document.getElementById('sentenceCountLabel').textContent = t.settings.sentenceCountLabel;
            document.getElementById('timeLimitLabel').textContent = t.settings.timeLimitLabel;
            document.getElementById('applySettings').textContent = t.settings.applySettings;
            document.getElementById('cancelSettings').textContent = t.settings.cancelSettings;
        }
        
        // Update instructions
        document.getElementById('instructions').textContent = t.instructions[this.currentChallenge];
        
        // Update progress
        document.getElementById('questionNumber').textContent = 
            formatString(t.questionOf, this.currentQuestionIndex + 1, this.totalQuestions);
        document.getElementById('score').textContent = 
            formatString(t.score, this.score);
            
        // Update timer display
        this.updateTimerDisplay();
    }
    
    loadNewQuestion() {
        // Use the randomized sentence from our available sentences array
        this.currentSentence = this.availableSentences[this.currentQuestionIndex];
        this.selectedWords.clear();
        this.isAnswerChecked = false;
        
        // Enable/disable buttons
        document.getElementById('checkAnswer').disabled = false;
        document.getElementById('nextQuestion').disabled = true;
        
        // Hide feedback
        document.getElementById('feedback').classList.add('hidden');
        
        // Render sentence
        this.renderSentence();
        
        // Update instructions for current challenge
        const t = translations[this.currentLanguage];
        document.getElementById('instructions').textContent = t.instructions[this.currentChallenge];
    }
    
    renderSentence() {
        const sentenceContainer = document.getElementById('sentence');
        sentenceContainer.innerHTML = '';
        
        this.currentSentence.words.forEach((word, index) => {
            const wordElement = document.createElement('span');
            wordElement.className = 'word';
            wordElement.textContent = word;
            wordElement.dataset.index = index;
            
            wordElement.addEventListener('click', () => {
                if (!this.isAnswerChecked) {
                    this.toggleWordSelection(index);
                }
            });
            
            sentenceContainer.appendChild(wordElement);
        });
    }
    
    toggleWordSelection(index) {
        const wordElement = document.querySelector(`[data-index="${index}"]`);
        
        if (this.selectedWords.has(index)) {
            this.selectedWords.delete(index);
            wordElement.classList.remove('selected');
        } else {
            this.selectedWords.add(index);
            wordElement.classList.add('selected');
        }
    }
    
    checkAnswer() {
        if (this.isAnswerChecked) return;
        
        this.isAnswerChecked = true;
        const correctAnswers = new Set(this.currentSentence[this.currentChallenge]);
        
        // Calculate results
        const correctSelections = [];
        const incorrectSelections = [];
        const missedAnswers = [];
        
        // Check selected words
        this.selectedWords.forEach(index => {
            if (correctAnswers.has(index)) {
                correctSelections.push(index);
            } else {
                incorrectSelections.push(index);
            }
        });
        
        // Check missed correct answers
        correctAnswers.forEach(index => {
            if (!this.selectedWords.has(index)) {
                missedAnswers.push(index);
            }
        });
        
        // Update visual feedback
        this.updateWordVisuals(correctSelections, incorrectSelections, missedAnswers);
        
        // Calculate score and show feedback
        const isPerfect = incorrectSelections.length === 0 && missedAnswers.length === 0;
        if (isPerfect) {
            this.score += 10;
        } else if (correctSelections.length > 0) {
            this.score += Math.max(1, Math.floor(10 * correctSelections.length / correctAnswers.size));
        }
        
        this.showFeedback(correctSelections.length, correctAnswers.size, missedAnswers.length, incorrectSelections.length);
        
        // Update UI
        document.getElementById('checkAnswer').disabled = true;
        document.getElementById('nextQuestion').disabled = false;
        document.getElementById('score').textContent = 
            formatString(translations[this.currentLanguage].score, this.score);
    }
    
    updateWordVisuals(correct, incorrect, missed) {
        // Mark correct selections
        correct.forEach(index => {
            const wordElement = document.querySelector(`[data-index="${index}"]`);
            wordElement.classList.remove('selected');
            wordElement.classList.add('correct');
        });
        
        // Mark incorrect selections
        incorrect.forEach(index => {
            const wordElement = document.querySelector(`[data-index="${index}"]`);
            wordElement.classList.remove('selected');
            wordElement.classList.add('incorrect');
        });
        
        // Mark missed correct answers
        missed.forEach(index => {
            const wordElement = document.querySelector(`[data-index="${index}"]`);
            wordElement.classList.add('missed');
        });
    }
    
    showFeedback(correctCount, totalCorrect, missedCount, incorrectCount) {
        const feedbackElement = document.getElementById('feedback');
        const t = translations[this.currentLanguage];
        
        let message = '';
        let className = '';
        
        if (correctCount === totalCorrect && incorrectCount === 0) {
            message = t.feedback.perfect;
            className = 'success';
        } else if (correctCount > 0) {
            if (missedCount === 0 && incorrectCount === 0) {
                message = t.feedback.perfect;
                className = 'success';
            } else if (missedCount > 0 && incorrectCount > 0) {
                message = formatString(t.feedback.partial, missedCount, incorrectCount);
                className = 'partial';
            } else if (missedCount > 0) {
                message = t.feedback.missed;
                className = 'partial';
            } else {
                message = t.feedback.wrongSelection;
                className = 'partial';
            }
        } else {
            message = t.feedback.incorrect;
            className = 'error';
        }
        
        feedbackElement.textContent = message;
        feedbackElement.className = `feedback ${className}`;
        feedbackElement.classList.remove('hidden');
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.totalQuestions) {
            this.endGame();
        } else {
            this.loadNewQuestion();
            this.updateUI();
        }
    }
    
    resetSelection() {
        if (this.isAnswerChecked) return;
        
        this.selectedWords.clear();
        document.querySelectorAll('.word').forEach(word => {
            word.classList.remove('selected');
        });
    }
    
    openSettingsModal() {
        const modal = document.getElementById('settingsModal');
        
        // Set current values in the modal
        document.getElementById('language').value = this.currentLanguage;
        document.getElementById('challengeType').value = this.currentChallenge;
        document.getElementById('sentenceCount').value = this.totalQuestions;
        document.getElementById('timeLimit').value = this.timeLimit;
        
        // Update the dropdown options with translations
        this.updateSettingsDropdowns();
        
        modal.classList.remove('hidden');
    }
    
    closeSettingsModal() {
        document.getElementById('settingsModal').classList.add('hidden');
    }
    
    updateSettingsDropdowns() {
        const t = translations[this.currentLanguage];
        if (!t.settings) return;
        
        // Update language dropdown
        const languageSelect = document.getElementById('language');
        languageSelect.value = this.currentLanguage;
        
        // Update challenge dropdown
        const challengeSelect = document.getElementById('challengeType');
        challengeSelect.innerHTML = '';
        Object.keys(t.challenges).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = t.challenges[key];
            challengeSelect.appendChild(option);
        });
        challengeSelect.value = this.currentChallenge;
        
        // Update sentence count dropdown
        const sentenceCountSelect = document.getElementById('sentenceCount');
        sentenceCountSelect.innerHTML = `
            <option value="10">${t.settings.sentences10}</option>
            <option value="25">${t.settings.sentences25}</option>
            <option value="50">${t.settings.sentences50}</option>
            <option value="100">${t.settings.sentences100}</option>
            <option value="250">${t.settings.sentences250}</option>
        `;
        sentenceCountSelect.value = this.totalQuestions;
        
        // Update time limit dropdown
        const timeLimitSelect = document.getElementById('timeLimit');
        timeLimitSelect.innerHTML = `
            <option value="0">${t.settings.noTimeLimit}</option>
            <option value="300">${t.settings.time5min}</option>
            <option value="600">${t.settings.time10min}</option>
            <option value="900">${t.settings.time15min}</option>
            <option value="1800">${t.settings.time30min}</option>
        `;
        timeLimitSelect.value = this.timeLimit;
    }
    
    applySettings() {
        const newLanguage = document.getElementById('language').value;
        const newChallenge = document.getElementById('challengeType').value;
        const newTotalQuestions = parseInt(document.getElementById('sentenceCount').value);
        const newTimeLimit = parseInt(document.getElementById('timeLimit').value);
        
        // Update settings
        this.currentLanguage = newLanguage;
        this.currentChallenge = newChallenge;
        this.totalQuestions = newTotalQuestions;
        this.timeLimit = newTimeLimit;
        
        // Save settings
        this.saveSettings();
        
        // Regenerate game sentences with new count and language
        this.generateGameSentences();
        
        // Reset current game
        this.currentQuestionIndex = 0;
        this.score = 0;
        
        // Reset timer if it was running
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        // Start timer if time limit is set
        if (this.timeLimit > 0) {
            this.startTimer();
        }
        
        // Update UI and start new game
        this.updateUI();
        this.loadNewQuestion();
        
        // Close modal
        this.closeSettingsModal();
    }
    
    startTimer() {
        if (this.timeLimit <= 0) return;
        
        this.timeLeft = this.timeLimit;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.timer = null;
                this.endGame();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        
        if (this.timeLimit <= 0) {
            timerElement.classList.add('hidden');
            return;
        }
        
        timerElement.classList.remove('hidden');
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        timerElement.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    endGame() {
        const t = translations[this.currentLanguage];
        const finalScore = Math.round((this.score / (this.totalQuestions * 10)) * 100);
        
        alert(`Game Complete!\nFinal Score: ${this.score}/${this.totalQuestions * 10}\nPercentage: ${finalScore}%`);
        
        // Reset game
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.generateGameSentences(); // Generate new random sentences
        this.loadNewQuestion();
        this.updateUI();
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParserGame();
});