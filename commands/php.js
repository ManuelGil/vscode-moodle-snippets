const execute = require('./functions');

let content = `<?php
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
 * Provides meta-data about the plugin.
 *
 * @package     type_pluginname
 * @author      {CURRENT_YEAR} {author_fullname} <{author_link}>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$defined('MOODLE_INTERNAL') || die();

`;

module.exports = function (vscode, fs, path) {
  vscode.window
    .showInputBox({
      prompt: 'Filename',
      placeHolder: 'Filename',
    })
    .then(function (value) {
      const filename = value.endsWith('.php') ? value : `${value}.php`;
      const year = new Date().getFullYear();
      const author_fullname = vscode.workspace.getConfiguration().get('moodle.author_fullname');
      const author_link = vscode.workspace.getConfiguration().get('moodle.author_link');

      content = content.replace('{CURRENT_YEAR}', year).replace('{author_fullname}', author_fullname).replace('{author_link}', author_link);

      execute.save(vscode, fs, path, filename, content);
    });
};
