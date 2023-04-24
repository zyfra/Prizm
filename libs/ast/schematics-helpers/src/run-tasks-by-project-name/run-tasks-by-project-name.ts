/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { formatFiles, Tree } from '@nrwl/devkit';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { PrizmAstCodeTask, PrizmAstCodeTaskProcessor } from '@prizm-ui/ast/code';
import { prizmAstUpdateAllFilesWhen } from '../update-all-files-when';

export async function prizmAstRunSchematicsByTasks(
  tree: Tree,
  templateTask: PrizmTemplateTask[],
  codeTasks: PrizmAstCodeTask[]
): Promise<any> {
  prizmAstUpdateAllFilesWhen(
    tree,
    '',
    (entryPath: string, content: string) => entryPath.endsWith('.ts') || entryPath.endsWith('.html'),
    (entryPath: string, fileContent: string) => {
      if (entryPath.endsWith('.html')) {
        const parsed = prizmHtmlParse(fileContent);
        const nodeProcessor = new PrizmTemplateTaskProcessor(templateTask);
        fileContent = prizmHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmHtmlItem[]);
      } else if (entryPath.endsWith('.ts')) {
        const nodeProcessor = new PrizmAstCodeTaskProcessor(codeTasks);
        fileContent = nodeProcessor.processTasks(fileContent);
      }
      return fileContent;
    }
  );

  await formatFiles(tree);
}
