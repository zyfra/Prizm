import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { USER_AGENT } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiResizeService } from '../../../services/resize.service';
import { zuiIsEdgeOlderThan } from '../../../util/browser/is-edge-older-than';
import { ZUI_CHROMIUM_EDGE_START_VERSION } from '../../../constants/chromium';
import { zuiPure } from '../../../decorators/pure';

function calculateColorSegments(colors: string[], progressWidth: number): string {
    const segmentWidth = Math.ceil(progressWidth / colors.length);
    const colorsString = colors.reduce(
        (acc, color, i) =>
            `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
        ``,
    );

    return `linear-gradient(to right ${colorsString})`;
}

@Directive({
    selector: `progress[zuiProgressBar][zuiProgressColorSegments]`,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        '[$.style.--zui-progress-color]': `calcSegments$`,
        '($.style.--zui-progress-color)': `0`,
    },
    providers: [ZuiDestroyService, ZuiResizeService],
})
export class ZuiProgressColorSegmentsDirective {
    // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
    private readonly isOldBrowsers = zuiIsEdgeOlderThan(
        ZUI_CHROMIUM_EDGE_START_VERSION,
        this.userAgent,
    );

    @Input()
    zuiProgressColorSegments: string[] = [];

    @zuiPure
    get calcSegments$(): Observable<string> {
        return this.resize$.pipe(
            map(() =>
                this.isOldBrowsers
                    ? this.zuiProgressColorSegments[0]
                    : calculateColorSegments(
                          this.zuiProgressColorSegments,
                          this.elementRef.nativeElement.offsetWidth,
                      ),
            ),
        );
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLProgressElement>,
        @Inject(ZuiResizeService) private readonly resize$: Observable<unknown>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {}
}
