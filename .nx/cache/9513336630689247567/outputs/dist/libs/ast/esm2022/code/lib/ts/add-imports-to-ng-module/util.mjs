"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstAddImportToNgModule = void 0;
const tslib_1 = require("tslib");
const ts = tslib_1.__importStar(require("typescript"));
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
function prizmAstAddImportToNgModule(context, sourceFile, newModule, comment, moduleToFind) {
    let importsArray;
    let moduleFound = false;
    const findImportsArray = (node) => {
        if (ts.isDecorator(node) &&
            ts.isCallExpression(node.expression) &&
            ts.isIdentifier(node.expression.expression) &&
            node.expression.expression.text === 'NgModule') {
            const arg = node.expression.arguments[0];
            if (ts.isObjectLiteralExpression(arg)) {
                arg.properties.forEach(property => {
                    if (ts.isPropertyAssignment(property) &&
                        ts.isIdentifier(property.name) &&
                        property.name.text === 'imports') {
                        if (ts.isArrayLiteralExpression(property.initializer)) {
                            importsArray = property.initializer;
                            moduleFound = importsArray.elements.some(element => ts.isIdentifier(element) && element.text === moduleToFind);
                        }
                    }
                });
            }
        }
        else {
            ts.forEachChild(node, findImportsArray);
        }
    };
    findImportsArray(sourceFile);
    if (importsArray && moduleFound) {
        const newModuleAlreadyExists = importsArray.elements.some(element => {
            return ts.isIdentifier(element) && element.text === newModule;
        });
        if (!newModuleAlreadyExists) {
            // const newModuleNode = ts.createIdentifier(newModule);
            const newModuleNode = ts.factory.createIdentifier(newModule);
            const newModuleWithComment = ts.addSyntheticLeadingComment(newModuleNode, ts.SyntaxKind.SingleLineCommentTrivia, comment, true);
            const newImportsArray = context.factory.updateArrayLiteralExpression(importsArray, [
                ...importsArray.elements,
                newModuleWithComment,
            ]);
            const visitor = (node) => {
                if (node === importsArray) {
                    return newImportsArray;
                }
                return ts.visitEachChild(node, visitor, context);
            };
            const updatedSourceFile = ts.visitNode(sourceFile, visitor).getSourceFile();
            return updatedSourceFile;
        }
    }
    return sourceFile;
}
exports.prizmAstAddImportToNgModule = prizmAstAddImportToNgModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NvZGUvc3JjL2xpYi90cy9hZGQtaW1wb3J0cy10by1uZy1tb2R1bGUvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsdURBQWlDO0FBRWpDOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLDJCQUEyQixDQUN6QyxPQUFpQyxFQUNqQyxVQUF5QixFQUN6QixTQUFpQixFQUNqQixPQUFlLEVBQ2YsWUFBb0I7SUFFcEIsSUFBSSxZQUFtRCxDQUFDO0lBQ3hELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztJQUV4QixNQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBYSxFQUFPLEVBQUU7UUFDOUMsSUFDRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQzlDO1lBQ0EsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekMsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNoQyxJQUNFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7d0JBQ2pDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUNoQzt3QkFDQSxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7NEJBQ3JELFlBQVksR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDOzRCQUNwQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FDckUsQ0FBQzt5QkFDSDtxQkFDRjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDLENBQUM7SUFFRixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU3QixJQUFJLFlBQVksSUFBSSxXQUFXLEVBQUU7UUFDL0IsTUFBTSxzQkFBc0IsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDM0Isd0RBQXdEO1lBQ3hELE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0QsTUFBTSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQ3hELGFBQWEsRUFDYixFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUNyQyxPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7WUFFRixNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLFlBQVksRUFBRTtnQkFDakYsR0FBRyxZQUFZLENBQUMsUUFBUTtnQkFDeEIsb0JBQW9CO2FBQ3JCLENBQUMsQ0FBQztZQUVILE1BQU0sT0FBTyxHQUFlLENBQUMsSUFBYSxFQUFXLEVBQUU7Z0JBQ3JELElBQUksSUFBSSxLQUFLLFlBQVksRUFBRTtvQkFDekIsT0FBTyxlQUFlLENBQUM7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQztZQUVGLE1BQU0saUJBQWlCLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ25GLE9BQU8saUJBQWlCLENBQUM7U0FDMUI7S0FDRjtJQUVELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUEzRUQsa0VBMkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbi8qKlxuICogQWRkcyBhIG5ldyBpbXBvcnQgdG8gdGhlIE5nTW9kdWxlJ3MgaW1wb3J0cyBhcnJheSBpZiBhIHNwZWNpZmljIG1vZHVsZSBpcyBmb3VuZCBhbmQgdGhlIG5ldyBtb2R1bGUgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAqXG4gKiBAcGFyYW0gY29udGV4dCAtIFRoZSB0cmFuc2Zvcm1hdGlvbiBjb250ZXh0LlxuICogQHBhcmFtIHNvdXJjZUZpbGUgLSBUaGUgc291cmNlIGZpbGUgY29udGFpbmluZyB0aGUgTmdNb2R1bGUuXG4gKiBAcGFyYW0gbmV3TW9kdWxlIC0gVGhlIG5hbWUgb2YgdGhlIG5ldyBtb2R1bGUgdG8gYmUgYWRkZWQuXG4gKiBAcGFyYW0gY29tbWVudCAtIFRoZSBjb21tZW50IHRvIGJlIGFkZGVkIGJlZm9yZSB0aGUgbmV3IG1vZHVsZS5cbiAqIEBwYXJhbSBtb2R1bGVUb0ZpbmQgLSBUaGUgbmFtZSBvZiB0aGUgbW9kdWxlIHRoYXQgc2hvdWxkIGJlIGZvdW5kIGluIHRoZSBOZ01vZHVsZSBmb3IgdGhlIG5ldyBtb2R1bGUgdG8gYmUgYWRkZWQuXG4gKiBAcmV0dXJucyBUaGUgdXBkYXRlZCBzb3VyY2UgZmlsZSB3aXRoIHRoZSBuZXcgbW9kdWxlIGFkZGVkIGlmIHRoZSBzcGVjaWZpZWQgbW9kdWxlIGlzIGZvdW5kIGFuZCB0aGUgbmV3IG1vZHVsZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpem1Bc3RBZGRJbXBvcnRUb05nTW9kdWxlKFxuICBjb250ZXh0OiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQsXG4gIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsXG4gIG5ld01vZHVsZTogc3RyaW5nLFxuICBjb21tZW50OiBzdHJpbmcsXG4gIG1vZHVsZVRvRmluZDogc3RyaW5nXG4pOiB0cy5Tb3VyY2VGaWxlIHtcbiAgbGV0IGltcG9ydHNBcnJheTogdHMuQXJyYXlMaXRlcmFsRXhwcmVzc2lvbiB8IHVuZGVmaW5lZDtcbiAgbGV0IG1vZHVsZUZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgZmluZEltcG9ydHNBcnJheSA9IChub2RlOiB0cy5Ob2RlKTogYW55ID0+IHtcbiAgICBpZiAoXG4gICAgICB0cy5pc0RlY29yYXRvcihub2RlKSAmJlxuICAgICAgdHMuaXNDYWxsRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24pICYmXG4gICAgICB0cy5pc0lkZW50aWZpZXIobm9kZS5leHByZXNzaW9uLmV4cHJlc3Npb24pICYmXG4gICAgICBub2RlLmV4cHJlc3Npb24uZXhwcmVzc2lvbi50ZXh0ID09PSAnTmdNb2R1bGUnXG4gICAgKSB7XG4gICAgICBjb25zdCBhcmcgPSBub2RlLmV4cHJlc3Npb24uYXJndW1lbnRzWzBdO1xuXG4gICAgICBpZiAodHMuaXNPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihhcmcpKSB7XG4gICAgICAgIGFyZy5wcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRzLmlzUHJvcGVydHlBc3NpZ25tZW50KHByb3BlcnR5KSAmJlxuICAgICAgICAgICAgdHMuaXNJZGVudGlmaWVyKHByb3BlcnR5Lm5hbWUpICYmXG4gICAgICAgICAgICBwcm9wZXJ0eS5uYW1lLnRleHQgPT09ICdpbXBvcnRzJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRzLmlzQXJyYXlMaXRlcmFsRXhwcmVzc2lvbihwcm9wZXJ0eS5pbml0aWFsaXplcikpIHtcbiAgICAgICAgICAgICAgaW1wb3J0c0FycmF5ID0gcHJvcGVydHkuaW5pdGlhbGl6ZXI7XG4gICAgICAgICAgICAgIG1vZHVsZUZvdW5kID0gaW1wb3J0c0FycmF5LmVsZW1lbnRzLnNvbWUoXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9PiB0cy5pc0lkZW50aWZpZXIoZWxlbWVudCkgJiYgZWxlbWVudC50ZXh0ID09PSBtb2R1bGVUb0ZpbmRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cy5mb3JFYWNoQ2hpbGQobm9kZSwgZmluZEltcG9ydHNBcnJheSk7XG4gICAgfVxuICB9O1xuXG4gIGZpbmRJbXBvcnRzQXJyYXkoc291cmNlRmlsZSk7XG5cbiAgaWYgKGltcG9ydHNBcnJheSAmJiBtb2R1bGVGb3VuZCkge1xuICAgIGNvbnN0IG5ld01vZHVsZUFscmVhZHlFeGlzdHMgPSBpbXBvcnRzQXJyYXkuZWxlbWVudHMuc29tZShlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiB0cy5pc0lkZW50aWZpZXIoZWxlbWVudCkgJiYgZWxlbWVudC50ZXh0ID09PSBuZXdNb2R1bGU7XG4gICAgfSk7XG5cbiAgICBpZiAoIW5ld01vZHVsZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgIC8vIGNvbnN0IG5ld01vZHVsZU5vZGUgPSB0cy5jcmVhdGVJZGVudGlmaWVyKG5ld01vZHVsZSk7XG4gICAgICBjb25zdCBuZXdNb2R1bGVOb2RlID0gdHMuZmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKG5ld01vZHVsZSk7XG4gICAgICBjb25zdCBuZXdNb2R1bGVXaXRoQ29tbWVudCA9IHRzLmFkZFN5bnRoZXRpY0xlYWRpbmdDb21tZW50KFxuICAgICAgICBuZXdNb2R1bGVOb2RlLFxuICAgICAgICB0cy5TeW50YXhLaW5kLlNpbmdsZUxpbmVDb21tZW50VHJpdmlhLFxuICAgICAgICBjb21tZW50LFxuICAgICAgICB0cnVlXG4gICAgICApO1xuXG4gICAgICBjb25zdCBuZXdJbXBvcnRzQXJyYXkgPSBjb250ZXh0LmZhY3RvcnkudXBkYXRlQXJyYXlMaXRlcmFsRXhwcmVzc2lvbihpbXBvcnRzQXJyYXksIFtcbiAgICAgICAgLi4uaW1wb3J0c0FycmF5LmVsZW1lbnRzLFxuICAgICAgICBuZXdNb2R1bGVXaXRoQ29tbWVudCxcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCB2aXNpdG9yOiB0cy5WaXNpdG9yID0gKG5vZGU6IHRzLk5vZGUpOiB0cy5Ob2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUgPT09IGltcG9ydHNBcnJheSkge1xuICAgICAgICAgIHJldHVybiBuZXdJbXBvcnRzQXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRzLnZpc2l0RWFjaENoaWxkKG5vZGUsIHZpc2l0b3IsIGNvbnRleHQpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdXBkYXRlZFNvdXJjZUZpbGUgPSB0cy52aXNpdE5vZGUoc291cmNlRmlsZSBhcyBhbnksIHZpc2l0b3IpLmdldFNvdXJjZUZpbGUoKTtcbiAgICAgIHJldHVybiB1cGRhdGVkU291cmNlRmlsZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc291cmNlRmlsZTtcbn1cbiJdfQ==