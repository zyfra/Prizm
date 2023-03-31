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
import { debounceTime, filter, map, observeOn, takeUntil, tap } from 'rxjs/operators';
import { prizmToPx } from '../../util';
import { PrizmDestroyService, prizmElementResized$ } from '@prizm-ui/helpers';
import { PrizmStickyRelativeService } from './sticky-relative.service';
import { animationFrameScheduler, combineLatest, merge, of, Subject } from 'rxjs';

@Directive({
  selector: '[prizmStickyLeft], [prizmStickyRight], [prizmStickyTop], [prizmStickyBottom]',
  providers: [PrizmDestroyService, ResizeObserverService],
})
export class PrizmStickyDirective implements OnChanges {
  @Input() prizmStickyLeft: boolean;
  @Input() prizmStickyRight: boolean;
  @Input() prizmStickyTop: boolean;
  @Input() prizmStickyBottom: boolean;
  @Input() prizmStikyRelative?: HTMLElement;

  @Input()
  @HostBinding('style.position')
  position = 'sticky';

  private readonly rect$ = this.entries$.pipe(map(() => this.elRef.nativeElement.getBoundingClientRect()));
  private readonly destroyPrevious$ = new Subject();

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

    merge(
      // parent ? prizmElementResized$(
      //   parent
      // ) : of(null),
      this.rect$
    )
      .pipe(
        observeOn(animationFrameScheduler),
        filter(i => Boolean(i.width || i.height)),
        tap(() => {
          const parentRect = parent?.getBoundingClientRect();

          const elRect = this.elRef.nativeElement.getBoundingClientRect();
          if (this.prizmStickyLeft) {
            const left = parentRect?.left ? elRect.left - parentRect.left : elRect.left;
            this.renderer.setStyle(this.elRef.nativeElement, 'left', prizmToPx(left));
          }
          if (this.prizmStickyRight) {
            let right = elRect.right;
            let p = 0;
            let styleRight = 0;
            if (parent) {
              p = parent.scrollWidth - parent.clientWidth - parent.scrollLeft;
              styleRight = parseInt(this.elRef.nativeElement.style.right || '0');
              right = Math.abs(elRect.right - (parentRect.right + p));
            }

            if (styleRight) return;
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
