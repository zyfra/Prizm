import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { USER_AGENT, WINDOW } from '@ng-web-apis/common';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_CHROMIUM_EDGE_START_VERSION } from '../../../constants/chromium';
import { PrizmSizeS, PrizmSizesXl } from '../../../util/size-bigger';
import { prizmIsEdgeOlderThan } from '../../../util/browser/is-edge-older-than';

@Component({
  selector: `prizm-progress-circle`,
  templateUrl: `./progress-circle.component.html`,
  styleUrls: [`./progress-circle.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmProgressCircleComponent extends PrizmAbstractTestId {
  @ViewChild(`progressCircle`, { static: true })
  private readonly progressCircle!: ElementRef<SVGCircleElement>;

  @Input()
  @prizmDefaultProp()
  value = 0;

  @Input()
  @prizmDefaultProp()
  max = 1;

  @Input()
  @HostBinding(`style.--prizm-progress-color`)
  @prizmDefaultProp()
  color: string | null = null;

  @Input()
  @HostBinding(`style.--prizm-progress-circle-track-color`)
  @prizmDefaultProp()
  trackColor: string | null = null;

  @Input()
  @HostBinding(`attr.data-size`)
  @prizmDefaultProp()
  size: PrizmSizeS | PrizmSizesXl = `m`;

  @HostBinding(`style.--progress-percentage`)
  get progressPercentage(): number {
    return this.value / this.max;
  }

  // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
  get oldEdgeRadiusFallback(): number | null {
    if (!prizmIsEdgeOlderThan(PRIZM_CHROMIUM_EDGE_START_VERSION, this.userAgent)) {
      return null;
    }

    const strokeWidth = parseInt(
      this.windowRef.getComputedStyle(this.progressCircle.nativeElement).strokeWidth,
      10
    );

    return (this.elementRef.nativeElement.offsetWidth - strokeWidth) / 2;
  }
  override readonly testId_ = 'ui_progress_circle';

  constructor(
    @Inject(USER_AGENT) private readonly userAgent: string,
    @Inject(WINDOW) private readonly windowRef: Window,
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
  ) {
    super();
  }
}
