import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { USER_AGENT } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmResizeService } from '../../../services/resize.service';
import { prizmIsEdgeOlderThan } from '../../../util/browser/is-edge-older-than';
import { PRIZM_CHROMIUM_EDGE_START_VERSION } from '../../../constants/chromium';
import { prizmPure } from '@prizm-ui/core';

function calculateColorSegments(colors: string[], progressWidth: number): string {
  const segmentWidth = Math.ceil(progressWidth / colors.length);
  const colorsString = colors.reduce(
    (acc, color, i) => `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
    ``
  );

  return `linear-gradient(to right ${colorsString})`;
}

@Directive({
  selector: `progress[prizmProgressBar][prizmProgressColorSegments]`,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[$.style.--prizm-progress-color]': `calcSegments$`,
    '($.style.--prizm-progress-color)': `0`,
  },
  standalone: true,
  providers: [PrizmDestroyService, PrizmResizeService],
})
export class PrizmProgressColorSegmentsDirective {
  // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
  private readonly isOldBrowsers = prizmIsEdgeOlderThan(PRIZM_CHROMIUM_EDGE_START_VERSION, this.userAgent);

  @Input()
  prizmProgressColorSegments: string[] = [];

  @prizmPure
  get calcSegments$(): Observable<string> {
    return this.resize$.pipe(
      map(() =>
        this.isOldBrowsers
          ? this.prizmProgressColorSegments[0]
          : calculateColorSegments(this.prizmProgressColorSegments, this.elementRef.nativeElement.offsetWidth)
      )
    );
  }

  constructor(
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLProgressElement>,
    @Inject(PrizmResizeService) private readonly resize$: Observable<unknown>,
    @Inject(USER_AGENT) private readonly userAgent: string
  ) {}
}
