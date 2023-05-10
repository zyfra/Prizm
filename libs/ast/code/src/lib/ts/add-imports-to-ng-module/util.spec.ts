import * as ts from 'typescript';
import { prizmAstAddImportToNgModule } from './util';

function createTransformer(
  newModule: string,
  comment: string,
  moduleToFind: string
): ts.TransformerFactory<ts.SourceFile> {
  return (context: ts.TransformationContext) => {
    return (sourceFile: ts.SourceFile): ts.SourceFile => {
      // Вызываем prizmAstAddImportToNgModule с реальным контекстом трансформации
      return prizmAstAddImportToNgModule(context, sourceFile, newModule, comment, moduleToFind);
    };
  };
}

describe('prizmAstAddImportToNgModule', () => {
  it('should add a new import to the NgModule', () => {
    const code = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
  ]
})
export class AppModule { }
`;
    const newModule = 'NewModule';
    const comment = 'New module';

    const sourceFile = ts.createSourceFile('app.module.ts', code, ts.ScriptTarget.Latest, true);
    const result = ts.transform(sourceFile, [createTransformer(newModule, comment, 'BrowserModule')]);
    const updatedSourceFile = result.transformed[0];
    const printer = ts.createPrinter();
    const updatedCode = printer.printFile(updatedSourceFile);

    expect(updatedCode).toContain(comment);
    expect(updatedCode).toContain(newModule);
    result.dispose();
  });
  it('should not add a new import to the NgModule if already exist', () => {
    const code = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    NewModule
  ]
})
export class AppModule { }
`;
    const newModule = 'NewModule';
    const comment = 'New module';

    const sourceFile = ts.createSourceFile('app.module.ts', code, ts.ScriptTarget.Latest, true);
    const result = ts.transform(sourceFile, [createTransformer(newModule, comment, 'BrowserModule')]);
    const updatedSourceFile = result.transformed[0];
    const printer = ts.createPrinter();
    const updatedCode = printer.printFile(updatedSourceFile);

    expect(updatedCode).not.toContain(comment);
    expect(updatedCode).toContain(newModule);
    result.dispose();
  });
  it('should not modify the code if not find moduleToFind', () => {
    const code = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule2
  ]
})
export class AppModule { }
`;
    const newModule = 'NewModule';
    const comment = 'New module';

    const sourceFile = ts.createSourceFile('app.module.ts', code, ts.ScriptTarget.Latest, true);
    const result = ts.transform(sourceFile, [createTransformer(newModule, comment, 'BrowserModule')]);
    const updatedSourceFile = result.transformed[0];
    const printer = ts.createPrinter();
    const updatedCode = printer.printFile(updatedSourceFile);

    expect(updatedCode).not.toContain(comment);
    expect(updatedCode).not.toContain(newModule);

    result.dispose();
  });

  it('should not modify the code if no NgModule is found', () => {
    const code = `
import { BrowserModule } from '@angular/platform-browser';

export class AppModule { }
`;
    const newModule = 'NewModule';
    const comment = '// New module';

    const sourceFile = ts.createSourceFile('app.module.ts', code, ts.ScriptTarget.Latest, true);
    const result = ts.transform(sourceFile, [createTransformer(newModule, comment, 'BrowserModule')]);
    const updatedSourceFile = result.transformed[0];
    const printer = ts.createPrinter();
    const updatedCode = printer.printFile(updatedSourceFile);

    expect(updatedCode).not.toContain(comment);
    expect(updatedCode).not.toContain(newModule);

    result.dispose();
  });
});
