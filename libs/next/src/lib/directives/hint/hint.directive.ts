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
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { pzmDefaultProp, pzmRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../index';
import { PZM_HINT_OPTIONS, PzmHintContext, PzmHintOptions } from './hint-options';
import { ZuiOverlayControl, ZuiOverlayRelativePosition, PzmOverlayService } from '../../modules/overlay';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { PzmHoveredService } from '../../services';
import { delay, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PzmHintContainerComponent } from './hint-container.component';
import { PzmHintService } from './hint.service';
import { pzmGenerateId } from '../../util';

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
    selector: '[pzmHint]:not(ng-container)',
    providers: [
      PzmDestroyService,
    ],
    exportAs: 'pzmHint'
})
export class PzmHintDirective<
  OPTIONS extends PzmHintOptions = PzmHintOptions,
  CONTEXT extends PzmHintContext = PzmHintContext
  > implements OnChanges, OnInit, OnDestroy {
    @Input()
    @pzmDefaultProp()
    pzmHintMode: PzmHintOptions['mode'] = this.options.mode;

    @Input()
    @pzmDefaultProp()
    pzmAutoReposition: PzmHintOptions['autoReposition'] = this.options.autoReposition;

    @Input()
    @pzmDefaultProp()
    pzmHintDirection: PzmHintOptions['direction'] = this.options.direction;

    @Input()
    @pzmDefaultProp()
    pzmHintId: string = 'hintId_' + pzmGenerateId();

    @Input()
    @pzmDefaultProp()
    pzmHintShowDelay: PzmHintOptions['showDelay'] = this.options.showDelay;

    @Input()
    @pzmDefaultProp()
    pzmHintHideDelay: PzmHintOptions['hideDelay'] = this.options.hideDelay;

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
    overlay: ZuiOverlayControl;
    protected readonly containerComponent: Type<unknown> = PzmHintContainerComponent;
    protected readonly show$ = new Subject<boolean>();
    protected readonly destroyListeners$ = new Subject<boolean>();

    constructor(
      private readonly pzmOverlayService: PzmOverlayService,
      @Inject(Renderer2) private readonly renderer: Renderer2,
      @Inject(ElementRef) protected readonly elementRef: ElementRef<HTMLElement>,
      @Inject(PzmDestroyService) private readonly destroy$: PzmDestroyService,
      @Inject(PZM_HINT_OPTIONS) protected readonly options: OPTIONS,
      @Inject(PzmHoveredService) private readonly hoveredService: PzmHoveredService,
      @Inject(PzmHintService) private readonly hintService: PzmHintService,
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

      const position = new ZuiOverlayRelativePosition({
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
