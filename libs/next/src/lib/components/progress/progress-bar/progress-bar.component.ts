import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PzmSizeM, PzmSizeS } from '../../../util/size-bigger';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
    selector: `progress[pzmProgressBar]`,
    template: ``,
    styleUrls: [`./progress-bar.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmProgressBarComponent {
    @Input()
    @HostBinding(`style.--pzm-progress-color`)
    color?: string;

    @Input()
    @HostBinding(`style.--pzm-progress-track-color`)
    @pzmDefaultProp()
    trackColor: string | null = null;

    @Input()
    @HostBinding(`attr.data-size`)
    @pzmDefaultProp()
    size: PzmSizeS | PzmSizeM = `m`;
}
