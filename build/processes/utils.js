const fs = require('fs'),
  stripJsonComments = require('strip-json-comments');

/**
 * Util build methods
 */
class Utils {
  /**
   * Reads a JSON file, removes comments and parses it
   * @param {string} file - path to json file
   * @param {object} options - options to process resulting JSON
   * @return {object}
   */
  static readJSON(file, options = {}) {
    if (options.showProgress) {
      process.stdout.write('.');
    }
    let result = stripJsonComments(fs.readFileSync(file, 'utf8'));
    if (options.lowerCase) {
      result = result.toLowerCase();
    }
    return JSON.parse(result);
  }

  /**
   * Writes out a JSON file
   * @param {string} path - path to JSON file
   * @param {string} name - JSON file name
   * @param {object} data - JSON data
   */
  static writeJSON(path, name, data) {
    Utils.writeFile(path, name, Utils.stringify(data));
  }

  /**
   * Writes out a file based on a string
   * @param {string} path - path to the file
   * @param {string} name - file name
   * @param {string} data - the data to save
   */
  static writeFile(path, name, data) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    const file = `${path}/${name}.json`;
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, data, 'utf8');
    }
  }

  /**
   * Converts a JSON object to a string
   * @param {object} data - JSON data
   * @return {string}
   */
  static stringify(data) {
    return JSON.stringify(data, null, 2) + '\n';
  }

  /**
   * Determine character case
   * @param {string} char - Diacritic character
   * @return {string} - character case string
   */
  static getCase(char) {
    let charCase = 'lower',
      lower = char.toLowerCase() === char,
      upper = char.toUpperCase() === char;
    if (lower && upper) {
      charCase = 'none';
    } else if (upper) {
      charCase = 'upper';
    }
    return charCase;
  }

}

module.exports = Utils;
