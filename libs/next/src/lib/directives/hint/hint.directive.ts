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
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { zuiDefaultProp, zuiRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../index';
import { ZUI_HINT_OPTIONS, ZuiHintContext, ZuiHintOptions } from './hint-options';
import { ZuiOverlayControl, ZuiOverlayRelativePosition, ZuiOverlayService } from '../../modules/overlay';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { ZuiHoveredService } from '../../services';
import { delay, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ZuiHintContainerComponent } from './hint-container.component';
import { ZuiHintService } from './hint.service';
import { zuiGenerateId } from '../../util';

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
    selector: '[zuiHint]:not(ng-container)',
    providers: [
      ZuiDestroyService,
    ],
    exportAs: 'zuiHint'
})
export class ZuiHintDirective<
  OPTIONS extends ZuiHintOptions = ZuiHintOptions,
  CONTEXT extends ZuiHintContext = ZuiHintContext
  > implements OnChanges, OnInit, OnDestroy {
    @Input()
    @zuiDefaultProp()
    zuiHintMode: ZuiHintOptions['mode'] = this.options.mode;

    @Input()
    @zuiDefaultProp()
    zuiAutoReposition: ZuiHintOptions['autoReposition'] = this.options.autoReposition;

    @Input()
    @zuiDefaultProp()
    zuiHintDirection: ZuiHintOptions['direction'] = this.options.direction;

    @Input()
    @zuiDefaultProp()
    zuiHintId: string = 'hintId_' + zuiGenerateId();

    @Input()
    @zuiDefaultProp()
    zuiHintShowDelay: ZuiHintOptions['showDelay'] = this.options.showDelay;

    @Input()
    @zuiDefaultProp()
    zuiHintHideDelay: ZuiHintOptions['hideDelay'] = this.options.hideDelay;

    @Input()
    @zuiDefaultProp()
    zuiHintHost: HTMLElement | null = null;

    @Input()
    @zuiDefaultProp()
    zuiHintCanShow = true;

    @Input()
    @zuiRequiredSetter()
    set zuiHint(value: PolymorphContent | null) {
      if (!value) {
        this.content = '';
        return;
      }

      this.content = value;
    }

    @Output()
    readonly zuiHoveredChange: Observable<boolean>;

    protected readonly onHoverActive: boolean = true;

    content: PolymorphContent;
    overlay: ZuiOverlayControl;
    protected readonly containerComponent: Type<unknown> = ZuiHintContainerComponent;
    protected readonly show$ = new Subject<boolean>();
    protected readonly destroyListeners$ = new Subject<boolean>();

    constructor(
      private readonly zuiOverlayService: ZuiOverlayService,
      @Inject(Renderer2) private readonly renderer: Renderer2,
      @Inject(ElementRef) protected readonly elementRef: ElementRef<HTMLElement>,
      @Inject(ZuiDestroyService) private readonly destroy$: ZuiDestroyService,
      @Inject(ZUI_HINT_OPTIONS) protected readonly options: OPTIONS,
      @Inject(ZuiHoveredService) private readonly hoveredService: ZuiHoveredService,
      @Inject(ZuiHintService) private readonly hintService: ZuiHintService,
    ) {}

    get id(): string | null {
      return this.zuiHintId ?? null;
    }

    get host(): HTMLElement {
      return this.zuiHintHost ?? this.elementRef.nativeElement;
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
      if (!this.zuiHintCanShow) return;
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
          const delayTime = show ? this.zuiHintShowDelay : this.zuiHintHideDelay;
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

      const position = new ZuiOverlayRelativePosition({
        placement: this.zuiHintDirection,
        autoReposition: this.zuiAutoReposition,
        element: this.host
      });
      this.overlay = this.zuiOverlayService
        .position(position)
        .config({
          backdrop: false,
        })
        .content(this.containerComponent, {
          content: () => this.content,
          mode: () => this.zuiHintMode,
          id: this.zuiHintId,
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
        mode: this.zuiHintMode,
        reposition: this.zuiAutoReposition,
        direction: this.zuiHintDirection,
        id: this.zuiHintId,
        showDelay: this.zuiHintShowDelay,
        hideDelay: this.zuiHintHideDelay,
        host: this.host,
      } as CONTEXT
    }
}
