import { JsonArray, workspaces } from '@angular-devkit/core';
import { Rule, Tree } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { getProject, getProjectTargetOptions } from '../../utils/get-project';
import { Schema } from '../schema';

const FONT_ASSET = {
  glob: '**/*',
  input: 'node_modules/@ui-platform/components/src/styles/fonts',
  output: 'assets/ui-platform/components/fonts',
};

const INSTALL_STYLES = [
  'node_modules/primeng/resources/themes/luna-blue/theme.css',
  'node_modules/primeng/resources/primeng.min.css',
  'node_modules/primeicons/primeicons.css',
  'node_modules/@ui-platform/components/src/styles/theme/default.css',
  'node_modules/@ui-platform/components/src/styles/styles.less',
];

export function addStyles(options: Schema): Rule {
  return async (tree: Tree) => {
    const workspace = await getWorkspace(tree);
    const project = getProject(options, workspace);

    return addStylesToAngularJson(workspace, project);
  };
}

export function addStylesToAngularJson(
  workspace: workspaces.WorkspaceDefinition,
  project: workspaces.ProjectDefinition
): Rule {
  const targetOptions = getProjectTargetOptions(project, 'build');
  const styles = targetOptions.styles as JsonArray | undefined;
  const assets = targetOptions.assets as JsonArray | undefined;

  // Install styles
  if (!styles) {
    targetOptions.styles = INSTALL_STYLES;
  } else {
    targetOptions.styles = [...styles, ...INSTALL_STYLES];
  }

  // Install assets
  if (!assets) {
    targetOptions.assets = [FONT_ASSET];
  } else {
    targetOptions.assets = [...assets, FONT_ASSET];
  }

  return updateWorkspace(workspace);
}
