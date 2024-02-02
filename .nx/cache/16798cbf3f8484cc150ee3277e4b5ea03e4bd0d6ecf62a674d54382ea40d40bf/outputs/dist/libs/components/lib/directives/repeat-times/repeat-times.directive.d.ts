import { TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmContextWithImplicit } from '../../types/context-with-implicit';
import * as i0 from "@angular/core";
export declare class PrizmRepeatTimesContext implements PrizmContextWithImplicit<number> {
    readonly $implicit: number;
    constructor($implicit: number);
}
/**
 * Directive similar to ngFor but using a number of repetitions rather than an array
 *
 * {@link PrizmRepeatTimesDirective.prizmRepeatTimesOf requested number of times}.
 * {@link PrizmRepeatTimesContext context} for every instance of the template inherits outer context and stores
 * {@link PrizmRepeatTimesContext.$implicit index} of a template instance.
 */
export declare class PrizmRepeatTimesDirective {
    private readonly viewContainer;
    private readonly templateRef;
    set prizmRepeatTimesOf(count: number);
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<PrizmRepeatTimesContext>);
    private addContainers;
    private removeContainers;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmRepeatTimesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmRepeatTimesDirective, "[prizmRepeatTimes][prizmRepeatTimesOf]", never, { "prizmRepeatTimesOf": "prizmRepeatTimesOf"; }, {}, never, never, true, never>;
}
