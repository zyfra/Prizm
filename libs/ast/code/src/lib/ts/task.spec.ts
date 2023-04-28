import { PrizmAstCodeTask } from './abstract';
import { PrizmAstAddImportsIfNeededCodeTask } from './add-imports';
import { prizmAstCreateCodeTaskBy } from './util';
import { PrizmAstAddImportsToNgModuleCodeTask } from './add-imports-to-ng-module';
import { PrizmAstCodeTaskProcessor } from './task';

describe('PrizmAstCodeTaskProcessor', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const ZyfraTextareaCodeTasks: PrizmAstCodeTask[] = [
    prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
      importToAdd: '@prizm-ui/components',
      namedImports: ['PrizmInputTextModule'],
      targetImport: '@digital-plant/zyfra-components',
      targetNamedImports: ['ZyfraTextareaModule'],
      commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraTextareaModule',
    }),
    prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
      newModule: 'PrizmInputTextModule',
      moduleToFind: 'ZyfraTextareaModule',
      comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraTextareaModule',
    }),
  ];
  const expectedCode = `
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { AppComponent } from './app.component';
      import { FormsModule } from '@angular/forms';
      import { HttpClientModule } from '@angular/common/http';
      import { ZyfraTextareaModule } from '@digital-plant/zyfra-components';


      @NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule,
          ZyfraTabViewModule,
          ZyfraTextareaModule,
          FormsModule,
          HttpClientModule
        ],
        providers: [],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
    `;
  it('should add to ng module ZyfraTextareaModule', () => {
    const processor = new PrizmAstCodeTaskProcessor(ZyfraTextareaCodeTasks);
    const result = processor.processTasks(expectedCode);
    expect(result).toContain('PRIZM:MIGRATOR: Our added module for migrate from ZyfraTextareaModule');
    expect(result).toContain('PRIZM:MIGRATOR added new module for migrate from ZyfraTextareaModule');
  });
});
