const sentences = {
    en: [
        {
            text: "The quick brown fox jumps over the lazy dog.",
            words: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "."],
            verbs: [4],
            nouns: [3, 8],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8],
            adjectives: [1, 2, 7],
            prepositions: [5]
        },
        {
            text: "Beautiful flowers bloom in the garden every spring morning.",
            words: ["Beautiful", "flowers", "bloom", "in", "the", "garden", "every", "spring", "morning", "."],
            verbs: [2],
            nouns: [1, 5, 7, 8],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8],
            adjectives: [0, 6, 7],
            prepositions: [3]
        },
        {
            text: "The old man walked slowly down the street.",
            words: ["The", "old", "man", "walked", "slowly", "down", "the", "street", "."],
            verbs: [3],
            nouns: [2, 7],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7],
            adjectives: [1],
            prepositions: [5]
        },
        {
            text: "Students study hard for their important final examinations.",
            words: ["Students", "study", "hard", "for", "their", "important", "final", "examinations", "."],
            verbs: [1],
            nouns: [0, 7],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7],
            adjectives: [5, 6],
            prepositions: [3]
        },
        {
            text: "The bright yellow sun shines warmly through the clear windows.",
            words: ["The", "bright", "yellow", "sun", "shines", "warmly", "through", "the", "clear", "windows", "."],
            verbs: [4],
            nouns: [3, 9],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8, 9],
            adjectives: [1, 2, 8],
            prepositions: [6]
        },
        {
            text: "Children play happily in the colorful playground during recess.",
            words: ["Children", "play", "happily", "in", "the", "colorful", "playground", "during", "recess", "."],
            verbs: [1],
            nouns: [0, 6, 8],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7, 8],
            adjectives: [5],
            prepositions: [3, 7]
        },
        {
            text: "The experienced teacher explains difficult concepts clearly to attentive students.",
            words: ["The", "experienced", "teacher", "explains", "difficult", "concepts", "clearly", "to", "attentive", "students", "."],
            verbs: [3],
            nouns: [2, 5, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1, 4, 8],
            prepositions: [7]
        },
        {
            text: "Heavy rain falls steadily on the green roof.",
            words: ["Heavy", "rain", "falls", "steadily", "on", "the", "green", "roof", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "The curious cat climbs carefully up the tall tree.",
            words: ["The", "curious", "cat", "climbs", "carefully", "up", "the", "tall", "tree", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Musicians perform beautiful melodies on various musical instruments.",
            words: ["Musicians", "perform", "beautiful", "melodies", "on", "various", "musical", "instruments", "."],
            verbs: [1],
            nouns: [0, 3, 7],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7],
            adjectives: [2, 5, 6],
            prepositions: [4]
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
            adjectives: [1, 2, 7],
            prepositions: [5]
        },
        {
            text: "Schöne Blumen blühen im Garten jeden Frühlingsmorgen.",
            words: ["Schöne", "Blumen", "blühen", "im", "Garten", "jeden", "Frühlingsmorgen", "."],
            verbs: [2],
            nouns: [1, 4, 6],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6],
            adjectives: [0, 5],
            prepositions: [3]
        },
        {
            text: "Der alte Mann ging langsam die Straße entlang.",
            words: ["Der", "alte", "Mann", "ging", "langsam", "die", "Straße", "entlang", "."],
            verbs: [3],
            nouns: [2, 6],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7],
            adjectives: [1],
            prepositions: [7]
        },
        {
            text: "Studenten lernen fleißig für ihre wichtigen Abschlussprüfungen.",
            words: ["Studenten", "lernen", "fleißig", "für", "ihre", "wichtigen", "Abschlussprüfungen", "."],
            verbs: [1],
            nouns: [0, 6],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6],
            adjectives: [5],
            prepositions: [3]
        },
        {
            text: "Die helle gelbe Sonne scheint warm durch die klaren Fenster.",
            words: ["Die", "helle", "gelbe", "Sonne", "scheint", "warm", "durch", "die", "klaren", "Fenster", "."],
            verbs: [4],
            nouns: [3, 9],
            subject: [0, 1, 2, 3],
            predicate: [4, 5, 6, 7, 8, 9],
            adjectives: [1, 2, 8],
            prepositions: [6]
        },
        {
            text: "Kinder spielen fröhlich auf dem bunten Spielplatz während der Pause.",
            words: ["Kinder", "spielen", "fröhlich", "auf", "dem", "bunten", "Spielplatz", "während", "der", "Pause", "."],
            verbs: [1],
            nouns: [0, 6, 9],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            adjectives: [5],
            prepositions: [3, 7]
        },
        {
            text: "Der erfahrene Lehrer erklärt schwierige Konzepte klar den aufmerksamen Schülern.",
            words: ["Der", "erfahrene", "Lehrer", "erklärt", "schwierige", "Konzepte", "klar", "den", "aufmerksamen", "Schülern", "."],
            verbs: [3],
            nouns: [2, 5, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1, 4, 8],
            prepositions: []
        },
        {
            text: "Starker Regen fällt stetig auf das grüne Dach.",
            words: ["Starker", "Regen", "fällt", "stetig", "auf", "das", "grüne", "Dach", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "Die neugierige Katze klettert vorsichtig den hohen Baum hinauf.",
            words: ["Die", "neugierige", "Katze", "klettert", "vorsichtig", "den", "hohen", "Baum", "hinauf", "."],
            verbs: [3],
            nouns: [2, 7],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 6],
            prepositions: [8]
        },
        {
            text: "Musiker spielen wunderschöne Melodien auf verschiedenen musikalischen Instrumenten.",
            words: ["Musiker", "spielen", "wunderschöne", "Melodien", "auf", "verschiedenen", "musikalischen", "Instrumenten", "."],
            verbs: [1],
            nouns: [0, 3, 7],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6, 7],
            adjectives: [2, 5, 6],
            prepositions: [4]
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
            predicate: [4],
            adjectives: [1, 2, 7],
            prepositions: [5]
        },
        {
            text: "Mooie bloemen bloeien in de tuin elke lenteochtend.",
            words: ["Mooie", "bloemen", "bloeien", "in", "de", "tuin", "elke", "lenteochtend", "."],
            verbs: [2],
            nouns: [1, 5, 7],
            subject: [0, 1],
            predicate: [2],
            adjectives: [0, 6],
            prepositions: [3]
        },
        {
            text: "De oude man liep langzaam de straat af.",
            words: ["De", "oude", "man", "liep", "langzaam", "de", "straat", "af", "."],
            verbs: [3],
            nouns: [2, 6],
            subject: [0, 1, 2],
            predicate: [3, 4, 7],
            adjectives: [1],
            prepositions: [7]
        },
        {
            text: "Studenten studeren hard voor hun belangrijke eindexamens.",
            words: ["Studenten", "studeren", "hard", "voor", "hun", "belangrijke", "eindexamens", "."],
            verbs: [1],
            nouns: [0, 6],
            subject: [0],
            predicate: [1, 2],
            adjectives: [5],
            prepositions: [3]
        },
        {
            text: "De heldere gele zon schijnt warm door de doorzichtige ramen.",
            words: ["De", "heldere", "gele", "zon", "schijnt", "warm", "door", "de", "doorzichtige", "ramen", "."],
            verbs: [4],
            nouns: [3, 9],
            subject: [0, 1, 2, 3],
            predicate: [4, 5],
            adjectives: [1, 2, 8],
            prepositions: [6]
        },
        {
            text: "Kinderen spelen vrolijk op de kleurrijke speelplaats tijdens de pauze.",
            words: ["Kinderen", "spelen", "vrolijk", "op", "de", "kleurrijke", "speelplaats", "tijdens", "de", "pauze", "."],
            verbs: [1],
            nouns: [0, 6, 9],
            subject: [0],
            predicate: [1, 2],
            adjectives: [5],
            prepositions: [3, 7]
        },
        {
            text: "De ervaren leraar legt moeilijke concepten duidelijk uit aan aandachtige leerlingen.",
            words: ["De", "ervaren", "leraar", "legt", "moeilijke", "concepten", "duidelijk", "uit", "aan", "aandachtige", "leerlingen", "."],
            verbs: [3],
            nouns: [2, 5, 10],
            subject: [0, 1, 2],
            predicate: [3, 6, 7],
            adjectives: [1, 4, 9],
            prepositions: [8]
        },
        {
            text: "Zware regen valt gestaag op het groene dak.",
            words: ["Zware", "regen", "valt", "gestaag", "op", "het", "groene", "dak", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De nieuwsgierige kat klimt voorzichtig in de hoge boom.",
            words: ["De", "nieuwsgierige", "kat", "klimt", "voorzichtig", "in", "de", "hoge", "boom", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Muzikanten spelen prachtige melodieën op verschillende muziekinstrumenten.",
            words: ["Muzikanten", "spelen", "prachtige", "melodieën", "op", "verschillende", "muziekinstrumenten", "."],
            verbs: [1],
            nouns: [0, 3, 6],
            subject: [0],
            predicate: [1, 2, 3, 4, 5, 6],
            adjectives: [2, 5],
            prepositions: [4]
        },
        {
            text: "De vriendelijke buurman helpt oudere mensen met hun boodschappen.",
            words: ["De", "vriendelijke", "buurman", "helpt", "oudere", "mensen", "met", "hun", "boodschappen", "."],
            verbs: [3],
            nouns: [2, 5, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 4],
            prepositions: [6]
        },
        {
            text: "Kleine vogels zingen vrolijke liedjes in de groene bomen.",
            words: ["Kleine", "vogels", "zingen", "vrolijke", "liedjes", "in", "de", "groene", "bomen", "."],
            verbs: [2],
            nouns: [1, 4, 8],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8],
            adjectives: [0, 3, 7],
            prepositions: [5]
        },
        {
            text: "De jonge kunstenaar schildert kleurrijke landschappen op grote doeken.",
            words: ["De", "jonge", "kunstenaar", "schildert", "kleurrijke", "landschappen", "op", "grote", "doeken", "."],
            verbs: [3],
            nouns: [2, 5, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 4, 7],
            prepositions: [6]
        },
        {
            text: "Hardwerkende studenten maken elke dag belangrijke huiswerkopdrachten voor school.",
            words: ["Hardwerkende", "studenten", "maken", "elke", "dag", "belangrijke", "huiswerkopdrachten", "voor", "school", "."],
            verbs: [2],
            nouns: [1, 4, 6, 8],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8],
            adjectives: [0, 5],
            prepositions: [7]
        },
        {
            text: "De warme zomerzon schijnt helder op het blauwe water.",
            words: ["De", "warme", "zomerzon", "schijnt", "helder", "op", "het", "blauwe", "water", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Enthousiaste supporters juichen luid voor hun favoriete voetbalteam.",
            words: ["Enthousiaste", "supporters", "juichen", "luid", "voor", "hun", "favoriete", "voetbalteam", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De moedige brandweerman redt mensen uit het brandende gebouw.",
            words: ["De", "moedige", "brandweerman", "redt", "mensen", "uit", "het", "brandende", "gebouw", "."],
            verbs: [3],
            nouns: [2, 4, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Grote schepen varen langzaam door het drukke havengebied.",
            words: ["Grote", "schepen", "varen", "langzaam", "door", "het", "drukke", "havengebied", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De intelligente docent verklaart complexe wiskundige formules aan aandachtige leerlingen.",
            words: ["De", "intelligente", "docent", "verklaart", "complexe", "wiskundige", "formules", "aan", "aandachtige", "leerlingen", "."],
            verbs: [3],
            nouns: [2, 6, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1, 4, 5, 8],
            prepositions: [7]
        },
        {
            text: "De slimme leerling maakt snel zijn huiswerk in de bibliotheek.",
            words: ["De", "slimme", "leerling", "maakt", "snel", "zijn", "huiswerk", "in", "de", "bibliotheek", "."],
            verbs: [3],
            nouns: [2, 6, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1],
            prepositions: [7]
        },
        {
            text: "De oude kerk staat al eeuwen in het midden van het dorp.",
            words: ["De", "oude", "kerk", "staat", "al", "eeuwen", "in", "het", "midden", "van", "het", "dorp", "."],
            verbs: [3],
            nouns: [2, 5, 8, 11],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9, 10, 11],
            adjectives: [1],
            prepositions: [6, 9]
        },
        {
            text: "Vrolijke kinderen bouwen zandkastelen op het warme strand.",
            words: ["Vrolijke", "kinderen", "bouwen", "zandkastelen", "op", "het", "warme", "strand", "."],
            verbs: [2],
            nouns: [1, 3, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De rode appel valt van de hoge boom in de tuin.",
            words: ["De", "rode", "appel", "valt", "van", "de", "hoge", "boom", "in", "de", "tuin", "."],
            verbs: [3],
            nouns: [2, 7, 10],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9, 10],
            adjectives: [1, 6],
            prepositions: [4, 8]
        },
        {
            text: "Wilde ganzen vliegen in formatie naar het zuiden.",
            words: ["Wilde", "ganzen", "vliegen", "in", "formatie", "naar", "het", "zuiden", "."],
            verbs: [2],
            nouns: [1, 4, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0],
            prepositions: [3, 5]
        },
        {
            text: "De jonge vrouw leest graag spannende boeken in bed.",
            words: ["De", "jonge", "vrouw", "leest", "graag", "spannende", "boeken", "in", "bed", "."],
            verbs: [3],
            nouns: [2, 6, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 5],
            prepositions: [7]
        },
        {
            text: "Sterke winden blazen harde sneeuw over de bevroren meren.",
            words: ["Sterke", "winden", "blazen", "harde", "sneeuw", "over", "de", "bevroren", "meren", "."],
            verbs: [2],
            nouns: [1, 4, 8],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8],
            adjectives: [0, 3, 7],
            prepositions: [5]
        },
        {
            text: "De bekwame architect ontwerpt moderne gebouwen voor de stad.",
            words: ["De", "bekwame", "architect", "ontwerpt", "moderne", "gebouwen", "voor", "de", "stad", "."],
            verbs: [3],
            nouns: [2, 5, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 4],
            prepositions: [6]
        },
        {
            text: "Kleine mieren werken samen aan hun grote mierenhoop.",
            words: ["Kleine", "mieren", "werken", "samen", "aan", "hun", "grote", "mierenhoop", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De oude bibliotheek bevat duizenden zeldzame manuscripten uit de middeleeuwen.",
            words: ["De", "oude", "bibliotheek", "bevat", "duizenden", "zeldzame", "manuscripten", "uit", "de", "middeleeuwen", "."],
            verbs: [3],
            nouns: [2, 6, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1, 5],
            prepositions: [7]
        },
        {
            text: "De trotse vader speelt voetbal met zijn enthousiaste kinderen.",
            words: ["De", "trotse", "vader", "speelt", "voetbal", "met", "zijn", "enthousiaste", "kinderen", "."],
            verbs: [3],
            nouns: [2, 4, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Felgekleurde vlinders fladderen tussen de bloeiende bloemen in het veld.",
            words: ["Felgekleurde", "vlinders", "fladderen", "tussen", "de", "bloeiende", "bloemen", "in", "het", "veld", "."],
            verbs: [2],
            nouns: [1, 6, 9],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8, 9],
            adjectives: [0, 5],
            prepositions: [3, 7]
        },
        {
            text: "De getalenteerde pianiste speelt prachtige sonates op het concertpodium.",
            words: ["De", "getalenteerde", "pianiste", "speelt", "prachtige", "sonates", "op", "het", "concertpodium", "."],
            verbs: [3],
            nouns: [2, 5, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 4],
            prepositions: [6]
        },
        {
            text: "Hongerige zeemeeuwen cirkelen luid boven de drukke haven.",
            words: ["Hongerige", "zeemeeuwen", "cirkelen", "luid", "boven", "de", "drukke", "haven", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De witte duiven vliegen rustig over het oude stadhuis.",
            words: ["De", "witte", "duiven", "vliegen", "rustig", "over", "het", "oude", "stadhuis", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Jonge studenten leren elke dag nieuwe dingen op de universiteit.",
            words: ["Jonge", "studenten", "leren", "elke", "dag", "nieuwe", "dingen", "op", "de", "universiteit", "."],
            verbs: [2],
            nouns: [1, 4, 6, 9],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8, 9],
            adjectives: [0, 5],
            prepositions: [7]
        },
        {
            text: "De oude boer verzorgt zijn dieren goed op de grote boerderij.",
            words: ["De", "oude", "boer", "verzorgt", "zijn", "dieren", "goed", "op", "de", "grote", "boerderij", "."],
            verbs: [3],
            nouns: [2, 5, 10],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9, 10],
            adjectives: [1, 9],
            prepositions: [7]
        },
        {
            text: "Mooie vlinders vliegen van bloem naar bloem in de zonnige tuin.",
            words: ["Mooie", "vlinders", "vliegen", "van", "bloem", "naar", "bloem", "in", "de", "zonnige", "tuin", "."],
            verbs: [2],
            nouns: [1, 4, 6, 10],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8, 9, 10],
            adjectives: [0, 9],
            prepositions: [3, 5, 7]
        },
        {
            text: "Verstandige mensen lezen regelmatig goede boeken over interessante onderwerpen.",
            words: ["Verstandige", "mensen", "lezen", "regelmatig", "goede", "boeken", "over", "interessante", "onderwerpen", "."],
            verbs: [2],
            nouns: [1, 5, 8],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8],
            adjectives: [0, 4, 7],
            prepositions: [6]
        },
        {
            text: "De kleine muis verstopt zich snel onder de oude kast.",
            words: ["De", "kleine", "muis", "verstopt", "zich", "snel", "onder", "de", "oude", "kast", "."],
            verbs: [3],
            nouns: [2, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1, 8],
            prepositions: [6]
        },
        {
            text: "Blije kinderen zingen vrolijke liedjes tijdens de schoolvoorstelling.",
            words: ["Blije", "kinderen", "zingen", "vrolijke", "liedjes", "tijdens", "de", "schoolvoorstelling", "."],
            verbs: [2],
            nouns: [1, 4, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 3],
            prepositions: [5]
        },
        {
            text: "De sterke wind waait hard door de smalle straten van de stad.",
            words: ["De", "sterke", "wind", "waait", "hard", "door", "de", "smalle", "straten", "van", "de", "stad", "."],
            verbs: [3],
            nouns: [2, 8, 11],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9, 10, 11],
            adjectives: [1, 7],
            prepositions: [5, 9]
        },
        {
            text: "Intelligente wetenschappers onderzoeken nieuwe medicijnen in moderne laboratoria.",
            words: ["Intelligente", "wetenschappers", "onderzoeken", "nieuwe", "medicijnen", "in", "moderne", "laboratoria", "."],
            verbs: [2],
            nouns: [1, 4, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 3, 6],
            prepositions: [5]
        },
        {
            text: "De trouwe hond wacht geduldig op zijn baasje bij de deur.",
            words: ["De", "trouwe", "hond", "wacht", "geduldig", "op", "zijn", "baasje", "bij", "de", "deur", "."],
            verbs: [3],
            nouns: [2, 7, 10],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9, 10],
            adjectives: [1],
            prepositions: [5, 8]
        },
        {
            text: "De moderne trein rijdt snel door het groene landschap.",
            words: ["De", "moderne", "trein", "rijdt", "snel", "door", "het", "groene", "landschap", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Lieve oma's bakken heerlijke koekjes voor hun kleinkinderen.",
            words: ["Lieve", "oma's", "bakken", "heerlijke", "koekjes", "voor", "hun", "kleinkinderen", "."],
            verbs: [2],
            nouns: [1, 4, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 3],
            prepositions: [5]
        },
        {
            text: "De volle maan schijnt helder boven de stille nacht.",
            words: ["De", "volle", "maan", "schijnt", "helder", "boven", "de", "stille", "nacht", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Prachtige bloemen groeien wild langs de smalle landweg.",
            words: ["Prachtige", "bloemen", "groeien", "wild", "langs", "de", "smalle", "landweg", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De gezellige koffietent opent vroeg in de ochtend.",
            words: ["De", "gezellige", "koffietent", "opent", "vroeg", "in", "de", "ochtend", "."],
            verbs: [3],
            nouns: [2, 7],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7],
            adjectives: [1],
            prepositions: [5]
        },
        {
            text: "Nieuwsgierige toeristen fotograferen oude monumenten in de stad.",
            words: ["Nieuwsgierige", "toeristen", "fotograferen", "oude", "monumenten", "in", "de", "stad", "."],
            verbs: [2],
            nouns: [1, 4, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 3],
            prepositions: [5]
        },
        {
            text: "Rijpe appels hangen zwaar aan de boomtakken in de boomgaard.",
            words: ["Rijpe", "appels", "hangen", "zwaar", "aan", "de", "boomtakken", "in", "de", "boomgaard", "."],
            verbs: [2],
            nouns: [1, 6, 9],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7, 8, 9],
            adjectives: [0],
            prepositions: [4, 7]
        },
        {
            text: "De drukke markt bruist van leven op zaterdagmorgen.",
            words: ["De", "drukke", "markt", "bruist", "van", "leven", "op", "zaterdagmorgen", "."],
            verbs: [3],
            nouns: [2, 5, 7],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7],
            adjectives: [1],
            prepositions: [4, 6]
        },
        {
            text: "Vroege vogels zoeken wormen in de natte aarde.",
            words: ["Vroege", "vogels", "zoeken", "wormen", "in", "de", "natte", "aarde", "."],
            verbs: [2],
            nouns: [1, 3, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De lange brug verbindt twee oevers van de brede rivier.",
            words: ["De", "lange", "brug", "verbindt", "twee", "oevers", "van", "de", "brede", "rivier", "."],
            verbs: [3],
            nouns: [2, 5, 9],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8, 9],
            adjectives: [1, 8],
            prepositions: [6]
        },
        {
            text: "Vriendelijke buren groeten elkaar elke morgen hartelijk.",
            words: ["Vriendelijke", "buren", "groeten", "elkaar", "elke", "morgen", "hartelijk", "."],
            verbs: [2],
            nouns: [1, 5],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6],
            adjectives: [0],
            prepositions: []
        },
        {
            text: "Sneeuwwitte wolken drijven langzaam door de blauwe lucht.",
            words: ["Sneeuwwitte", "wolken", "drijven", "langzaam", "door", "de", "blauwe", "lucht", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De bekende schrijver publiceert elk jaar een nieuw boek.",
            words: ["De", "bekende", "schrijver", "publiceert", "elk", "jaar", "een", "nieuw", "boek", "."],
            verbs: [3],
            nouns: [2, 5, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: []
        },
        {
            text: "Dappere brandweerlieden blussen grote branden in de stad.",
            words: ["Dappere", "brandweerlieden", "blussen", "grote", "branden", "in", "de", "stad", "."],
            verbs: [2],
            nouns: [1, 4, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 3],
            prepositions: [5]
        },
        {
            text: "Zachte regendruppels vallen stil op het groene gras.",
            words: ["Zachte", "regendruppels", "vallen", "stil", "op", "het", "groene", "gras", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "De vertrouwde kat slaapt rustig op de warme vensterbank.",
            words: ["De", "vertrouwde", "kat", "slaapt", "rustig", "op", "de", "warme", "vensterbank", "."],
            verbs: [3],
            nouns: [2, 8],
            subject: [0, 1, 2],
            predicate: [3, 4, 5, 6, 7, 8],
            adjectives: [1, 7],
            prepositions: [5]
        },
        {
            text: "Rustige muziek klinkt zacht uit de oude radio.",
            words: ["Rustige", "muziek", "klinkt", "zacht", "uit", "de", "oude", "radio", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "Verse broodjes ruiken heerlijk in de warme bakkerij.",
            words: ["Verse", "broodjes", "ruiken", "heerlijk", "in", "de", "warme", "bakkerij", "."],
            verbs: [2],
            nouns: [1, 7],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6, 7],
            adjectives: [0, 6],
            prepositions: [4]
        },
        {
            text: "Sportieve jongeren fietsen snel door het park.",
            words: ["Sportieve", "jongeren", "fietsen", "snel", "door", "het", "park", "."],
            verbs: [2],
            nouns: [1, 6],
            subject: [0, 1],
            predicate: [2, 3, 4, 5, 6],
            adjectives: [0],
            prepositions: [4]
        }
        // More Dutch sentences will be generated by the system...
    ]
};

// Generate additional sentences to reach 250+ per language
function generateAdditionalSentences() {
    // Enhanced sentence templates for all languages to create variety
    const templates = {
        en: [
            "The {adj1} {noun1} {verb} {adv} {prep} the {adj2} {noun2}.",
            "{Adj1} {noun1} {verb} {adj2} {noun2} {prep} the {noun3}.",
            "The {noun1} {verb} {adv} {prep} {adj1} {noun2}.",
            "{Noun1} {verb} {adj1} {noun2} {prep} the {adj2} {noun3}.",
            "Every {adj1} {noun1} {verb} {adv} {prep} many {adj2} {noun2}.",
            "Some {adj1} {noun1} {verb} {adj2} {noun2} {prep} every {noun3}.",
            "Many {noun1} {verb} {adv} {prep} {adj1} {noun2}.",
            "All {noun1} {verb} {adj1} {noun2} {prep} some {adj2} {noun3}."
        ],
        de: [
            "Der {adj1} {noun1} {verb} {adv} {prep} dem {adj2} {noun2}.",
            "{Adj1} {noun1} {verb} {adj2} {noun2} {prep} den {noun3}.",
            "Die {noun1} {verb} {adv} {prep} {adj1} {noun2}.",
            "{Noun1} {verb} {adj1} {noun2} {prep} die {adj2} {noun3}.",
            "Jeder {adj1} {noun1} {verb} {adv} {prep} vielen {adj2} {noun2}.",
            "Einige {adj1} {noun1} {verb} {adj2} {noun2} {prep} jeden {noun3}.",
            "Viele {noun1} {verb} {adv} {prep} {adj1} {noun2}.",
            "Alle {noun1} {verb} {adj1} {noun2} {prep} einige {adj2} {noun3}."
        ],
        nl: [
            "De {adj1e} {noun1} {verb} {adv} {prep} de {adj2e} {noun2}.",
            "{Adj1e} {noun1pl} {verb} {adv} {prep} de {adj2e} {noun2}.",
            "De {noun1} {verb} {adv} {prep} het {adj2e} {noun2}.",
            "Elke {adj1e} {noun1} {verb} {adv} {prep} de {noun3}.",
            "{Adj1e} {noun1pl} {verb} {adj2e} {noun2pl} {prep} de {noun3}.",
            "De {adj1e} {noun1} {verb} {prep} de {adj2e} {noun2}.",
            "Het {adj1e} {noun1} {verb} {adv} {prep} de {noun3}.",
            "{Noun1pl} {verb} {adv} {prep} het {adj2e} {noun2}."
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
        },
        de: {
            adj1: ["schnell", "langsam", "hell", "dunkel", "groß", "klein", "glücklich", "traurig", "schön", "hässlich", "klug", "weise", "jung", "alt", "neu", "antik", "modern", "frisch", "sauber", "schmutzig", "heiß", "kalt", "warm", "kühl", "schwer", "leicht", "stark", "schwach", "laut", "leise"],
            adj2: ["grün", "blau", "rot", "gelb", "lila", "orange", "schwarz", "weiß", "grau", "braun", "rosa", "golden", "silbern", "bunt", "hell", "matt", "glänzend", "rau", "glatt", "weich", "hart", "groß", "klein", "riesig", "winzig", "rund", "quadratisch", "lang", "breit", "schmal"],
            noun1: ["Katze", "Hund", "Vogel", "Pferd", "Elefant", "Löwe", "Tiger", "Bär", "Hase", "Maus", "Lehrer", "Schüler", "Arzt", "Krankenschwester", "Koch", "Künstler", "Musiker", "Schriftsteller", "Wissenschaftler", "Ingenieur", "Kind", "Erwachsener", "Person", "Mann", "Frau", "Junge", "Mädchen", "Freund", "Familie", "Team"],
            noun2: ["Haus", "Baum", "Blume", "Garten", "Park", "Straße", "Gebäude", "Schule", "Krankenhaus", "Bibliothek", "Museum", "Restaurant", "Laden", "Markt", "Brücke", "Berg", "Fluss", "See", "Ozean", "Wald", "Feld", "Straße", "Weg", "Tür", "Fenster", "Tisch", "Stuhl", "Buch", "Auto", "Fahrrad"],
            noun3: ["Morgen", "Abend", "Nachmittag", "Nacht", "Tag", "Woche", "Monat", "Jahr", "Jahreszeit", "Wetter", "Regen", "Schnee", "Wind", "Sonnenschein", "Sturm", "Wolke", "Himmel", "Erde", "Welt", "Land", "Stadt", "Dorf", "Nachbarschaft", "Gemeinschaft", "Gesellschaft", "Kultur", "Tradition", "Geschichte", "Zukunft"],
            verb: ["läuft", "geht", "springt", "fliegt", "schwimmt", "klettert", "sitzt", "steht", "liegt", "schläft", "isst", "trinkt", "liest", "schreibt", "spielt", "singt", "tanzt", "arbeitet", "studiert", "lehrt", "lernt", "denkt", "spricht", "hört", "schaut", "blickt", "sieht", "hört", "fühlt", "riecht"],
            adv: ["schnell", "langsam", "vorsichtig", "leise", "laut", "glücklich", "traurig", "schön", "anmutig", "glatt", "rau", "sanft", "fest", "weich", "hart", "leicht", "schwer", "perfekt", "schlecht", "gut", "klar", "offensichtlich", "sicher", "wahrscheinlich", "definitiv", "normalerweise", "immer", "nie", "manchmal", "oft"],
            prep: ["in", "auf", "unter", "über", "durch", "um", "neben", "nahe", "hinter", "vor", "oberhalb", "unterhalb", "zwischen", "unter", "über", "entlang", "gegen", "zu", "weg von", "innerhalb", "außerhalb", "ohne", "während", "vor", "nach", "seit", "bis", "durch", "jenseits"]
        },
        nl: {
            adj1: ["snel", "langzaam", "helder", "donker", "groot", "klein", "gelukkig", "verdrietig", "mooi", "lelijk", "slim", "wijs", "jong", "oud", "nieuw", "modern", "vers", "schoon", "warm", "koel", "zwaar", "licht", "sterk", "zwak", "stil"],
            adj1e: ["snelle", "langzame", "heldere", "donkere", "grote", "kleine", "gelukkige", "verdrietige", "mooie", "lelijke", "slimme", "wijze", "jonge", "oude", "nieuwe", "moderne", "verse", "schone", "warme", "koele", "zware", "lichte", "sterke", "zwakke", "stille"],
            adj2: ["groen", "blauw", "rood", "geel", "wit", "zwart", "kleurrijk", "helder", "glanzend", "glad", "zacht", "hard", "groot", "klein", "lang", "breed"],
            adj2e: ["groene", "blauwe", "rode", "gele", "witte", "zwarte", "kleurrijke", "heldere", "glanzende", "gladde", "zachte", "harde", "grote", "kleine", "lange", "brede"],
            noun1: ["kat", "hond", "vogel", "paard", "kind", "leraar", "student", "dokter", "kunstenaar", "muzikant", "schrijver", "man", "vrouw", "jongen", "meisje", "vriend"],
            noun1pl: ["katten", "honden", "vogels", "paarden", "kinderen", "leraren", "studenten", "dokters", "kunstenaars", "muzikanten", "schrijvers", "mannen", "vrouwen", "jongens", "meisjes", "vrienden"],
            noun2: ["huis", "boom", "bloem", "tuin", "park", "straat", "gebouw", "school", "museum", "restaurant", "markt", "brug", "rivier", "meer", "bos", "veld", "weg", "pad", "raam", "tafel", "stoel", "boek"],
            noun2pl: ["huizen", "bomen", "bloemen", "tuinen", "parken", "straten", "gebouwen", "scholen", "musea", "restaurants", "markten", "bruggen", "rivieren", "meren", "bossen", "velden", "wegen", "paden", "ramen", "tafels", "stoelen", "boeken"],
            noun3: ["ochtend", "avond", "middag", "nacht", "dag", "week", "maand", "jaar", "seizoen", "zomer", "winter", "lente", "herfst", "stad", "dorp"],
            verb: ["rent", "loopt", "springt", "vliegt", "zwemt", "klimt", "zit", "staat", "slaapt", "eet", "drinkt", "leest", "schrijft", "speelt", "zingt", "danst", "werkt", "studeert", "leert", "denkt", "spreekt", "luistert", "kijkt", "ziet", "hoort", "voelt"],
            adv: ["snel", "langzaam", "voorzichtig", "stil", "gelukkig", "mooi", "goed", "duidelijk", "zeker", "gewoonlijk", "altijd", "nooit", "soms", "vaak", "graag", "rustig", "vrolijk", "hard"],
            prep: ["in", "op", "onder", "over", "door", "naast", "achter", "voor", "boven", "tussen", "langs", "naar", "bij", "tijdens", "na", "tot"]
        }
    };

    // Generate sentences for each language with duplicate prevention
    function generateVariations(lang, count) {
        const vocab = vocabularies[lang];
        const langTemplates = templates[lang];
        const generatedSentences = [];
        const uniqueTexts = new Set(); // Track unique sentence texts
        
        let attempts = 0;
        const maxAttempts = count * 10; // Prevent infinite loops
        
        while (generatedSentences.length < count && attempts < maxAttempts) {
            attempts++;
            
            // Select random vocabulary
            const adj1 = vocab.adj1[Math.floor(Math.random() * vocab.adj1.length)];
            const adj2 = vocab.adj2[Math.floor(Math.random() * vocab.adj2.length)];
            const adj1e = lang === 'nl' ? vocab.adj1e[Math.floor(Math.random() * vocab.adj1e.length)] : adj1;
            const adj2e = lang === 'nl' ? vocab.adj2e[Math.floor(Math.random() * vocab.adj2e.length)] : adj2;
            const noun1 = vocab.noun1[Math.floor(Math.random() * vocab.noun1.length)];
            const noun1pl = lang === 'nl' && vocab.noun1pl ? vocab.noun1pl[Math.floor(Math.random() * vocab.noun1pl.length)] : noun1 + 's';
            const noun2 = vocab.noun2[Math.floor(Math.random() * vocab.noun2.length)];
            const noun2pl = lang === 'nl' && vocab.noun2pl ? vocab.noun2pl[Math.floor(Math.random() * vocab.noun2pl.length)] : noun2 + 's';
            const noun3 = vocab.noun3[Math.floor(Math.random() * vocab.noun3.length)];
            const verb = vocab.verb[Math.floor(Math.random() * vocab.verb.length)];
            const adv = vocab.adv[Math.floor(Math.random() * vocab.adv.length)];
            const prep = vocab.prep[Math.floor(Math.random() * vocab.prep.length)];
            
            // Select random template
            const templateIndex = Math.floor(Math.random() * langTemplates.length);
            const template = langTemplates[templateIndex];
            
            // Create sentence by replacing placeholders
            let sentence = template
                .replace(/\{adj1e\}/g, adj1e)
                .replace(/\{Adj1e\}/g, adj1e.charAt(0).toUpperCase() + adj1e.slice(1))
                .replace(/\{adj2e\}/g, adj2e)
                .replace(/\{adj1\}/g, adj1)
                .replace(/\{Adj1\}/g, adj1.charAt(0).toUpperCase() + adj1.slice(1))
                .replace(/\{adj2\}/g, adj2)
                .replace(/\{noun1pl\}/g, noun1pl)
                .replace(/\{Noun1pl\}/g, noun1pl.charAt(0).toUpperCase() + noun1pl.slice(1))
                .replace(/\{noun2pl\}/g, noun2pl)
                .replace(/\{noun1\}/g, noun1)
                .replace(/\{Noun1\}/g, noun1.charAt(0).toUpperCase() + noun1.slice(1))
                .replace(/\{noun2\}/g, noun2)
                .replace(/\{noun3\}/g, noun3)
                .replace(/\{verb\}/g, verb)
                .replace(/\{adv\}/g, adv)
                .replace(/\{prep\}/g, prep);
            
            // Skip if this sentence already exists
            if (uniqueTexts.has(sentence)) {
                continue;
            }
            
            uniqueTexts.add(sentence);
            
            // Split sentence into words
            const words = sentence.split(/\s+/);
            // Handle punctuation - separate it from the last word
            const lastWordIndex = words.length - 1;
            if (words[lastWordIndex].match(/[.!?]$/)) {
                const punctuation = words[lastWordIndex].slice(-1);
                words[lastWordIndex] = words[lastWordIndex].slice(0, -1);
                words.push(punctuation);
            }
            
            // Determine grammatical element positions based on template and vocabulary
            let verbs, nouns, subject, predicate, adjectives, prepositions;
            
            // Find positions of different word types in the generated words array
            const verbIndex = words.findIndex(word => word.toLowerCase() === verb.toLowerCase());
            const adj1Index = words.findIndex(word => word.toLowerCase() === adj1.toLowerCase() || word.toLowerCase() === adj1e.toLowerCase());
            const adj2Index = words.findIndex((word, index) => index > adj1Index && (word.toLowerCase() === adj2.toLowerCase() || word.toLowerCase() === adj2e.toLowerCase()));
            const noun1Index = words.findIndex(word => word.toLowerCase() === noun1.toLowerCase());
            const noun2Index = words.findIndex((word, index) => index > noun1Index && word.toLowerCase() === noun2.toLowerCase());
            const noun3Index = words.findIndex((word, index) => index > noun2Index && word.toLowerCase() === noun3.toLowerCase());
            const prepIndex = words.findIndex(word => word.toLowerCase() === prep.toLowerCase());
            
            // Set grammatical arrays based on found positions
            verbs = verbIndex >= 0 ? [verbIndex] : [];
            
            nouns = [];
            if (noun1Index >= 0) nouns.push(noun1Index);
            if (noun2Index >= 0) nouns.push(noun2Index);  
            if (noun3Index >= 0) nouns.push(noun3Index);
            
            adjectives = [];
            if (adj1Index >= 0) adjectives.push(adj1Index);
            if (adj2Index >= 0) adjectives.push(adj2Index);
            
            prepositions = [];
            if (prepIndex >= 0) prepositions.push(prepIndex);
            
            // Subject is typically at the beginning
            if (templateIndex < 4) {
                // Templates starting with "The" or adjective have subject at beginning
                subject = noun1Index >= 0 ? [0, noun1Index].filter((val, idx, arr) => arr.indexOf(val) === idx) : [0];
            } else {
                // Other templates
                subject = noun1Index >= 0 ? [noun1Index] : [0];
            }
            
            // Predicate logic depends on language  
            predicate = [];
            if (verbIndex >= 0) {
                if (lang === 'nl') {
                    // For Dutch, predicate includes verb and direct modifiers
                    predicate.push(verbIndex);
                    
                    // Add adverb if it immediately follows the verb
                    const advIndex = words.findIndex(word => word.toLowerCase() === adv.toLowerCase());
                    if (advIndex === verbIndex + 1) {
                        predicate.push(advIndex);
                    }
                    
                    // For Dutch separable verbs (like "af" in "liep...af"), include particle
                    const possibleParticle = words[words.length - 2]; // second to last word (before punctuation)
                    if (possibleParticle && ['af', 'aan', 'bij', 'in', 'uit', 'op', 'over', 'door', 'mee', 'weg'].includes(possibleParticle.toLowerCase())) {
                        predicate.push(words.length - 2);
                    }
                } else {
                    // For other languages, include verb and everything after
                    for (let i = verbIndex; i < words.length; i++) {
                        predicate.push(i);
                    }
                }
            }
            
            generatedSentences.push({
                text: sentence,
                words: words,
                verbs: verbs,
                nouns: nouns,
                subject: subject,
                predicate: predicate,
                adjectives: adjectives,
                prepositions: prepositions
            });
        }
        
        console.log(`Generated ${generatedSentences.length} unique sentences for ${lang} (${attempts} attempts)`);
        return generatedSentences;
    }
    
    // Generate additional sentences for all languages to reach 300+ per language
    const languages = ['en', 'de', 'nl'];
    
    languages.forEach(lang => {
        const currentCount = sentences[lang].length;
        const targetCount = 300;
        
        if (currentCount < targetCount) {
            const additionalNeeded = targetCount - currentCount;
            const additionalSentences = generateVariations(lang, additionalNeeded);
            sentences[lang].push(...additionalSentences);
        }
    });
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