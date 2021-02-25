module.exports.save = function (vscode, fs, path, filename, content, show = true) {
	const folder = vscode.workspace.workspaceFolders[0].uri.fsPath;

	let pathfile = path.join(folder, filename);

	fs.access(pathfile, function (err) {
		if (err) {
			fs.open(pathfile, "w+", function (err, fd) {
				if (err) throw err;
				fs.writeFileSync(fd, content);
				if (show === true) {
					let openPath = vscode.Uri.file(pathfile);
					vscode.workspace.openTextDocument(openPath).then(function (filename) {
						vscode.window.showTextDocument(filename);
					});
				}
			});

			vscode.window.showInformationMessage('Successfully created the file!');
		} else {
			vscode.window.showWarningMessage("Name already exist!");
		}
	});
};
