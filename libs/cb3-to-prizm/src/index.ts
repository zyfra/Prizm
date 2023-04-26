import { Tree } from '@nrwl/devkit';
import { prizmAstRunSchematicsByTasks } from '@prizm-ui/ast/schematics-helpers';
import { PRIZM_CB3_TO_PRIZM_CODE_TASKS } from '@prizm-ui/ast/cb3-code-examples';
import { PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS } from '@prizm-ui/ast/cb3-template-examples';

export interface Cb3ToPrizmSchematicSchema {
  projectName: string;
}

export default async function (tree: Tree, schema: Cb3ToPrizmSchematicSchema): Promise<any> {
  return prizmAstRunSchematicsByTasks(tree, PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS, PRIZM_CB3_TO_PRIZM_CODE_TASKS);
}
