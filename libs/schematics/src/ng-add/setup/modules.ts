import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { getWorkspace } from '@schematics/angular/utility/workspace';
import {
  addImports,
  addImportToNgModule,
  ClassDeclaration,
  createProject,
  editImports,
  getImports,
  getMainModule,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph';
import { getProject, getProjectTargetOptions } from '../../utils/get-project';
import { MAIN_MODULES } from '../consts';
import { Schema } from '../schema';

export function addInstallMainModules(options: Schema): Rule {
  return async (tree: Tree, context: SchematicContext): Promise<void> => {
    const workspace = await getWorkspace(tree);
    const project = getProject(options, workspace);
    const buildOptions = getProjectTargetOptions(project, 'build');

    setActiveProject(createProject(tree, '/', ['**/*.ts', '**/*.json']));

    const mainModule = getMainModule(buildOptions.main as string);

    addModules(mainModule, options, context);

    saveActiveProject();
  };
}

function addModules(mainModule: ClassDeclaration, options: Schema, context: SchematicContext): void {
  const modules = [...MAIN_MODULES];

  const mainModulePath = mainModule.getSourceFile().getFilePath();

  modules.forEach((module) => {
    addImportToNgModule(mainModule, module.name, { unique: true });
    addUniqueImport(mainModulePath, module.name, module.packageName);
  });

  context.logger.info(`${modules.map((module) => module.name)} was added to ${mainModulePath}`);
}

/**
 * Add unique import by path
 */
function addUniqueImport(filePath: string, namedImport: string, packageName: string): void {
    const existingNamedImport = getImports(filePath, {
        namedImports: namedImport,
        moduleSpecifier: packageName,
    });

    if (existingNamedImport.length) {
        return;
    }

    const existingDeclaration = getImports(filePath, {
        moduleSpecifier: packageName,
    });

    if (existingDeclaration.length) {
        const modules = existingDeclaration[0]
            .getNamedImports()
            .map(namedImport => namedImport.getText());

        editImports(existingDeclaration, () => ({
            namedImports: [...modules, namedImport],
        }));

        return;
    }

    addImports(filePath, {
        moduleSpecifier: packageName,
        namedImports: [namedImport],
    });
}
