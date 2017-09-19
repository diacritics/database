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

### Updates

This method should only be used after an update to the CLDR database.

To use this method, perform the following steps:

* Ensure all *validated* languages have been included in the `src/validated-languages.json` file.
  * In this case, "validated" means a language file that has been manually updated.
  * If the file is not added to the `validated-languages.json` file, the extract method will remove and recreate the file based on the given CLDR data; therefore, it is vital to include folders that contain manually edited language files, or all changes will be lost.
  * This JSON file *must only include* the language folder name, and as such, all files (including variant languages) within that folder will be untouched.
* Ensure that none of the unvalidated template files are open in your editor.
  * Open files will not be removed during the extraction process, and an error will be shown because the script was unable to remove the file or folder (this usually happens in the Atom editor with auto-save disabled).
  * Close the file, or you may need to completely close Atom before attempting to restart the extraction method.
* Enter the following to start the process.

  ```bash
  $ npm run extract
  ```

### Missing variant language files

The extract script will automatically compare the CLDR data between a root language and language variant. If equal, a variant file will not be created. It's not a perfect method so some variants may be missed. At the time of this writing, no variant files were found to be necessary by this script; but the `de-CH` (Swiss Standard German) variant does differ from the root (`de`) language and has been manually added.

A variant file can be added using either of these methods:

1. Using the root language file:
  * Copy the root language file into the language folder so that a copy is made.
  * Rename the new file to use the variant label (e.g. the `de-CH` variant would need a file named `ch.json`).
  * Modify the variant file as appropriate.
2. Use the extract method to create a template file:
  * **Note** that this method will remove and recreate all unvalidated language files.
  * Add the language variant IETF language tag to the `src/extract-variants.json` file. This forces the script to build an "unvalidated" template file for that variant.
  * For example, adding `fr-CA`, the French Canadian language variant to the template file, will automatically build a `ca.json` file within the `fr` folder.

    ```js
    [
      "fr-CA"
    ]
    ```

  * After adding this exception, use the extract method to build the file.
  * Modify the variant file as appropriate.

## Contribution and License Agreement

If you contribute to this project, you are implicitly allowing your code to be distributed under [this license][license]. You are also implicitly verifying that all code is your original work.

[node-js]: https://nodejs.org/en/
[spec]: ./spec/
[license]: https://git.io/vXg2H
