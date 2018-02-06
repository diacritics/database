const Utils = require('./utils'),
  Ajv = require('ajv');

/**
 * Language file validation
 */
class LanguageValidation {
  /**
   * @param {string} file - Path to the JSON file
   */
  constructor(file) {
    this.file = file;
  }

  /**
   * Language file schema
   * @type {object}
   */
  get languageFileSchema() {
    if (!this._languageFileSchema) {
      this._languageFileSchema = Utils.readJSON('./build/data/schema.json');
    }
    return this._languageFileSchema;
  }

  /**
   * Validates JSON syntax
   * @return {boolean}
   */
  validateJSONSyntax() {
    try {
      Utils.readJSON(this.file);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Validates JSON schema
   * @return {string} - Either an empty string or the error message
   */
  validateJSONSchema() {
    const validator = new Ajv(),
      validate = validator.compile(this.languageFileSchema);
    if (!validate(Utils.readJSON(this.file))) {
      return JSON.stringify(validate.errors, null, 2);
    } else {
      return '';
    }
  }
}

module.exports = LanguageValidation;