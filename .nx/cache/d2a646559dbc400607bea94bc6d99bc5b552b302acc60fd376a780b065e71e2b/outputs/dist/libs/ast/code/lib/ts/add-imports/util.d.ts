import * as ts from 'typescript';
/**
 * Add import statements to a TypeScript source file if the target import does not exist.
 *
 * @param {ts.TransformationContext} context - The transformation context.
 * @param {ts.SourceFile} sourceFile - The source file to process.
 * @param {string[]} namedImports - The named imports to add.
 * @param {string} importToAdd - The import path to add.
 * @param {string} targetImport - The import path to check for existence.
 * @param {string[]} [targetNamedImports] - The named imports to check for existence.
 * @param {string} [commentBeforeImport] - The optional comment to add before the new import.
 * @returns {ts.SourceFile} - The transformed source file with the new import added if needed.
 */
export declare function prizmAstAddImportIfNeeded(context: ts.TransformationContext, sourceFile: ts.SourceFile, namedImports: string[], importToAdd: string, targetImport: string, targetNamedImports?: string[], commentBeforeImport?: string): ts.SourceFile;
