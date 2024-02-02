import * as ts from 'typescript';
import { PrizmAstCodeTask } from '../abstract';
import { IPrizmAddImportsToNgModuleCodeTask } from './model';
/**
 * @class PrizmAstAddImportsToNgModuleCodeTask
 * @extends {PrizmAstCodeTask<IPrizmAddImportsToNgModuleCodeTask>}
 *
 * @description
 * A class that represents a task for adding imports to an Angular NgModule.
 * It checks if the required import(s) already exist and adds them if they don't.
 * It utilizes the prizmAstAddImportToNgModule utility function to perform the actual transformation.
 */
export declare class PrizmAstAddImportsToNgModuleCodeTask extends PrizmAstCodeTask<IPrizmAddImportsToNgModuleCodeTask> {
    readonly type = "add-imports-to-ng-module";
    /**
     * @function run
     * @description
     * Runs the task to add imports to an Angular NgModule.
     *
     * @param {ts.TransformationContext} context - The transformation context.
     * @param {ts.SourceFile} sourceFile - The source file to be transformed.
     * @param {IPrizmAddImportsToNgModuleCodeTask['payload']} payload - The payload that contains the information about the imports.
     *
     * @returns {ts.SourceFile} - The transformed source file.
     */
    run(context: ts.TransformationContext, sourceFile: ts.SourceFile, payload: IPrizmAddImportsToNgModuleCodeTask['payload']): ts.SourceFile;
}
