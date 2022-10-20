import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZuiSizeM, ZuiSizeS } from '../../../util/size-bigger';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
    selector: `progress[zuiProgressBar]`,
    template: ``,
    styleUrls: [`./progress-bar.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiProgressBarComponent {
    @Input()
    @HostBinding(`style.--zui-progress-color`)
    color?: string;

    @Input()
    @HostBinding(`style.--zui-progress-track-color`)
    @zuiDefaultProp()
    trackColor: string | null = null;

    @Input()
    @HostBinding(`attr.data-size`)
    @zuiDefaultProp()
    size: ZuiSizeS | ZuiSizeM = `m`;
}
