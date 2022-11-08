import { Directive, EventEmitter, Input, OnChanges, Output, TemplateRef } from '@angular/core';

import { PrizmStepperStatus } from './types';

@Directive({
  selector: '[pzmStepperStep]',
})
export class PrizmStepperStepDirective implements OnChanges {
  @Input('pzmStepperStep') index = 0;
  @Input() title = '';
  @Input() status: PrizmStepperStatus = 'default';
  @Input() disabled = true;

  @Output() stateChanged = new EventEmitter<number>();
  constructor(public template: TemplateRef<any>) {}

  public ngOnChanges(): void {
    this.stateChanged.next(this.index);
  }
}

