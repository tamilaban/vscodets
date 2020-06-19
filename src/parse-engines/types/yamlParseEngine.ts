import EnvironmentDefinitions from './../../common/environment-definition';
import IParseEngine  from './../common/parse-engine';
import * as Fs from 'fs';
import * as Path from 'path';
import * as Yaml from 'yaml';


class YamlParseEngine implements IParseEngine{
    public languageId: string = "css";
    public extension: string ="empty";
    public filepath: string = "relative path";

    public async parse(): Promise<EnvironmentDefinitions[]>{
        let definitions: EnvironmentDefinitions[] =[];
        let file = Fs.readFileSync('./../../common/environments.yml', 'utf8');
        Yaml.parse(file);
        return definitions;
    }
}
