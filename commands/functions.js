module.exports.save = function (vscode, fs, path, filename, content, show = true) {
  let folder;

  if (vscode.workspace.workspaceFolders) {
    folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
  } else {
    vscode.window.showErrorMessage('The file has not been created!');
    return;
  }

  const pathfile = path.join(folder, filename);

  if (!fs.existsSync(path.dirname(pathfile))) {
    fs.mkdirSync(path.dirname(pathfile));
  }

  fs.access(pathfile, (err) => {
    if (err) {
      fs.open(pathfile, 'w+', function (err, fd) {
        if (err) throw err;

        fs.writeFileSync(fd, content);

        if (show === true) {
          const openPath = vscode.Uri.file(pathfile);
          vscode.workspace.openTextDocument(openPath).then(function (filename) {
            vscode.window.showTextDocument(filename);
          });
        }
      });

      vscode.window.showInformationMessage('Successfully created the file!');
    } else {
      vscode.window.showWarningMessage('Name already exist!');
    }
  });
};
