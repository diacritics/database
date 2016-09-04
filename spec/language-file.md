# language file specification

A language file is used to collect diacritics mapping information for each language or language variant.

**Example**:

```javascript
{
    "metadata": {
        "alphabet": "Latn",
        "continent": "EU",
        "language": "German",
        "native": "Deutsch",
        "sources": {
            "list": [
                "https://en.wikipedia.org/wiki/German_orthography#Special_characters"
            ],
            "mapping": [
                "https://en.wikipedia.org/wiki/German_orthography#Sorting"
            ]
        }
    },
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
                "decompose": "ss"
            }
        }
    }
}
```

## metadata.alphabet

Required  
Type: `String`

An alphabet code based on [ISO 15924](https://en.wikipedia.org/wiki/ISO_15924) that specifies the associated alphabet

## metadata.continent

Required  
Type: `String` or `Array` of `String`

A continent code based on [ISO-3166](https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_continent_%28data_file%29) that specifies the assocated continent

## metadata.language

Required  
Type: `String`

The associated language written in English

## metadata.native

Required  
Type: `String`

The associated language written in the native language

## metadata.sources

Type: `Object`

An optional object containing two properties:

### metadata.sources.list

Required  
Type: `Array`

An array containing links to diacritics sources

### metadata.sources.mapping

Required  
Type: `Array`

An array containing links to diacritics mapping sources

## data

Required  
Type: `Object`

An object containing the actual mapping information. Every diacritic has its own object key. The value for each diacritic is an object specified below:

### mapping

TBD
