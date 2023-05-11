import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  Type,
} from '@angular/core';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { prizmDefaultProp, prizmRequiredSetter } from '@prizm-ui/core';
import { PolymorphContent } from '../index';
import { PRIZM_HINT_OPTIONS, PrizmHintContext, PrizmHintOptions } from './hint-options';
import {
  PrizmOverlayControl,
  PrizmOverlayRelativePosition,
  PrizmOverlayService,
} from '../../modules/overlay';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { PrizmHoveredService } from '../../services';
import { delay, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmHintContainerComponent } from './hint-container.component';
import { PrizmHintService } from './hint.service';

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
  selector: '[prizmHint]:not(ng-container)',
  providers: [PrizmDestroyService],
  exportAs: 'prizmHint',
})
export class PrizmHintDirective<
  OPTIONS extends PrizmHintOptions = PrizmHintOptions,
  CONTEXT extends PrizmHintContext = PrizmHintContext
> implements OnChanges, OnInit, OnDestroy
{
  @Input()
  @prizmDefaultProp()
  prizmHintMode: PrizmHintOptions['mode'] = this.options.mode;

  @Input()
  @prizmDefaultProp()
  prizmAutoReposition: PrizmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input()
  @prizmDefaultProp()
  prizmHintDirection: PrizmHintOptions['direction'] = this.options.direction;

  @Input()
  @prizmDefaultProp()
  prizmHintId: string = 'hintId_' + prizmGenerateId();

  @Input()
  @prizmDefaultProp()
  prizmHintShowDelay: PrizmHintOptions['showDelay'] = this.options.showDelay;

  @Input()
  @prizmDefaultProp()
  prizmHintHideDelay: PrizmHintOptions['hideDelay'] = this.options.hideDelay;

  @Input()
  @prizmDefaultProp()
  prizmHintHost: HTMLElement | null = null;

  @Input()
  @prizmDefaultProp()
  prizmHintContext: Record<string, unknown> = {};

  @Input()
  @prizmDefaultProp()
  prizmHintCanShow = true;

  @Input()
  set prizmHintShow(show: boolean) {
    if (show) this.open();
    else this.close();
  }
  get prizmHintShow(): boolean {
    return this.show_;
  }

  private show_ = false;

  @Input()
  @prizmRequiredSetter()
  set prizmHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }

  @Output()
  readonly prizmHoveredChange = new EventEmitter<boolean>();

  protected readonly onHoverActive: boolean = true;

  content: PolymorphContent;
  overlay: PrizmOverlayControl;
  protected readonly containerComponent: Type<unknown> = PrizmHintContainerComponent;
  protected readonly show$ = new Subject<boolean>();
  protected readonly destroyListeners$ = new Subject<boolean>();

  constructor(
    private readonly prizmOverlayService: PrizmOverlayService,
    @Inject(Renderer2) private readonly renderer: Renderer2,
    @Inject(ElementRef) protected readonly elementRef: ElementRef<HTMLElement>,
    @Inject(PrizmDestroyService) private readonly destroy$: PrizmDestroyService,
    @Inject(PRIZM_HINT_OPTIONS) protected readonly options: OPTIONS,
    @Inject(PrizmHoveredService) private readonly hoveredService: PrizmHoveredService,
    @Inject(PrizmHintService) private readonly hintService: PrizmHintService
  ) {}

  get id(): string | null {
    return this.prizmHintId ?? null;
  }

  get host(): HTMLElement {
    return this.prizmHintHost ?? this.elementRef.nativeElement;
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

  public toggle(open: boolean): void {
    if (open) {
      this.open();
    } else {
      this.close();
    }
  }

  protected open(): void {
    if (!this.prizmHintCanShow || this.content === '') return;
    this.show_ = true;
    this.renderer.addClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
    this.overlay.open();
    this.prizmHoveredChange.emit(this.show_);
  }

  protected close(): void {
    this.show_ = false;
    this.renderer.removeClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
    this.overlay?.close();
    this.prizmHoveredChange.emit(this.show_);
  }

  private initVisibleController(): void {
    this.show$
      .pipe(
        switchMap(show => {
          const delayTime = show ? this.prizmHintShowDelay : this.prizmHintHideDelay;
          return of(show).pipe(delay(delayTime));
        }),
        tap(show => this.toggle(show)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private initOverlayController(): void {
    this.destroyListeners$.next();
    this.show$.next(false);
    this.overlay?.close();

    const position = new PrizmOverlayRelativePosition({
      placement: this.prizmHintDirection,
      autoReposition: this.prizmAutoReposition,
      element: this.host,
    });
    this.overlay = this.prizmOverlayService
      .position(position)
      .config({
        backdrop: false,
      })
      .content(this.containerComponent, {
        content: () => this.content,
        mode: () => this.prizmHintMode,
        id: this.prizmHintId,
        context: this.getContext(),
      })
      .create();
    if (this.onHoverActive) {
      combineLatest([this.hoveredService.createHovered$(this.host), this.hintService.childHovered(this.id)])
        .pipe(
          map(([thisHovered, containerHovered]) => {
            return thisHovered || containerHovered;
          }),
          tap(hovered => this.show$.next(hovered)),
          takeUntil(this.destroyListeners$),
          takeUntil(this.destroy$)
        )
        .subscribe();
    }
  }

  protected getContext(): CONTEXT {
    return {
      mode: this.prizmHintMode,
      reposition: this.prizmAutoReposition,
      direction: this.prizmHintDirection,
      id: this.prizmHintId,
      showDelay: this.prizmHintShowDelay,
      hideDelay: this.prizmHintHideDelay,
      host: this.host,
      context: this.prizmHintContext,
    } as CONTEXT;
  }
}
