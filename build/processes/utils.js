const fs = require('fs'),
  stripJsonComments = require('strip-json-comments');

/**
 * Util build methods
 */
class Utils {
  /**
   * Reads a JSON file, removes comments and parses it
   * @param {string} file - path to json file
   * @return {object}
   */
  static readJSON(file) {
    return JSON.parse(
      stripJsonComments(
        fs.readFileSync(file, 'utf8')
      )
    );
  }
}

module.exports = Utils;