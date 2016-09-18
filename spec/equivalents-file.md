# Equivalents file specification

An equivalents file is used to map visual diacritic equivalents. The array
values in this file are added to the language file under
`data.{character}.equivalents.extras.visual_equivalents`.

**Example** (only showing lower case):

```javascript
{
    "ö": [
        "\u04e7", // Cyrillic small letter o with diaeresis
        "\u043e\u0308" // Cyrillic small letter o with a combining diaeresis
    ],
    "ä": [
        "\u04d3", // Cyrillic small letter a with diaeresis
        "\u0430\u0308" // Cyrillic small letter a with a combining diaeresis
    ]
}
```

### visual equivalents of diacritic character

Optional
Type: `Array`

The value of each given key will be an array containing *visual* equivalents to
that character. These values are mostly *manually determined* as a resource
containing a list has yet to be found.

One available resource is [shapecatcher][1] which allows you to draw the
character. The results will show similar characters, but the alogrithm looks at
general shapes so all results may not be completely accurate.

Only exact matches are to be included in this array. For example, when drawing
an "ӧ" character in shapecatcher, the results will include:

* Latin small letter o with diaeresis - yes, this is the character with which we
 are trying to find equivalents.
* Latin capital letter o with diaeresis - yes, but we only want to inlcude the
 lower case version in this example.
* [Cyrillic small letter o with diaeresis][2] (**visually equivalent**). Add it!
* [Arabic letter teh marbuta isolated form][3] (similar, but *not* visually
 equivalent).
* [Arabic letter teh marbuta][4] (similar, but *not* visually equivalent).
* [Apl functional symbol circle diaeresis][5] (similar, but *not* visually
 equivalent).

The contributor can then add the "Cyrillic small letter o with diaeresis" as a
visual equivalent. During the build process, this equivalent will be normalized
and the `\u0430\u0308` result ("Cyrillic small letter a with a combining
diaeresis") will be added to the equivalents array automatically.

[1]: http://shapecatcher.com/
[2]: http://shapecatcher.com/unicode/info/1255
[3]: http://shapecatcher.com/unicode/info/65171
[4]: http://shapecatcher.com/unicode/info/1577
[5]: http://shapecatcher.com/unicode/info/9061
