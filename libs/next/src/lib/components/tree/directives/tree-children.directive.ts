import { Directive, Input } from '@angular/core';
import { pzmDefaultProp } from '../../../decorators';
import { PzmHandler } from '../../../types';

@Directive({
    selector: 'pzm-tree[childrenHandler]',
})
export class PzmTreeChildrenDirective<T> {
    @Input()
    @pzmDefaultProp()
    childrenHandler: PzmHandler<T, readonly T[]> =
        PzmTreeChildrenDirective.defaultHandler;

    public static defaultHandler<G>(item: G): readonly G[] {
        return Array.isArray(item) ? item : [];
    }
}
