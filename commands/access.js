/**
 * Command to create a new access.php file for Moodle
 *
 * @module access
 */

const { generateFile } = require('./file-generator');

/**
 * Base content for Moodle access.php files
 * Includes standard capability definitions for a plugin
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
 * Capability definitions for this module.
 *
 * @package   repository_pluginname
 * @copyright {CURRENT_YEAR}, {author_fullname} <{author_link}>
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

\$capabilities = [
\t'repository/pluginname:view' => [
\t\t'captype' => 'read',
\t\t'contextlevel' => CONTEXT_MODULE,
\t\t'archetypes' => [
\t\t\t'user' => CAP_ALLOW
\t\t]
\t],
\t'repository/pluginname:addinstance' => [
\t\t'riskbitmask' => RISK_SPAM | RISK_XSS,
\t\t'captype' => 'write',
\t\t'contextlevel' => CONTEXT_COURSE,
\t\t'archetypes' => [
\t\t\t'editingteacher' => CAP_ALLOW,
\t\t\t'manager' => CAP_ALLOW
\t\t],
\t\t'clonepermissionsfrom' => 'moodle/course:manageactivities'
\t],
];
`;

/**
 * Creates a new access.php file for Moodle
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
    defaultFilename: 'access.php',
    extension: 'php',
    insertAuthorData: true,
    packagePrefix: 'repository_pluginname',
  });
};
