import { Tree } from '@nrwl/devkit';
import { PRIZM_CB3_TO_PRIZM_CODE_TASKS, PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS } from '@prizm-ui/ast';
import { prizmAstRunSchematicsByTasks } from '@prizm-ui/ast/schematics-helpers';

export interface Cb3ToPrizmSchematicSchema {
  projectName: string;
}

export default async function (tree: Tree, schema: Cb3ToPrizmSchematicSchema): Promise<any> {
  return prizmAstRunSchematicsByTasks(tree, PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS, PRIZM_CB3_TO_PRIZM_CODE_TASKS);
}
