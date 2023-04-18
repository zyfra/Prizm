import * as ts from 'typescript';
// Функция для обхода AST и поиска узлов с заданным именем
function findNodesByName(node: ts.Node, name: string, foundNodes: ts.Node[]): void {
  if (ts.isIdentifier(node) && node.text === name) {
    foundNodes.push(node);
  }

  ts.forEachChild(node, child => findNodesByName(child, name, foundNodes));
}
const a = [] as any[];
export function addCommentToImportUsage(
  fileName: string,
  moduleName: string,
  commentText: string,
  fileContent: string
): string {
  // Чтение файла и его компиляция в AST
  const sourceFile = ts.createSourceFile(fileName, fileContent, ts.ScriptTarget.Latest, true);

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  function visit(ctx: ts.TransformationContext) {
    return function visitor(node: ts.Node): ts.Node {
      findNodesByName(node, 'foo', a);
      if (ts.isImportDeclaration(node)) {
        // Проверяем, является ли импорт искомым модулем
        const importClause = node.importClause;
        if (
          importClause &&
          ts.isStringLiteral(node.moduleSpecifier) &&
          node.moduleSpecifier.text === moduleName
        ) {
          const importBindings = importClause.namedBindings;
          if (ts.isNamedImports(importBindings)) {
            const importedNames = importBindings.elements.map(el => el.name.text);

            // eslint-disable-next-line no-inner-declarations
            function visitImportUsage(node: ts.Node): ts.Node {
              // Если находим использование импортированного модуля, добавляем комментарий
              if (ts.isIdentifier(node) && importedNames.includes(node.text)) {
                ts.addSyntheticLeadingComment(
                  node,
                  ts.SyntaxKind.MultiLineCommentTrivia,
                  `* ${commentText} `,
                  true
                );
                console.log(
                  '#mz node',
                  // node,
                  node.kind,
                  node.parent.kind,
                  ts.isFunctionExpression(node),
                  ts.isArrowFunction(node),
                  ts.isTokenKind(node.kind)
                );
              }

              return ts.visitEachChild(node, visitImportUsage, ctx);
            }
            return ts.visitEachChild(node, visitImportUsage, ctx);
          }
        }
      }
      return ts.visitEachChild(node, visitor, ctx);
    };
  }

  // Применение трансформации к исходному файлу
  const transformationResult = ts.transform(sourceFile, [visit]);
  const transformedSourceFile = transformationResult.transformed[0];

  // Освобождение памяти, занимаемой результатом трансформации
  transformationResult.dispose();

  a.forEach(i => console.log('#mz i', i.kind, i.parent.kind, i.parent.parent.node));

  // Вывод обновленного файла
  return printer.printFile(transformedSourceFile as ts.SourceFile);
}
