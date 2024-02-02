"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstRunSchematicsByTasks = void 0;
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
const devkit_1 = require("@nrwl/devkit");
const lodash_1 = require("lodash");
const ast_1 = require("@prizm-ui/ast");
const code_1 = require("@prizm-ui/ast/code");
const update_all_files_when_1 = require("../update-all-files-when");
const prettier_1 = require("../util/prettier");
/**
 * Runs schematics on specified files based on provided tasks.
 *
 * @param {Tree} tree - The Nx virtual file system tree.
 * @param {string} dir - The directory to start searching for files.
 * @param {PrizmTemplateTask[]} templateTasks - The array of template tasks to be executed on HTML files.
 * @param {IPrizmAstCodeTask[]} codeTasks - The array of code tasks to be executed on TypeScript files.
 * @returns {Promise<any>} - A promise that resolves when all updates are complete.
 *
 * @example
 * // To run the schematics using the provided tasks:
 * prizmAstRunSchematicsByTasks(tree, 'src/app', templateTasks, codeTasks);
 */
async function prizmAstRunSchematicsByTasks(tree, dir, templateTasks, codeTasks, options) {
    const templateExecutor = new ast_1.PrizmTemplateTaskProcessor(templateTasks);
    // Update all files in the tree when they meet the conditions set by canUpdateFunc.
    (0, update_all_files_when_1.prizmAstUpdateAllFilesWhen)(tree, dir, (entryPath, fileContent) => entryPath.endsWith('.ts') ||
        (entryPath.endsWith('.html') && templateExecutor.needToChange((0, ast_1.prizmAstHtmlParse)(fileContent))), (entryPath, fileContent) => {
        const initialFileContent = fileContent;
        try {
            // Process HTML files using the PrizmHtmlParse and PrizmTemplateTaskProcessor.
            if (entryPath.endsWith('.html')) {
                const parsed = (0, ast_1.prizmAstHtmlParse)(fileContent);
                const processTasks = templateExecutor.processTasks(parsed);
                const updatedFile = (0, ast_1.prizmAstHtmlStringify)(processTasks);
                if (!(0, lodash_1.isEqual)(parsed, (0, ast_1.prizmAstHtmlParse)(fileContent)))
                    fileContent = updatedFile;
                // clear storage with delayed tasks
                templateExecutor.clear();
            }
            // Process TypeScript files using the PrizmAstCodeTaskProcessor.
            else if (entryPath.endsWith('.ts')) {
                const nodeProcessor = new code_1.PrizmAstCodeTaskProcessor(codeTasks);
                fileContent = nodeProcessor.processTasks(fileContent);
            }
            if (options?.runPrettier && initialFileContent !== fileContent) {
                (0, prettier_1.formatFileWithPrettier)(fileContent);
            }
        }
        catch (error) {
            console.warn('WARNING:prizmAstRunSchematicsByTasks', error);
        }
        return fileContent;
    });
    // Format all updated files.
    await (0, devkit_1.formatFiles)(tree);
}
exports.prizmAstRunSchematicsByTasks = prizmAstRunSchematicsByTasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXRhc2tzLWJ5LXByb2plY3QtbmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NjaGVtYXRpY3MtaGVscGVycy9zcmMvcnVuLXRhc2tzLWJ5LXByb2plY3QtbmFtZS9ydW4tdGFza3MtYnktcHJvamVjdC1uYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUF1RDtBQUN2RCx5Q0FBaUQ7QUFDakQsbUNBQWlDO0FBQ2pDLHVDQU11QjtBQUN2Qiw2Q0FBa0Y7QUFDbEYsb0VBQXNFO0FBQ3RFLCtDQUEwRDtBQUUxRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSSxLQUFLLFVBQVUsNEJBQTRCLENBQ2hELElBQVUsRUFDVixHQUFXLEVBQ1gsYUFBa0MsRUFDbEMsU0FBOEIsRUFDOUIsT0FFQztJQUVELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RSxtRkFBbUY7SUFDbkYsSUFBQSxrREFBMEIsRUFDeEIsSUFBSSxFQUNKLEdBQUcsRUFDSCxDQUFDLFNBQWlCLEVBQUUsV0FBbUIsRUFBRSxFQUFFLENBQ3pDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBQSx1QkFBaUIsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ2hHLENBQUMsU0FBaUIsRUFBRSxXQUFtQixFQUFFLEVBQUU7UUFDekMsTUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsSUFBSTtZQUNGLDhFQUE4RTtZQUM5RSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUEsdUJBQWlCLEVBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQXVCLENBQUM7Z0JBQ2pGLE1BQU0sV0FBVyxHQUFHLElBQUEsMkJBQXFCLEVBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxJQUFBLGdCQUFPLEVBQUMsTUFBTSxFQUFFLElBQUEsdUJBQWlCLEVBQUMsV0FBVyxDQUFDLENBQUM7b0JBQUUsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDaEYsbUNBQW1DO2dCQUNuQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMxQjtZQUNELGdFQUFnRTtpQkFDM0QsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGdDQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvRCxXQUFXLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN2RDtZQUVELElBQUksT0FBTyxFQUFFLFdBQVcsSUFBSSxrQkFBa0IsS0FBSyxXQUFXLEVBQUU7Z0JBQzlELElBQUEsaUNBQXNCLEVBQUMsV0FBVyxDQUFDLENBQUM7YUFDckM7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3RDtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUMsQ0FDRixDQUFDO0lBRUYsNEJBQTRCO0lBQzVCLE1BQU0sSUFBQSxvQkFBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFoREQsb0VBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllcyAqL1xuaW1wb3J0IHsgZm9ybWF0RmlsZXMsIFRyZWUgfSBmcm9tICdAbnJ3bC9kZXZraXQnO1xuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1xuICBQcml6bUFzdEh0bWxJdGVtLFxuICBwcml6bUFzdEh0bWxQYXJzZSxcbiAgcHJpem1Bc3RIdG1sU3RyaW5naWZ5LFxuICBQcml6bVRlbXBsYXRlVGFzayxcbiAgUHJpem1UZW1wbGF0ZVRhc2tQcm9jZXNzb3IsXG59IGZyb20gJ0Bwcml6bS11aS9hc3QnO1xuaW1wb3J0IHsgSVByaXptQXN0Q29kZVRhc2ssIFByaXptQXN0Q29kZVRhc2tQcm9jZXNzb3IgfSBmcm9tICdAcHJpem0tdWkvYXN0L2NvZGUnO1xuaW1wb3J0IHsgcHJpem1Bc3RVcGRhdGVBbGxGaWxlc1doZW4gfSBmcm9tICcuLi91cGRhdGUtYWxsLWZpbGVzLXdoZW4nO1xuaW1wb3J0IHsgZm9ybWF0RmlsZVdpdGhQcmV0dGllciB9IGZyb20gJy4uL3V0aWwvcHJldHRpZXInO1xuXG4vKipcbiAqIFJ1bnMgc2NoZW1hdGljcyBvbiBzcGVjaWZpZWQgZmlsZXMgYmFzZWQgb24gcHJvdmlkZWQgdGFza3MuXG4gKlxuICogQHBhcmFtIHtUcmVlfSB0cmVlIC0gVGhlIE54IHZpcnR1YWwgZmlsZSBzeXN0ZW0gdHJlZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgLSBUaGUgZGlyZWN0b3J5IHRvIHN0YXJ0IHNlYXJjaGluZyBmb3IgZmlsZXMuXG4gKiBAcGFyYW0ge1ByaXptVGVtcGxhdGVUYXNrW119IHRlbXBsYXRlVGFza3MgLSBUaGUgYXJyYXkgb2YgdGVtcGxhdGUgdGFza3MgdG8gYmUgZXhlY3V0ZWQgb24gSFRNTCBmaWxlcy5cbiAqIEBwYXJhbSB7SVByaXptQXN0Q29kZVRhc2tbXX0gY29kZVRhc2tzIC0gVGhlIGFycmF5IG9mIGNvZGUgdGFza3MgdG8gYmUgZXhlY3V0ZWQgb24gVHlwZVNjcmlwdCBmaWxlcy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgdXBkYXRlcyBhcmUgY29tcGxldGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRvIHJ1biB0aGUgc2NoZW1hdGljcyB1c2luZyB0aGUgcHJvdmlkZWQgdGFza3M6XG4gKiBwcml6bUFzdFJ1blNjaGVtYXRpY3NCeVRhc2tzKHRyZWUsICdzcmMvYXBwJywgdGVtcGxhdGVUYXNrcywgY29kZVRhc2tzKTtcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByaXptQXN0UnVuU2NoZW1hdGljc0J5VGFza3MoXG4gIHRyZWU6IFRyZWUsXG4gIGRpcjogc3RyaW5nLFxuICB0ZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdLFxuICBjb2RlVGFza3M6IElQcml6bUFzdENvZGVUYXNrW10sXG4gIG9wdGlvbnM/OiB7XG4gICAgcnVuUHJldHRpZXI/OiBib29sZWFuO1xuICB9XG4pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCB0ZW1wbGF0ZUV4ZWN1dG9yID0gbmV3IFByaXptVGVtcGxhdGVUYXNrUHJvY2Vzc29yKHRlbXBsYXRlVGFza3MpO1xuICAvLyBVcGRhdGUgYWxsIGZpbGVzIGluIHRoZSB0cmVlIHdoZW4gdGhleSBtZWV0IHRoZSBjb25kaXRpb25zIHNldCBieSBjYW5VcGRhdGVGdW5jLlxuICBwcml6bUFzdFVwZGF0ZUFsbEZpbGVzV2hlbihcbiAgICB0cmVlLFxuICAgIGRpcixcbiAgICAoZW50cnlQYXRoOiBzdHJpbmcsIGZpbGVDb250ZW50OiBzdHJpbmcpID0+XG4gICAgICBlbnRyeVBhdGguZW5kc1dpdGgoJy50cycpIHx8XG4gICAgICAoZW50cnlQYXRoLmVuZHNXaXRoKCcuaHRtbCcpICYmIHRlbXBsYXRlRXhlY3V0b3IubmVlZFRvQ2hhbmdlKHByaXptQXN0SHRtbFBhcnNlKGZpbGVDb250ZW50KSkpLFxuICAgIChlbnRyeVBhdGg6IHN0cmluZywgZmlsZUNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgaW5pdGlhbEZpbGVDb250ZW50ID0gZmlsZUNvbnRlbnQ7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBQcm9jZXNzIEhUTUwgZmlsZXMgdXNpbmcgdGhlIFByaXptSHRtbFBhcnNlIGFuZCBQcml6bVRlbXBsYXRlVGFza1Byb2Nlc3Nvci5cbiAgICAgICAgaWYgKGVudHJ5UGF0aC5lbmRzV2l0aCgnLmh0bWwnKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHByaXptQXN0SHRtbFBhcnNlKGZpbGVDb250ZW50KTtcbiAgICAgICAgICBjb25zdCBwcm9jZXNzVGFza3MgPSB0ZW1wbGF0ZUV4ZWN1dG9yLnByb2Nlc3NUYXNrcyhwYXJzZWQpIGFzIFByaXptQXN0SHRtbEl0ZW1bXTtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkRmlsZSA9IHByaXptQXN0SHRtbFN0cmluZ2lmeShwcm9jZXNzVGFza3MpO1xuICAgICAgICAgIGlmICghaXNFcXVhbChwYXJzZWQsIHByaXptQXN0SHRtbFBhcnNlKGZpbGVDb250ZW50KSkpIGZpbGVDb250ZW50ID0gdXBkYXRlZEZpbGU7XG4gICAgICAgICAgLy8gY2xlYXIgc3RvcmFnZSB3aXRoIGRlbGF5ZWQgdGFza3NcbiAgICAgICAgICB0ZW1wbGF0ZUV4ZWN1dG9yLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2VzcyBUeXBlU2NyaXB0IGZpbGVzIHVzaW5nIHRoZSBQcml6bUFzdENvZGVUYXNrUHJvY2Vzc29yLlxuICAgICAgICBlbHNlIGlmIChlbnRyeVBhdGguZW5kc1dpdGgoJy50cycpKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZVByb2Nlc3NvciA9IG5ldyBQcml6bUFzdENvZGVUYXNrUHJvY2Vzc29yKGNvZGVUYXNrcyk7XG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSBub2RlUHJvY2Vzc29yLnByb2Nlc3NUYXNrcyhmaWxlQ29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucz8ucnVuUHJldHRpZXIgJiYgaW5pdGlhbEZpbGVDb250ZW50ICE9PSBmaWxlQ29udGVudCkge1xuICAgICAgICAgIGZvcm1hdEZpbGVXaXRoUHJldHRpZXIoZmlsZUNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6cHJpem1Bc3RSdW5TY2hlbWF0aWNzQnlUYXNrcycsIGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVDb250ZW50O1xuICAgIH1cbiAgKTtcblxuICAvLyBGb3JtYXQgYWxsIHVwZGF0ZWQgZmlsZXMuXG4gIGF3YWl0IGZvcm1hdEZpbGVzKHRyZWUpO1xufVxuIl19