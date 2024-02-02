"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstAddImportIfNeeded = void 0;
const tslib_1 = require("tslib");
const ts = tslib_1.__importStar(require("typescript"));
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
function prizmAstAddImportIfNeeded(context, sourceFile, namedImports, importToAdd, targetImport, targetNamedImports, commentBeforeImport) {
    let foundTargetImport = false;
    let lastImportIndex = -1;
    let foundImportToAddIndex = -1;
    sourceFile.forEachChild((node) => {
        if (ts.isImportDeclaration(node)) {
            const currentIndex = sourceFile.statements.indexOf(node);
            lastImportIndex = currentIndex;
            const moduleSpecifier = node.moduleSpecifier.getText(sourceFile);
            if (moduleSpecifier.replace(/["']+/g, '').includes(targetImport.replace(/["']+/g, ''))) {
                if (targetNamedImports?.length) {
                    const existingNamedImports = node.importClause?.namedBindings?.elements.map(element => element.name?.getText(sourceFile)) || [];
                    foundTargetImport = hasAllValues(existingNamedImports, targetNamedImports, v => v?.replace(/["']+/g, ''));
                }
                else {
                    foundTargetImport = true;
                }
            }
            if (foundTargetImport &&
                moduleSpecifier.replace(/["']+/g, '').includes(importToAdd.replace(/["']+/g, ''))) {
                foundImportToAddIndex = currentIndex;
                const existingNamedImports = node.importClause?.namedBindings?.elements.map(element => element.name?.getText(sourceFile)) || [];
                // Add missing namedImports to the existing importToAdd
                const updatedNamedImports = Array.from(new Set([...existingNamedImports, ...namedImports]));
                if (updatedNamedImports.length > existingNamedImports.length) {
                    const addedImports = updatedNamedImports.filter(name => !existingNamedImports.includes(name));
                    const importSpecifiers = updatedNamedImports.map(name => {
                        const specifier = createImportSpecifierWithFixBreakingChanges(context, name);
                        if (addedImports.includes(name)) {
                            ts.addSyntheticLeadingComment(specifier, ts.SyntaxKind.MultiLineCommentTrivia, commentBeforeImport ?? 'new import', true);
                        }
                        return specifier;
                    });
                    const updatedImportDeclaration = context.factory.updateImportDeclaration(node, undefined, undefined, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    context.factory.updateImportClause(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    node.importClause, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    node.importClause.isTypeOnly, undefined, context.factory.createNamedImports(importSpecifiers)), node.moduleSpecifier);
                    sourceFile = context.factory.updateSourceFile(sourceFile, sourceFile.statements.map((statement, index) => {
                        if (index === foundImportToAddIndex) {
                            return updatedImportDeclaration;
                        }
                        return statement;
                    }));
                }
            }
        }
    });
    if (foundTargetImport && foundImportToAddIndex === -1) {
        const importSpecifiers = namedImports.map(name => createImportSpecifierWithFixBreakingChanges(context, name));
        const importDeclaration = context.factory.createImportDeclaration(undefined, context.factory.createImportClause(false, undefined, context.factory.createNamedImports(importSpecifiers)), context.factory.createStringLiteral(importToAdd));
        if (commentBeforeImport) {
            const commentRange = {
                pos: -1,
                end: -1,
                kind: ts.SyntaxKind.SingleLineCommentTrivia,
                hasTrailingNewLine: true,
            };
            ts.addSyntheticLeadingComment(importDeclaration, commentRange.kind, ` ${commentBeforeImport}`, commentRange.hasTrailingNewLine);
        }
        const updatedStatements = [
            ...sourceFile.statements.slice(0, lastImportIndex + 1),
            importDeclaration,
            ...sourceFile.statements.slice(lastImportIndex + 1),
        ];
        return context.factory.updateSourceFile(sourceFile, updatedStatements);
    }
    return sourceFile;
}
exports.prizmAstAddImportIfNeeded = prizmAstAddImportIfNeeded;
function hasAllValues(sourceArr, arrToCheck, transformFunc) {
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
function createImportSpecifierWithFixBreakingChanges(context, name) {
    const version = parseFloat(ts.versionMajorMinor);
    if (version < 4.5)
        // FIX FOR BC https://github.com/microsoft/TypeScript/wiki/API-Breaking-Changes#typescript-45
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return context.factory.createImportSpecifier(undefined, context.factory.createIdentifier(name));
    // FIX FOR BC https://github.com/microsoft/TypeScript/wiki/API-Breaking-Changes#typescript-45
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    else
        return context.factory.createImportSpecifier(false, undefined, context.factory.createIdentifier(name));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NvZGUvc3JjL2xpYi90cy9hZGQtaW1wb3J0cy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1REFBaUM7QUFFakM7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxTQUFnQix5QkFBeUIsQ0FDdkMsT0FBaUMsRUFDakMsVUFBeUIsRUFDekIsWUFBc0IsRUFDdEIsV0FBbUIsRUFDbkIsWUFBb0IsRUFDcEIsa0JBQTZCLEVBQzdCLG1CQUE0QjtJQUU1QixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUM5QixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QixJQUFJLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRS9CLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFhLEVBQUUsRUFBRTtRQUN4QyxJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxlQUFlLEdBQUcsWUFBWSxDQUFDO1lBRS9CLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRWpFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RGLElBQUksa0JBQWtCLEVBQUUsTUFBTSxFQUFFO29CQUM5QixNQUFNLG9CQUFvQixHQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWlDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUM1RSxP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dHlwZXNjcmlwdCc7XG5cbi8qKlxuICogQWRkIGltcG9ydCBzdGF0ZW1lbnRzIHRvIGEgVHlwZVNjcmlwdCBzb3VyY2UgZmlsZSBpZiB0aGUgdGFyZ2V0IGltcG9ydCBkb2VzIG5vdCBleGlzdC5cbiAqXG4gKiBAcGFyYW0ge3RzLlRyYW5zZm9ybWF0aW9uQ29udGV4dH0gY29udGV4dCAtIFRoZSB0cmFuc2Zvcm1hdGlvbiBjb250ZXh0LlxuICogQHBhcmFtIHt0cy5Tb3VyY2VGaWxlfSBzb3VyY2VGaWxlIC0gVGhlIHNvdXJjZSBmaWxlIHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBuYW1lZEltcG9ydHMgLSBUaGUgbmFtZWQgaW1wb3J0cyB0byBhZGQuXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1wb3J0VG9BZGQgLSBUaGUgaW1wb3J0IHBhdGggdG8gYWRkLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldEltcG9ydCAtIFRoZSBpbXBvcnQgcGF0aCB0byBjaGVjayBmb3IgZXhpc3RlbmNlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW3RhcmdldE5hbWVkSW1wb3J0c10gLSBUaGUgbmFtZWQgaW1wb3J0cyB0byBjaGVjayBmb3IgZXhpc3RlbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21tZW50QmVmb3JlSW1wb3J0XSAtIFRoZSBvcHRpb25hbCBjb21tZW50IHRvIGFkZCBiZWZvcmUgdGhlIG5ldyBpbXBvcnQuXG4gKiBAcmV0dXJucyB7dHMuU291cmNlRmlsZX0gLSBUaGUgdHJhbnNmb3JtZWQgc291cmNlIGZpbGUgd2l0aCB0aGUgbmV3IGltcG9ydCBhZGRlZCBpZiBuZWVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUFzdEFkZEltcG9ydElmTmVlZGVkKFxuICBjb250ZXh0OiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQsXG4gIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsXG4gIG5hbWVkSW1wb3J0czogc3RyaW5nW10sXG4gIGltcG9ydFRvQWRkOiBzdHJpbmcsXG4gIHRhcmdldEltcG9ydDogc3RyaW5nLFxuICB0YXJnZXROYW1lZEltcG9ydHM/OiBzdHJpbmdbXSxcbiAgY29tbWVudEJlZm9yZUltcG9ydD86IHN0cmluZ1xuKTogdHMuU291cmNlRmlsZSB7XG4gIGxldCBmb3VuZFRhcmdldEltcG9ydCA9IGZhbHNlO1xuICBsZXQgbGFzdEltcG9ydEluZGV4ID0gLTE7XG4gIGxldCBmb3VuZEltcG9ydFRvQWRkSW5kZXggPSAtMTtcblxuICBzb3VyY2VGaWxlLmZvckVhY2hDaGlsZCgobm9kZTogdHMuTm9kZSkgPT4ge1xuICAgIGlmICh0cy5pc0ltcG9ydERlY2xhcmF0aW9uKG5vZGUpKSB7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3VyY2VGaWxlLnN0YXRlbWVudHMuaW5kZXhPZihub2RlKTtcbiAgICAgIGxhc3RJbXBvcnRJbmRleCA9IGN1cnJlbnRJbmRleDtcblxuICAgICAgY29uc3QgbW9kdWxlU3BlY2lmaWVyID0gbm9kZS5tb2R1bGVTcGVjaWZpZXIuZ2V0VGV4dChzb3VyY2VGaWxlKTtcblxuICAgICAgaWYgKG1vZHVsZVNwZWNpZmllci5yZXBsYWNlKC9bXCInXSsvZywgJycpLmluY2x1ZGVzKHRhcmdldEltcG9ydC5yZXBsYWNlKC9bXCInXSsvZywgJycpKSkge1xuICAgICAgICBpZiAodGFyZ2V0TmFtZWRJbXBvcnRzPy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ05hbWVkSW1wb3J0cyA9XG4gICAgICAgICAgICAobm9kZS5pbXBvcnRDbGF1c2U/Lm5hbWVkQmluZGluZ3MgYXMgdHMuTmFtZWRJbXBvcnRzKT8uZWxlbWVudHMubWFwKGVsZW1lbnQgPT5cbiAgICAgICAgICAgICAgZWxlbWVudC5uYW1lPy5nZXRUZXh0KHNvdXJjZUZpbGUpXG4gICAgICAgICAgICApIHx8IFtdO1xuXG4gICAgICAgICAgZm91bmRUYXJnZXRJbXBvcnQgPSBoYXNBbGxWYWx1ZXMoZXhpc3RpbmdOYW1lZEltcG9ydHMsIHRhcmdldE5hbWVkSW1wb3J0cywgdiA9PlxuICAgICAgICAgICAgdj8ucmVwbGFjZSgvW1wiJ10rL2csICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm91bmRUYXJnZXRJbXBvcnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZm91bmRUYXJnZXRJbXBvcnQgJiZcbiAgICAgICAgbW9kdWxlU3BlY2lmaWVyLnJlcGxhY2UoL1tcIiddKy9nLCAnJykuaW5jbHVkZXMoaW1wb3J0VG9BZGQucmVwbGFjZSgvW1wiJ10rL2csICcnKSlcbiAgICAgICkge1xuICAgICAgICBmb3VuZEltcG9ydFRvQWRkSW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTmFtZWRJbXBvcnRzID1cbiAgICAgICAgICAobm9kZS5pbXBvcnRDbGF1c2U/Lm5hbWVkQmluZGluZ3MgYXMgdHMuTmFtZWRJbXBvcnRzKT8uZWxlbWVudHMubWFwKGVsZW1lbnQgPT5cbiAgICAgICAgICAgIGVsZW1lbnQubmFtZT8uZ2V0VGV4dChzb3VyY2VGaWxlKVxuICAgICAgICAgICkgfHwgW107XG5cbiAgICAgICAgLy8gQWRkIG1pc3NpbmcgbmFtZWRJbXBvcnRzIHRvIHRoZSBleGlzdGluZyBpbXBvcnRUb0FkZFxuICAgICAgICBjb25zdCB1cGRhdGVkTmFtZWRJbXBvcnRzID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi5leGlzdGluZ05hbWVkSW1wb3J0cywgLi4ubmFtZWRJbXBvcnRzXSkpO1xuXG4gICAgICAgIGlmICh1cGRhdGVkTmFtZWRJbXBvcnRzLmxlbmd0aCA+IGV4aXN0aW5nTmFtZWRJbXBvcnRzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFkZGVkSW1wb3J0cyA9IHVwZGF0ZWROYW1lZEltcG9ydHMuZmlsdGVyKG5hbWUgPT4gIWV4aXN0aW5nTmFtZWRJbXBvcnRzLmluY2x1ZGVzKG5hbWUpKTtcbiAgICAgICAgICBjb25zdCBpbXBvcnRTcGVjaWZpZXJzID0gdXBkYXRlZE5hbWVkSW1wb3J0cy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGVjaWZpZXIgPSBjcmVhdGVJbXBvcnRTcGVjaWZpZXJXaXRoRml4QnJlYWtpbmdDaGFuZ2VzKGNvbnRleHQsIG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYWRkZWRJbXBvcnRzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgIHRzLmFkZFN5bnRoZXRpY0xlYWRpbmdDb21tZW50KFxuICAgICAgICAgICAgICAgIHNwZWNpZmllcixcbiAgICAgICAgICAgICAgICB0cy5TeW50YXhLaW5kLk11bHRpTGluZUNvbW1lbnRUcml2aWEsXG4gICAgICAgICAgICAgICAgY29tbWVudEJlZm9yZUltcG9ydCA/PyAnbmV3IGltcG9ydCcsXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNwZWNpZmllcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkSW1wb3J0RGVjbGFyYXRpb24gPSBjb250ZXh0LmZhY3RvcnkudXBkYXRlSW1wb3J0RGVjbGFyYXRpb24oXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29udGV4dC5mYWN0b3J5LnVwZGF0ZUltcG9ydENsYXVzZShcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIG5vZGUuaW1wb3J0Q2xhdXNlLFxuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbm9kZS5pbXBvcnRDbGF1c2UuaXNUeXBlT25seSxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBjb250ZXh0LmZhY3RvcnkuY3JlYXRlTmFtZWRJbXBvcnRzKGltcG9ydFNwZWNpZmllcnMpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbm9kZS5tb2R1bGVTcGVjaWZpZXJcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgc291cmNlRmlsZSA9IGNvbnRleHQuZmFjdG9yeS51cGRhdGVTb3VyY2VGaWxlKFxuICAgICAgICAgICAgc291cmNlRmlsZSxcbiAgICAgICAgICAgIHNvdXJjZUZpbGUuc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBmb3VuZEltcG9ydFRvQWRkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlZEltcG9ydERlY2xhcmF0aW9uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoZm91bmRUYXJnZXRJbXBvcnQgJiYgZm91bmRJbXBvcnRUb0FkZEluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IGltcG9ydFNwZWNpZmllcnMgPSBuYW1lZEltcG9ydHMubWFwKG5hbWUgPT5cbiAgICAgIGNyZWF0ZUltcG9ydFNwZWNpZmllcldpdGhGaXhCcmVha2luZ0NoYW5nZXMoY29udGV4dCwgbmFtZSlcbiAgICApO1xuICAgIGNvbnN0IGltcG9ydERlY2xhcmF0aW9uID0gY29udGV4dC5mYWN0b3J5LmNyZWF0ZUltcG9ydERlY2xhcmF0aW9uKFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgY29udGV4dC5mYWN0b3J5LmNyZWF0ZUltcG9ydENsYXVzZShcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgY29udGV4dC5mYWN0b3J5LmNyZWF0ZU5hbWVkSW1wb3J0cyhpbXBvcnRTcGVjaWZpZXJzKVxuICAgICAgKSxcbiAgICAgIGNvbnRleHQuZmFjdG9yeS5jcmVhdGVTdHJpbmdMaXRlcmFsKGltcG9ydFRvQWRkKVxuICAgICk7XG5cbiAgICBpZiAoY29tbWVudEJlZm9yZUltcG9ydCkge1xuICAgICAgY29uc3QgY29tbWVudFJhbmdlOiB0cy5Db21tZW50UmFuZ2UgPSB7XG4gICAgICAgIHBvczogLTEsXG4gICAgICAgIGVuZDogLTEsXG4gICAgICAgIGtpbmQ6IHRzLlN5bnRheEtpbmQuU2luZ2xlTGluZUNvbW1lbnRUcml2aWEsXG4gICAgICAgIGhhc1RyYWlsaW5nTmV3TGluZTogdHJ1ZSxcbiAgICAgIH07XG4gICAgICB0cy5hZGRTeW50aGV0aWNMZWFkaW5nQ29tbWVudChcbiAgICAgICAgaW1wb3J0RGVjbGFyYXRpb24sXG4gICAgICAgIGNvbW1lbnRSYW5nZS5raW5kLFxuICAgICAgICBgICR7Y29tbWVudEJlZm9yZUltcG9ydH1gLFxuICAgICAgICBjb21tZW50UmFuZ2UuaGFzVHJhaWxpbmdOZXdMaW5lXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZW1lbnRzID0gW1xuICAgICAgLi4uc291cmNlRmlsZS5zdGF0ZW1lbnRzLnNsaWNlKDAsIGxhc3RJbXBvcnRJbmRleCArIDEpLFxuICAgICAgaW1wb3J0RGVjbGFyYXRpb24sXG4gICAgICAuLi5zb3VyY2VGaWxlLnN0YXRlbWVudHMuc2xpY2UobGFzdEltcG9ydEluZGV4ICsgMSksXG4gICAgXSBhcyBhbnk7XG4gICAgcmV0dXJuIGNvbnRleHQuZmFjdG9yeS51cGRhdGVTb3VyY2VGaWxlKHNvdXJjZUZpbGUsIHVwZGF0ZWRTdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VGaWxlO1xufVxuXG5mdW5jdGlvbiBoYXNBbGxWYWx1ZXMoc291cmNlQXJyOiBhbnlbXSwgYXJyVG9DaGVjazogYW55W10sIHRyYW5zZm9ybUZ1bmM/OiAodmFsdWU6IGFueSkgPT4gYW55KTogYm9vbGVhbiB7XG4gIGlmICh0cmFuc2Zvcm1GdW5jKSB7XG4gICAgc291cmNlQXJyID0gc291cmNlQXJyLm1hcCh0cmFuc2Zvcm1GdW5jKTtcbiAgICBhcnJUb0NoZWNrID0gYXJyVG9DaGVjay5tYXAodHJhbnNmb3JtRnVuYyk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyclRvQ2hlY2subGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNvdXJjZUFyci5pbmNsdWRlcyhhcnJUb0NoZWNrW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1wb3J0U3BlY2lmaWVyV2l0aEZpeEJyZWFraW5nQ2hhbmdlcyhjb250ZXh0OiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQsIG5hbWU6IHN0cmluZykge1xuICBjb25zdCB2ZXJzaW9uID0gcGFyc2VGbG9hdCh0cy52ZXJzaW9uTWFqb3JNaW5vcik7XG4gIGlmICh2ZXJzaW9uIDwgNC41KVxuICAgIC8vIEZJWCBGT1IgQkMgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L3dpa2kvQVBJLUJyZWFraW5nLUNoYW5nZXMjdHlwZXNjcmlwdC00NVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGNvbnRleHQuZmFjdG9yeS5jcmVhdGVJbXBvcnRTcGVjaWZpZXIodW5kZWZpbmVkLCBjb250ZXh0LmZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcihuYW1lKSk7XG4gIC8vIEZJWCBGT1IgQkMgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L3dpa2kvQVBJLUJyZWFraW5nLUNoYW5nZXMjdHlwZXNjcmlwdC00NVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1pZ25vcmVcbiAgZWxzZSByZXR1cm4gY29udGV4dC5mYWN0b3J5LmNyZWF0ZUltcG9ydFNwZWNpZmllcihmYWxzZSwgdW5kZWZpbmVkLCBjb250ZXh0LmZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcihuYW1lKSk7XG59XG4iXX0=