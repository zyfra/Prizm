import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { USER_AGENT } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { PzmResizeService } from '../../../services/resize.service';
import { pzmIsEdgeOlderThan } from '../../../util/browser/is-edge-older-than';
import { PZM_CHROMIUM_EDGE_START_VERSION } from '../../../constants/chromium';
import { pzmPure } from '../../../decorators/pure';

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
    selector: `progress[pzmProgressBar][pzmProgressColorSegments]`,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        '[$.style.--pzm-progress-color]': `calcSegments$`,
        '($.style.--pzm-progress-color)': `0`,
    },
    providers: [PzmDestroyService, PzmResizeService],
})
export class PzmProgressColorSegmentsDirective {
    // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
    private readonly isOldBrowsers = pzmIsEdgeOlderThan(
        PZM_CHROMIUM_EDGE_START_VERSION,
        this.userAgent,
    );

    @Input()
    pzmProgressColorSegments: string[] = [];

    @pzmPure
    get calcSegments$(): Observable<string> {
        return this.resize$.pipe(
            map(() =>
                this.isOldBrowsers
                    ? this.pzmProgressColorSegments[0]
                    : calculateColorSegments(
                          this.pzmProgressColorSegments,
                          this.elementRef.nativeElement.offsetWidth,
                      ),
            )
        );
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLProgressElement>,
        @Inject(PzmResizeService) private readonly resize$: Observable<unknown>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {}
}
