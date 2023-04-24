import { PrizmCodeTask } from './model';
import { PrizmAstAddImportsToNgModuleCodeTask } from './add-imports-to-ng-module';
import { PrizmAstAddImportsIfNeededCodeTask } from './add-imports';
import * as ts from 'typescript';

export class PrizmCodeTaskProcessor {
  readonly defaultTasks = [
    new PrizmAstAddImportsToNgModuleCodeTask(),
    new PrizmAstAddImportsIfNeededCodeTask(),
  ];

  constructor(private tasks: PrizmCodeTask[]) {}

  public processTasks(code: string): typeof code {
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): typeof sourceFile => {
        for (const task of this.tasks) {
          const service = this.defaultTasks.find(i => i.type === task.type);
          if (service) sourceFile = service.run(context, sourceFile, task.payload as any);
        }

        return sourceFile;
      };

    const sourceFile = ts.createSourceFile('test.ts', code, ts.ScriptTarget.ES2015, true);

    const result = ts.transform(sourceFile, [transformer]);
    const printer = ts.createPrinter();
    return printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], sourceFile);
  }
}
