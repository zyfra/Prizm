import { Directive, Input } from '@angular/core';
import { pzmDefaultProp } from '../../../decorators';
import { PrizmHandler } from '../../../types';

@Directive({
    selector: 'pzm-tree[childrenHandler]',
})
export class PrizmTreeChildrenDirective<T> {
    @Input()
    @pzmDefaultProp()
    childrenHandler: PrizmHandler<T, readonly T[]> =
        PrizmTreeChildrenDirective.defaultHandler;

    public static defaultHandler<G>(item: G): readonly G[] {
        return Array.isArray(item) ? item : [];
    }
}
