import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

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
})
export class PrizmInputIconButtonComponent {
  @Input() size = 16;
  @Input() prizmInputIconButton: string;
  @Input() interactive = false;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_input_icon_button';

  get tabindex(): number {
    return this.interactive ? 0 : -1;
  }
}
