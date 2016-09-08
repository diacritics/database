{
    /**
     * Set Unicode Representation in the output
     *  C/C++/Javascript: `\\u{value}`   (use double backslash or errors occur)
     *  Python:           `u"\u{value}"`
     *  Wikipedia         `U+{value}`
     */
    "unicode-format": "\\u{value}",
    /**
     * Output format. Values used in JSON.stringify to format JSON
     * Set to an empty string ("") for a compressed JSON. Or a space (" "),
     * tab ("\t"), or a number of spaces to use (up to 10); defaults to 4 spaces
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument
     * for more details
     */
    "output-format": 4,
    /**
     * diacritics copied directly from the "Latin" table header at
     * // http://www.unicode.org/cldr/charts/29/by_type/core_data.alphabetic_information.main.html
     * Note:
     *  1. Replace tabs with spaces.
     *  2. This table does include plain characters (e.g. a, b, c, d) which
     *     are ignored during the build process; they have been left in to minimize
     *     editing and therefore the making of mistakes when copy/pasting the values
     *     into this file.
     *  3. Diacritics without a character and punctuation were not originally copied
     *     from the table.
     *  4. Only the lower case charcter has been included in the source, javascript
     *     `.toUpperCase()` is used during the build to include upper case values.
     *     Manually add special (upper case) characters to this file as needed.
     */
    "current": "a á à ă ắ ằ ẵ ẳ â ấ ầ ẫ ẩ ǎ å ä ã a̧ ą ā a᷆ a᷇ ả ạ ặ ậ a̱ æ b ɓ c ć ĉ č ċ ç d ď ḑ đ ḍ ð ɖ ɗ e é è ê ế ề ễ ể ě ë ẽ ė ę ē e᷆ e᷇ ẻ ẹ ẹ́ ẹ̀ ệ e̱ ǝ ǝ́ ǝ̂ ǝ̌ ǝ̄ ə ə́ ə̀ ə̂ ə̌ ɛ ɛ́ ɛ̀ ɛ̂ ɛ̌ ɛ̈ ɛ̃ ɛ̧ ɛ̄ ɛ᷆ ɛ᷇ ɛ̱ ɛ̱̈ f ƒ g ğ ĝ ǧ ġ ģ ɣ h ĥ ȟ ħ ḥ ʻ i I í ì î ǐ ï ĩ İ i̧ į ī i᷆ i᷇ ỉ ị i̱ ı ɨ ɨ̀ ɨ̂ ɨ̌ ɨ̄ j ĵ k ķ ƙ l ĺ ľ ļ ł ḷ m ḿ m̀ m̄ n ń ǹ ň ñ ṅ ņ n̄ ǌ ɲ ŋ ŋ́ ŋ̀ ŋ̄ o ó ò ô ố ồ ỗ ổ ǒ ö ő õ ø ō o᷆ o᷇ ỏ ơ ớ ờ ỡ ở ợ ọ ọ́ ọ̀ ộ o̱ œ ɔ ɔ́ ɔ̀ ɔ̂ ɔ̌ ɔ̈ ɔ̃ ɔ̧ ɔ̄ ɔ᷆ ɔ᷇ ɔ̱ p q ĸ r ŕ ř ŗ ṛ s ś ŝ š ş ṣ ș ß t ť ṭ ț ŧ u ú ù ŭ û ǔ ů ü ű ũ u̧ ų ū u᷆ u᷇ ủ ư ứ ừ ữ ử ự ụ ʉ ʉ́ ʉ̀ ʉ̂ ʉ̌ ʉ̈ ʉ̄ v ṽ ʋ w ʷ ẃ ẁ ŵ ẅ x y ý ỳ ŷ ÿ ỹ ỷ ỵ ƴ z ź ž ż ẓ þ"
}
