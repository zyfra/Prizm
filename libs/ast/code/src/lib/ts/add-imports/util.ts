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
export function prizmAstAddImportIfNeeded(
  context: ts.TransformationContext,
  sourceFile: ts.SourceFile,
  namedImports: string[],
  importToAdd: string,
  targetImport: string,
  targetNamedImports?: string[],
  commentBeforeImport?: string
): ts.SourceFile {
  let foundTargetImport = false;
  let lastImportIndex = -1;
  let foundImportToAddIndex = -1;

  sourceFile.forEachChild((node: ts.Node) => {
    if (ts.isImportDeclaration(node)) {
      const currentIndex = sourceFile.statements.indexOf(node);
      lastImportIndex = currentIndex;

      const moduleSpecifier = node.moduleSpecifier.getText(sourceFile);

      if (moduleSpecifier.replace(/["']+/g, '').includes(targetImport.replace(/["']+/g, ''))) {
        if (targetNamedImports?.length) {
          const existingNamedImports =
            (node.importClause?.namedBindings as ts.NamedImports)?.elements.map(element =>
              element.name?.getText(sourceFile)
            ) || [];

          foundTargetImport = hasAllValues(existingNamedImports, targetNamedImports, v =>
            v?.replace(/["']+/g, '')
          );
        } else {
          foundTargetImport = true;
        }
      }

      if (
        foundTargetImport &&
        moduleSpecifier.replace(/["']+/g, '').includes(importToAdd.replace(/["']+/g, ''))
      ) {
        foundImportToAddIndex = currentIndex;
        const existingNamedImports =
          (node.importClause?.namedBindings as ts.NamedImports)?.elements.map(element =>
            element.name?.getText(sourceFile)
          ) || [];

        // Add missing namedImports to the existing importToAdd
        const updatedNamedImports = Array.from(new Set([...existingNamedImports, ...namedImports]));

        if (updatedNamedImports.length > existingNamedImports.length) {
          const addedImports = updatedNamedImports.filter(name => !existingNamedImports.includes(name));
          const importSpecifiers = updatedNamedImports.map(name => {
            const specifier = createImportSpecifierWithFixBreakingChanges(context, name);

            if (addedImports.includes(name)) {
              ts.addSyntheticLeadingComment(
                specifier,
                ts.SyntaxKind.MultiLineCommentTrivia,
                commentBeforeImport ?? 'new import',
                true
              );
            }
            return specifier;
          });
          const updatedImportDeclaration = context.factory.updateImportDeclaration(
            node,
            undefined,
            undefined,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            context.factory.updateImportClause(
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              node.importClause,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              node.importClause.isTypeOnly,
              undefined,
              context.factory.createNamedImports(importSpecifiers)
            ),
            node.moduleSpecifier
          );

          sourceFile = context.factory.updateSourceFile(
            sourceFile,
            sourceFile.statements.map((statement, index) => {
              if (index === foundImportToAddIndex) {
                return updatedImportDeclaration;
              }
              return statement;
            })
          );
        }
      }
    }
  });
  if (foundTargetImport && foundImportToAddIndex === -1) {
    const importSpecifiers = namedImports.map(name =>
      createImportSpecifierWithFixBreakingChanges(context, name)
    );
    const importDeclaration = context.factory.createImportDeclaration(
      undefined,
      context.factory.createImportClause(
        false,
        undefined,
        context.factory.createNamedImports(importSpecifiers)
      ),
      context.factory.createStringLiteral(importToAdd)
    );

    if (commentBeforeImport) {
      const commentRange: ts.CommentRange = {
        pos: -1,
        end: -1,
        kind: ts.SyntaxKind.SingleLineCommentTrivia,
        hasTrailingNewLine: true,
      };
      ts.addSyntheticLeadingComment(
        importDeclaration,
        commentRange.kind,
        ` ${commentBeforeImport}`,
        commentRange.hasTrailingNewLine
      );
    }

    const updatedStatements = [
      ...sourceFile.statements.slice(0, lastImportIndex + 1),
      importDeclaration,
      ...sourceFile.statements.slice(lastImportIndex + 1),
    ] as any;
    return context.factory.updateSourceFile(sourceFile, updatedStatements);
  }

  return sourceFile;
}

function hasAllValues(sourceArr: any[], arrToCheck: any[], transformFunc?: (value: any) => any): boolean {
  if (transformFunc) {
    sourceArr = sourceArr.map(transformFunc);
    arrToCheck = arrToCheck.map(transformFunc);
  }

  for (let i = 0; i < arrToCheck.length; i++) {
    if (!sourceArr.includes(arrToCheck[i])) {
      return false;
    }
  }
  return true;
}

function createImportSpecifierWithFixBreakingChanges(context: ts.TransformationContext, name: string) {
  const version = parseFloat(ts.versionMajorMinor);
  if (version < 4.5)
    // FIX FOR BC https://github.com/microsoft/TypeScript/wiki/API-Breaking-Changes#typescript-45
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return context.factory.createImportSpecifier(undefined, context.factory.createIdentifier(name));
  // FIX FOR BC https://github.com/microsoft/TypeScript/wiki/API-Breaking-Changes#typescript-45
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  else return context.factory.createImportSpecifier(false, undefined, context.factory.createIdentifier(name));
}
