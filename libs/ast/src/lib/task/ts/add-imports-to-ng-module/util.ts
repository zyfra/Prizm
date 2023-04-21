import * as ts from 'typescript';

/**
 * Adds a new import to the NgModule's imports array if a specific module is found.
 *
 * @param context - The transformation context.
 * @param sourceFile - The source file containing the NgModule.
 * @param newModule - The name of the new module to be added.
 * @param comment - The comment to be added before the new module.
 * @param moduleToFind - The name of the module that should be found in the NgModule for the new module to be added.
 * @returns The updated source file with the new module added if the specified module is found.
 */
export function prizmAstAddImportToNgModule(
  context: ts.TransformationContext,
  sourceFile: ts.SourceFile,
  newModule: string,
  comment: string,
  moduleToFind: string
): ts.SourceFile {
  // Variable to store the imports array from the NgModule
  let importsArray: ts.ArrayLiteralExpression | undefined;
  // Flag to indicate if the specified module is found in the NgModule
  let moduleFound = false;

  /**
   * Recursively finds the imports array in the NgModule.
   * Sets the importsArray and moduleFound variables when found.
   *
   * @param node - The current node in the Abstract Syntax Tree (AST).
   */
  const findImportsArray = (node: ts.Node): any => {
    // Check if the current node is a NgModule decorator
    if (
      ts.isDecorator(node) &&
      ts.isCallExpression(node.expression) &&
      ts.isIdentifier(node.expression.expression) &&
      // TODO later set it by passing new parameter
      node.expression.expression.text === 'NgModule'
    ) {
      // Extract the first argument of the NgModule decorator
      const arg = node.expression.arguments[0];

      // Check if the argument is an object literal expression
      if (ts.isObjectLiteralExpression(arg)) {
        // Iterate through the properties of the object literal expression
        arg.properties.forEach(property => {
          // Check if the property is an imports property assignment
          if (
            ts.isPropertyAssignment(property) &&
            ts.isIdentifier(property.name) &&
            property.name.text === 'imports'
          ) {
            // Check if the property's initializer is an array literal expression
            if (ts.isArrayLiteralExpression(property.initializer)) {
              // Set importsArray to the found array literal expression
              importsArray = property.initializer;
              // Check if the moduleToFind is present in the imports array
              moduleFound = importsArray.elements.some(
                element => ts.isIdentifier(element) && element.text === moduleToFind
              );
            }
          }
        });
      }
    } else {
      // Continue searching for the imports array in the child nodes
      ts.forEachChild(node, findImportsArray);
    }
  };

  // Start searching for the imports array in the source file
  findImportsArray(sourceFile);

  // If the imports array and the specified module are found, add the new module.
  if (importsArray && moduleFound) {
    // Create a new identifier for the new module
    const newModuleNode = ts.createIdentifier(newModule);
    // Add a comment to the new module identifier
    const newModuleWithComment = ts.addSyntheticLeadingComment(
      newModuleNode,
      ts.SyntaxKind.SingleLineCommentTrivia,
      comment,
      true
    );

    // Create a new imports array with the new module added
    const newImportsArray = context.factory.updateArrayLiteralExpression(importsArray, [
      ...importsArray.elements,
      newModuleWithComment,
    ]);

    // Visitor function to replace the old imports array with the new imports array
    const visitor: ts.Visitor = (node: ts.Node): ts.Node => {
      // Check if the current node is the old imports array
      if (node === importsArray) {
        // Replace the old imports array with the new imports array
        return newImportsArray;
      }
      // Continue visiting child nodes with the visitor function
      return ts.visitEachChild(node, visitor, context);
    };

    // Visit the source file with the visitor function to update the imports array
    const updatedSourceFile = ts.visitNode(sourceFile, visitor);
    // Return the updated source file with the new module added if the specified module is found
    return updatedSourceFile;
  }

  // If the imports array or the specified module are not found, return the original source file unchanged
  return sourceFile;
}
