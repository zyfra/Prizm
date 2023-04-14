import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmSizeM, PrizmSizeS } from '../../../util/size-bigger';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `progress[prizmProgressBar]`,
  template: ``,
  styleUrls: [`./progress-bar.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmProgressBarComponent {
  @Input()
  @HostBinding(`style.--prizm-progress-color`)
  color?: string;

  @Input()
  @HostBinding(`style.--prizm-progress-track-color`)
  @prizmDefaultProp()
  trackColor: string | null = null;

  @Input()
  @HostBinding(`attr.data-size`)
  @prizmDefaultProp()
  size: PrizmSizeS | PrizmSizeM = `m`;
}
