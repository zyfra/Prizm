import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `label[prizmProgressLabel]`,
  templateUrl: `./progress-label.component.html`,
  styleUrls: [`./progress-label.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PrizmProgressLabelComponent extends PrizmAbstractTestId {
  override readonly testId_ = 'ui_progress_label';
}
