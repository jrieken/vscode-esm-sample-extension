import { ok, strictEqual } from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// const myExtension = require('../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		strictEqual(-1, [1, 2, 3].indexOf(5));
		strictEqual(-1, [1, 2, 3].indexOf(0));
	});

	test('Extension "dummy-esm2" is loaded', () => {
		strictEqual(vscode.env.appName, 'Code - OSS Dev');
	});
});
