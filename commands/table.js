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

\t/**
\t * Constructor
\t *@param int \\$uniqueid all tables have to have a unique id
\t */
\tfunction __construct(\\$uniqueid)
\t{
\t\tparent::__construct(\\$uniqueid);
\t\t// Define the list of columns to show.
\t\t\\$columns = array('username', 'password', 'firstname', 'lastname');
\t\t\\$this->define_columns(\\$columns);
\t\t// Define the titles of columns to show in header.
\t\t\\$headers = array('Username', 'Password', 'First name', 'Last name');
\t\t\\$this->define_headers(\\$headers);
\t}

\t/**
\t *This function is called for each data row to allow processing of the username value.
\t * @param object \\$values Contains object with all the values of record.
\t * @return \\$string personalized string value for username column
\t */
\tfunction col_username(\\$values)
\t{
\t\t// If the data is being downloaded than we don't want to show HTML.
\t\tif (\\$this->is_downloading()) {
\t\t\treturn \\$values->username;
\t\t} else {
\t\t\treturn '<a href=\"/user/profile.php?id=' . \\$values->id . '\">' . \\$values->username . '</a>';
\t\t}
\t}

\t/**
\t *This function is called for each data row to allow processing of columns which do not have a *_cols function.
\t * @return string return processed value. Return NULL if no change has been made
\t */
\tfunction other_cols(\\$colname, \\$value)
\t{
\t\t// For security reasons we don't want to show the password hash.
\t\tif (\\$colname == 'password') {
\t\t\treturn "****";
\t\t}
\t}
}
`;

module.exports = async (vscode, fs, path) => {
  const value = await vscode.window.showInputBox({
    prompt: 'Filename',
    placeHolder: 'Filename',
    validateInput: (text) => {
      if (!/^[\w,\s-\/.]+$/.test(text)) {
        return 'Invalid format!';
      }
    },
  });

  if (value.lenght === 0) {
    return;
  }

  const filename = value.endsWith('.php') ? value : `${value}.php`;
  const year = new Date().getFullYear();
  const author_fullname = vscode.workspace.getConfiguration().get('moodle.author_fullname');
  const author_link = vscode.workspace.getConfiguration().get('moodle.author_link');
  const body = content.replace('{CURRENT_YEAR}', year).replace('{author_fullname}', author_fullname).replace('{author_link}', author_link);

  execute.save(vscode, fs, path, filename, body);
};
