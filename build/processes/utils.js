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
   * @param {object|string} data - JSON file data
   */
  static writeJSON(path, name, data) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    const file = `${path}/${name}.json`;
    const result = typeof data === 'string' ?
      data :
      JSON.stringify(data, null, 2);
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, result, 'utf8');
    }
  }

}

module.exports = Utils;