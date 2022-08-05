import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[zuiInputIconButton]',
  templateUrl: './input-icon-button.component.html',
  styleUrls: ['./input-icon-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.interactive]': 'interactive',
    '[attr.tabindex]': 'tabindex',
  },
})
export class ZuiInputIconButtonComponent {
  @Input() size = 16;
  @Input() zuiInputIconButton: string;
  @Input() interactive = false;

  get tabindex(): number {
    return this.interactive ? 0 : -1;
  }
}

