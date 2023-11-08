import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { PrizmSizeM, PrizmSizeS } from '../../../util/size-bigger';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `progress[prizmProgressBar]`,
  template: ``,
  styleUrls: [`./progress-bar.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PrizmProgressBarComponent extends PrizmAbstractTestId {
  @Input()
  @HostBinding(`style.--prizm-progress-color`)
  color?: string | null;

  @Input()
  @HostBinding(`style.--prizm-progress-track-color`)
  @prizmDefaultProp()
  trackColor: string | null = null;

  @Input()
  @HostBinding(`attr.data-size`)
  @prizmDefaultProp()
  size: PrizmSizeS | PrizmSizeM = `m`;

  override readonly testId_ = 'ui_progress_bar';
}
