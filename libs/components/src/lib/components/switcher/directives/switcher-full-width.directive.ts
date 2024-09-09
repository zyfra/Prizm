import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[prizmSwitcherFullWidth]',
  standalone: true,
})
export class PrizmSwitcherFullWidthDirective {
  private _fullWidth = false;
  @Input()
  @HostBinding('class.full-width')
  get fullWidth() {
    return this._fullWidth || null;
  }
  set fullWidth(value: BooleanInput) {
    this._fullWidth = coerceBooleanProperty(value);
  }
}
