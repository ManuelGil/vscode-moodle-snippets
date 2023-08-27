const execute = require('./functions');

let content = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="correct-xmldb-format.xslt"?>
`;

module.exports = function (vscode, fs, path) {
  vscode.window
    .showInputBox({
      prompt: 'Filename',
      placeHolder: 'Filename',
    })
    .then(function (value) {
      const filename = value.endsWith('.xml') ? value : `${value}.xml`;
      execute.save(vscode, fs, path, filename, content);
    });
};
