"use strict";

import * as vscode from "vscode";

class EnvironmentDefinition {
    public constructor(public className: string, public location?: vscode.Location) { }
}

export default EnvironmentDefinition;
