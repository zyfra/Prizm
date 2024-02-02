import { PrizmTableDirective } from './table.directive';
import * as i0 from "@angular/core";
export declare class PrizmSortByDirective<T extends Partial<Record<keyof T, any>>> {
    private readonly table;
    private readonly sortables;
    prizmSortBy: keyof T | string | null;
    readonly prizmSortByChange: import("rxjs").Observable<keyof T | null>;
    constructor(table: PrizmTableDirective<T>);
    private getKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSortByDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmSortByDirective<any>, "table[prizmTable][prizmSortBy]", never, { "prizmSortBy": { "alias": "prizmSortBy"; "required": false; }; }, { "prizmSortByChange": "prizmSortByChange"; }, ["sortables"], never, false, never>;
}
