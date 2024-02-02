import { IPrizmAstTaskTemplate, PrizmAstTemplateContext, PrizmTemplateTaskAction } from './model';
import { PrizmTemplateNode } from './task';
export declare abstract class PrizmAstTaskTemplate<T extends PrizmTemplateTaskAction<any>> implements IPrizmAstTaskTemplate<T> {
    abstract type: T['type'];
    readonly payload: T['payload'];
    create(payload: T['payload']): T;
    abstract run(node: PrizmTemplateNode, payload: T['payload'], context: PrizmAstTemplateContext): PrizmTemplateNode;
}
