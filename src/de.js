{
    "metadata": {
        "alphabet": "Latn",
        "continent": "EU",
        "language": "German",
        "native": "Deutsch"
        // there could be more
    },
    // Sources:
    // diacritic list: https://en.wikipedia.org/wiki/German_orthography#Special_characters
    // mapping: https://en.wikipedia.org/wiki/German_orthography#Sorting
    "data": {
        "ü": {
            "mapping": {
                "base": "u",
                "decompose": "ue"
            },
            "equivalents": [
                "u\u0308", // u + Combining diaeresis (U+0308)
                "\u00fc"   // Latin small letter u with diaeresis (U+00FC)
            ]
        },
        "ö": {
            "mapping": {
                "base": "o",
                "decompose": "oe"
            },
            "equivalents": [
                "o\u0308", // o + Combining diaeresis (U+0308)
                "\u04e7",  // Cyrillic small letter o with diaeresis (U+04E7)
                "\u00f6"   // Latin small letter o with diaeresis (U+00F6)
            ]
        },
        "ä": {
            "mapping": {
                "base": "a",
                "decompose": "ae"
            },
            "equivalents": [
                "a\u0308", // a + Combining diaeresis (U+0308)
                "\u04d3",  // Cyrillic small letter a with diaeresis (U+04D3)
                "\u00e4"   // Latin small letter a with diaeresis (U+00E4)
            ]
        },
        "ß": {
            "mapping": {
                "base": "\u00df",  // unchanged
                "decompose": "ss"
            }
        }
    }
}
