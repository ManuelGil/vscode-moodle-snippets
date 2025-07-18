/**
 * Command to create a new lib.php file for Moodle
 *
 * @module lib
 */

const { generateFile } = require('./file-generator');

/**
 * Base content for Moodle lib.php files
 * Includes a repository class with basic methods
 */
const content = `<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Plugin functions for the repository_pluginname plugin.
 *
 * @package   repository_pluginname
 * @copyright {CURRENT_YEAR}, {author_fullname} <{author_link}>
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_once(\$CFG->dirroot . '/repository/lib.php');

class repository_pluginname extends repository {
\t/**
\t * Get file listing.
\t *
\t * This is a mandatory method for any repository.
\t *
\t * See repository::get_listing() for details.
\t *
\t * @param string \$encodedpath
\t * @param string \$page
\t * @return array the list of files, including meta information
\t */
\tpublic function get_listing(\$encodedpath = '', \$page = '') {
\t\t// This methods
\t\treturn array('list' => []);
\t}

\t/**
\t * Is this repository used to browse moodle files?
\t *
\t * @return boolean
\t */
\tpublic function has_moodle_files() {
\t\treturn true;
\t}

\t/**
\t * Tells how the file can be picked from this repository.
\t *
\t * @return int
\t */
\tpublic function supported_returntypes() {
\t\treturn FILE_INTERNAL | FILE_REFERENCE;
\t}

\t/**
\t * Which return type should be selected by default.
\t *
\t * @return int
\t */
\tpublic function default_returntype() {
\t\treturn FILE_INTERNAL;
\t}


\t/**
\t * Optional method for searching files in the repository.
\t *
\t * @param string \$search
\t * @param int \$page
\t * @return array the list of found files.
\t */
\tpublic function search(\$search, \$page = 0) {
\t\t\$ret = [];
\t\t\$ret['nologin'] = true;
\t\t// The found files list.
\t\t\$ret['list'] = [];
\t\treturn \$ret;
\t}
}
`;

/**
 * Creates a new lib.php file for Moodle
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
    defaultFilename: 'lib.php',
    extension: 'php',
    insertAuthorData: true,
    packagePrefix: 'repository_pluginname',
  });
};
