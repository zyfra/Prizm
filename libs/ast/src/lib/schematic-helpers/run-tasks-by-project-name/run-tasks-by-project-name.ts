import { formatFiles, Tree } from '@nrwl/devkit';
import { prizmHtmlParse } from '../../html/html-parse';
import { prizmHtmlStringify } from '../../html/html-stringify';
import { PrizmTemplateTask, PrizmTemplateTaskProcessor } from '../../task/template/task';
import { prizmAstUpdateAllFilesWhen } from '../update-all-files-when';
import { PrizmCodeTaskProcessor } from '../../task/ts/task';
import { PrizmHtmlItem } from '../../html/types';
import { PrizmCodeTask } from '../../task/ts/model';

export async function prizmAstRunSchematicsByTasks(
  tree: Tree,
  templateTask: PrizmTemplateTask[],
  codeTasks: PrizmCodeTask[]
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
        const nodeProcessor = new PrizmCodeTaskProcessor(codeTasks);
        fileContent = nodeProcessor.processTasks(fileContent);
      }
      return fileContent;
    }
  );

  await formatFiles(tree);
}
