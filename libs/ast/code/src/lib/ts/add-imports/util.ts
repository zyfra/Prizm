import * as ts from 'typescript';

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

  // Ищем нужный импорт и запоминаем последний импорт
  sourceFile.forEachChild((node: ts.Node) => {
    if (ts.isImportDeclaration(node)) {
      lastImportIndex = sourceFile.getChildren().indexOf(node);

      if (node.importClause && node.moduleSpecifier.getText()?.match(new RegExp(targetImport, 'g'))) {
        foundTargetImport = true;

        if (
          targetNamedImports &&
          node.importClause.namedBindings &&
          ts.isNamedImports(node.importClause.namedBindings)
        ) {
          const existingNamedImports = node.importClause.namedBindings.elements.map(element =>
            element.name.getText()
          );

          foundTargetImport = targetNamedImports.every(targetNamedImport =>
            existingNamedImports.includes(targetNamedImport)
          );
        }
      }
    }
  });

  // Если найден нужный импорт и у него есть все targetNamedImports, добавляем импорт рядом с ним
  if (foundTargetImport) {
    const importSpecifiers = namedImports.map(name =>
      ts.createImportSpecifier(undefined, ts.createIdentifier(name))
    );
    const importDeclaration = ts.createImportDeclaration(
      undefined,
      undefined,
      ts.createImportClause(undefined, ts.createNamedImports(importSpecifiers)),
      ts.createLiteral(importToAdd)
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

    return ts.factory.updateSourceFile(sourceFile, updatedStatements);
  }

  return sourceFile;
}
