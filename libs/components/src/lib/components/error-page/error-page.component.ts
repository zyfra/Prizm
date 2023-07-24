import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-error-page',
  templateUrl: 'error-page.component.html',
  styleUrls: ['error-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmErrorPageComponent extends PrizmAbstractTestId {
  @Input() code!: number;
  @Input() title!: string;
  override readonly testId_ = 'ui_error-page';
}
