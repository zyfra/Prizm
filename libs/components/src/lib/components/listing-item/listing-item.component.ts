import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PolymorphOutletDirective } from '../../directives';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prizm-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PolymorphOutletDirective],
})
export class PrizmListingItemComponent extends PrizmAbstractTestId {
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get selected() {
    return this._selected;
  }
  set selected(value: BooleanInput) {
    this._selected = coerceBooleanProperty(value);
  }
  private _selected = false;

  override readonly testId_ = 'ui_listing_item';
}
