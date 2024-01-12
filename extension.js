const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

const mustache = require('./commands/mustache');
const php = require('./commands/php');
const xml = require('./commands/xml');
const table = require('./commands/table');
const version = require('./commands/version');
const lib = require('./commands/lib');
const access = require('./commands/access');

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  const moodle_file_mustache = vscode.commands.registerCommand('moodle.file.mustache', (args) => {
    mustache(vscode, fs, path, args);
  });
  const moodle_file_php = vscode.commands.registerCommand('moodle.file.php', (args) => {
    php(vscode, fs, path, args);
  });
  const moodle_file_xml = vscode.commands.registerCommand('moodle.file.xml', (args) => {
    xml(vscode, fs, path, args);
  });
  const moodle_file_table = vscode.commands.registerCommand('moodle.file.table', (args) => {
    table(vscode, fs, path, args);
  });
  const moodle_file_access = vscode.commands.registerCommand('moodle.file.access', (args) => {
    access(vscode, fs, path, args);
  });
  const moodle_file_lib = vscode.commands.registerCommand('moodle.file.lib', (args) => {
    lib(vscode, fs, path, args);
  });
  const moodle_file_version = vscode.commands.registerCommand('moodle.file.version', (args) => {
    version(vscode, fs, path, args);
  });

  context.subscriptions.push(moodle_file_mustache);
  context.subscriptions.push(moodle_file_php);
  context.subscriptions.push(moodle_file_xml);
  context.subscriptions.push(moodle_file_table);
  context.subscriptions.push(moodle_file_access);
  context.subscriptions.push(moodle_file_lib);
  context.subscriptions.push(moodle_file_version);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
