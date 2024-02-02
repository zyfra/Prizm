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
            const updatedSourceFile = ts.visitNode(sourceFile, visitor);
            return updatedSourceFile;
        }
    }
    return sourceFile;
}
exports.prizmAstAddImportToNgModule = prizmAstAddImportToNgModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NvZGUvc3JjL2xpYi90cy9hZGQtaW1wb3J0cy10by1uZy1tb2R1bGUvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsdURBQWlDO0FBRWpDOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLDJCQUEyQixDQUN6QyxPQUFpQyxFQUNqQyxVQUF5QixFQUN6QixTQUFpQixFQUNqQixPQUFlLEVBQ2YsWUFBb0I7SUFFcEIsSUFBSSxZQUFtRCxDQUFDO0lBQ3hELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztJQUV4QixNQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBYSxFQUFPLEVBQUU7UUFDOUMsSUFDRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQzlDO1lBQ0EsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekMsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNoQyxJQUNFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7d0JBQ2pDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUNoQzt3QkFDQSxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7NEJBQ3JELFlBQVksR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDOzRCQUNwQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FDckUsQ0FBQzt5QkFDSDtxQkFDRjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDLENBQUM7SUFFRixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU3QixJQUFJLFlBQVksSUFBSSxXQUFXLEVBQUU7UUFDL0IsTUFBTSxzQkFBc0IsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDM0Isd0RBQXdEO1lBQ3hELE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0QsTUFBTSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQ3hELGFBQWEsRUFDYixFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUNyQyxPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7WUFFRixNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLFlBQVksRUFBRTtnQkFDakYsR0FBRyxZQUFZLENBQUMsUUFBUTtnQkFDeEIsb0JBQW9CO2FBQ3JCLENBQUMsQ0FBQztZQUVILE1BQU0sT0FBTyxHQUFlLENBQUMsSUFBYSxFQUFXLEVBQUU7Z0JBQ3JELElBQUksSUFBSSxLQUFLLFlBQVksRUFBRTtvQkFDekIsT0FBTyxlQUFlLENBQUM7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQztZQUVGLE1BQU0saUJBQWlCLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUQsT0FBTyxpQkFBd0IsQ0FBQztTQUNqQztLQUNGO0lBRUQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQTNFRCxrRUEyRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuLyoqXG4gKiBBZGRzIGEgbmV3IGltcG9ydCB0byB0aGUgTmdNb2R1bGUncyBpbXBvcnRzIGFycmF5IGlmIGEgc3BlY2lmaWMgbW9kdWxlIGlzIGZvdW5kIGFuZCB0aGUgbmV3IG1vZHVsZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxuICpcbiAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIHRyYW5zZm9ybWF0aW9uIGNvbnRleHQuXG4gKiBAcGFyYW0gc291cmNlRmlsZSAtIFRoZSBzb3VyY2UgZmlsZSBjb250YWluaW5nIHRoZSBOZ01vZHVsZS5cbiAqIEBwYXJhbSBuZXdNb2R1bGUgLSBUaGUgbmFtZSBvZiB0aGUgbmV3IG1vZHVsZSB0byBiZSBhZGRlZC5cbiAqIEBwYXJhbSBjb21tZW50IC0gVGhlIGNvbW1lbnQgdG8gYmUgYWRkZWQgYmVmb3JlIHRoZSBuZXcgbW9kdWxlLlxuICogQHBhcmFtIG1vZHVsZVRvRmluZCAtIFRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgdGhhdCBzaG91bGQgYmUgZm91bmQgaW4gdGhlIE5nTW9kdWxlIGZvciB0aGUgbmV3IG1vZHVsZSB0byBiZSBhZGRlZC5cbiAqIEByZXR1cm5zIFRoZSB1cGRhdGVkIHNvdXJjZSBmaWxlIHdpdGggdGhlIG5ldyBtb2R1bGUgYWRkZWQgaWYgdGhlIHNwZWNpZmllZCBtb2R1bGUgaXMgZm91bmQgYW5kIHRoZSBuZXcgbW9kdWxlIGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUFzdEFkZEltcG9ydFRvTmdNb2R1bGUoXG4gIGNvbnRleHQ6IHRzLlRyYW5zZm9ybWF0aW9uQ29udGV4dCxcbiAgc291cmNlRmlsZTogdHMuU291cmNlRmlsZSxcbiAgbmV3TW9kdWxlOiBzdHJpbmcsXG4gIGNvbW1lbnQ6IHN0cmluZyxcbiAgbW9kdWxlVG9GaW5kOiBzdHJpbmdcbik6IHRzLlNvdXJjZUZpbGUge1xuICBsZXQgaW1wb3J0c0FycmF5OiB0cy5BcnJheUxpdGVyYWxFeHByZXNzaW9uIHwgdW5kZWZpbmVkO1xuICBsZXQgbW9kdWxlRm91bmQgPSBmYWxzZTtcblxuICBjb25zdCBmaW5kSW1wb3J0c0FycmF5ID0gKG5vZGU6IHRzLk5vZGUpOiBhbnkgPT4ge1xuICAgIGlmIChcbiAgICAgIHRzLmlzRGVjb3JhdG9yKG5vZGUpICYmXG4gICAgICB0cy5pc0NhbGxFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbikgJiZcbiAgICAgIHRzLmlzSWRlbnRpZmllcihub2RlLmV4cHJlc3Npb24uZXhwcmVzc2lvbikgJiZcbiAgICAgIG5vZGUuZXhwcmVzc2lvbi5leHByZXNzaW9uLnRleHQgPT09ICdOZ01vZHVsZSdcbiAgICApIHtcbiAgICAgIGNvbnN0IGFyZyA9IG5vZGUuZXhwcmVzc2lvbi5hcmd1bWVudHNbMF07XG5cbiAgICAgIGlmICh0cy5pc09iamVjdExpdGVyYWxFeHByZXNzaW9uKGFyZykpIHtcbiAgICAgICAgYXJnLnByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHMuaXNQcm9wZXJ0eUFzc2lnbm1lbnQocHJvcGVydHkpICYmXG4gICAgICAgICAgICB0cy5pc0lkZW50aWZpZXIocHJvcGVydHkubmFtZSkgJiZcbiAgICAgICAgICAgIHByb3BlcnR5Lm5hbWUudGV4dCA9PT0gJ2ltcG9ydHMnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodHMuaXNBcnJheUxpdGVyYWxFeHByZXNzaW9uKHByb3BlcnR5LmluaXRpYWxpemVyKSkge1xuICAgICAgICAgICAgICBpbXBvcnRzQXJyYXkgPSBwcm9wZXJ0eS5pbml0aWFsaXplcjtcbiAgICAgICAgICAgICAgbW9kdWxlRm91bmQgPSBpbXBvcnRzQXJyYXkuZWxlbWVudHMuc29tZShcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0+IHRzLmlzSWRlbnRpZmllcihlbGVtZW50KSAmJiBlbGVtZW50LnRleHQgPT09IG1vZHVsZVRvRmluZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRzLmZvckVhY2hDaGlsZChub2RlLCBmaW5kSW1wb3J0c0FycmF5KTtcbiAgICB9XG4gIH07XG5cbiAgZmluZEltcG9ydHNBcnJheShzb3VyY2VGaWxlKTtcblxuICBpZiAoaW1wb3J0c0FycmF5ICYmIG1vZHVsZUZvdW5kKSB7XG4gICAgY29uc3QgbmV3TW9kdWxlQWxyZWFkeUV4aXN0cyA9IGltcG9ydHNBcnJheS5lbGVtZW50cy5zb21lKGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIHRzLmlzSWRlbnRpZmllcihlbGVtZW50KSAmJiBlbGVtZW50LnRleHQgPT09IG5ld01vZHVsZTtcbiAgICB9KTtcblxuICAgIGlmICghbmV3TW9kdWxlQWxyZWFkeUV4aXN0cykge1xuICAgICAgLy8gY29uc3QgbmV3TW9kdWxlTm9kZSA9IHRzLmNyZWF0ZUlkZW50aWZpZXIobmV3TW9kdWxlKTtcbiAgICAgIGNvbnN0IG5ld01vZHVsZU5vZGUgPSB0cy5mYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIobmV3TW9kdWxlKTtcbiAgICAgIGNvbnN0IG5ld01vZHVsZVdpdGhDb21tZW50ID0gdHMuYWRkU3ludGhldGljTGVhZGluZ0NvbW1lbnQoXG4gICAgICAgIG5ld01vZHVsZU5vZGUsXG4gICAgICAgIHRzLlN5bnRheEtpbmQuU2luZ2xlTGluZUNvbW1lbnRUcml2aWEsXG4gICAgICAgIGNvbW1lbnQsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5ld0ltcG9ydHNBcnJheSA9IGNvbnRleHQuZmFjdG9yeS51cGRhdGVBcnJheUxpdGVyYWxFeHByZXNzaW9uKGltcG9ydHNBcnJheSwgW1xuICAgICAgICAuLi5pbXBvcnRzQXJyYXkuZWxlbWVudHMsXG4gICAgICAgIG5ld01vZHVsZVdpdGhDb21tZW50LFxuICAgICAgXSk7XG5cbiAgICAgIGNvbnN0IHZpc2l0b3I6IHRzLlZpc2l0b3IgPSAobm9kZTogdHMuTm9kZSk6IHRzLk5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZSA9PT0gaW1wb3J0c0FycmF5KSB7XG4gICAgICAgICAgcmV0dXJuIG5ld0ltcG9ydHNBcnJheTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHMudmlzaXRFYWNoQ2hpbGQobm9kZSwgdmlzaXRvciwgY29udGV4dCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1cGRhdGVkU291cmNlRmlsZSA9IHRzLnZpc2l0Tm9kZShzb3VyY2VGaWxlLCB2aXNpdG9yKTtcbiAgICAgIHJldHVybiB1cGRhdGVkU291cmNlRmlsZSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNvdXJjZUZpbGU7XG59XG4iXX0=