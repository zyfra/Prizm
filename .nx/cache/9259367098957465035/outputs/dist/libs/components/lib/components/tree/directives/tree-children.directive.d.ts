import { PrizmHandler } from '../../../types';
import * as i0 from "@angular/core";
export declare class PrizmTreeChildrenDirective<T> {
    childrenHandler: PrizmHandler<T, readonly T[]>;
    static defaultHandler<G>(item: G): readonly G[];
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeChildrenDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTreeChildrenDirective<any>, "prizm-tree[childrenHandler]", never, { "childrenHandler": { "alias": "childrenHandler"; "required": false; }; }, {}, never, never, false, never>;
}
