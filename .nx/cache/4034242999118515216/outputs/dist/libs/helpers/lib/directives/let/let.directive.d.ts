import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmLetContextService } from './let-context.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
interface LetContext<T> {
    $implicit: T | null;
    prizmLet: T | null;
}
/**
 * Это директива позволяет повторно использовать вычисленное значение в нескольких местах в шаблоне,
 * чтобы избежать пересчета геттеров или множества асинхронных каналов.
 *
 * @button <ng-container *prizmLet="{items: items$ | async, center: center} as $"> {{$.items?.count}} {{$.center}}</ng-container>
 * @button <ng-container *prizmLet="queryParams.isMap$ | async as isMap">{{isMap}}</ng-container>
 */
export declare class PrizmLetDirective<T> implements OnDestroy {
    private templateRef;
    private viewContainer;
    private contextService;
    get context(): T | null;
    get context$(): Observable<T | null>;
    constructor(templateRef: TemplateRef<LetContext<T>>, viewContainer: ViewContainerRef, contextService: PrizmLetContextService<T>);
    set init(newContext: T);
    private readonly ctx;
    private viewRef;
    ngOnDestroy(): void;
    private updateContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmLetDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmLetDirective<any>, "[prizmLet]", ["prizmLet"], { "init": { "alias": "prizmLet"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
