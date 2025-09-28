const translations = {
    en: {
        gameTitle: "Parser Game",
        gameSubtitle: "Learn to parse sentences by identifying grammatical elements",
        languageLabel: "Language:",
        challengeLabel: "Challenge:",
        challenges: {
            verbs: "Select Verbs",
            nouns: "Select Nouns", 
            subject: "Select Subject",
            predicate: "Select Predicate",
            adjectives: "Select Adjectives"
        },
        instructions: {
            verbs: "Click on all the verbs in the sentence below.",
            nouns: "Click on all the nouns in the sentence below.",
            subject: "Click on the subject of the sentence below.",
            predicate: "Click on the predicate of the sentence below.",
            adjectives: "Click on all the adjectives in the sentence below."
        },
        checkAnswer: "Check Answer",
        nextQuestion: "Next Question",
        resetSelection: "Reset Selection",
        sourceLink: "View Source Code on GitHub",
        copyright: "© 2024 Parser Game - Educational Tool",
        questionOf: "Question {0} of {1}",
        score: "Score: {0}",
        feedback: {
            perfect: "Perfect! You identified all the correct words.",
            good: "Good job! You got {0} out of {1} correct.",
            partial: "You identified some correctly, but missed {0} and incorrectly selected {1}.",
            incorrect: "Not quite right. Try again!",
            missed: "You missed some words.",
            wrongSelection: "Some of your selections were incorrect."
        }
    },
    de: {
        gameTitle: "Parser-Spiel",
        gameSubtitle: "Lernen Sie Sätze zu analysieren, indem Sie grammatische Elemente identifizieren",
        languageLabel: "Sprache:",
        challengeLabel: "Herausforderung:",
        challenges: {
            verbs: "Verben auswählen",
            nouns: "Substantive auswählen",
            subject: "Subjekt auswählen", 
            predicate: "Prädikat auswählen",
            adjectives: "Adjektive auswählen"
        },
        instructions: {
            verbs: "Klicken Sie auf alle Verben im folgenden Satz.",
            nouns: "Klicken Sie auf alle Substantive im folgenden Satz.",
            subject: "Klicken Sie auf das Subjekt des folgenden Satzes.",
            predicate: "Klicken Sie auf das Prädikat des folgenden Satzes.",
            adjectives: "Klicken Sie auf alle Adjektive im folgenden Satz."
        },
        checkAnswer: "Antwort prüfen",
        nextQuestion: "Nächste Frage",
        resetSelection: "Auswahl zurücksetzen",
        sourceLink: "Quellcode auf GitHub ansehen",
        copyright: "© 2024 Parser-Spiel - Bildungswerkzeug",
        questionOf: "Frage {0} von {1}",
        score: "Punkte: {0}",
        feedback: {
            perfect: "Perfekt! Sie haben alle richtigen Wörter identifiziert.",
            good: "Gut gemacht! Sie haben {0} von {1} richtig.",
            partial: "Sie haben einige richtig identifiziert, aber {0} verpasst und {1} fälschlicherweise ausgewählt.",
            incorrect: "Nicht ganz richtig. Versuchen Sie es nochmal!",
            missed: "Sie haben einige Wörter verpasst.",
            wrongSelection: "Einige Ihrer Auswahlen waren falsch."
        }
    },
    nl: {
        gameTitle: "Parser Spel",
        gameSubtitle: "Leer zinnen ontleden door grammaticale elementen te identificeren",
        languageLabel: "Taal:",
        challengeLabel: "Uitdaging:",
        challenges: {
            verbs: "Werkwoorden selecteren",
            nouns: "Zelfstandige naamwoorden selecteren",
            subject: "Onderwerp selecteren",
            predicate: "Gezegde selecteren", 
            adjectives: "Bijvoeglijke naamwoorden selecteren"
        },
        instructions: {
            verbs: "Klik op alle werkwoorden in de onderstaande zin.",
            nouns: "Klik op alle zelfstandige naamwoorden in de onderstaande zin.",
            subject: "Klik op het onderwerp van de onderstaande zin.",
            predicate: "Klik op het gezegde van de onderstaande zin.",
            adjectives: "Klik op alle bijvoeglijke naamwoorden in de onderstaande zin."
        },
        checkAnswer: "Antwoord controleren",
        nextQuestion: "Volgende vraag",
        resetSelection: "Selectie resetten",
        sourceLink: "Bekijk broncode op GitHub",
        copyright: "© 2024 Parser Spel - Educatief hulpmiddel",
        questionOf: "Vraag {0} van {1}",
        score: "Score: {0}",
        feedback: {
            perfect: "Perfect! Je hebt alle juiste woorden geïdentificeerd.",
            good: "Goed gedaan! Je hebt {0} van {1} goed.",
            partial: "Je hebt er enkele correct geïdentificeerd, maar {0} gemist en {1} ten onrechte geselecteerd.",
            incorrect: "Niet helemaal goed. Probeer het opnieuw!",
            missed: "Je hebt enkele woorden gemist.",
            wrongSelection: "Enkele van je selecties waren onjuist."
        }
    }
};

// Helper function to format strings with placeholders
function formatString(str, ...args) {
    return str.replace(/{(\d+)}/g, (match, number) => {
        return typeof args[number] !== 'undefined' ? args[number] : match;
    });
}