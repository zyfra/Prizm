import { OnDestroy, TemplateRef, TrackByFunction, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmTableRowContext } from '../table.types';
import * as i0 from "@angular/core";
export declare class PrizmRowDirective<T extends Partial<Record<keyof T, any>>> implements OnDestroy {
    readonly template: TemplateRef<PrizmTableRowContext<T>>;
    readonly viewContainer: ViewContainerRef;
    prizmRowOf: readonly T[];
    prizmRowGetRowId: string | ((i: T) => unknown);
    prizmRowGetChildren: (element: T) => Observable<T[]>;
    static ngTemplateContextGuard<T>(_dir: PrizmRowDirective<T>, _ctx: unknown): _ctx is PrizmTableRowContext<T>;
    prizmRowTrackBy: TrackByFunction<T>;
    constructor(template: TemplateRef<PrizmTableRowContext<T>>, viewContainer: ViewContainerRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmRowDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmRowDirective<any>, "ng-template[prizmRow]", ["prizmRow"], { "prizmRowOf": "prizmRowOf"; "prizmRowGetRowId": "prizmRowGetRowId"; "prizmRowGetChildren": "prizmRowGetChildren"; "prizmRowTrackBy": "prizmRowTrackBy"; }, {}, never, never, false, never>;
}
