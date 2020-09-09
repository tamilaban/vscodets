 
import * as vscode from 'vscode';
import { TemplateBuilder } from './templateBuilder';
import { Template, ApplicationType } from './Models/template';

let templateBuilder:TemplateBuilder = new TemplateBuilder();
  
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let genericGenerationCommand = vscode.commands.registerCommand('atomist.initializer.generate', () => generateFromAllChoices()); 
	context.subscriptions.push(genericGenerationCommand);  
}


async function generateFromAllChoices()
{
	try 
	{
		let templates = await templateBuilder.getTemplates();
		await generate(templates);
	}
	catch(error)
	{
		vscode.window.showErrorMessage("Error while processing project Initializer"+ error);		
	}
}



async function generate(templates: Array<Template>) { 
	let applicationTypes = ["DummyAppType1","DummyAppType2"];
	let appTypeId: any = await vscode.window.showQuickPick(applicationTypes, { placeHolder: 'Choose application Type' });
	if (appTypeId)
	{
		let sourcetemplates = [".Net Core","React","Angular"];
		let sourcetemplateId : any = await vscode.window.showQuickPick(sourcetemplates, { placeHolder: 'Choose source Template' });
		if (sourcetemplateId)
		{
			let applicationName = await vscode.window.showInputBox({ prompt: 'Application Id', placeHolder: 'Enter application Id'});

		}
	}
	return appTypeId;
} 


// this method is called when your extension is deactivated
export function deactivate() {}


