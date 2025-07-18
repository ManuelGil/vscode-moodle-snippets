/**
 * Guarda contenido en un archivo y opcionalmente lo abre en el editor
 *
 * @param {Object} vscode - API de VSCode
 * @param {Object} fs - Módulo FileSystem
 * @param {Object} path - Módulo Path
 * @param {string} filename - Nombre del archivo a crear (ruta relativa)
 * @param {string} content - Contenido a escribir en el archivo
 * @param {boolean} [show=true] - Si debe abrir el archivo después de crearlo
 * @returns {void}
 */
const save = (vscode, fs, path, filename, content, show = true) => {
  try {
    let folder;

    if (vscode.workspace.workspaceFolders) {
      folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
    } else {
      vscode.window.showErrorMessage('No workspace folder found! The file has not been created.');
      return;
    }

    const pathfile = path.join(folder, filename);

    try {
      if (!fs.existsSync(path.dirname(pathfile))) {
        fs.mkdirSync(path.dirname(pathfile), { recursive: true });
      }
    } catch (dirError) {
      vscode.window.showErrorMessage(`Error creating directory: ${dirError.message}`);
      return;
    }

    fs.access(pathfile, (err) => {
      if (err) {
        try {
          fs.open(pathfile, 'w+', function (err, fd) {
            if (err) {
              vscode.window.showErrorMessage(`Error opening file: ${err.message}`);
              return;
            }

            try {
              fs.writeFileSync(fd, content);

              if (show === true) {
                const openPath = vscode.Uri.file(pathfile);
                vscode.workspace
                  .openTextDocument(openPath)
                  .then(function (document) {
                    vscode.window.showTextDocument(document);
                  })
                  .catch(function (error) {
                    vscode.window.showErrorMessage(`Error opening document: ${error.message}`);
                  });
              }

              vscode.window.showInformationMessage(`Successfully created the file: ${path.basename(pathfile)}`);
            } catch (writeError) {
              vscode.window.showErrorMessage(`Error writing file: ${writeError.message}`);
            }
          });
        } catch (fileError) {
          vscode.window.showErrorMessage(`Error creating file: ${fileError.message}`);
        }
      } else {
        vscode.window.showWarningMessage(`File '${path.basename(pathfile)}' already exists!`);
      }
    });
  } catch (error) {
    vscode.window.showErrorMessage(`Unexpected error: ${error.message}`);
  }
};

/**
 * Analyzes and converts an absolute path to a relative one for use in file creation
 *
 * @param {Object} vscode - VSCode API
 * @param {Object} path - Path Module
 * @param {Object} args - Command arguments with path
 * @returns {string} Relative path with trailing separator
 */
const parsePath = (vscode, path, args) => {
  try {
    let folder = '';

    if (vscode.workspace.workspaceFolders) {
      folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
    }

    // Normalizar separadores de ruta para compatibilidad cross-platform
    if (process.platform === 'win32') {
      folder = folder.replace(/\\/g, '/');
    }

    folder = folder.startsWith('/') ? folder : `/${folder}`;

    const relativePath = path.posix.relative(folder, args.path);

    // Asegurarse de que la ruta termina con / si no es la raíz
    return relativePath === '/' ? '' : `${relativePath}/`;
  } catch (error) {
    console.error(`Error parsing path: ${error.message}`);
    return '';
  }
};

module.exports = {
  save,
  parsePath,
};
