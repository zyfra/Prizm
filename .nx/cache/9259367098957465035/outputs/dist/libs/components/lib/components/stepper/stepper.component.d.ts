import { AfterContentInit, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmStepperStepDirective } from './stepper-step.directive';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmStepperComponent extends PrizmAbstractTestId implements AfterContentInit {
    title: string;
    currentStep: number;
    vertical: boolean;
    stepsSize: string;
    selectStep: EventEmitter<number>;
    prizmStepperStepDirectiveQL: QueryList<PrizmStepperStepDirective>;
    steps$: Observable<PrizmStepperStepDirective[]>;
    readonly testId_ = "ui_stepper";
    get currentStepTemplate(): TemplateRef<any> | null;
    ngAfterContentInit(): void;
    onSelectStep(step: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmStepperComponent, "prizm-stepper", never, { "title": { "alias": "title"; "required": false; }; "currentStep": { "alias": "currentStep"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; "stepsSize": { "alias": "stepsSize"; "required": false; }; }, { "selectStep": "selectStep"; }, ["prizmStepperStepDirectiveQL"], ["[prizmStepperFooter]"], true, never>;
}
