# Diacritics Database Specification

> File specification for the diacritics database

## Table of Contents

- [1. What Information Must Be Collected](#1-what-information-must-be-collected)
- [2. Master Branch](#2-master-branch)
  - [2.1 Project Structure](#21-project-structure)
  - [2.1.1. `spec/` Folder](#211-spec-folder)
  - [2.1.2. `src/` Folder](#212-src-folder)
  - [2.1.2.1. Language File Specification](#2121-language-file-specification)
    - [metadata.alphabet](#metadataalphabet)
    - [metadata.continent](#metadatacontinent)
    - [metadata.language](#metadatalanguage)
    - [metadata.languageNative](#metadatalanguagenative)
    - [metadata.variant](#metadatavariant)
    - [metadata.variantNative](#metadatavariantnative)
    - [metadata.source](#metadatasource)
    - [data](#data)
    - [data.{character}.capital](#datacharactercapital)
    - [data.{character}.mapping](#datacharactermapping)
    - [data.{character}.mapping.base](#datacharactermappingbase)
    - [data.{character}.mapping.decompose](#datacharactermappingdecompose)
- [3. Dist Branch](#3-dist-branch)
  - [3.1. diacritics.json](#31-diacriticsjson)
  - [3.1.1. Visual Equivalents](#311-visual-equivalents)
    - [equivalents](#equivalents)
    - [equivalents[index].raw](#equivalentsindexraw)
    - [equivalents[index].unicode](#equivalentsindexunicode)
    - [equivalents[index].htmlDecimal](#equivalentsindexhtmldecimal)
    - [equivalents[index].htmlHex](#equivalentsindexhtmlhex)
    - [equivalents[index].htmlEntity](#equivalentsindexhtmlentity)
    - [equivalents[index].encodedUri](#equivalentsindexencodeduri)
  - [3.1.2. Other Automatically Generated Data](#312-other-automatically-generated-data)
    - [metadata.country](#metadatacountry)

## 1. What Information Must Be Collected?

Since there's no trustworthy and complete source, it's necessary to collect all diacritics, ligatures and symbols mapping information manually. It's also necessary to collect meta information for each language such as links to sources documenting the characters.

## 2. Master Branch

The master branch is used as the branch for source files.

### 2.1 Project Structure

The structure of this branch is divided into the following folders:

```
database/
├── spec/
└── src/
```

#### 2.1.1 `spec/` Folder

Used to specify the structure.

#### 2.1.2 `src/` Folder

The structure in the `src/` folder can look like:

```
src/
├── de/
│   └── de.js
└── fr/
    └── fr.js
```

If there are language variants it could look like:

```
src/
├── de/
│   ├── de.js
│   ├── at.js
│   └── ch.js
└── fr/
    └── fr.js
```

**NOTE**: German does not have a language variant that differs from the root language; therefore the `at.js` and `ch.js` files do not actually exist.

- As there might be multiple files for a language, each language has its own folder.
- The language files in this folder will be in a `.json` format and may include comments (they will be removed before handling the contents)
- Folder and file names must be according to [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the root language.
- Each language variant has its own file:
  - If the variants (e.g. `de-DE`, `de-AT`, `de-CH`) don't have any differences from the root language, then only the root file is necessary.
  - When creating a language variant file all mappings need to be created (redundant) – not incrementally.
  - Any variant file will be contained within the root language folder.
  - The variant file will be named according to [IETF language tag](https://www.w3.org/International/articles/language-tags/) extended language (`extlang`) subtag. So, _if_ a `de_AT` would be necessary, then the file would be named `at.js`; by the extended language subtag and in all lower-case.
  - See [this table](http://data.okfn.org/data/core/language-codes#resource-ietf-language-tags) for a quick reference of available IETF language tags.
- Changes should only be done within the source files.

Files within the `src/` folder are called **language files**.

##### 2.1.2.1 Language File Specification

Example structure for the German language source file, which only contains lower case characters for brevity:

```javascript
{
    "metadata": {
        "alphabet": "Latn",
        "continent": [
            "EU"
        ],
        "language": "German",
        "languageNative": "Deutsch",
        "source": [
            "https://en.wikipedia.org/wiki/German_orthography#Special_characters"
        ]
    },
    "data": {
        "ü": {
            "mapping": {
                "base": "u",
                "decompose": {
                    "value": "ue"
                }
            }
        },
        "ö": {
            "mapping": {
                "base": "o",
                "decompose": {
                    "value": "oe"
                }
            }
        },
        "ä": {
            "mapping": {
                "base": "a",
                "decompose": {
                    "value": "ae"
                }
            }
        },
        "ß": {
            "mapping": {
                "decompose": {
                  "value": "ss"
                }
            }
        }
    }
}
```

###### metadata.alphabet

Required  
Type: `String`

An alphabet code based on [ISO 15924](https://en.wikipedia.org/wiki/ISO_15924) that specifies the associated alphabet.

###### metadata.continent

Required  
Type: `Array`

An array of continent codes based on [ISO-3166](https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_continent_%28data_file%29) that specifies the associated continent.

###### metadata.language

Required  
Type: `String`

The associated language written in English.

###### metadata.languageNative

Required  
Type: `String`

The associated language written in the native language.


###### metadata.variant

Optional  
Type: `String`

The associated language variant written in English, if applicable. For example, if the [IETF language tag](https://www.w3.org/International/articles/language-tags/) was `de_AT`, this entry would include the full name of the variant country, `Austria` for the `AT` variant.

###### metadata.variantNative

Optional  
Type: `String`

The associated language variant written in the native language, if applicable. Required in case a `metadata.variant` is provided.

###### metadata.source

Optional  
Type: `Array`

An array containing links to diacritic, ligature and symbol sources which includes mapping and other details.

###### data

Required  
Type: `Object`

An object containing the actual mapping information. Every character has its own object key. The value for each diacritic, ligature or symbol is an object specified below:

###### data.{character}.case

Required  
Type: `String`

The case value has three values:

* `'upper'` - Signifies that the character is capitalized, or an uppercase character.
* `'lower'` - Signifies that the character is a lower case character.
* `'none'` - Signifies that the character has no case; e.g. punctuation (`¿`, `¡` and `⸘`) and Arabic characters.

###### data.{character}.mapping

Required  
Type: `Object`

An object containing mapping values for the given character. This must contain a base or decompose value, or both. It can not be empty.

###### data.{character}.mapping.base

Optional  
Type: String

This is the base of the character (e.g. the diacritic `ü` has a base of `u`, an unaccented character).

###### data.{character}.mapping.decompose

Optional  
Type: Object

This is the character, or combination of characters used to represent the diacritic (e.g. `ö` decomposes into `oe` in German), ligature (e.g. `æ` decomposes into `ae`), or symbol (e.g. `‽` decomposes into `?!`).

Each decompose value may need to be transformed into lower or upper and title case. These entries have been included within the `decompose` values and depend on the `'case'` setting.

###### data.{character}.mapping.decompose.titleCase

Optional  
Type: String

This value is only available when the character case is set to `'upper'`, and when a decompose value comprises two or more characters. This setting is provided because the case of the first character may differ from the other character(s). This property was implemented in case a diacritic is the first character of a word written in title case. Include the necessary changes in this entry (e.g. `Æ` decomposes into `Ae` in a title case).

###### data.{character}.mapping.decompose.value

Optional  
Type: String

This value contains the decompose character or characters. This property may contain the decompose value in either all lower case or capital letters depending on the `case` setting. Include the necessary changes in this entry (e.g. `æ` decomposed into `ae` in all lower case, or `Æ` decomposes into `AE` in all upper case).

## 3. Dist Branch

The `dist` branch contains generated data from master's `src/` files combined into a single file, `diacritics.json`. This file has almost identical structure like the files within `src/` and will be in a valid `.json` format which can not contain comments.

This distribution file is automatically generated when a pull request targeting the master branch is merged using a build that is running on Travis CI. This workflow has been chosen to allow contributions without a Git clone or command line things in general.

The file will be generated to a uniquely named folder, e.g. `v1`. In case the JSON structure changes, it's then possible to generate it to a different folder. This makes sure that components depending on the old file structure will still work.

While the dist branch contains all data, a server-side component is used to serve and filter them.

### 3.1 diacritics.json

The structure will use the language folder name ([ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) as the key. This key will contain data for the root language and any variants. This structure is used to simplify access to the data through the API; see the [API spec](https://github.com/diacritics/api) for more details.

Within each language entry:

- The root language code will be added as an entry that uses the same language code (e.g. `"de": { "de": {...} }`). The value will contain the internal file data (e.g. from `de/de.js`) as the value.
- Any variants of the language that differ from the root language will also be included. The value will contain the internal file data of the named variant file.

In this example, German and French languages are included:

```js
{
    "de": {
        "de": {
            "metadata": {...},
            "data": {...}
        },
        "at": {
            "metadata": {...},
            "data": {...}
        }
    },
    "fr": {
         "fr": {
            "metadata": {...},
            "data": {...}
          }
    }
}
```

**NOTE**: German does not have a language variant that differs from the root, so the `at` entry would *not* exist in the final data. It is shown here only as an example!

#### 3.1.1 Visual Equivalents

Beside of generating all the data into one file the build _automatically_ adds visual equivalents to `diacritics.json`. Behind each diacritic, ligature or symbol may be several identical looking characters that have a different Unicode code point. To make sure the mapping process will catch all of them, these equivalents need to be mapped too.

These equivalents are added to the language file under `data.{character}.equivalents` (`{character}` is a placeholder for a character).

Example (only showing one lower case diacritic):

```javascript
{
    "de": {
        "de": {
            "metadata": {...},
            "data": {
                "ü": {
                    "case": "lower",
                    "mapping": {
                      "base": "u",
                      "decompose": {
                        "value": "ue"
                      }
                    },
                    "equivalents": [
                        {
                            "raw": "ü"
                            "unicode": "\\u00fc",
                            "htmlDecimal": "&#252;",
                            "htmlHex": "&#xfc;",
                            "encodedUri": "%C3%BC",
                            "htmlEntity": "&uuml;"
                        },
                        {
                            "raw": "ü",
                            "unicode": "u\\u0308",
                            "htmlDecimal": "u&#776;",
                            "htmlHex": "u&#x0308;",
                            "encodedUri": "u%CC%88"
                        }
                    ]
                }
            }
        }
    }
}
```

##### equivalents

Required  
Type: `Array`

Contains an array containing equivalents objects consisting of the original character and any additional characters created through normalization.

##### equivalents[index].raw

Required  
Type: `String`

Contains a rendered equivalent character (e.g. `ü`).

##### equivalents[index].unicode

Required  
Type: `String`

Contains an escaped unicode (hex) value of the character (e.g. `\u00f6`).

##### equivalents[index].htmlDecimal

Required  
Type: `String`

Contains a HTML entity in decimal format (e.g. `&#246;`).

##### equivalents[index].htmlHex

Required  
Type: `String`

Contains a HTML entity in hex format (e.g. `&#xf6;`).

##### equivalents[index].htmlEntity

Required  
Type: `String`

Contains a named HTML entity if one exists (e.g. `&ouml;`) - [ref](https://dev.w3.org/html5/html-author/charref).

##### equivalents[index].encodedUri

Required  
Type: `String`

Contains a URL encoded value (e.g. `%C3%B6`) - see [percent encoding](https://en.wikipedia.org/wiki/Percent-encoding).

#### 3.1.2 Other Automatically Generated Data

##### metadata.country

Required  
Type: `Array`

An array of countries where the given language is officially spoken. This entry is automatically added by the build script, with language information obtained directly from Unicode's CLDR supplemental [languageData](https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/languageData.json) and cross-referenced with supplemental [territoryInfo](https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/territoryInfo.json) databases.

The provided language tags are based on [IETF BCP 47](https://www.w3.org/International/articles/language-tags/) with some minor differences; please see the [CLDR spec](http://cldr.unicode.org/index/cldr-spec/picking-the-right-language-code) for more details. For a quick reference, use this [IETF-language-tags](http://data.okfn.org/data/core/language-codes#resource-ietf-language-tags) searchable table ("territory" column).
