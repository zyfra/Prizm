import * as ts from 'typescript';
import { IPrizmAstTaskCode, PrizmAstCodeTaskAction } from './model';
export declare abstract class PrizmAstCodeTask<T extends PrizmAstCodeTaskAction<any>> implements IPrizmAstTaskCode<T> {
    abstract type: T['type'];
    readonly payload: T['payload'];
    create(payload: T['payload']): T;
    abstract run(context: ts.TransformationContext, sourceFile: ts.SourceFile, payload: T['payload']): ts.SourceFile;
}
