const { save, parsePath } = require('./functions');

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
    value: `${relativePath}new_file.mustache`,
  });

  if (value.lenght === 0) {
    return;
  }

  const filename = value.endsWith('.mustache') ? value : `${value}.mustache`;

  save(vscode, fs, path, filename, content);
};
