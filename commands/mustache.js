const execute = require('./functions');

let content = `{{!
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

module.exports = function (vscode, fs, path) {
  vscode.window
    .showInputBox({
      prompt: 'Filename',
      placeHolder: 'Filename',
    })
    .then(function (value) {
      const filename = value.endsWith('.mustache') ? value : `${value}.mustache`;
      execute.save(vscode, fs, path, filename, content);
    });
};
