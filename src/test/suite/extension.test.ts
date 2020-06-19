import * as assert from 'assert';
import * as myExtension from './../../extension';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';


suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});

	test('test get webview content', () => {
		let iteration = 0;
		const cat = iteration++ % 2 ? 'Compiling Cat' : 'Coding Cat';
		 var result = myExtension.getWebviewContent(cat);
         var expectedResult = `<!DOCTYPE html>
		 <html lang="en">
		 <head>
			 <meta charset="UTF-8">
			 <meta name="viewport" content="width=device-width, initial-scale=1.0">
			 <title>Cat Coding</title>
		 </head>
		 <body>
			 <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
		 </body>
		 </html>`;

		assert.equal(result,expectedResult,"template mismatch");
	});
});
