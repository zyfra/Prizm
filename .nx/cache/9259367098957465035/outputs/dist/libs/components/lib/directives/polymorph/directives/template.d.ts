import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
export declare class PolymorphTemplate<C = any> {
    readonly template: TemplateRef<C>;
    private readonly changeDetectorRef;
    polymorph: C | '';
    constructor(template: TemplateRef<C>, changeDetectorRef: ChangeDetectorRef);
    static ngTemplateContextGuard<T>(_dir: PolymorphTemplate<T>, _ctx: any): _ctx is T extends string ? any : T;
    check(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PolymorphTemplate<any>, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PolymorphTemplate<any>, "ng-template[polymorph]", ["polymorph"], { "polymorph": { "alias": "polymorph"; "required": false; }; }, {}, never, never, true, never>;
}
