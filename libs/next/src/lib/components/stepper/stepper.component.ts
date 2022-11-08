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

@Component({
  selector: 'pzm-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.less'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'pzm-stepper',
    '[class.vertical]': 'vertical',
  },
})
export class PrizmStepperComponent implements AfterContentInit {
  @Input() title = '';

  @Input() currentStep = 1;

  @Input() vertical = false;

  @Input() stepsSize = 'auto';

  @Output() selectStep = new EventEmitter<number>();

  @ContentChildren(PrizmStepperStepDirective)
  pzmStepperStepDirectiveQL!: QueryList<PrizmStepperStepDirective>;

  steps$!: Observable<PrizmStepperStepDirective[]>;

  get currentStepTemplate(): TemplateRef<any> {
    const currentStep = this.pzmStepperStepDirectiveQL.find(
      stepDirective => stepDirective.index === this.currentStep
    );
    return currentStep.template;
  }

  public ngAfterContentInit(): void {
    const steps$ = this.pzmStepperStepDirectiveQL.changes.pipe(
      startWith<QueryList<PrizmStepperStepDirective>>(this.pzmStepperStepDirectiveQL)
    );

    const stepsInnerStateChanged$ = merge(
      ...this.pzmStepperStepDirectiveQL.toArray().map(stepDirective => stepDirective.stateChanged)
    );

    this.steps$ = merge(steps$, stepsInnerStateChanged$.pipe(switchMap(() => steps$))).pipe(
      map(ql => ql.toArray().sort(item => item.index))
    );
  }

  public onSelectStep(step: number): void {
    this.selectStep.next(step);
  }
}

