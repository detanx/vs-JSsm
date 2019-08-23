/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-23 10:51:41
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-23 16:08:06
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { IMethod } from './interface'
const METHODS = require('../src/js/methods.js');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jsselfmethods" is now active!');

	METHODS.forEach(({ fun, name }: IMethod) => {
		let disposable = vscode.commands.registerCommand(`extension.${name}`, () => {
			// The code you place here will be executed every time your command is executed
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const { selections } = editor;

				editor.edit(editBuilder => {
					selections.forEach(selection => {
						const { start, end } = selection;
						const range = new vscode.Range(start, end);
						editBuilder.replace(range, String(fun));
					});
				});
				// Display a message box to the user
				vscode.window.showInformationMessage(`已插入方法: ${name}`);
			} else {
				vscode.window.showWarningMessage('js-self-methods: 只有编辑文本的时候才可以使用!');
			}
		});
		context.subscriptions.push(disposable);
	});

}

// this method is called when your extension is deactivated
export function deactivate() {}
