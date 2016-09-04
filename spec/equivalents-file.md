# Equivalents file specification

An equivalents file is used to map visual diacritic equivalents.

**Example**:

```javascript
{
    "ä": [
        "a\u0308", // a + Combining diaeresis (U+0308)
        "\u04d3",  // Cyrillic small letter a with diaeresis (U+04D3)
        "\u00e4",  // Latin small letter a with diaeresis (U+00E4)
        "&auml;",  // HTML common entity code
        "&#228;",  // HTML decimal code
        "&#x00e4"  // HTML hex code
    ]
}
```

### diacritic character mapping

Required
Type: `Array`

Within each file a key containing the the most commonly used diacritic must be
used. The "most commonly used" diacritic is defined as:
  * The actual character that is rendered  when an HTML common entity code is
  used exists, if it exists.
  * If an HTML common entity code does not exist for the character, standard
  [normalization](https://en.wikipedia.org/wiki/Unicode_equivalence#Normalization)
  to either canonical (NF) or compatibility (NFK) forms must be used.

The value of each given key will be an array containing *visual* equivalents to
that character. Including all possible combinations of the base letter with a
combining diacritic and its representations that can be used in HTML.
