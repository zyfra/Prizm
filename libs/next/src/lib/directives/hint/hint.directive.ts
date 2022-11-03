import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  Type,
} from '@angular/core';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { pzmDefaultProp, pzmRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../index';
import { PZM_HINT_OPTIONS, PrizmHintContext, PrizmHintOptions } from './hint-options';
import { PrizmOverlayControl, PrizmOverlayRelativePosition, PrizmOverlayService } from '../../modules/overlay';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { PrizmHoveredService } from '../../services';
import { delay, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmHintContainerComponent } from './hint-container.component';
import { PrizmHintService } from './hint.service';
import { pzmGenerateId } from '../../util';

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
    selector: '[pzmHint]:not(ng-container)',
    providers: [
      PrizmDestroyService,
    ],
    exportAs: 'pzmHint'
})
export class PrizmHintDirective<
  OPTIONS extends PrizmHintOptions = PrizmHintOptions,
  CONTEXT extends PrizmHintContext = PrizmHintContext
  > implements OnChanges, OnInit, OnDestroy {
    @Input()
    @pzmDefaultProp()
    pzmHintMode: PrizmHintOptions['mode'] = this.options.mode;

    @Input()
    @pzmDefaultProp()
    pzmAutoReposition: PrizmHintOptions['autoReposition'] = this.options.autoReposition;

    @Input()
    @pzmDefaultProp()
    pzmHintDirection: PrizmHintOptions['direction'] = this.options.direction;

    @Input()
    @pzmDefaultProp()
    pzmHintId: string = 'hintId_' + pzmGenerateId();

    @Input()
    @pzmDefaultProp()
    pzmHintShowDelay: PrizmHintOptions['showDelay'] = this.options.showDelay;

    @Input()
    @pzmDefaultProp()
    pzmHintHideDelay: PrizmHintOptions['hideDelay'] = this.options.hideDelay;

    @Input()
    @pzmDefaultProp()
    pzmHintHost: HTMLElement | null = null;

    @Input()
    @pzmDefaultProp()
    pzmHintCanShow = true;

    @Input()
    @pzmRequiredSetter()
    set pzmHint(value: PolymorphContent | null) {
      if (!value) {
        this.content = '';
        return;
      }

      this.content = value;
    }

    @Output()
    readonly pzmHoveredChange: Observable<boolean>;

    protected readonly onHoverActive: boolean = true;

    content: PolymorphContent;
    overlay: PrizmOverlayControl;
    protected readonly containerComponent: Type<unknown> = PrizmHintContainerComponent;
    protected readonly show$ = new Subject<boolean>();
    protected readonly destroyListeners$ = new Subject<boolean>();

    constructor(
      private readonly pzmOverlayService: PrizmOverlayService,
      @Inject(Renderer2) private readonly renderer: Renderer2,
      @Inject(ElementRef) protected readonly elementRef: ElementRef<HTMLElement>,
      @Inject(PrizmDestroyService) private readonly destroy$: PrizmDestroyService,
      @Inject(PZM_HINT_OPTIONS) protected readonly options: OPTIONS,
      @Inject(PrizmHoveredService) private readonly hoveredService: PrizmHoveredService,
      @Inject(PrizmHintService) private readonly hintService: PrizmHintService,
    ) {}

    get id(): string | null {
      return this.pzmHintId ?? null;
    }

    get host(): HTMLElement {
      return this.pzmHintHost ?? this.elementRef.nativeElement;
    }

    public ngOnChanges(): void {
      this.initOverlayController();
    }

    public ngOnInit(): void {
      this.initVisibleController();
    }

    public ngOnDestroy(): void {
      if (this.overlay) this.overlay.close();
    }

    public toggle(add: boolean): void {
      if (add) {
          this.open();
      } else {
          this.close();
      }
    }

    protected open(): void {
      if (!this.pzmHintCanShow) return;
      this.renderer.addClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
      this.overlay.open();
    }

    protected close(): void {
      this.renderer.removeClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
      this.overlay.close();
    }

    private initVisibleController(): void {
      this.show$.pipe(
        switchMap(show => {
          const delayTime = show ? this.pzmHintShowDelay : this.pzmHintHideDelay;
          return of(show).pipe(delay(delayTime));
        }),
        tap(show => this.toggle(show)),
        takeUntil(this.destroy$),
      ).subscribe()
    }

    private initOverlayController(): void {
      this.destroyListeners$.next();
      this.show$.next(false);
      this.overlay?.close();

      const position = new PrizmOverlayRelativePosition({
        placement: this.pzmHintDirection,
        autoReposition: this.pzmAutoReposition,
        element: this.host
      });
      this.overlay = this.pzmOverlayService
        .position(position)
        .config({
          backdrop: false,
        })
        .content(this.containerComponent, {
          content: () => this.content,
          mode: () => this.pzmHintMode,
          id: this.pzmHintId,
          context: this.getContext(),
        })
        .create();

      if (this.onHoverActive) {
        combineLatest([
          this.hoveredService.createHovered$(this.host),
          this.hintService.childHovered(this.id),
        ]).pipe(
          map(([thisHovered, containerHovered]) => {
            return thisHovered || containerHovered
          }),
          tap(hovered => this.show$.next(hovered)),
          takeUntil(this.destroyListeners$),
          takeUntil(this.destroy$),
        ).subscribe();
      }
    }

    protected getContext(): CONTEXT {
      return {
        mode: this.pzmHintMode,
        reposition: this.pzmAutoReposition,
        direction: this.pzmHintDirection,
        id: this.pzmHintId,
        showDelay: this.pzmHintShowDelay,
        hideDelay: this.pzmHintHideDelay,
        host: this.host,
      } as CONTEXT
    }
}
