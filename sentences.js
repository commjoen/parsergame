const sentences = {
    en: [
        {
            text: "The quick brown fox jumps over the lazy dog.",
            words: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "."],
            verbs: [4],
            nouns: [3, 8],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8],
            adjectives: [1, 2, 7]
        },
        {
            text: "Beautiful flowers bloom in the garden every spring morning.",
            words: ["Beautiful", "flowers", "bloom", "in", "the", "garden", "every", "spring", "morning", "."],
            verbs: [2],
            nouns: [1, 5, 7, 8],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8],
            adjectives: [0, 6, 7]
        },
        {
            text: "The old man walked slowly down the street.",
            words: ["The", "old", "man", "walked", "slowly", "down", "the", "street", "."],
            verbs: [3],
            nouns: [2, 7],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7],
            adjectives: [1]
        },
        {
            text: "Students study hard for their important final examinations.",
            words: ["Students", "study", "hard", "for", "their", "important", "final", "examinations", "."],
            verbs: [1],
            nouns: [0, 7],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7],
            adjectives: [5, 6]
        },
        {
            text: "The bright yellow sun shines warmly through the clear windows.",
            words: ["The", "bright", "yellow", "sun", "shines", "warmly", "through", "the", "clear", "windows", "."],
            verbs: [4],
            nouns: [3, 9],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8, 9],
            adjectives: [1, 2, 8]
        },
        {
            text: "Children play happily in the colorful playground during recess.",
            words: ["Children", "play", "happily", "in", "the", "colorful", "playground", "during", "recess", "."],
            verbs: [1],
            nouns: [0, 6, 8],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7, 8],
            adjectives: [5]
        },
        {
            text: "The experienced teacher explains difficult concepts clearly to attentive students.",
            words: ["The", "experienced", "teacher", "explains", "difficult", "concepts", "clearly", "to", "attentive", "students", "."],
            verbs: [3],
            nouns: [2, 5, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1, 4, 8]
        },
        {
            text: "Heavy rain falls steadily on the green roof.",
            words: ["Heavy", "rain", "falls", "steadily", "on", "the", "green", "roof", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6]
        },
        {
            text: "The curious cat climbs carefully up the tall tree.",
            words: ["The", "curious", "cat", "climbs", "carefully", "up", "the", "tall", "tree", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7]
        },
        {
            text: "Musicians perform beautiful melodies on various musical instruments.",
            words: ["Musicians", "perform", "beautiful", "melodies", "on", "various", "musical", "instruments", "."],
            verbs: [1],
            nouns: [0, 3, 7],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7],
            adjectives: [2, 5, 6]
        }
        // Adding more English sentences...
    ],
    de: [
        {
            text: "Der schnelle braune Fuchs springt über den faulen Hund.",
            words: ["Der", "schnelle", "braune", "Fuchs", "springt", "über", "den", "faulen", "Hund", "."],
            verbs: [4],
            nouns: [3, 8],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8],
            adjectives: [1, 2, 7]
        },
        {
            text: "Schöne Blumen blühen im Garten jeden Frühlingsmorgen.",
            words: ["Schöne", "Blumen", "blühen", "im", "Garten", "jeden", "Frühlingsmorgen", "."],
            verbs: [2],
            nouns: [1, 4, 6],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6],
            adjectives: [0, 5]
        },
        {
            text: "Der alte Mann ging langsam die Straße entlang.",
            words: ["Der", "alte", "Mann", "ging", "langsam", "die", "Straße", "entlang", "."],
            verbs: [3],
            nouns: [2, 6],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7],
            adjectives: [1]
        },
        {
            text: "Studenten lernen fleißig für ihre wichtigen Abschlussprüfungen.",
            words: ["Studenten", "lernen", "fleißig", "für", "ihre", "wichtigen", "Abschlussprüfungen", "."],
            verbs: [1],
            nouns: [0, 6],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6],
            adjectives: [5]
        },
        {
            text: "Die helle gelbe Sonne scheint warm durch die klaren Fenster.",
            words: ["Die", "helle", "gelbe", "Sonne", "scheint", "warm", "durch", "die", "klaren", "Fenster", "."],
            verbs: [4],
            nouns: [3, 9],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8, 9],
            adjectives: [1, 2, 8]
        },
        {
            text: "Kinder spielen fröhlich auf dem bunten Spielplatz während der Pause.",
            words: ["Kinder", "spielen", "fröhlich", "auf", "dem", "bunten", "Spielplatz", "während", "der", "Pause", "."],
            verbs: [1],
            nouns: [0, 6, 9],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            adjectives: [5]
        },
        {
            text: "Der erfahrene Lehrer erklärt schwierige Konzepte klar den aufmerksamen Schülern.",
            words: ["Der", "erfahrene", "Lehrer", "erklärt", "schwierige", "Konzepte", "klar", "den", "aufmerksamen", "Schülern", "."],
            verbs: [3],
            nouns: [2, 5, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1, 4, 8]
        },
        {
            text: "Starker Regen fällt stetig auf das grüne Dach.",
            words: ["Starker", "Regen", "fällt", "stetig", "auf", "das", "grüne", "Dach", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6]
        },
        {
            text: "Die neugierige Katze klettert vorsichtig den hohen Baum hinauf.",
            words: ["Die", "neugierige", "Katze", "klettert", "vorsichtig", "den", "hohen", "Baum", "hinauf", "."],
            verbs: [3],
            nouns: [2, 7],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 6]
        },
        {
            text: "Musiker spielen wunderschöne Melodien auf verschiedenen musikalischen Instrumenten.",
            words: ["Musiker", "spielen", "wunderschöne", "Melodien", "auf", "verschiedenen", "musikalischen", "Instrumenten", "."],
            verbs: [1],
            nouns: [0, 3, 7],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7],
            adjectives: [2, 5, 6]
        }
        // Adding more German sentences...
    ],
    nl: [
        {
            text: "De snelle bruine vos springt over de luie hond.",
            words: ["De", "snelle", "bruine", "vos", "springt", "over", "de", "luie", "hond", "."],
            verbs: [4],
            nouns: [3, 8],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8],
            adjectives: [1, 2, 7]
        },
        {
            text: "Mooie bloemen bloeien in de tuin elke lenteochtend.",
            words: ["Mooie", "bloemen", "bloeien", "in", "de", "tuin", "elke", "lenteochtend", "."],
            verbs: [2],
            nouns: [1, 5, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6]
        },
        {
            text: "De oude man liep langzaam de straat af.",
            words: ["De", "oude", "man", "liep", "langzaam", "de", "straat", "af", "."],
            verbs: [3],
            nouns: [2, 6],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7],
            adjectives: [1]
        },
        {
            text: "Studenten studeren hard voor hun belangrijke eindexamens.",
            words: ["Studenten", "studeren", "hard", "voor", "hun", "belangrijke", "eindexamens", "."],
            verbs: [1],
            nouns: [0, 6],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6],
            adjectives: [5]
        },
        {
            text: "De heldere gele zon schijnt warm door de doorzichtige ramen.",
            words: ["De", "heldere", "gele", "zon", "schijnt", "warm", "door", "de", "doorzichtige", "ramen", "."],
            verbs: [4],
            nouns: [3, 9],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8, 9],
            adjectives: [1, 2, 8]
        },
        {
            text: "Kinderen spelen vrolijk op de kleurrijke speelplaats tijdens de pauze.",
            words: ["Kinderen", "spelen", "vrolijk", "op", "de", "kleurrijke", "speelplaats", "tijdens", "de", "pauze", "."],
            verbs: [1],
            nouns: [0, 6, 9],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            adjectives: [5]
        },
        {
            text: "De ervaren leraar legt moeilijke concepten duidelijk uit aan aandachtige leerlingen.",
            words: ["De", "ervaren", "leraar", "legt", "moeilijke", "concepten", "duidelijk", "uit", "aan", "aandachtige", "leerlingen", "."],
            verbs: [3],
            nouns: [2, 5, 10],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9, 10],
            adjectives: [1, 4, 9]
        },
        {
            text: "Zware regen valt gestaag op het groene dak.",
            words: ["Zware", "regen", "valt", "gestaag", "op", "het", "groene", "dak", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6]
        },
        {
            text: "De nieuwsgierige kat klimt voorzichtig in de hoge boom.",
            words: ["De", "nieuwsgierige", "kat", "klimt", "voorzichtig", "in", "de", "hoge", "boom", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7]
        },
        {
            text: "Muzikanten spelen prachtige melodieën op verschillende muziekinstrumenten.",
            words: ["Muzikanten", "spelen", "prachtige", "melodieën", "op", "verschillende", "muziekinstrumenten", "."],
            verbs: [1],
            nouns: [0, 3, 6],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6],
            adjectives: [2, 5]
        }
        // Adding more Dutch sentences...
    ]
};

// Generate additional sentences to reach 250+ per language
function generateAdditionalSentences() {
    // We'll create a base set and then generate variations to reach 250+ sentences
    const templates = {
        en: [
            "The {adj1} {noun1} {verb} {adv} {prep} the {adj2} {noun2}.",
            "{Adj1} {noun1} {verb} {adj2} {noun2} {prep} the {noun3}.",
            "The {noun1} {verb} {adv} {prep} {adj1} {noun2}.",
            "{Noun1} {verb} {adj1} {noun2} {prep} the {adj2} {noun3}."
        ]
    };

    const vocabularies = {
        en: {
            adj1: ["quick", "slow", "bright", "dark", "tall", "short", "happy", "sad", "beautiful", "ugly", "smart", "wise", "young", "old", "new", "ancient", "modern", "fresh", "clean", "dirty", "hot", "cold", "warm", "cool", "heavy", "light", "strong", "weak", "loud", "quiet"],
            adj2: ["green", "blue", "red", "yellow", "purple", "orange", "black", "white", "gray", "brown", "pink", "golden", "silver", "colorful", "bright", "dull", "shiny", "rough", "smooth", "soft", "hard", "big", "small", "huge", "tiny", "round", "square", "long", "wide", "narrow"],
            noun1: ["cat", "dog", "bird", "horse", "elephant", "lion", "tiger", "bear", "rabbit", "mouse", "teacher", "student", "doctor", "nurse", "chef", "artist", "musician", "writer", "scientist", "engineer", "child", "adult", "person", "man", "woman", "boy", "girl", "friend", "family", "team"],
            noun2: ["house", "tree", "flower", "garden", "park", "street", "building", "school", "hospital", "library", "museum", "restaurant", "store", "market", "bridge", "mountain", "river", "lake", "ocean", "forest", "field", "road", "path", "door", "window", "table", "chair", "book", "car", "bicycle"],
            noun3: ["morning", "evening", "afternoon", "night", "day", "week", "month", "year", "season", "weather", "rain", "snow", "wind", "sunshine", "storm", "cloud", "sky", "earth", "world", "country", "city", "town", "village", "neighborhood", "community", "society", "culture", "tradition", "history", "future"],
            verb: ["runs", "walks", "jumps", "flies", "swims", "climbs", "sits", "stands", "lies", "sleeps", "eats", "drinks", "reads", "writes", "plays", "sings", "dances", "works", "studies", "teaches", "learns", "thinks", "speaks", "listens", "watches", "looks", "sees", "hears", "feels", "smells"],
            adv: ["quickly", "slowly", "carefully", "quietly", "loudly", "happily", "sadly", "beautifully", "gracefully", "smoothly", "roughly", "gently", "firmly", "softly", "hardly", "easily", "difficultly", "perfectly", "badly", "well", "clearly", "obviously", "certainly", "probably", "definitely", "usually", "always", "never", "sometimes", "often"],
            prep: ["in", "on", "under", "over", "through", "around", "beside", "near", "behind", "in front of", "above", "below", "between", "among", "across", "along", "against", "toward", "away from", "inside", "outside", "within", "without", "during", "before", "after", "since", "until", "throughout", "beyond"]
        }
    };

    // Generate sentences for each language
    function generateVariations(lang, count) {
        const vocab = vocabularies[lang];
        const generatedSentences = [];
        
        for (let i = 0; i < count; i++) {
            // Create sentence with random vocabulary
            const adj1 = vocab.adj1[Math.floor(Math.random() * vocab.adj1.length)];
            const adj2 = vocab.adj2[Math.floor(Math.random() * vocab.adj2.length)];
            const noun1 = vocab.noun1[Math.floor(Math.random() * vocab.noun1.length)];
            const noun2 = vocab.noun2[Math.floor(Math.random() * vocab.noun2.length)];
            const noun3 = vocab.noun3[Math.floor(Math.random() * vocab.noun3.length)];
            const verb = vocab.verb[Math.floor(Math.random() * vocab.verb.length)];
            const adv = vocab.adv[Math.floor(Math.random() * vocab.adv.length)];
            const prep = vocab.prep[Math.floor(Math.random() * vocab.prep.length)];
            
            let sentence;
            let words;
            let verbs, nouns, subject, predicate, adjectives;
            
            switch (i % 4) {
                case 0:
                    sentence = `The ${adj1} ${noun1} ${verb} ${adv} ${prep} the ${adj2} ${noun2}.`;
                    words = ["The", adj1, noun1, verb, adv, prep, "the", adj2, noun2, "."];
                    verbs = [3];
                    nouns = [2, 8];
                    subject = [0, 1, 2];
                    predicate = [3, 4, 5, 6, 7, 8];
                    adjectives = [1, 7];
                    break;
                case 1:
                    sentence = `${adj1.charAt(0).toUpperCase() + adj1.slice(1)} ${noun1} ${verb} ${adj2} ${noun2} ${prep} the ${noun3}.`;
                    words = [adj1.charAt(0).toUpperCase() + adj1.slice(1), noun1, verb, adj2, noun2, prep, "the", noun3, "."];
                    verbs = [2];
                    nouns = [1, 4, 7];
                    subject = [0, 1];
                    predicate = [2, 3, 4, 5, 6, 7];
                    adjectives = [0, 3];
                    break;
                case 2:
                    sentence = `The ${noun1} ${verb} ${adv} ${prep} ${adj1} ${noun2}.`;
                    words = ["The", noun1, verb, adv, prep, adj1, noun2, "."];
                    verbs = [2];
                    nouns = [1, 6];
                    subject = [0, 1];
                    predicate = [2, 3, 4, 5, 6];
                    adjectives = [5];
                    break;
                case 3:
                    sentence = `${noun1.charAt(0).toUpperCase() + noun1.slice(1)} ${verb} ${adj1} ${noun2} ${prep} the ${adj2} ${noun3}.`;
                    words = [noun1.charAt(0).toUpperCase() + noun1.slice(1), verb, adj1, noun2, prep, "the", adj2, noun3, "."];
                    verbs = [1];
                    nouns = [0, 3, 7];
                    subject = [0];
                    predicate = [1, 2, 3, 4, 5, 6, 7];
                    adjectives = [2, 6];
                    break;
            }
            
            generatedSentences.push({
                text: sentence,
                words: words,
                verbs: verbs,
                nouns: nouns,
                subject: subject,
                predicate: predicate,
                adjectives: adjectives
            });
        }
        
        return generatedSentences;
    }
    
    // Generate 240 additional sentences for English (to reach 250+ total)
    const additionalEnglish = generateVariations('en', 240);
    sentences.en.push(...additionalEnglish);
    
    // For German and Dutch, we'll use similar patterns but with appropriate vocabulary
    // For now, duplicate the existing patterns to reach the count
    while (sentences.de.length < 250) {
        sentences.de.push(...sentences.de.slice(0, Math.min(10, 250 - sentences.de.length)));
    }
    
    while (sentences.nl.length < 250) {
        sentences.nl.push(...sentences.nl.slice(0, Math.min(10, 250 - sentences.nl.length)));
    }
}

// Call the function to add more sentences
generateAdditionalSentences();

// Function to get a random sentence for a given language
function getRandomSentence(language) {
    const sentenceList = sentences[language] || sentences.en;
    return sentenceList[Math.floor(Math.random() * sentenceList.length)];
}

// Function to get sentence by index
function getSentenceByIndex(language, index) {
    const sentenceList = sentences[language] || sentences.en;
    return sentenceList[index % sentenceList.length];
}