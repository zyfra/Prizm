import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';

/**
 * @deprecated
 * */
@Component({
  selector: 'prizm-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent extends PrizmAbstractTestId {
  @Input() iconClass: string | null = null;
  @Input() size: string | number = 16;

  override get generateManeTestId(): string {
    return 'ui_icon' + this.iconClass;
  }
}
