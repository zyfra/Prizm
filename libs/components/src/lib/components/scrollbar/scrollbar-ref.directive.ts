import { Directive, ElementRef, HostBinding, HostListener, Inject, Input } from '@angular/core';
import {
  PRIZM_IS_IOS,
  PRIZM_SCROLL_INTO_VIEW,
  PRIZM_SCROLL_REF,
  PRIZM_SCROLLABLE,
  prizmGetElementOffset,
  PrizmHoveredService,
  prizmIsFirefox,
  PrizmScrollbarVisibility,
} from '@prizm-ui/components';
import { CSS, USER_AGENT } from '@ng-web-apis/common';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

export function scrollRefFactory({ browserScrollRef }: PrizmScrollbarRefDirective): ElementRef<HTMLElement> {
  return browserScrollRef;
}

@Directive({
  selector: '[prizmScrollbarRef]',
  providers: [
    {
      provide: PRIZM_SCROLL_REF,
      useFactory: scrollRefFactory,
      deps: [PrizmScrollbarRefDirective],
    },
  ],
  exportAs: 'prizmScrollbarRef',
})
export class PrizmScrollbarRefDirective {
  readonly browserScrollRef = new ElementRef(this.elementRef.nativeElement);

  @Input()
  set visibility(visibility: PrizmScrollbarVisibility) {
    this.visibility$.next(visibility);
  }
  get visibility(): PrizmScrollbarVisibility {
    return this.visibility$.value;
  }

  @HostListener(`${PRIZM_SCROLLABLE}.stop`, ['$event.detail'])
  public onScrollable(element: HTMLElement): void {
    this.delegated = true;
    this.browserScrollRef.nativeElement = element;
  }

  private readonly visibility$: BehaviorSubject<PrizmScrollbarVisibility> =
    new BehaviorSubject<PrizmScrollbarVisibility>('auto');

  public readonly showScrollbars$: Observable<boolean> = this.visibility$.pipe(
    switchMap<PrizmScrollbarVisibility, Observable<boolean>>((visibility: PrizmScrollbarVisibility) => {
      const canShow = !this.isIos && (!this.isLegacy || this.delegated);
      if (!canShow) return of(false);

      switch (visibility) {
        case 'hidden':
          return of(false);

        case 'auto':
          return this.hoveredService.createHovered$(this.elementRef.nativeElement);
        default:
          return of(true);
      }
    }),
    shareReplay(1)
  );

  @HostListener(`${PRIZM_SCROLL_INTO_VIEW}.stop`, ['$event.detail'])
  public scrollIntoView(detail: HTMLElement): void {
    if (this.delegated) {
      return;
    }

    const { nativeElement } = this.browserScrollRef;
    const { offsetTop, offsetLeft } = prizmGetElementOffset(nativeElement, detail);

    nativeElement.scrollTop = offsetTop + detail.offsetHeight / 2 - nativeElement.clientHeight / 2;
    nativeElement.scrollLeft = offsetLeft + detail.offsetWidth / 2 - nativeElement.clientWidth / 2;
  }

  private delegated = false;

  private readonly isLegacy: boolean =
    !this.cssRef.supports('position', 'sticky') ||
    (prizmIsFirefox(this.userAgent) && !this.cssRef.supports('scrollbar-width', 'none'));

  @HostBinding('class._legacy')
  public get showNative(): boolean {
    return this.isLegacy && this.visibility === 'visible' && !this.delegated;
  }

  constructor(
    private readonly hoveredService: PrizmHoveredService,
    @Inject(CSS) private readonly cssRef: any,
    private readonly elementRef: ElementRef,
    @Inject(USER_AGENT) private readonly userAgent: string,
    @Inject(PRIZM_IS_IOS) private readonly isIos: boolean
  ) {}
}
