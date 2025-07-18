/**
 * Centralized file generator for Moodle Snippets
 *
 * @module fileGenerator
 * @description Provides functions to generate files consistently
 */

const { save, parsePath } = require('./functions');

/**
 * Generates a file based on a template and configuration
 *
 * @param {Object} vscode - VSCode API
 * @param {Object} fs - FileSystem Module
 * @param {Object} path - Path Module
 * @param {Object} args - Arguments received from command
 * @param {Object} options - Configuration options
 * @param {string} options.template - Template content
 * @param {string} options.defaultFilename - Default filename
 * @param {string} options.extension - File extension (without the dot)
 * @param {boolean} [options.insertAuthorData=true] - Whether to insert author data
 * @param {string} [options.packagePrefix="repository_pluginname"] - Package prefix in the template
 * @returns {Promise<void>}
 */
const generateFile = async (vscode, fs, path, args, options) => {
  try {
    const { template, defaultFilename, extension, packagePrefix = 'repository_pluginname', insertAuthorData = true } = options;

    let content = template;

    // Insert author data if needed
    if (insertAuthorData) {
      let resource;
      if (vscode.workspace.workspaceFolders) {
        resource = vscode.workspace.workspaceFolders[0].uri;
      }

      const moodleConfig = vscode.workspace.getConfiguration('moodle', resource);
      const year = new Date().getFullYear();
      const author_fullname = moodleConfig.get('author_fullname');
      const author_link = moodleConfig.get('author_link');

      content = content
        .replace(/{CURRENT_YEAR}/g, year)
        .replace(/{author_fullname}/g, author_fullname)
        .replace(/{author_link}/g, author_link)
        .replace(/{PACKAGE}/g, packagePrefix);
    }

    // Get relative path
    let relativePath = '';
    if (args) {
      relativePath = parsePath(vscode, path, args);
    }

    // Get filename from user
    const value = await vscode.window.showInputBox({
      prompt: 'Filename',
      placeHolder: 'Filename',
      validateInput: validateFilename,
      value: `${relativePath}${defaultFilename}`,
    });

    if (value === undefined || value === null || value.length === 0) {
      return;
    }

    const filename = value.endsWith(`.${extension}`) ? value : `${value}.${extension}`;

    // Save file
    save(vscode, fs, path, filename, content);
  } catch (error) {
    vscode.window.showErrorMessage(`Error generating file: ${error.message}`);
  }
};

/**
 * Validates a filename
 *
 * @param {string} text - Filename to validate
 * @returns {string|null} Error message or null if valid
 */
const validateFilename = (text) => {
  if (!text) {
    return 'Filename cannot be empty';
  }

  if (!/^[A-Za-z0-9][\w\s/,.-]+$/.test(text)) {
    return 'Filename must start with a letter or number and can only contain letters, numbers, underscores, spaces, commas, periods, hyphens, and forward slashes';
  }

  return null;
};

module.exports = {
  generateFile,
  validateFilename,
};
