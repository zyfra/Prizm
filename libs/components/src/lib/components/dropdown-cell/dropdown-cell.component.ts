import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PolymorphContent, PolymorphModule } from '../../directives';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { CommonModule } from '@angular/common';
import { PrizmChipsModule } from '../chips';

@Component({
  selector: 'prizm-dropdown-cell',
  templateUrl: './dropdown-cell.component.html',
  styleUrls: ['./dropdown-cell.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PolymorphModule, PrizmChipsModule],
})
export class PrizmDropdownCellComponent extends PrizmAbstractTestId {
  @Input() public title: PolymorphContent = '';
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
  @Input() contentType: 'flat' | 'chips' = 'flat';

  override readonly testId_ = 'ui_dropdown_cell';
}
