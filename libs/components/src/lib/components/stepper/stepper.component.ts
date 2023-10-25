import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';

import { merge, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { PrizmStepperStepDirective } from './stepper-step.directive';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.less'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'prizm-stepper',
    '[class.vertical]': 'vertical',
  },
})
export class PrizmStepperComponent extends PrizmAbstractTestId implements AfterContentInit {
  @Input() title = '';

  @Input() currentStep = 1;

  @Input() vertical = false;

  @Input() stepsSize = 'auto';

  @Output() selectStep = new EventEmitter<number>();

  @ContentChildren(PrizmStepperStepDirective)
  prizmStepperStepDirectiveQL!: QueryList<PrizmStepperStepDirective>;

  steps$!: Observable<PrizmStepperStepDirective[]>;
  override readonly testId_ = 'ui_stepper';
  get currentStepTemplate(): TemplateRef<unknown> | null {
    const currentStep = this.prizmStepperStepDirectiveQL.find(
      stepDirective => stepDirective.index === this.currentStep
    );
    return currentStep?.template ?? null;
  }

  public ngAfterContentInit(): void {
    const steps$ = this.prizmStepperStepDirectiveQL.changes.pipe(
      startWith<QueryList<PrizmStepperStepDirective>>(this.prizmStepperStepDirectiveQL)
    );

    const stepsInnerStateChanged$ = merge(
      ...this.prizmStepperStepDirectiveQL.toArray().map(stepDirective => stepDirective.stateChanged)
    );

    this.steps$ = merge(steps$, stepsInnerStateChanged$.pipe(switchMap(() => steps$))).pipe(
      map(ql => ql.toArray().sort((prev, curr) => prev.index - curr.index))
    );
  }

  public onSelectStep(step: number): void {
    this.selectStep.next(step);
  }
}
