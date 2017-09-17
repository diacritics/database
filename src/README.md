## Extract Method

To automatically build unvalidated language files, perform the following steps:

* Ensure all validated languages have been included in the `src/validated-languages.json` file.
  * This JSON file must only include the ISO 639-1 language tag (i.e. the language folder name).
  * Any IETF language tags that do not match a folder name (e.g. `de-CH` or `fr-CA`) will be ignored.

    ```js
    [
      "de",
      "es",
      "tr",
      "ar"
    ]
    ```

* For variants:
  * The extract script will automatically compare the CLDR data between a root language and language variant.
  * At the time of this writing, no variant files have been determined to be necessary; but `de-CH` (Swiss Standard German) is the only known variant was determined to be necessary and has been manually added.
  * If you determine that a language variant needs to be included, add its IETF language tag to the `src/extract-variants.json` file to force this script to build an "unvalidated" template file for that variant. For example, adding `fr-CA`, the French Canadian language variant to the template file will automatically build a `ca.json` file within the `fr` folder.

    ```js
    [
      "fr-CA"
    ]
    ```

* Ensure that none of the unvalidated template files are open in your editor.
  * Open files will not be removed and an error will be shown during the extraction process (especially with Atom editor with auto-save disabled).
  * Close the file, or you may need to completely close Atom before attempting to restart the extraction.
* Enter `npm run extract` to start the process.
