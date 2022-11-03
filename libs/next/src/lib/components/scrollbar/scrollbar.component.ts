import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
} from '@angular/core';
import { PZM_IS_IOS, PZM_SCROLL_REF } from '../../tokens';
import { CSS, USER_AGENT } from '@ng-web-apis/common';
import { pzmIsFirefox } from '../../util/browser';
import { PZM_SCROLL_INTO_VIEW, PZM_SCROLLABLE } from '../../constants/events';
import { pzmGetElementOffset } from '../../util/dom';
import { PrizmHoveredService } from '../../services';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { PrizmScrollbarVisibility } from './scrollbar.model';

export function scrollRefFactory(
 {
   browserScrollRef,
 }: PrizmScrollbarComponent
): ElementRef<HTMLElement> {
  return browserScrollRef;
}


@Component({
    selector: 'pzm-scrollbar',
    templateUrl: './scrollbar.component.html',
    styleUrls: ['./scrollbar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
          provide: PZM_SCROLL_REF,
          useFactory: scrollRefFactory,
          deps: [PrizmScrollbarComponent],
        },
    ],
})
export class PrizmScrollbarComponent {
    @Input()
    set visibility(visibility: PrizmScrollbarVisibility) {
      this.visibility$.next(visibility)
    }
    get visibility(): PrizmScrollbarVisibility {
      return this.visibility$.value;
    }

    @HostBinding('attr.testId')
    readonly testId = 'pzm_scrollbar';

    private delegated = false;

    private readonly isLegacy: boolean =
      !this.cssRef.supports('position', 'sticky') ||
      (pzmIsFirefox(this.userAgent) && !this.cssRef.supports('scrollbar-width', 'none'));

    private readonly visibility$: BehaviorSubject<PrizmScrollbarVisibility> = new BehaviorSubject<PrizmScrollbarVisibility>('auto');

    public readonly showScrollbars$: Observable<boolean> = this.visibility$.pipe(
      switchMap<PrizmScrollbarVisibility, Observable<boolean>>(
        (visibility: PrizmScrollbarVisibility) => {
          const canShow = !this.isIos && (!this.isLegacy || this.delegated);
          if (!canShow) return of(false);

          switch (visibility) {
            case 'hidden':
              return of(false);

            case 'auto':
              return this.hoveredService.createHovered$(
                this.elementRef.nativeElement
              );
            default:
              return of(true);
          }
        }
      ),
      shareReplay(1)
    );


    readonly browserScrollRef = new ElementRef(this.elementRef.nativeElement);

    constructor(
        private readonly hoveredService: PrizmHoveredService,
        @Inject(CSS) private readonly cssRef: any,
        private readonly elementRef: ElementRef,
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(PZM_IS_IOS) private readonly isIos: boolean,
    ) {}

    @HostBinding('class._legacy')
    public get showNative(): boolean {
        return this.isLegacy && this.visibility === 'visible' && !this.delegated;
    }

    @HostListener(`${PZM_SCROLLABLE}.stop`, ['$event.detail'])
    public onScrollable(element: HTMLElement): void {
        this.delegated = true;
        this.browserScrollRef.nativeElement = element;
    }

    @HostListener(`${PZM_SCROLL_INTO_VIEW}.stop`, ['$event.detail'])
    public scrollIntoView(detail: HTMLElement): void {
        if (this.delegated) {
            return;
        }

        const {nativeElement} = this.browserScrollRef;
        const {offsetTop, offsetLeft} = pzmGetElementOffset(nativeElement, detail);

        nativeElement.scrollTop =
            offsetTop + detail.offsetHeight / 2 - nativeElement.clientHeight / 2;
        nativeElement.scrollLeft =
            offsetLeft + detail.offsetWidth / 2 - nativeElement.clientWidth / 2;
    }
}

