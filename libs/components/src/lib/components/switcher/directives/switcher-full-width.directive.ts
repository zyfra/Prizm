import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { PrizmSyncOnChange } from '@prizm-ui/helpers';

@Directive({
  selector: '[prizmSwitcherFullWidth]',
  standalone: true,
})
export class PrizmSwitcherFullWidthDirective extends PrizmSyncOnChange {
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
