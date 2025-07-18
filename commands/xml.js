/**
 * Command to create a new XML file for Moodle
 *
 * @module xml
 */

const { generateFile } = require('./file-generator');

/**
 * Base content for Moodle XML files
 */
const content = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="correct-xmldb-format.xslt"?>
`;

/**
 * Creates a new XML file for Moodle
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
    defaultFilename: 'new_file.xml',
    extension: 'xml',
    insertAuthorData: false, // No hay datos de autor en la plantilla XML
  });
};
