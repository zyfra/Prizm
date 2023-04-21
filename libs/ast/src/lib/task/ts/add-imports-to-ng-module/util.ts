// import * as ts from 'typescript';
//
// /**
//  * Добавляет новый модуль в массив 'imports' в объекте NgModule.
//  * @param code - код TypeScript модуля NgModule
//  * @param newModule - новый модуль, который нужно добавить в массив 'imports'
//  * @param comment - комментарий, который нужно добавить к новому модулю
//  * @returns новый код TypeScript модуля NgModule с добавленным модулем
//  */
// export function prizmAstAddImportToNgModule(
//   code: string,
//   // sourceFile: ts.SourceFile,
//   newModule: string,
//   comment: string
// ): string {
//   const sourceFile = ts.createSourceFile('module.ts', code, ts.ScriptTarget.Latest, true);
//
//   let importsArray: ts.ArrayLiteralExpression | undefined;
//
//   const findImportsArray = (node: ts.Node): any => {
//     if (ts.isDecorator(node) && ts.isCallExpression(node.expression) && ts.isIdentifier(node.expression.expression) && node.expression.expression.text === 'NgModule') {
//       const arg = node.expression.arguments[0];
//       if (ts.isObjectLiteralExpression(arg)) {
//         arg.properties.forEach(property => {
//           if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.name) && property.name.text === 'imports') {
//             if (ts.isArrayLiteralExpression(property.initializer)) {
//               importsArray = property.initializer;
//             }
//           }
//         });
//       }
//     } else {
//       ts.forEachChild(node, findImportsArray);
//     }
//   };
//
//   findImportsArray(sourceFile);
//
//   if (importsArray) {
//     const newModuleNode = ts.createIdentifier(newModule);
//     const newModuleWithComment = ts.addSyntheticLeadingComment(newModuleNode, ts.SyntaxKind.SingleLineCommentTrivia, comment, true);
//
//     // TODO: DeprecationWarning: 'updateArrayLiteralExpression' has been deprecated since v4.0.0. Use the appropriate method on 'ts.factory' or the 'factory' supplied by your transformation context instead.
//     const newImportsArray = ts.updateArrayLiteral(importsArray, [
//       ...importsArray.elements,
//       newModuleWithComment,
//     ]);
//
//     const printer = ts.createPrinter();
//     const newCode = printer.printNode(ts.EmitHint.Unspecified, newImportsArray, sourceFile);
//
//     return code.replace(importsArray.getText(sourceFile), newCode);
//   }
//
//   return code;
// }
import * as ts from 'typescript';

export function prizmAstAddImportToNgModule(
  context: ts.TransformationContext,
  sourceFile: ts.SourceFile,
  newModule: string,
  comment: string
): ts.SourceFile {
  let importsArray: ts.ArrayLiteralExpression | undefined;

  const findImportsArray = (node: ts.Node): any => {
    if (
      ts.isDecorator(node) &&
      ts.isCallExpression(node.expression) &&
      ts.isIdentifier(node.expression.expression) &&
      node.expression.expression.text === 'NgModule'
    ) {
      const arg = node.expression.arguments[0];
      if (ts.isObjectLiteralExpression(arg)) {
        arg.properties.forEach(property => {
          if (
            ts.isPropertyAssignment(property) &&
            ts.isIdentifier(property.name) &&
            property.name.text === 'imports'
          ) {
            if (ts.isArrayLiteralExpression(property.initializer)) {
              importsArray = property.initializer;
            }
          }
        });
      }
    } else {
      ts.forEachChild(node, findImportsArray);
    }
  };

  findImportsArray(sourceFile);

  if (importsArray) {
    const newModuleNode = ts.createIdentifier(newModule);
    const newModuleWithComment = ts.addSyntheticLeadingComment(
      newModuleNode,
      ts.SyntaxKind.SingleLineCommentTrivia,
      comment,
      true
    );

    const newImportsArray = context.factory.updateArrayLiteralExpression(importsArray, [
      ...importsArray.elements,
      newModuleWithComment,
    ]);

    const visitor: ts.Visitor = (node: ts.Node): ts.Node => {
      if (node === importsArray) {
        return newImportsArray;
      }
      return ts.visitEachChild(node, visitor, context);
    };

    const updatedSourceFile = ts.visitNode(sourceFile, visitor);
    return updatedSourceFile;
  }

  return sourceFile;
}
