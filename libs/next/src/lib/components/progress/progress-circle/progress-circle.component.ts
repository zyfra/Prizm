import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, ViewChild } from '@angular/core';
import { USER_AGENT, WINDOW } from '@ng-web-apis/common';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZUI_CHROMIUM_EDGE_START_VERSION } from '../../../constants/chromium';
import { ZuiSizeS, ZuiSizesXl } from '../../../util/size-bigger';
import { zuiIsEdgeOlderThan } from '../../../util/browser/is-edge-older-than';

@Component({
    selector: `zui-progress-circle`,
    templateUrl: `./progress-circle.component.html`,
    styleUrls: [`./progress-circle.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiProgressCircleComponent {
    @ViewChild(`progressCircle`, {static: true})
    private readonly progressCircle!: ElementRef<SVGCircleElement>;

    @Input()
    @zuiDefaultProp()
    value = 0;

    @Input()
    @zuiDefaultProp()
    max = 1;

    @Input()
    @HostBinding(`style.--zui-progress-color`)
    @zuiDefaultProp()
    color: string | null = null;

    @Input()
    @HostBinding(`style.--zui-progress-circle-track-color`)
    @zuiDefaultProp()
    trackColor: string | null = null;

    @Input()
    @HostBinding(`attr.data-size`)
    @zuiDefaultProp()
    size: ZuiSizeS | ZuiSizesXl = `m`;

    @HostBinding(`style.--progress-percentage`)
    get progressPercentage(): number {
        return this.value / this.max;
    }

    // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
    get oldEdgeRadiusFallback(): number | null {
        if (!zuiIsEdgeOlderThan(ZUI_CHROMIUM_EDGE_START_VERSION, this.userAgent)) {
            return null;
        }

        const strokeWidth = parseInt(
            this.windowRef.getComputedStyle(this.progressCircle.nativeElement)
                .strokeWidth,
            10,
        );

        return (this.elementRef.nativeElement.offsetWidth - strokeWidth) / 2;
    }

    constructor(
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}
}
