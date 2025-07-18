/**
 * Command to create a new table PHP file for Moodle
 *
 * @module table
 */

const { generateFile } = require('./file-generator');

/**
 * Base content for Moodle table files
 * Includes a base table class with common methods
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
 * Provides meta-data about the plugin.
 *
 * @package     type_pluginname
 * @author      {CURRENT_YEAR} {author_fullname} <{author_link}>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Table class documentation
 */
class pluginname_table extends table_sql
{

	/**
	 * Constructor
	 *@param int \$uniqueid all tables have to have a unique id
	 */
	function __construct(\$uniqueid)
	{
		parent::__construct(\$uniqueid);
		// Define the list of columns to show.
		\$columns = array('username', 'password', 'firstname', 'lastname');
		\$this->define_columns(\$columns);
		// Define the titles of columns to show in header.
		\$headers = array('Username', 'Password', 'First name', 'Last name');
		\$this->define_headers(\$headers);
	}

	/**
	 *This function is called for each data row to allow processing of the username value.
	 * @param object \$values Contains object with all the values of record.
	 * @return \$string personalized string value for username column
	 */
	function col_username(\$values)
	{
		// If the data is being downloaded than we don't want to show HTML.
		if (\$this->is_downloading()) {
			return \$values->username;
		} else {
			return '<a href="/user/profile.php?id=' . \$values->id . '">' . \$values->username . '</a>';
		}
	}

	/**
	 *This function is called for each data row to allow processing of columns which do not have a *_cols function.
	 * @return string return processed value. Return NULL if no change has been made
	 */
	function other_cols(\$colname, \$value)
	{
		// For security reasons we don't want to show the password hash.
		if (\$colname == 'password') {
			return "****";
		}
	}
}
`;

/**
 * Creates a new table PHP file for Moodle
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
    defaultFilename: 'table.php',
    extension: 'php',
    insertAuthorData: true,
    packagePrefix: 'type_pluginname',
  });
};
