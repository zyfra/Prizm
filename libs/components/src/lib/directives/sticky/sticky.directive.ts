import {
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  Optional,
  Renderer2,
} from '@angular/core';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { debounceTime, filter, map, observeOn, switchMap, takeUntil, tap } from 'rxjs/operators';
import { prizmToPx } from '../../util';
import { PrizmDestroyService, prizmElementResized$ } from '@prizm-ui/helpers';
import { PrizmStickyRelativeService } from './sticky-relative.service';
import { animationFrameScheduler, combineLatest, merge, of, Subject } from 'rxjs';
import { result } from 'lodash';

@Directive({
  selector: '[prizmStickyLeft], [prizmStickyRight], [prizmStickyTop], [prizmStickyBottom]',
  providers: [PrizmDestroyService, ResizeObserverService],
})
export class PrizmStickyDirective implements OnChanges {
  @HostBinding('class.prizm-sticky-left')
  @Input()
  prizmStickyLeft!: boolean;

  @HostBinding('class.prizm-sticky-right')
  @Input()
  prizmStickyRight!: boolean;

  @HostBinding('class.prizm-sticky-top')
  @Input()
  prizmStickyTop!: boolean;

  @HostBinding('class.prizm-sticky-bottom')
  @Input()
  prizmStickyBottom!: boolean;

  @Input()
  prizmStikyRelative?: HTMLElement;

  @Input()
  position = 'sticky';

  @HostBinding('style.position')
  get applySticky() {
    return this.prizmStickyLeft || this.prizmStickyRight || this.prizmStickyTop || this.prizmStickyBottom
      ? this.position
      : '';
  }

  private readonly rect$ = this.entries$.pipe(map(() => this.elRef.nativeElement.getBoundingClientRect()));
  private readonly destroyPrevious$ = new Subject<void>();

  constructor(
    private readonly elRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    @Optional() private readonly relativeService: PrizmStickyRelativeService,
    private readonly destroy$: PrizmDestroyService,
    @Inject(ResizeObserverService) private readonly entries$: ResizeObserverService
  ) {}

  public ngOnChanges(): void {
    this.init();
  }

  private init(): void {
    this.destroyPrevious$.next();

    const parent = this.prizmStikyRelative ?? this.relativeService?.element;

    merge(this.rect$)
      .pipe(
        observeOn(animationFrameScheduler),
        filter(i => Boolean(i.width || i.height)),
        switchMap(result => {
          if (this.prizmStickyRight) this.renderer.removeStyle(this.elRef.nativeElement, 'right');
          if (this.prizmStickyLeft) this.renderer.removeStyle(this.elRef.nativeElement, 'left');
          if (this.prizmStickyTop) this.renderer.removeStyle(this.elRef.nativeElement, 'top');
          if (this.prizmStickyBottom) this.renderer.removeStyle(this.elRef.nativeElement, 'bottom');

          return of(result).pipe(debounceTime(0));
        }),
        tap(() => {
          const parentRect = parent?.getBoundingClientRect();
          const elRect = this.elRef.nativeElement.getBoundingClientRect();
          let styleRight = 0;
          if (this.prizmStickyLeft) {
            const left = parentRect?.left ? elRect.left - parentRect.left : elRect.left;
            this.renderer.setStyle(this.elRef.nativeElement, 'left', prizmToPx(left));
          }
          if (this.prizmStickyRight) {
            styleRight = parseInt(this.elRef.nativeElement.style.right || '0');
            const parentRect = parent?.getBoundingClientRect();
            const elRect = this.elRef.nativeElement.getBoundingClientRect();

            let right = elRect.right;
            let scrollOffset = 0;
            let diff = 0;
            if (parent) {
              scrollOffset = parent.scrollWidth - parent.clientWidth - parent.scrollLeft;
              diff = Math.abs(elRect.right - parentRect.right - scrollOffset - styleRight);
              right = Math.floor(diff);
            }
            this.renderer.setStyle(this.elRef.nativeElement, 'right', prizmToPx(right));
          }
          if (this.prizmStickyTop) {
            const top = parentRect?.top ? elRect.top - parentRect.top : elRect.top;
            this.renderer.setStyle(this.elRef.nativeElement, 'top', prizmToPx(top));
          }
          if (this.prizmStickyBottom) {
            const bottom = parentRect?.bottom ? elRect.bottom - parentRect.bottom : elRect.bottom;
            this.renderer.setStyle(this.elRef.nativeElement, 'bottom', prizmToPx(bottom));
          }
        }),

        takeUntil(this.destroyPrevious$),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
