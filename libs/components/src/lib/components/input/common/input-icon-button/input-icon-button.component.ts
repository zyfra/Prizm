import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[prizmInputIconButton]',
  templateUrl: './input-icon-button.component.html',
  styleUrls: ['./input-icon-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.interactive]': 'interactive',
    '[attr.tabindex]': 'tabindex',
  },
  standalone: true,
  imports: [PrizmIconsFullComponent],
})
export class PrizmInputIconButtonComponent extends PrizmAbstractTestId {
  @Input() size = 16;
  @Input() prizmInputIconButton!: string;
  @Input() interactive = false;

  @HostBinding('attr.disabled')
  @Input()
  get disabled() {
    return this._disabled || null;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  @HostBinding('class.disabled')
  get classDisabled() {
    return this._disabled;
  }
  private _disabled = false;
  @Input()
  @HostBinding('attr.type')
  type: 'button' | 'reset' | 'submit' = 'button';

  override readonly testId_ = 'ui_input_icon_button';

  get tabindex(): number {
    return this.interactive ? 0 : -1;
  }
}
