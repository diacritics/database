# Diacritics file

A `diacritics.json` file will be created in the `dist` folder during the build
process. It will contain all selected languages combined into a single file.

The structure will use the language file name
([ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) as the key,
and the internal file data as the value. In this example, German and French
languages are included (truncated to avoid repetition):

```js
{
    "de": {
        "metadata": {...},
        "data": {...}
    },
    "fr": {
        "metadata": {...},
        "data": {...}
    }
}
```
