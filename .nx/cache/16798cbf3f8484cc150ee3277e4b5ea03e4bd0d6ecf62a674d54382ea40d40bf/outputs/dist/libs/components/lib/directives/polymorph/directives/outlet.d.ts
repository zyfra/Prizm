import { DoCheck, Injector, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrimitiveContext } from '../classes/primitive-context';
import { PolymorphContent } from '../types/content';
import * as i0 from "@angular/core";
export declare class PolymorphOutletDirective<C extends object> implements OnChanges, DoCheck {
    private readonly viewContainerRef;
    private readonly currentInjector;
    private readonly templateRef;
    private viewRef?;
    private componentRef?;
    content: PolymorphContent<C>;
    context: C;
    injector: Injector;
    constructor(viewContainerRef: ViewContainerRef, currentInjector: Injector, templateRef: TemplateRef<PrimitiveContext>);
    private get template();
    ngOnChanges({ content }: SimpleChanges): void;
    ngDoCheck(): void;
    private getContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PolymorphOutletDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PolymorphOutletDirective<any>, "[polymorphOutlet]", never, { "content": "polymorphOutlet"; "context": "polymorphOutletContext"; "injector": "polymorphOutletInjector"; }, {}, never, never, true, never>;
}
