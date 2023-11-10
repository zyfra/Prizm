import { Directive, EventEmitter, Input, OnChanges, Output, TemplateRef } from '@angular/core';

import { PrizmStepperStatus } from './types';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[prizmStepperStep]',
  standalone: true,
})
export class PrizmStepperStepDirective implements OnChanges {
  @Input('prizmStepperStep') index = 0;
  @Input() title = '';
  @Input() status: PrizmStepperStatus = 'default';

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Output() stateChanged = new EventEmitter<number>();
  constructor(public template: TemplateRef<any>) {}

  public ngOnChanges(): void {
    this.stateChanged.next(this.index);
  }
}
