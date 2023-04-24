import * as ts from 'typescript';
import { prizmAstAddImportIfNeeded } from './util';

const testCode = `
import { A } from './A';

function foo() {
  console.log('Hello, world!');
}
`;

const sourceFile = ts.createSourceFile('test.ts', testCode, ts.ScriptTarget.ES2015, true);

describe('prizmAstAddImportIfNeeded', () => {
  it('should add the import correctly', () => {
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): any => {
        const transformedSourceFile = prizmAstAddImportIfNeeded(context, sourceFile, ['B'], './B', './A');

        return transformedSourceFile;
      };

    const result = ts.transform(sourceFile, [transformer]);
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], sourceFile);

    const expectedCode = `import { B } from "./B";
import { A } from './A';
function foo() {
    console.log('Hello, world!');
}`;

    expect(transformedCode.trim()).toBe(expectedCode.trim());
  });
  it('should add the import correctly with targetNameImports', () => {
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): any => {
        const transformedSourceFile = prizmAstAddImportIfNeeded(context, sourceFile, ['B'], './B', './A', [
          'A',
        ]);

        return transformedSourceFile;
      };

    const result = ts.transform(sourceFile, [transformer]);
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], sourceFile);

    const expectedCode = `import { B } from "./B";
import { A } from './A';
function foo() {
    console.log('Hello, world!');
}`;

    expect(transformedCode.trim()).toBe(expectedCode.trim());
  });
  it('should add the import correctly with uncorrect targetNameImports', () => {
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): any => {
        const transformedSourceFile = prizmAstAddImportIfNeeded(context, sourceFile, ['B'], './B', './A', [
          'B',
        ]);

        return transformedSourceFile;
      };

    const result = ts.transform(sourceFile, [transformer]);
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], sourceFile);

    const expectedCode = `import { B } from "./B";
import { A } from './A';
function foo() {
    console.log('Hello, world!');
}`;

    expect(transformedCode.trim()).not.toBe(expectedCode.trim());
  });

  it('should not add the import if targetImport is not found', () => {
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): any => {
        const transformedSourceFile = prizmAstAddImportIfNeeded(
          context,
          sourceFile,
          ['B'],
          './B',
          './NonExistent'
        );

        return transformedSourceFile;
      };

    const result = ts.transform(sourceFile, [transformer]);
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], sourceFile);

    expect(transformedCode.match(new RegExp('./B', 'g'))?.length).toBeFalsy();
  });

  it('should not add the import if targetImport does not have all targetNamedImports', () => {
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): any => {
        const transformedSourceFile = prizmAstAddImportIfNeeded(context, sourceFile, ['B'], './B', './A', [
          'NonExistent',
        ]);

        return transformedSourceFile;
      };

    const result = ts.transform(sourceFile, [transformer]);
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], sourceFile);

    expect(transformedCode.match(new RegExp('./B', 'g'))?.length).toBeFalsy();
  });

  it('should add the import with a comment correctly', () => {
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): any => {
        const transformedSourceFile = prizmAstAddImportIfNeeded(
          context,
          sourceFile,
          ['B'],
          './B',
          './A',
          ['A'],
          'This is a comment before the import'
        );

        return transformedSourceFile;
      };

    const result = ts.transform(sourceFile, [transformer]);
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], sourceFile);

    const expectedCode = `// This is a comment before the import
import { B } from "./B";
import { A } from './A';
function foo() {
    console.log('Hello, world!');
}`;

    expect(transformedCode.trim()).toBe(expectedCode.trim());
  });
});
