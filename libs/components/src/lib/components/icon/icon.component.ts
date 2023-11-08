import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';

/**
 * @deprecated
 * */
@Component({
  selector: 'prizm-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PrizmIconComponent extends PrizmAbstractTestId {
  @Input() iconClass: string | null = null;
  @Input() size: string | number = 16;

  override get generateManeTestId(): string {
    return 'ui_icon' + this.iconClass;
  }
}
