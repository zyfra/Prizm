"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmAstCodeTaskProcessor = void 0;
const tslib_1 = require("tslib");
const add_imports_to_ng_module_1 = require("./add-imports-to-ng-module");
const add_imports_1 = require("./add-imports");
const ts = tslib_1.__importStar(require("typescript"));
/**
 * @class PrizmAstCodeTaskProcessor
 * @description
 * A class responsible for processing a series of PrizmAstCodeTasks and applying
 * them to the given TypeScript code. It includes built-in tasks by default and allows
 * adding custom tasks as needed.
 */
class PrizmAstCodeTaskProcessor {
    /**
     * @constructor
     * @param {IPrizmAstCodeTask[]} tasks - An array of tasks to be processed.
     */
    constructor(tasks) {
        this.tasks = tasks;
        // Default built-in tasks
        this.defaultTasks = [
            new add_imports_to_ng_module_1.PrizmAstAddImportsToNgModuleCodeTask(),
            new add_imports_1.PrizmAstAddImportsIfNeededCodeTask(),
        ];
    }
    /**
     * @function processTasks
     * @description
     * Processes the given tasks and applies them to the provided code.
     *
     * @param {string} code - The TypeScript code to process.
     *
     * @returns {typeof code} - The updated TypeScript code after processing the tasks.
     */
    processTasks(code) {
        return this.tasks.reduce((base, task) => {
            return (base = this.processTasksByTask(base, task));
        }, code);
    }
    // public processTasks(code: string): typeof code {
    //   // Transformer function that applies the tasks to the source file
    //   const transformers: ts.TransformerFactory<ts.SourceFile>[] = this.tasks.reduce(
    //     (base, task) => {
    //       const service = this.defaultTasks.find(i => i.type === task.type);
    //       if (service) {
    //         base.push(
    //           context => (sourceFile): typeof sourceFile => {
    //             return service.run(context, sourceFile, task.payload as any);
    //           }
    //         )
    //       }
    //
    //       return base;
    //     },
    //     [] as ts.TransformerFactory<ts.SourceFile>[]
    //   )
    //
    //
    //   // Create a source file from the provided code
    //   const sourceFile = ts.createSourceFile('test.ts', code, ts.ScriptTarget.Latest, true);
    //
    //   // Apply the transformer to the source file
    //   const result = ts.transform(sourceFile, transformers);
    //   const updatedSourceFile = result.transformed[0];
    //   const printer = ts.createPrinter();
    //   const updatedCode = printer.printFile(updatedSourceFile);
    //
    //   return updatedCode;
    // }
    // TODO delete duplicates, think about optimization
    getContentAutoUpdateWithoutTasks(code) {
        // Transformer function that applies the tasks to the source file
        const transformer = context => (sourceFile) => {
            return sourceFile;
        };
        // Create a source file from the provided code
        const sourceFile = ts.createSourceFile('test.ts', code, ts.ScriptTarget.Latest, true);
        // Apply the transformer to the source file
        const result = ts.transform(sourceFile, [transformer]);
        const updatedSourceFile = result.transformed[0];
        const printer = ts.createPrinter();
        const updatedCode = printer.printFile(updatedSourceFile);
        return updatedCode;
    }
    processTasksByTask(code, task) {
        const taskService = this.defaultTasks.find(t => t.type === task.type);
        if (!taskService)
            return code;
        const initialFile = this.getContentAutoUpdateWithoutTasks(code);
        // Transformer function that applies the tasks to the source file
        const transformer = context => (sourceFile) => {
            return taskService.run(context, sourceFile, task.payload);
        };
        // Create a source file from the provided code
        const sourceFile = ts.createSourceFile('test.ts', code, ts.ScriptTarget.Latest, true);
        // Apply the transformer to the source file
        const result = ts.transform(sourceFile, [transformer]);
        const updatedSourceFile = result.transformed[0];
        const printer = ts.createPrinter();
        const updatedCode = printer.printFile(updatedSourceFile);
        return initialFile !== updatedCode ? updatedCode : code;
    }
}
exports.PrizmAstCodeTaskProcessor = PrizmAstCodeTaskProcessor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NvZGUvc3JjL2xpYi90cy90YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSx5RUFBa0Y7QUFDbEYsK0NBQW1FO0FBQ25FLHVEQUFpQztBQUVqQzs7Ozs7O0dBTUc7QUFDSCxNQUFhLHlCQUF5QjtJQU9wQzs7O09BR0c7SUFDSCxZQUFvQixLQUEwQjtRQUExQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQVY5Qyx5QkFBeUI7UUFDaEIsaUJBQVksR0FBRztZQUN0QixJQUFJLCtEQUFvQyxFQUFFO1lBQzFDLElBQUksZ0RBQWtDLEVBQUU7U0FDekMsQ0FBQztJQU0rQyxDQUFDO0lBRWxEOzs7Ozs7OztPQVFHO0lBQ0ksWUFBWSxDQUFDLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN0QyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsbURBQW1EO0lBQ25ELHNFQUFzRTtJQUN0RSxvRkFBb0Y7SUFDcEYsd0JBQXdCO0lBQ3hCLDJFQUEyRTtJQUMzRSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDREQUE0RDtJQUM1RCw0RUFBNEU7SUFDNUUsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1YsRUFBRTtJQUNGLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsbURBQW1EO0lBQ25ELE1BQU07SUFDTixFQUFFO0lBQ0YsRUFBRTtJQUNGLG1EQUFtRDtJQUNuRCwyRkFBMkY7SUFDM0YsRUFBRTtJQUNGLGdEQUFnRDtJQUNoRCwyREFBMkQ7SUFDM0QscURBQXFEO0lBQ3JELHdDQUF3QztJQUN4Qyw4REFBOEQ7SUFDOUQsRUFBRTtJQUNGLHdCQUF3QjtJQUN4QixJQUFJO0lBRUosbURBQW1EO0lBQzNDLGdDQUFnQyxDQUFDLElBQVk7UUFDbkQsaUVBQWlFO1FBQ2pFLE1BQU0sV0FBVyxHQUNmLE9BQU8sQ0FBQyxFQUFFLENBQ1YsQ0FBQyxVQUFVLEVBQXFCLEVBQUU7WUFDaEMsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1FBRUosOENBQThDO1FBQzlDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXRGLDJDQUEyQztRQUMzQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNNLGtCQUFrQixDQUFDLElBQVksRUFBRSxJQUF1QjtRQUM3RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhFLGlFQUFpRTtRQUNqRSxNQUFNLFdBQVcsR0FDZixPQUFPLENBQUMsRUFBRSxDQUNWLENBQUMsVUFBVSxFQUFxQixFQUFFO1lBQ2hDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFjLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUM7UUFFSiw4Q0FBOEM7UUFDOUMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdEYsMkNBQTJDO1FBQzNDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN6RCxPQUFPLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFELENBQUM7Q0FDRjtBQXJHRCw4REFxR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJpem1Bc3RDb2RlVGFzayB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RBZGRJbXBvcnRzVG9OZ01vZHVsZUNvZGVUYXNrIH0gZnJvbSAnLi9hZGQtaW1wb3J0cy10by1uZy1tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1Bc3RBZGRJbXBvcnRzSWZOZWVkZWRDb2RlVGFzayB9IGZyb20gJy4vYWRkLWltcG9ydHMnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbi8qKlxuICogQGNsYXNzIFByaXptQXN0Q29kZVRhc2tQcm9jZXNzb3JcbiAqIEBkZXNjcmlwdGlvblxuICogQSBjbGFzcyByZXNwb25zaWJsZSBmb3IgcHJvY2Vzc2luZyBhIHNlcmllcyBvZiBQcml6bUFzdENvZGVUYXNrcyBhbmQgYXBwbHlpbmdcbiAqIHRoZW0gdG8gdGhlIGdpdmVuIFR5cGVTY3JpcHQgY29kZS4gSXQgaW5jbHVkZXMgYnVpbHQtaW4gdGFza3MgYnkgZGVmYXVsdCBhbmQgYWxsb3dzXG4gKiBhZGRpbmcgY3VzdG9tIHRhc2tzIGFzIG5lZWRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByaXptQXN0Q29kZVRhc2tQcm9jZXNzb3Ige1xuICAvLyBEZWZhdWx0IGJ1aWx0LWluIHRhc2tzXG4gIHJlYWRvbmx5IGRlZmF1bHRUYXNrcyA9IFtcbiAgICBuZXcgUHJpem1Bc3RBZGRJbXBvcnRzVG9OZ01vZHVsZUNvZGVUYXNrKCksXG4gICAgbmV3IFByaXptQXN0QWRkSW1wb3J0c0lmTmVlZGVkQ29kZVRhc2soKSxcbiAgXTtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SVByaXptQXN0Q29kZVRhc2tbXX0gdGFza3MgLSBBbiBhcnJheSBvZiB0YXNrcyB0byBiZSBwcm9jZXNzZWQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhc2tzOiBJUHJpem1Bc3RDb2RlVGFza1tdKSB7fVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHRhc2tzIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIHByb3ZpZGVkIGNvZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gVGhlIFR5cGVTY3JpcHQgY29kZSB0byBwcm9jZXNzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dHlwZW9mIGNvZGV9IC0gVGhlIHVwZGF0ZWQgVHlwZVNjcmlwdCBjb2RlIGFmdGVyIHByb2Nlc3NpbmcgdGhlIHRhc2tzLlxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NUYXNrcyhjb2RlOiBzdHJpbmcpOiB0eXBlb2YgY29kZSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MucmVkdWNlKChiYXNlLCB0YXNrKSA9PiB7XG4gICAgICByZXR1cm4gKGJhc2UgPSB0aGlzLnByb2Nlc3NUYXNrc0J5VGFzayhiYXNlLCB0YXNrKSk7XG4gICAgfSwgY29kZSk7XG4gIH1cblxuICAvLyBwdWJsaWMgcHJvY2Vzc1Rhc2tzKGNvZGU6IHN0cmluZyk6IHR5cGVvZiBjb2RlIHtcbiAgLy8gICAvLyBUcmFuc2Zvcm1lciBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgdGhlIHRhc2tzIHRvIHRoZSBzb3VyY2UgZmlsZVxuICAvLyAgIGNvbnN0IHRyYW5zZm9ybWVyczogdHMuVHJhbnNmb3JtZXJGYWN0b3J5PHRzLlNvdXJjZUZpbGU+W10gPSB0aGlzLnRhc2tzLnJlZHVjZShcbiAgLy8gICAgIChiYXNlLCB0YXNrKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmRlZmF1bHRUYXNrcy5maW5kKGkgPT4gaS50eXBlID09PSB0YXNrLnR5cGUpO1xuICAvLyAgICAgICBpZiAoc2VydmljZSkge1xuICAvLyAgICAgICAgIGJhc2UucHVzaChcbiAgLy8gICAgICAgICAgIGNvbnRleHQgPT4gKHNvdXJjZUZpbGUpOiB0eXBlb2Ygc291cmNlRmlsZSA9PiB7XG4gIC8vICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlLnJ1bihjb250ZXh0LCBzb3VyY2VGaWxlLCB0YXNrLnBheWxvYWQgYXMgYW55KTtcbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICApXG4gIC8vICAgICAgIH1cbiAgLy9cbiAgLy8gICAgICAgcmV0dXJuIGJhc2U7XG4gIC8vICAgICB9LFxuICAvLyAgICAgW10gYXMgdHMuVHJhbnNmb3JtZXJGYWN0b3J5PHRzLlNvdXJjZUZpbGU+W11cbiAgLy8gICApXG4gIC8vXG4gIC8vXG4gIC8vICAgLy8gQ3JlYXRlIGEgc291cmNlIGZpbGUgZnJvbSB0aGUgcHJvdmlkZWQgY29kZVxuICAvLyAgIGNvbnN0IHNvdXJjZUZpbGUgPSB0cy5jcmVhdGVTb3VyY2VGaWxlKCd0ZXN0LnRzJywgY29kZSwgdHMuU2NyaXB0VGFyZ2V0LkxhdGVzdCwgdHJ1ZSk7XG4gIC8vXG4gIC8vICAgLy8gQXBwbHkgdGhlIHRyYW5zZm9ybWVyIHRvIHRoZSBzb3VyY2UgZmlsZVxuICAvLyAgIGNvbnN0IHJlc3VsdCA9IHRzLnRyYW5zZm9ybShzb3VyY2VGaWxlLCB0cmFuc2Zvcm1lcnMpO1xuICAvLyAgIGNvbnN0IHVwZGF0ZWRTb3VyY2VGaWxlID0gcmVzdWx0LnRyYW5zZm9ybWVkWzBdO1xuICAvLyAgIGNvbnN0IHByaW50ZXIgPSB0cy5jcmVhdGVQcmludGVyKCk7XG4gIC8vICAgY29uc3QgdXBkYXRlZENvZGUgPSBwcmludGVyLnByaW50RmlsZSh1cGRhdGVkU291cmNlRmlsZSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIHVwZGF0ZWRDb2RlO1xuICAvLyB9XG5cbiAgLy8gVE9ETyBkZWxldGUgZHVwbGljYXRlcywgdGhpbmsgYWJvdXQgb3B0aW1pemF0aW9uXG4gIHByaXZhdGUgZ2V0Q29udGVudEF1dG9VcGRhdGVXaXRob3V0VGFza3MoY29kZTogc3RyaW5nKSB7XG4gICAgLy8gVHJhbnNmb3JtZXIgZnVuY3Rpb24gdGhhdCBhcHBsaWVzIHRoZSB0YXNrcyB0byB0aGUgc291cmNlIGZpbGVcbiAgICBjb25zdCB0cmFuc2Zvcm1lcjogdHMuVHJhbnNmb3JtZXJGYWN0b3J5PHRzLlNvdXJjZUZpbGU+ID1cbiAgICAgIGNvbnRleHQgPT5cbiAgICAgIChzb3VyY2VGaWxlKTogdHlwZW9mIHNvdXJjZUZpbGUgPT4ge1xuICAgICAgICByZXR1cm4gc291cmNlRmlsZTtcbiAgICAgIH07XG5cbiAgICAvLyBDcmVhdGUgYSBzb3VyY2UgZmlsZSBmcm9tIHRoZSBwcm92aWRlZCBjb2RlXG4gICAgY29uc3Qgc291cmNlRmlsZSA9IHRzLmNyZWF0ZVNvdXJjZUZpbGUoJ3Rlc3QudHMnLCBjb2RlLCB0cy5TY3JpcHRUYXJnZXQuTGF0ZXN0LCB0cnVlKTtcblxuICAgIC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm1lciB0byB0aGUgc291cmNlIGZpbGVcbiAgICBjb25zdCByZXN1bHQgPSB0cy50cmFuc2Zvcm0oc291cmNlRmlsZSwgW3RyYW5zZm9ybWVyXSk7XG4gICAgY29uc3QgdXBkYXRlZFNvdXJjZUZpbGUgPSByZXN1bHQudHJhbnNmb3JtZWRbMF07XG4gICAgY29uc3QgcHJpbnRlciA9IHRzLmNyZWF0ZVByaW50ZXIoKTtcbiAgICBjb25zdCB1cGRhdGVkQ29kZSA9IHByaW50ZXIucHJpbnRGaWxlKHVwZGF0ZWRTb3VyY2VGaWxlKTtcbiAgICByZXR1cm4gdXBkYXRlZENvZGU7XG4gIH1cbiAgcHVibGljIHByb2Nlc3NUYXNrc0J5VGFzayhjb2RlOiBzdHJpbmcsIHRhc2s6IElQcml6bUFzdENvZGVUYXNrKTogdHlwZW9mIGNvZGUge1xuICAgIGNvbnN0IHRhc2tTZXJ2aWNlID0gdGhpcy5kZWZhdWx0VGFza3MuZmluZCh0ID0+IHQudHlwZSA9PT0gdGFzay50eXBlKTtcbiAgICBpZiAoIXRhc2tTZXJ2aWNlKSByZXR1cm4gY29kZTtcblxuICAgIGNvbnN0IGluaXRpYWxGaWxlID0gdGhpcy5nZXRDb250ZW50QXV0b1VwZGF0ZVdpdGhvdXRUYXNrcyhjb2RlKTtcblxuICAgIC8vIFRyYW5zZm9ybWVyIGZ1bmN0aW9uIHRoYXQgYXBwbGllcyB0aGUgdGFza3MgdG8gdGhlIHNvdXJjZSBmaWxlXG4gICAgY29uc3QgdHJhbnNmb3JtZXI6IHRzLlRyYW5zZm9ybWVyRmFjdG9yeTx0cy5Tb3VyY2VGaWxlPiA9XG4gICAgICBjb250ZXh0ID0+XG4gICAgICAoc291cmNlRmlsZSk6IHR5cGVvZiBzb3VyY2VGaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tTZXJ2aWNlLnJ1bihjb250ZXh0LCBzb3VyY2VGaWxlLCB0YXNrLnBheWxvYWQgYXMgYW55KTtcbiAgICAgIH07XG5cbiAgICAvLyBDcmVhdGUgYSBzb3VyY2UgZmlsZSBmcm9tIHRoZSBwcm92aWRlZCBjb2RlXG4gICAgY29uc3Qgc291cmNlRmlsZSA9IHRzLmNyZWF0ZVNvdXJjZUZpbGUoJ3Rlc3QudHMnLCBjb2RlLCB0cy5TY3JpcHRUYXJnZXQuTGF0ZXN0LCB0cnVlKTtcblxuICAgIC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm1lciB0byB0aGUgc291cmNlIGZpbGVcbiAgICBjb25zdCByZXN1bHQgPSB0cy50cmFuc2Zvcm0oc291cmNlRmlsZSwgW3RyYW5zZm9ybWVyXSk7XG4gICAgY29uc3QgdXBkYXRlZFNvdXJjZUZpbGUgPSByZXN1bHQudHJhbnNmb3JtZWRbMF07XG4gICAgY29uc3QgcHJpbnRlciA9IHRzLmNyZWF0ZVByaW50ZXIoKTtcbiAgICBjb25zdCB1cGRhdGVkQ29kZSA9IHByaW50ZXIucHJpbnRGaWxlKHVwZGF0ZWRTb3VyY2VGaWxlKTtcbiAgICByZXR1cm4gaW5pdGlhbEZpbGUgIT09IHVwZGF0ZWRDb2RlID8gdXBkYXRlZENvZGUgOiBjb2RlO1xuICB9XG59XG4iXX0=