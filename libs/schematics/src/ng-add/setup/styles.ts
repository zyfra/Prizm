import { JsonArray, workspaces } from '@angular-devkit/core';
import { Rule, Tree } from '@angular-devkit/schematics';
import { getWorkspace, updateWorkspace } from '@schematics/angular/utility/workspace';
import { getProject, getProjectTargetOptions } from '../../utils/get-project';
import { Schema } from '../schema';

const FONT_ASSET = {
  glob: '**/*',
  input: 'node_modules/@digital-plant/zyfra-components/src/styles/fonts',
  output: 'assets/ui-platform/components/fonts', // TODO test this in real app
};

const INSTALL_STYLES = [
  'node_modules/primeng/resources/themes/luna-blue/theme.css',
  'node_modules/primeng/resources/primeng.min.css',
  'node_modules/primeicons/primeicons.css',
  'node_modules/@digital-plant/zyfra-components/src/styles/theme/default.less',
  'node_modules/@digital-plant/zyfra-components/src/styles/styles.less',
];

const ICON_STYLES = ['node_modules/@digital-plant/zyfra-components/src/styles/icons/icons.less'];
export function addStyles(options: Schema): Rule {
  return async (tree: Tree): Promise<Rule> => {
    const workspace = await getWorkspace(tree);
    const project = getProject(options, workspace);

    return addStylesToAngularJson(workspace, project, options);
  };
}

export function addStylesToAngularJson(
  workspace: workspaces.WorkspaceDefinition,
  project: workspaces.ProjectDefinition,
  options: Schema
): Rule {
  const targetOptions = getProjectTargetOptions(project, 'build');
  const styles = targetOptions.styles as JsonArray | undefined;
  const assets = targetOptions.assets as JsonArray | undefined;

  let installStyles = [...INSTALL_STYLES];

  if (options.installIcons) {
    installStyles = [...installStyles, ...ICON_STYLES];
  }

  // Install styles
  if (!styles) {
    targetOptions.styles = installStyles;
  } else {
    targetOptions.styles = [...styles, ...installStyles];
  }

  // Install assets
  if (!assets) {
    targetOptions.assets = [FONT_ASSET];
  } else {
    targetOptions.assets = [...assets, FONT_ASSET];
  }

  return updateWorkspace(workspace);
}
