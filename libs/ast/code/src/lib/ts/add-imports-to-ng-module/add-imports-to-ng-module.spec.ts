import * as ts from 'typescript';
import { PrizmAstAddImportsToNgModuleCodeTask } from './add-imports-to-ng-module';
import { IPrizmAddImportsToNgModuleCodeTask } from './model';

describe('PrizmAstAddImportsToNgModuleCodeTask', () => {
  const task = new PrizmAstAddImportsToNgModuleCodeTask();

  function createTransform(
    newModule: string,
    comment: string,
    moduleToFind: string
  ): ts.TransformerFactory<ts.SourceFile> {
    return (context: ts.TransformationContext) => {
      return (sourceFile: ts.SourceFile) => {
        const taskPayload: IPrizmAddImportsToNgModuleCodeTask['payload'] = {
          newModule,
          comment,
          moduleToFind,
        };

        return task.run(context, sourceFile, taskPayload);
      };
    };
  }

  it('should add the import to NgModule', () => {
    const sourceCode = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
})
export class AppModule { }
`;

    const newModule = 'HttpClientModule';
    const comment = 'HTTP client module for RESTful API';
    const moduleToFind = 'BrowserModule';

    const sourceFile = ts.createSourceFile('test.ts', sourceCode, ts.ScriptTarget.ES2015, true);

    const { transformed } = ts.transform(sourceFile, [createTransform(newModule, comment, moduleToFind)]);
    const resultSourceFile = transformed[0];
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, resultSourceFile, sourceFile);

    expect(transformedCode).toContain(newModule);
    expect(transformedCode).toContain(comment);
  });
});
