# Contributing

## Development

_Requirements: Latest [node.js][node-js] (including npm)_

Before you start developing, you should clone or download this repository and run:

```bash
$ npm install
```

As described in the [spec][spec] the build will automatically update the `dist` branch with the generated data when a pull request is merged into `master`. But, to check your changes you can generate `build/out/vX/diacritics.json` yourself by running:

```bash
$ npm run build
```

## Extract Method

Using this method would only be required after an update to the CLDR database, or if you determine that a language variant file is missing and you would like to create a template for that variant.

To automatically recreate unvalidated language files, perform the following steps:

* Ensure all validated languages have been included in the `src/validated-languages.json` file.
  * This JSON file must only include the root language name (based on the ISO 639-1 and ISO 639-2 language; meaning no dashes in the folder name).
  * Any IETF language tag variants that do not match a folder name (e.g. `de-CH` or `fr-CA`) will be ignored.

    ```js
    [
      "de",
      "es",
      "tr",
      "ar"
    ]
    ```

* For variants:
  * The extract script will automatically compare the CLDR data between a root language and language variant. If equal, a variant file will not be created. It's not a perfect method so some variants may be missed.
  * At the time of this writing, no variant files have been determined to be necessary; but `de-CH` (Swiss Standard German) variant was determined to be necessary and has been manually added.
  * If you determine that a language variant needs to be included, add its IETF language tag to the `src/extract-variants.json` file to force this script to build an "unvalidated" template file for that variant. For example, adding `fr-CA`, the French Canadian language variant to the template file will automatically build a `ca.json` file within the `fr` folder.

    ```js
    [
      "fr-CA"
    ]
    ```

* Ensure that none of the unvalidated template files are open in your editor.
  * Open files will not be removed during the extraction process, and an error will be shown because it was unable to remove the file or folder (this usually happens in the Atom editor with auto-save disabled).
  * Close the file, or you may need to completely close Atom before attempting to restart the extraction method.
* Enter the following to start the process.

```bash
$ npm run extract
```

## Contribution and License Agreement

If you contribute to this project, you are implicitly allowing your code to be distributed under [this license][license]. You are also implicitly verifying that all code is your original work.

[node-js]: https://nodejs.org/en/
[spec]: ./spec/
[license]: https://git.io/vXg2H
