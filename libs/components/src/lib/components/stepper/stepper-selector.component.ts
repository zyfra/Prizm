import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { PrizmStepperSelectorItemDirective } from './stepper-selector-item.directive';
import { PrizmStepperStepDirective } from './stepper-step.directive';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-stepper-selector',
  templateUrl: './stepper-selector.component.html',
  styleUrls: ['./stepper-selector.component.less'],
  animations: [
    trigger('inOut', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
    ]),
  ],
})
export class PrizmStepperSelectorComponent extends PrizmAbstractTestId {
  @Input() steps: Array<PrizmStepperStepDirective> = [];

  @Input() currentStep!: number;

  @Input() @HostBinding('class.vertical') vertical!: boolean;

  @Output() selectStep = new EventEmitter<number>();

  @ViewChildren(PrizmStepperSelectorItemDirective)
  selectorItems: QueryList<PrizmStepperSelectorItemDirective>;
  override readonly testId_ = 'ui_stepper--selector';

  public clickOnStep(index: number): void {
    if (this.currentStep !== index) {
      this.selectStep.next(index);
    }
  }

  public onKeyDown(event: KeyboardEvent, stepNumber: number): void {
    if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();

      const selectorItems = this.selectorItems.toArray();

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowUp': {
          for (let i = 0; i < selectorItems.length; i++) {
            const item = selectorItems[i];
            if (item.stepIndex > stepNumber && item.disabled === false) {
              item.focus();
              break;
            }
          }
          break;
        }
        case 'ArrowDown':
        case 'ArrowLeft': {
          for (let i = selectorItems.length - 1; i >= 0; i--) {
            const item = selectorItems[i];
            if (item.stepIndex < stepNumber && item.disabled === false) {
              item.focus();
              break;
            }
          }

          break;
        }
      }
    }
  }
}
