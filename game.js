class ParserGame {
    constructor() {
        this.currentLanguage = 'en';
        this.currentChallenge = 'verbs';
        this.currentSentence = null;
        this.currentQuestionIndex = 0;
        this.totalQuestions = 250;
        this.score = 0;
        this.selectedWords = new Set();
        this.isAnswerChecked = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateUI();
        this.loadNewQuestion();
    }
    
    bindEvents() {
        // Language selector
        document.getElementById('language').addEventListener('change', (e) => {
            this.currentLanguage = e.target.value;
            this.updateUI();
            this.loadNewQuestion();
        });
        
        // Challenge selector
        document.getElementById('challengeType').addEventListener('change', (e) => {
            this.currentChallenge = e.target.value;
            this.updateUI();
            this.loadNewQuestion();
        });
        
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
        
        // Update challenge options
        const challengeSelect = document.getElementById('challengeType');
        challengeSelect.innerHTML = '';
        Object.keys(t.challenges).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = t.challenges[key];
            challengeSelect.appendChild(option);
        });
        challengeSelect.value = this.currentChallenge;
        
        // Update instructions
        document.getElementById('instructions').textContent = t.instructions[this.currentChallenge];
        
        // Update progress
        document.getElementById('questionNumber').textContent = 
            formatString(t.questionOf, this.currentQuestionIndex + 1, this.totalQuestions);
        document.getElementById('score').textContent = 
            formatString(t.score, this.score);
    }
    
    loadNewQuestion() {
        this.currentSentence = getSentenceByIndex(this.currentLanguage, this.currentQuestionIndex);
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
    
    endGame() {
        const t = translations[this.currentLanguage];
        const finalScore = Math.round((this.score / (this.totalQuestions * 10)) * 100);
        
        alert(`Game Complete!\nFinal Score: ${this.score}/${this.totalQuestions * 10}\nPercentage: ${finalScore}%`);
        
        // Reset game
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.loadNewQuestion();
        this.updateUI();
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParserGame();
});