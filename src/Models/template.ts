export class Template
{
    ApplicationTypes:ApplicationType; 
    SourceTempates: SourceTemplate;

    constructor(ApplicationTypes:ApplicationType,SourceTempates: SourceTemplate)
    {
        this.ApplicationTypes= ApplicationTypes;        
        this.SourceTempates = SourceTempates;
    } 
}

export enum ApplicationType {
    DummyAppType1,
    DummyAppType2,
    DummyAppType3,
    DummyAppType4
  }

  export enum SourceTemplate {
    DummyST1,
    DummyST2
  }