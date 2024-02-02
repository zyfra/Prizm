import { EventEmitter, QueryList } from '@angular/core';
import { PrizmStepperSelectorItemDirective } from './stepper-selector-item.directive';
import { PrizmStepperStepDirective } from './stepper-step.directive';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmStepperSelectorComponent extends PrizmAbstractTestId {
    steps: PrizmStepperStepDirective[];
    currentStep: number;
    vertical: boolean;
    selectStep: EventEmitter<number>;
    selectorItems: QueryList<PrizmStepperSelectorItemDirective>;
    readonly testId_ = "ui_stepper--selector";
    clickOnStep(index: number): void;
    onKeyDown(event: KeyboardEvent, stepNumber: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmStepperSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmStepperSelectorComponent, "prizm-stepper-selector", never, { "steps": { "alias": "steps"; "required": false; }; "currentStep": { "alias": "currentStep"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; }, { "selectStep": "selectStep"; }, never, never, true, never>;
}
