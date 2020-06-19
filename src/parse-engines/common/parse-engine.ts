import EnvironmentDefinition from '../../common/environment-definition';

interface IParseEngine {
    languageId : string; 
    extension : string;
    filepath : string;
    parse(): Promise<EnvironmentDefinition[]>;
}

export default IParseEngine;