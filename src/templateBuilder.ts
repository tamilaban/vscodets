import * as TemplateModels from './Models/template' ;

export class TemplateBuilder {
    private template : any ; 
    constructor ( )
    {

    }

    async getTemplates(): Promise<Array<TemplateModels.Template>> {
        let templates: Array<TemplateModels.Template> = [
            new TemplateModels.Template(TemplateModels.ApplicationType.DummyAppType1,
                TemplateModels.SourceTemplate.DummyST1),
                new TemplateModels.Template(TemplateModels.ApplicationType.DummyAppType1,
                    TemplateModels.SourceTemplate.DummyST2),
                    new TemplateModels.Template(TemplateModels.ApplicationType.DummyAppType1,
                        TemplateModels.SourceTemplate.DummyST1),
                        new TemplateModels.Template(TemplateModels.ApplicationType.DummyAppType1,
                            TemplateModels.SourceTemplate.DummyST1),
                            new TemplateModels.Template(TemplateModels.ApplicationType.DummyAppType1,
                                TemplateModels.SourceTemplate.DummyST1),

        ];
        return templates;
         
    }

}