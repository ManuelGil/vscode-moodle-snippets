const execute = require('./functions');

let content = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="correct-xmldb-format.xslt"?>
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

  const filename = value.endsWith('.xml') ? value : `${value}.xml`;

  execute.save(vscode, fs, path, filename, content);
};
