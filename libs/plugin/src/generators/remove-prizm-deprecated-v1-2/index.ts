import { readProjectConfiguration, Tree } from '@nrwl/devkit';

import { prizmAstRunSchematicsByTasks } from '@prizm-ui/ast/schematics-helpers';

import { PRIZM_UPDATE_V2_CODE_TASKS } from '@prizm-ui/ast/cb3-code-examples';

import { PRIZM_UPDATE_V2_TEPMLATES_TASKS } from '@prizm-ui/ast/cb3-template-examples';

export interface PrizmMigratorSchematicSchema {
  project: string;
  runPrettier: boolean;
}

export default async function (tree: Tree, schema: PrizmMigratorSchematicSchema): Promise<any> {
  try {
    const projectConfig = readProjectConfiguration(tree, schema.project);
    const projectRoot = projectConfig.root;

    return prizmAstRunSchematicsByTasks(
      tree,
      projectRoot,
      PRIZM_UPDATE_V2_TEPMLATES_TASKS,
      PRIZM_UPDATE_V2_CODE_TASKS,
      {
        runPrettier: schema.runPrettier,
      }
    );
  } catch (error) {
    console.error(`Project ${schema.project} not found.`);
    throw error;
  }
}
