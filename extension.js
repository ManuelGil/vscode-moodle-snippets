const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const mustache = require('./commands/mustache');
const php = require('./commands/php');
const xml = require('./commands/xml');
const table = require('./commands/table');
const version = require('./commands/version');

function activate(context) {
	let moodle_file_mustache = vscode.commands.registerCommand('moodle.file.mustache', function () {
		mustache(vscode, fs, path)
	});
	let moodle_file_php = vscode.commands.registerCommand('moodle.file.php', function () {
		php(vscode, fs, path)
	});
	let moodle_file_xml = vscode.commands.registerCommand('moodle.file.xml', function () {
		xml(vscode, fs, path)
	});
	let moodle_table = vscode.commands.registerCommand('moodle.table', function () {
		table(vscode, fs, path)
	});
	let moodle_version = vscode.commands.registerCommand('moodle.version', function () {
		version(vscode, fs, path)
	});

	context.subscriptions.push(moodle_file_mustache);
	context.subscriptions.push(moodle_file_php);
	context.subscriptions.push(moodle_file_xml);
	context.subscriptions.push(moodle_table);
	context.subscriptions.push(moodle_version);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
