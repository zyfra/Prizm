import * as ts from 'typescript';
import { PrizmAstAddImportsIfNeededCodeTask } from './add-imports-if-needed';
import { IPrizmAddImportsIfNeededCodeTask } from './model';

describe('PrizmAstAddImportsIfNeededCodeTask', () => {
  const task = new PrizmAstAddImportsIfNeededCodeTask();

  function createTransform(
    namedImports: string[],
    importToAdd: string,
    targetImport: string,
    targetNamedImports?: string[]
  ): ts.TransformerFactory<ts.SourceFile> {
    return (context: ts.TransformationContext) => {
      return (sourceFile: ts.SourceFile) => {
        const taskPayload: IPrizmAddImportsIfNeededCodeTask['payload'] = {
          namedImports,
          importToAdd,
          targetImport,
          targetNamedImports,
        };

        return task.run(context, sourceFile, taskPayload);
      };
    };
  }

  it('should add the import if needed', () => {
    const sourceCode = `
import { existingImport } from './existingImport';

const someVariable = 'test';
`;

    const namedImports = ['newImport'];
    const importToAdd = './newImport';
    const targetImport = './existingImport';
    const targetNamedImports = ['existingImport'];

    const sourceFile = ts.createSourceFile('test.ts', sourceCode, ts.ScriptTarget.ES2015, true);

    const { transformed } = ts.transform(sourceFile, [
      createTransform(namedImports, importToAdd, targetImport, targetNamedImports),
    ]);
    const resultSourceFile = transformed[0];
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, resultSourceFile, sourceFile);

    expect(transformedCode).toContain(`import { newImport } from "./newImport";`);
  });

  it('should not add the import if not needed', () => {
    const sourceCode = `
import { existingImport, newImportName } from './existingImport';

const someVariable = 'test';
`;

    const namedImports = ['newImportName'];
    const importToAdd = '@newImportSource';
    const targetImport = './existingImport';
    const targetNamedImports = ['existingImport', 'newImport'];

    const sourceFile = ts.createSourceFile('test.ts', sourceCode, ts.ScriptTarget.ES2015, true);

    const { transformed } = ts.transform(sourceFile, [
      createTransform(namedImports, importToAdd, targetImport, targetNamedImports),
    ]);
    const resultSourceFile = transformed[0];
    const printer = ts.createPrinter();
    const transformedCode = printer.printNode(ts.EmitHint.Unspecified, resultSourceFile, sourceFile);

    expect(transformedCode).not.toContain(importToAdd);
    expect(transformedCode).toContain(targetImport);
  });
});
