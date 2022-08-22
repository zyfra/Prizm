import { Directive, Input } from '@angular/core';
import { zuiDefaultProp } from '../../../decorators';
import { ZuiHandler } from '../../../types';

@Directive({
    selector: 'zui-tree[childrenHandler]',
})
export class ZuiTreeChildrenDirective<T> {
    @Input()
    @zuiDefaultProp()
    childrenHandler: ZuiHandler<T, readonly T[]> =
        ZuiTreeChildrenDirective.defaultHandler;

    public static defaultHandler<G>(item: G): readonly G[] {
        return Array.isArray(item) ? item : [];
    }
}
