import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[prizmStepperSelectorItem]',
  standalone: true,
})
export class PrizmStepperSelectorItemDirective {
  @Input('prizmStepperSelectorItem') stepIndex = 0;
  @Input()
  @HostBinding('disabled')
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = true;

  constructor(private host: ElementRef<HTMLBRElement>) {}

  public focus(): void {
    this.host.nativeElement.focus();
  }
}
