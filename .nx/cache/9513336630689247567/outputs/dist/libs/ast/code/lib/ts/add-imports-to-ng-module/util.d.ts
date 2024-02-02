import * as ts from 'typescript';
/**
 * Adds a new import to the NgModule's imports array if a specific module is found and the new module does not already exist.
 *
 * @param context - The transformation context.
 * @param sourceFile - The source file containing the NgModule.
 * @param newModule - The name of the new module to be added.
 * @param comment - The comment to be added before the new module.
 * @param moduleToFind - The name of the module that should be found in the NgModule for the new module to be added.
 * @returns The updated source file with the new module added if the specified module is found and the new module does not already exist.
 */
export declare function prizmAstAddImportToNgModule(context: ts.TransformationContext, sourceFile: ts.SourceFile, newModule: string, comment: string, moduleToFind: string): ts.SourceFile;
