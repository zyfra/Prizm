import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { addDeclarationToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { buildRelativePath } from '@schematics/angular/utility/find-module';

function addModuleToNgModule(
  appModulePath: string,
  newModuleName: string,
  newModuleImportPath: string
): Rule {
  return (tree: Tree, _context: SchematicContext): any => {
    const appModuleContent = tree.read(appModulePath);
    if (!appModuleContent) {
      throw new Error(`File ${appModulePath} not found.`);
    }

    const source = appModuleContent.toString('utf-8');
    const relativePath = buildRelativePath(appModulePath, newModuleImportPath);
    const change = addDeclarationToModule(
      source,
      appModulePath,
      strings.classify(newModuleName),
      relativePath
    );

    if (change instanceof InsertChange) {
      const recorder = tree.beginUpdate(appModulePath);
      recorder.insertLeft(change.pos, change.toAdd);
      tree.commitUpdate(recorder);
    }

    return tree;
  };
}

export default function (options: any): Rule {
  return (tree: Tree, context: SchematicContext): any => {
    const appModulePath = options.appModulePath || 'src/app/app.module.ts';
    const newModuleName = options.newModuleName;
    const newModuleImportPath = options.newModuleImportPath;

    if (!newModuleName || !newModuleImportPath) {
      throw new Error('newModuleName and newModuleImportPath are required.');
    }

    return addModuleToNgModule(appModulePath, newModuleName, newModuleImportPath)(tree, context);
  };
}
