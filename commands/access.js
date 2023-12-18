const execute = require('./functions');

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
 * Plugin capabilities for the repository_pluginname plugin.
 *
 * @package   repository_pluginname
 * @copyright Year, You Name <your@email.address>
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

\\$capabilities = [
\t// Ability to use the plugin.
\t'repository/pluginname:view' => [
\t\t'captype' => 'read',
\t\t'contextlevel' => CONTEXT_MODULE,
\t\t'archetypes' => [
\t\t\t'coursecreator' => CAP_ALLOW,
\t\t\t'editingteacher' => CAP_ALLOW,
\t\t\t'manager' => CAP_ALLOW
\t\t]
\t],
];
`;

module.exports = async (vscode, fs, path) => {
  const filename = 'db/access.php';
  const year = new Date().getFullYear();
  const author_fullname = vscode.workspace.getConfiguration().get('moodle.author_fullname');
  const author_link = vscode.workspace.getConfiguration().get('moodle.author_link');
  const body = content.replace('{CURRENT_YEAR}', year).replace('{author_fullname}', author_fullname).replace('{author_link}', author_link);

  execute.save(vscode, fs, path, filename, body);
};