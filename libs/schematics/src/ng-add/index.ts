import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { addPackageJsonDependency, removePackageJsonDependency } from 'ng-morph';
import { Schema } from './schema';
import { INSTALL_PACKAGE, MAIN_PACKAGES } from './consts';

export function ngAdd(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext): Tree => {
    context.logger.info(`The main packages will be installed`);

    addDependencies(tree, options);

    context.addTask(new NodePackageInstallTask(), [
      context.addTask(new RunSchematicTask('ng-add-setup-project', options)),
    ]);

    return tree;
  };
}

function addDependencies(tree: Tree, options: Schema): void {
  const packages = MAIN_PACKAGES;

  packages.forEach(pack => {
    addPackageJsonDependency(tree, {
      name: pack.name,
      version: pack.version,
    });
  });

  removePackageJsonDependency(tree, INSTALL_PACKAGE.name);
}
