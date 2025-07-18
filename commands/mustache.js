/**
 * Command to create a new Mustache file for Moodle
 *
 * @module mustache
 */

const { generateFile } = require('./file-generator');

/**
 * Base content for Moodle Mustache files
 * Includes Moodle standard header as comment
 */
const content = `{{!
\tThis file is part of Moodle - http://moodle.org/

\tMoodle is free software: you can redistribute it and/or modify
\tit under the terms of the GNU General Public License as published by
\tthe Free Software Foundation, either version 3 of the License, or
\t(at your option) any later version.

\tMoodle is distributed in the hope that it will be useful,
\tbut WITHOUT ANY WARRANTY; without even the implied warranty of
\tMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
\tGNU General Public License for more details.

\tYou should have received a copy of the GNU General Public License
\talong with Moodle.  If not, see <http://www.gnu.org/licenses/>.
}}
`;

/**
 * Creates a new Mustache file for Moodle
 *
 * @param {Object} vscode - VSCode API
 * @param {Object} fs - FileSystem Module
 * @param {Object} path - Path Module
 * @param {Object} args - Command arguments
 * @returns {Promise<void>}
 */
module.exports = async (vscode, fs, path, args) => {
  await generateFile(vscode, fs, path, args, {
    template: content,
    defaultFilename: 'new_file.mustache',
    extension: 'mustache',
    insertAuthorData: false, // Mustache format doesn't include author data
  });
};
