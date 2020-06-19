import * as vscode from "vscode";

class Fetcher {
    public static async findAllParseableDocuments(): Promise<vscode.Uri[]> {
        // There's a bug in the latest version of the API in which calling vscode.workspace.findFiles
        // when the extension is not being executed inside a workspace, causes a "Cannot read property
        // 'map' of undefined" error.
        // More info: https://github.com/zignd/HTML-CSS-Class-Completion/issues/114
        if (!vscode.workspace.name) {
            return [];
        }

        const configuration = vscode.workspace.getConfiguration(); 

        return await vscode.workspace.findFiles('*.yml');
    }
}

export default Fetcher;
