import { readProjectConfiguration, Tree } from '@nrwl/devkit';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { prizmAstRunSchematicsByTasks } from '@prizm-ui/ast/schematics-helpers';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PRIZM_CB3_TO_PRIZM_CODE_TASKS } from '@prizm-ui/ast/cb3-code-examples';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS } from '@prizm-ui/ast/cb3-template-examples';

export interface Cb3ToPrizmSchematicSchema {
  project: string;
  runPrettier: boolean;
}
export default async function (tree: Tree, schema: Cb3ToPrizmSchematicSchema): Promise<any> {
  try {
    const projectConfig = readProjectConfiguration(tree, schema.project);
    const projectRoot = projectConfig.root;

    return prizmAstRunSchematicsByTasks(
      tree,
      projectRoot,
      PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS,
      PRIZM_CB3_TO_PRIZM_CODE_TASKS,
      {
        runPrettier: schema.runPrettier,
      }
    );
  } catch (error) {
    console.error(`Project ${schema.project} not found.`);
    throw error;
  }
}
