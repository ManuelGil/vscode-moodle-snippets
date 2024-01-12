const { save, parsePath } = require('./functions');

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

module.exports = async (vscode, fs, path, args) => {
  let relativePath = '';

  if (args) {
    relativePath = parsePath(vscode, path, args);
  }

  const value = await vscode.window.showInputBox({
    prompt: 'Filename',
    placeHolder: 'Filename',
    validateInput: (text) => {
      if (!/^[A-Za-z0-9][\w\s\/,.-]+$/.test(text)) {
        return 'Invalid format!';
      }
    },
    value: `${relativePath}lib.php`,
  });

  if (value.lenght === 0) {
    return;
  }

  const filename = value.endsWith('.php') ? value : `${value}.php`;

  const year = new Date().getFullYear();
  const author_fullname = vscode.workspace.getConfiguration().get('moodle.author_fullname');
  const author_link = vscode.workspace.getConfiguration().get('moodle.author_link');
  const body = content.replace('{CURRENT_YEAR}', year).replace('{author_fullname}', author_fullname).replace('{author_link}', author_link);

  save(vscode, fs, path, filename, body);
};
