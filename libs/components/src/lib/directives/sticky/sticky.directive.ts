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
import { filter, map, observeOn, switchMap, takeUntil, tap } from 'rxjs/operators';
import { prizmToPx } from '../../util';
import { moveInEventLoopIteration, PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmStickyRelativeService } from './sticky-relative.service';
import { animationFrameScheduler, merge, of, Subject } from 'rxjs';

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
  prizmStickyRelative?: HTMLElement;

  @Input()
  position = 'sticky';

  @Input()
  stylesOnSticky?: Record<string, unknown>;

  @HostBinding('style.position')
  get applySticky() {
    return this.prizmStickyLeft || this.prizmStickyRight || this.prizmStickyTop || this.prizmStickyBottom
      ? this.position
      : '';
  }

  private setActiveStyle = false;
  private readonly rect$ = this.entries$.pipe(map(() => this.elRef.nativeElement.getBoundingClientRect()));
  private readonly destroyPrevious$ = new Subject<void>();
  private readonly changedSides = {
    right: true,
    left: true,
    top: true,
    bottom: true,
  };
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

  private setStylesIfExist(): void {
    if (!this.prizmStickyRight && !this.prizmStickyLeft && !this.prizmStickyBottom && !this.prizmStickyTop)
      return;

    const keys = this.stylesOnSticky && Object.keys(this.stylesOnSticky);
    if (!keys?.length) return;

    keys.forEach((key: unknown) => {
      this.elRef.nativeElement.style[key] = (this.stylesOnSticky?.[key] as string) ?? '';
    });

    this.setActiveStyle = true;
  }

  private clearStylesIfSet(): void {
    if (!this.setActiveStyle) return;

    const keys = this.stylesOnSticky && Object.keys(this.stylesOnSticky);
    if (!keys?.length) return;
    keys.forEach((key: unknown) => {
      this.elRef.nativeElement.style[key] = '';
    });

    this.setActiveStyle = false;
  }

  private init(): void {
    this.destroyPrevious$.next();

    const parent = this.prizmStickyRelative ?? this.relativeService?.element;
    merge(this.rect$)
      .pipe(
        observeOn(animationFrameScheduler),
        filter(i => Boolean(i.width || i.height)),
        switchMap(result => {
          if (this.prizmStickyRight || this.changedSides.right) {
            this.renderer.removeStyle(this.elRef.nativeElement, 'right');
          }
          if (this.prizmStickyLeft || this.changedSides.left) {
            this.renderer.removeStyle(this.elRef.nativeElement, 'left');
          }
          if (this.prizmStickyTop || this.changedSides.top)
            this.renderer.removeStyle(this.elRef.nativeElement, 'top');
          if (this.prizmStickyBottom || this.changedSides.bottom)
            this.renderer.removeStyle(this.elRef.nativeElement, 'bottom');

          this.clearStylesIfSet();

          return of(result).pipe(moveInEventLoopIteration(1));
        }),
        tap(() => {
          const parentRect = parent?.getBoundingClientRect();
          const elRect = this.elRef.nativeElement.getBoundingClientRect();
          let styleRight = 0;

          this.setStylesIfExist();

          if (this.prizmStickyLeft) {
            const left = parentRect?.left ? elRect.left - parentRect.left : elRect.left;
            this.renderer.setStyle(this.elRef.nativeElement, 'left', prizmToPx(left));
            this.changedSides.left = true;
          } else this.changedSides.left = true;
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
            this.changedSides.right = true;
          } else this.changedSides.right = true;
          if (this.prizmStickyTop) {
            const top = parentRect?.top ? elRect.top - parentRect.top : elRect.top;
            this.renderer.setStyle(this.elRef.nativeElement, 'top', prizmToPx(top));
            this.changedSides.top = true;
          } else this.changedSides.top = true;
          if (this.prizmStickyBottom) {
            const bottom = parentRect?.bottom ? elRect.bottom - parentRect.bottom : elRect.bottom;
            this.renderer.setStyle(this.elRef.nativeElement, 'bottom', prizmToPx(bottom));
            this.changedSides.bottom = true;
          } else this.changedSides.bottom = true;

          this.setStylesIfExist();
        }),

        takeUntil(this.destroyPrevious$),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
