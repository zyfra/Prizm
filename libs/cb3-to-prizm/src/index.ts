import { Tree } from '@nrwl/devkit';
import {
  PRIZM_CB3_TO_PRIZM_CODE_TASKS,
  PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS,
  prizmAstRunSchematicsByTasks,
} from '@prizm-ui/ast';

export interface MySchematicSchema {
  projectName: string;
}

export default async function (tree: Tree, schema: MySchematicSchema): Promise<any> {
  return prizmAstRunSchematicsByTasks(tree, PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS, PRIZM_CB3_TO_PRIZM_CODE_TASKS);
}
