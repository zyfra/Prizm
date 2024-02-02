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
        const importDeclaration = context.factory.createImportDeclaration(undefined, undefined, context.factory.createImportClause(false, undefined, context.factory.createNamedImports(importSpecifiers)), context.factory.createStringLiteral(importToAdd));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NvZGUvc3JjL2xpYi90cy9hZGQtaW1wb3J0cy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1REFBaUM7QUFFakM7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxTQUFnQix5QkFBeUIsQ0FDdkMsT0FBaUMsRUFDakMsVUFBeUIsRUFDekIsWUFBc0IsRUFDdEIsV0FBbUIsRUFDbkIsWUFBb0IsRUFDcEIsa0JBQTZCLEVBQzdCLG1CQUE0QjtJQUU1QixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUM5QixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QixJQUFJLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRS9CLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFhLEVBQUUsRUFBRTtRQUN4QyxJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxlQUFlLEdBQUcsWUFBWSxDQUFDO1lBRS9CLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRWpFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RGLElBQUksa0JBQWtCLEVBQUUsTUFBTSxFQUFFO29CQUM5QixNQUFNLG9CQUFvQixHQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWlDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUM1RSxP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IHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG4vKipcbiAqIEFkZCBpbXBvcnQgc3RhdGVtZW50cyB0byBhIFR5cGVTY3JpcHQgc291cmNlIGZpbGUgaWYgdGhlIHRhcmdldCBpbXBvcnQgZG9lcyBub3QgZXhpc3QuXG4gKlxuICogQHBhcmFtIHt0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHR9IGNvbnRleHQgLSBUaGUgdHJhbnNmb3JtYXRpb24gY29udGV4dC5cbiAqIEBwYXJhbSB7dHMuU291cmNlRmlsZX0gc291cmNlRmlsZSAtIFRoZSBzb3VyY2UgZmlsZSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gbmFtZWRJbXBvcnRzIC0gVGhlIG5hbWVkIGltcG9ydHMgdG8gYWRkLlxuICogQHBhcmFtIHtzdHJpbmd9IGltcG9ydFRvQWRkIC0gVGhlIGltcG9ydCBwYXRoIHRvIGFkZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRJbXBvcnQgLSBUaGUgaW1wb3J0IHBhdGggdG8gY2hlY2sgZm9yIGV4aXN0ZW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IFt0YXJnZXROYW1lZEltcG9ydHNdIC0gVGhlIG5hbWVkIGltcG9ydHMgdG8gY2hlY2sgZm9yIGV4aXN0ZW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tbWVudEJlZm9yZUltcG9ydF0gLSBUaGUgb3B0aW9uYWwgY29tbWVudCB0byBhZGQgYmVmb3JlIHRoZSBuZXcgaW1wb3J0LlxuICogQHJldHVybnMge3RzLlNvdXJjZUZpbGV9IC0gVGhlIHRyYW5zZm9ybWVkIHNvdXJjZSBmaWxlIHdpdGggdGhlIG5ldyBpbXBvcnQgYWRkZWQgaWYgbmVlZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpem1Bc3RBZGRJbXBvcnRJZk5lZWRlZChcbiAgY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0LFxuICBzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlLFxuICBuYW1lZEltcG9ydHM6IHN0cmluZ1tdLFxuICBpbXBvcnRUb0FkZDogc3RyaW5nLFxuICB0YXJnZXRJbXBvcnQ6IHN0cmluZyxcbiAgdGFyZ2V0TmFtZWRJbXBvcnRzPzogc3RyaW5nW10sXG4gIGNvbW1lbnRCZWZvcmVJbXBvcnQ/OiBzdHJpbmdcbik6IHRzLlNvdXJjZUZpbGUge1xuICBsZXQgZm91bmRUYXJnZXRJbXBvcnQgPSBmYWxzZTtcbiAgbGV0IGxhc3RJbXBvcnRJbmRleCA9IC0xO1xuICBsZXQgZm91bmRJbXBvcnRUb0FkZEluZGV4ID0gLTE7XG5cbiAgc291cmNlRmlsZS5mb3JFYWNoQ2hpbGQoKG5vZGU6IHRzLk5vZGUpID0+IHtcbiAgICBpZiAodHMuaXNJbXBvcnREZWNsYXJhdGlvbihub2RlKSkge1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gc291cmNlRmlsZS5zdGF0ZW1lbnRzLmluZGV4T2Yobm9kZSk7XG4gICAgICBsYXN0SW1wb3J0SW5kZXggPSBjdXJyZW50SW5kZXg7XG5cbiAgICAgIGNvbnN0IG1vZHVsZVNwZWNpZmllciA9IG5vZGUubW9kdWxlU3BlY2lmaWVyLmdldFRleHQoc291cmNlRmlsZSk7XG5cbiAgICAgIGlmIChtb2R1bGVTcGVjaWZpZXIucmVwbGFjZSgvW1wiJ10rL2csICcnKS5pbmNsdWRlcyh0YXJnZXRJbXBvcnQucmVwbGFjZSgvW1wiJ10rL2csICcnKSkpIHtcbiAgICAgICAgaWYgKHRhcmdldE5hbWVkSW1wb3J0cz8ubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdOYW1lZEltcG9ydHMgPVxuICAgICAgICAgICAgKG5vZGUuaW1wb3J0Q2xhdXNlPy5uYW1lZEJpbmRpbmdzIGFzIHRzLk5hbWVkSW1wb3J0cyk/LmVsZW1lbnRzLm1hcChlbGVtZW50ID0+XG4gICAgICAgICAgICAgIGVsZW1lbnQubmFtZT8uZ2V0VGV4dChzb3VyY2VGaWxlKVxuICAgICAgICAgICAgKSB8fCBbXTtcblxuICAgICAgICAgIGZvdW5kVGFyZ2V0SW1wb3J0ID0gaGFzQWxsVmFsdWVzKGV4aXN0aW5nTmFtZWRJbXBvcnRzLCB0YXJnZXROYW1lZEltcG9ydHMsIHYgPT5cbiAgICAgICAgICAgIHY/LnJlcGxhY2UoL1tcIiddKy9nLCAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvdW5kVGFyZ2V0SW1wb3J0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGZvdW5kVGFyZ2V0SW1wb3J0ICYmXG4gICAgICAgIG1vZHVsZVNwZWNpZmllci5yZXBsYWNlKC9bXCInXSsvZywgJycpLmluY2x1ZGVzKGltcG9ydFRvQWRkLnJlcGxhY2UoL1tcIiddKy9nLCAnJykpXG4gICAgICApIHtcbiAgICAgICAgZm91bmRJbXBvcnRUb0FkZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICBjb25zdCBleGlzdGluZ05hbWVkSW1wb3J0cyA9XG4gICAgICAgICAgKG5vZGUuaW1wb3J0Q2xhdXNlPy5uYW1lZEJpbmRpbmdzIGFzIHRzLk5hbWVkSW1wb3J0cyk/LmVsZW1lbnRzLm1hcChlbGVtZW50ID0+XG4gICAgICAgICAgICBlbGVtZW50Lm5hbWU/LmdldFRleHQoc291cmNlRmlsZSlcbiAgICAgICAgICApIHx8IFtdO1xuXG4gICAgICAgIC8vIEFkZCBtaXNzaW5nIG5hbWVkSW1wb3J0cyB0byB0aGUgZXhpc3RpbmcgaW1wb3J0VG9BZGRcbiAgICAgICAgY29uc3QgdXBkYXRlZE5hbWVkSW1wb3J0cyA9IEFycmF5LmZyb20obmV3IFNldChbLi4uZXhpc3RpbmdOYW1lZEltcG9ydHMsIC4uLm5hbWVkSW1wb3J0c10pKTtcblxuICAgICAgICBpZiAodXBkYXRlZE5hbWVkSW1wb3J0cy5sZW5ndGggPiBleGlzdGluZ05hbWVkSW1wb3J0cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBhZGRlZEltcG9ydHMgPSB1cGRhdGVkTmFtZWRJbXBvcnRzLmZpbHRlcihuYW1lID0+ICFleGlzdGluZ05hbWVkSW1wb3J0cy5pbmNsdWRlcyhuYW1lKSk7XG4gICAgICAgICAgY29uc3QgaW1wb3J0U3BlY2lmaWVycyA9IHVwZGF0ZWROYW1lZEltcG9ydHMubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWVyID0gY3JlYXRlSW1wb3J0U3BlY2lmaWVyV2l0aEZpeEJyZWFraW5nQ2hhbmdlcyhjb250ZXh0LCBuYW1lKTtcblxuICAgICAgICAgICAgaWYgKGFkZGVkSW1wb3J0cy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICB0cy5hZGRTeW50aGV0aWNMZWFkaW5nQ29tbWVudChcbiAgICAgICAgICAgICAgICBzcGVjaWZpZXIsXG4gICAgICAgICAgICAgICAgdHMuU3ludGF4S2luZC5NdWx0aUxpbmVDb21tZW50VHJpdmlhLFxuICAgICAgICAgICAgICAgIGNvbW1lbnRCZWZvcmVJbXBvcnQgPz8gJ25ldyBpbXBvcnQnLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzcGVjaWZpZXI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZEltcG9ydERlY2xhcmF0aW9uID0gY29udGV4dC5mYWN0b3J5LnVwZGF0ZUltcG9ydERlY2xhcmF0aW9uKFxuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnRleHQuZmFjdG9yeS51cGRhdGVJbXBvcnRDbGF1c2UoXG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBub2RlLmltcG9ydENsYXVzZSxcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIG5vZGUuaW1wb3J0Q2xhdXNlLmlzVHlwZU9ubHksXG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgY29udGV4dC5mYWN0b3J5LmNyZWF0ZU5hbWVkSW1wb3J0cyhpbXBvcnRTcGVjaWZpZXJzKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG5vZGUubW9kdWxlU3BlY2lmaWVyXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHNvdXJjZUZpbGUgPSBjb250ZXh0LmZhY3RvcnkudXBkYXRlU291cmNlRmlsZShcbiAgICAgICAgICAgIHNvdXJjZUZpbGUsXG4gICAgICAgICAgICBzb3VyY2VGaWxlLnN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gZm91bmRJbXBvcnRUb0FkZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRJbXBvcnREZWNsYXJhdGlvbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKGZvdW5kVGFyZ2V0SW1wb3J0ICYmIGZvdW5kSW1wb3J0VG9BZGRJbmRleCA9PT0gLTEpIHtcbiAgICBjb25zdCBpbXBvcnRTcGVjaWZpZXJzID0gbmFtZWRJbXBvcnRzLm1hcChuYW1lID0+XG4gICAgICBjcmVhdGVJbXBvcnRTcGVjaWZpZXJXaXRoRml4QnJlYWtpbmdDaGFuZ2VzKGNvbnRleHQsIG5hbWUpXG4gICAgKTtcbiAgICBjb25zdCBpbXBvcnREZWNsYXJhdGlvbiA9IGNvbnRleHQuZmFjdG9yeS5jcmVhdGVJbXBvcnREZWNsYXJhdGlvbihcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIGNvbnRleHQuZmFjdG9yeS5jcmVhdGVJbXBvcnRDbGF1c2UoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIGNvbnRleHQuZmFjdG9yeS5jcmVhdGVOYW1lZEltcG9ydHMoaW1wb3J0U3BlY2lmaWVycylcbiAgICAgICksXG4gICAgICBjb250ZXh0LmZhY3RvcnkuY3JlYXRlU3RyaW5nTGl0ZXJhbChpbXBvcnRUb0FkZClcbiAgICApO1xuXG4gICAgaWYgKGNvbW1lbnRCZWZvcmVJbXBvcnQpIHtcbiAgICAgIGNvbnN0IGNvbW1lbnRSYW5nZTogdHMuQ29tbWVudFJhbmdlID0ge1xuICAgICAgICBwb3M6IC0xLFxuICAgICAgICBlbmQ6IC0xLFxuICAgICAgICBraW5kOiB0cy5TeW50YXhLaW5kLlNpbmdsZUxpbmVDb21tZW50VHJpdmlhLFxuICAgICAgICBoYXNUcmFpbGluZ05ld0xpbmU6IHRydWUsXG4gICAgICB9O1xuICAgICAgdHMuYWRkU3ludGhldGljTGVhZGluZ0NvbW1lbnQoXG4gICAgICAgIGltcG9ydERlY2xhcmF0aW9uLFxuICAgICAgICBjb21tZW50UmFuZ2Uua2luZCxcbiAgICAgICAgYCAke2NvbW1lbnRCZWZvcmVJbXBvcnR9YCxcbiAgICAgICAgY29tbWVudFJhbmdlLmhhc1RyYWlsaW5nTmV3TGluZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkU3RhdGVtZW50cyA9IFtcbiAgICAgIC4uLnNvdXJjZUZpbGUuc3RhdGVtZW50cy5zbGljZSgwLCBsYXN0SW1wb3J0SW5kZXggKyAxKSxcbiAgICAgIGltcG9ydERlY2xhcmF0aW9uLFxuICAgICAgLi4uc291cmNlRmlsZS5zdGF0ZW1lbnRzLnNsaWNlKGxhc3RJbXBvcnRJbmRleCArIDEpLFxuICAgIF0gYXMgYW55O1xuICAgIHJldHVybiBjb250ZXh0LmZhY3RvcnkudXBkYXRlU291cmNlRmlsZShzb3VyY2VGaWxlLCB1cGRhdGVkU3RhdGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gc291cmNlRmlsZTtcbn1cblxuZnVuY3Rpb24gaGFzQWxsVmFsdWVzKHNvdXJjZUFycjogYW55W10sIGFyclRvQ2hlY2s6IGFueVtdLCB0cmFuc2Zvcm1GdW5jPzogKHZhbHVlOiBhbnkpID0+IGFueSk6IGJvb2xlYW4ge1xuICBpZiAodHJhbnNmb3JtRnVuYykge1xuICAgIHNvdXJjZUFyciA9IHNvdXJjZUFyci5tYXAodHJhbnNmb3JtRnVuYyk7XG4gICAgYXJyVG9DaGVjayA9IGFyclRvQ2hlY2subWFwKHRyYW5zZm9ybUZ1bmMpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJUb0NoZWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzb3VyY2VBcnIuaW5jbHVkZXMoYXJyVG9DaGVja1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltcG9ydFNwZWNpZmllcldpdGhGaXhCcmVha2luZ0NoYW5nZXMoY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0LCBuYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgdmVyc2lvbiA9IHBhcnNlRmxvYXQodHMudmVyc2lvbk1ham9yTWlub3IpO1xuICBpZiAodmVyc2lvbiA8IDQuNSlcbiAgICAvLyBGSVggRk9SIEJDIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC93aWtpL0FQSS1CcmVha2luZy1DaGFuZ2VzI3R5cGVzY3JpcHQtNDVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBjb250ZXh0LmZhY3RvcnkuY3JlYXRlSW1wb3J0U3BlY2lmaWVyKHVuZGVmaW5lZCwgY29udGV4dC5mYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIobmFtZSkpO1xuICAvLyBGSVggRk9SIEJDIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC93aWtpL0FQSS1CcmVha2luZy1DaGFuZ2VzI3R5cGVzY3JpcHQtNDVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIGVsc2UgcmV0dXJuIGNvbnRleHQuZmFjdG9yeS5jcmVhdGVJbXBvcnRTcGVjaWZpZXIoZmFsc2UsIHVuZGVmaW5lZCwgY29udGV4dC5mYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIobmFtZSkpO1xufVxuIl19