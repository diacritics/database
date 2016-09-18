# language file specification

Language files will be found in two folders: `src` and `dist`

## `src` folder

* The language files in this folder will be in a `.js` format and include
 comments.
* These language files will not include any `equivalents` data. These values are
 automatically generated and combined from data contained in the
 [equivalents file](equivalents-file.md) during the build process.
* Folder and files names must be according to
 [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
* We're going to create one file for each language variant. If the variants
 (e.g. de_DE, de_AT, de_CH) don't have any differences, we're going to only
 create one file for the language.
* Note that when creating a language variant file all mappings need to be
 created (redundant) – not incrementally. As there might be multiple files for a
 language, we're going to create them in a separate folder. Example structure
 when there would be language variants:

    ```
    src/
    +-- de/
    ¦   +-- de.js
    ¦   +-- at.js
    ¦   +-- ch.js
    ```

    Otherwise:

    ```
    src/
    +-- de/
    ¦   +-- de.js
    ```

* When contributing, only modify the language file within the `src` folder.
* The files are JS files to make sure text editors allow formatting them and
 code comments aren't shown as errors – the containing source is JSON though.
 All comments are stripped out during the build process.

## `dist` folder

* The language files in this folder will be in a valid `.json` format which can
 not contain comments.
* These language files will include any generated `equivalents` data during the
 build process and include visual equivalents provided by the
 [equivalents files](equivalents-file.md).
* The folders and file names will copied from the `src` folder, so they will
 also be according to
 [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). The file
 extension will change to `.json`.
* A `diacritics.json` file will be created in this folder and will contain all
 requested languages.

    ```
    dist/
    +-- diacritics.json
    +-- de/
    ¦   +-- de.json
    ```

Example structure for the German language JSON file in the `dist` folder:

__NOTE__: The equivalents values are added during the build process. Only lower
case characters have been included for brevity.

```javascript
{
    "metadata": {
        "alphabet": "Latn",
        "continent": "EU",
        "language": "German",
        "native": "Deutsch",
        "sources": [
            "https://en.wikipedia.org/wiki/German_orthography#Special_characters",
            "https://en.wikipedia.org/wiki/German_orthography#Sorting"
        ]
    },
    "data": {
        "ü": {
            "mapping": {
                "base": "u",
                "decompose": "ue"
            },
            "equivalents": {
                "unicode": "\u00fc",
                "html_decimal": "&#252;",
                "html_hex": "&#xfc;",
                "encoded_uri": "%C3%BC",
                "html_entity": "&uuml;",
                "extras": {
                    "unicode": "u\u0308",
                    "html_decimal": "u&#776;",
                    "html_hex": "u&#x308;"
                }
            }
        },
        "ö": {
            "mapping": {
                "base": "o",
                "decompose": "oe"
            },
            "equivalents": {
                "unicode": "\u00f6",
                "html_decimal": "&#246;",
                "html_hex": "&#xf6;",
                "encoded_uri": "%C3%B6",
                "html_entity": "&ouml;",
                "extras": {
                    "unicode": "o\u0308",
                    "html_decimal": "o&#776;",
                    "html_hex": "o&#x308;",
                    "visual_equivalents": [
                        "\u04e7",
                        "\u043e\u0308"
                    ]
                }
            }
        },
        "ä": {
            "mapping": {
                "base": "a",
                "decompose": "ae"
            },
            "equivalents": {
                "unicode": "\u00e4",
                "html_decimal": "&#228;",
                "html_hex": "&#xe4",
                "encoded_uri": "%C3%A4",
                "html_entity": "&auml;",
                "extras": {
                    "unicode": "a\u0308",
                    "html_decimal": "a&#776;",
                    "html_hex": "a&#x308;",
                    "visual_equivalents": [
                        "\u04d3",
                        "\u0430\u0308"
                    ]
                }
            }
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

An alphabet code based on [ISO 15924](https://en.wikipedia.org/wiki/ISO_15924)
that specifies the associated alphabet.

## metadata.continent

Required
Type: `String` or `Array` of `String`

A continent code based on [ISO-3166](https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_continent_%28data_file%29)
that specifies the assocated continent.

## metadata.language

Required
Type: `String`

The associated language written in English.

## metadata.native

Required
Type: `String`

The associated language written in the native language.

## metadata.sources

Required
Type: `Array`

An array containing links to diacritic sources including mapping. Include an
empty array if no sources are to be listed.

## data

Required
Type: `Object`

An object containing the actual mapping information. Every diacritic has its own
object key. The value for each diacritic is an object specified below:

### mapping

Required
Type: `Object`

An object containing mapping values for the given diacritic. This must contain a
base or decompose value, or both. It can not be empty.

### mapping.base

Optional
Type: String

This is the base of the diacritic character (e.g. `ü` has a base of `u`, an
unaccented character).

### mapping.decompose

Optional
Type: String

This is the character, or combination of characters used to represent the
diacritic character (e.g. `ö` decomposes into `oe` in German).

### equivalents

Optional
Type: `Object`

Almost all of this data is generated during the build process. Extra data for
the `visual_equivalents` is contained within the
[equivalents file](equivalents-file.md).

### equivalents.unicode

Required
Type: `String`

This entry is generated during the build process. It contains an escaped unicode
(hex) value of the character (e.g. `\u00f6`).

### equivalents.html_decimal

Required
Type: `String`

This entry is generated during the build process. It contains a HTML entity in
decimal format (e.g. `&#246;`).

### equivalents.html_hex

Required
Type: `String`

This entry is generated during the build process. It contains a HTML entity in
hex format (e.g. `&#xf6;`).

### equivalents.html_entity

Required
Type: `String`

This entry is generated during the build process. It contains a named HTML
entity (e.g. `&ouml;`) - [ref](https://dev.w3.org/html5/html-author/charref).

### equivalents.encoded_uri

Required
Type: `String`

This entry is generated during the build process. It contains a URL encoded
value (e.g. `%C3%B6`) - see
[percent encoding](https://en.wikipedia.org/wiki/Percent-encoding)).

### equivalents.extras

Optional
Type: `Object`

This entry is generated during the build process. It contains generated
normalization values (using NFD, NFC, NFKD, NFKC
[normalization forms](http://unicode.org/reports/tr15/#Norm_Forms)), and data
added from the [equivalents file](equivalents-file.md).

### equivalents.extras.unicode

Optional
Type: `String`

This entry is generated during the build process. If a value exists, this
contains an escaped unicode (hex) value of the character after normalization
(e.g. `o\u0308`).

### equivalents.extras.html_decimal

Optional
Type: `String`

This entry is generated during the build process. If a value exists, this
contains a HTML entity in decimal format of the character after normalization
(e.g. `o&#776;`).

### equivalents.extras.html_hex

Optional
Type: `String`

This entry is generated during the build process. If a value exists, this
contains a HTML entity in hex format of the character after normalization
(e.g. `o&#x308;`).

### equivalents.extras.visual_equivalents

Optional
Type: `Array`

This entry is generated during the build process. It contains an array of
strings with visually equivalents characters. As these values will need to be
determined manually, the list of characters is added from values saved in the
[equivalents file](equivalents-file.md).
