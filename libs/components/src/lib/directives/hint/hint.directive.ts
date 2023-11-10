import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Injector,
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
import { PolymorphContent, PolymorphModule } from '../polymorph';
import { PRIZM_HINT_OPTIONS, PrizmHintContext, PrizmHintOptions } from './hint-options';
import {
  PrizmOverlayControl,
  PrizmOverlayRelativePosition,
  PrizmOverlayService,
} from '../../modules/overlay';
import { combineLatest, of, Subject } from 'rxjs';
import { PrizmHoveredService } from '../../services';
import { delay, distinctUntilChanged, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmHintContainerComponent } from './hint-container.component';
import { PrizmHintService } from './hint.service';
import { PrizmTheme, PrizmThemeModule } from '@prizm-ui/theme';
import { CommonModule } from '@angular/common';
import { PrizmScrollbarModule } from '../../components/scrollbar';

export const HINT_HOVERED_CLASS = '_hint_hovered';

@Directive({
  selector: '[prizmHint]:not(ng-container)',
  providers: [PrizmDestroyService],
  exportAs: 'prizmHint',
  standalone: true,
})
export class PrizmHintDirective<
  OPTIONS extends PrizmHintOptions = PrizmHintOptions,
  CONTEXT extends PrizmHintContext = PrizmHintContext
> implements OnChanges, OnInit, OnDestroy
{
  protected readonly options = inject(PRIZM_HINT_OPTIONS) as OPTIONS;
  protected readonly injector = inject(Injector);

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
  prizmHintTheme: PrizmTheme | null = null;

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

  set show(show: boolean) {
    if (show) this.open();
    else this.close();
  }
  get show(): boolean {
    return this.show_;
  }

  protected show_ = false;

  @Input()
  @prizmRequiredSetter()
  set prizmHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }

  readonly prizmHoveredChange$$ = new Subject<boolean>();
  @Output()
  readonly prizmHintShowed = new EventEmitter<boolean>();

  protected readonly onHoverActive: boolean = true;

  content!: PolymorphContent;
  overlay!: PrizmOverlayControl;
  protected readonly containerComponent: Type<unknown> = PrizmHintContainerComponent;
  protected readonly show$ = new Subject<boolean>();
  protected readonly destroyListeners$ = new Subject<void>();

  private readonly prizmOverlayService: PrizmOverlayService = inject(PrizmOverlayService);

  private readonly renderer: Renderer2 = inject(Renderer2);
  protected readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroy$: PrizmDestroyService = inject(PrizmDestroyService);
  private readonly hoveredService: PrizmHoveredService = inject(PrizmHoveredService);

  private readonly hintService: PrizmHintService = inject(PrizmHintService);

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
    this.initShowedChangeListener();
  }

  protected initShowedChangeListener() {
    this.prizmHoveredChange$$
      .pipe(
        distinctUntilChanged(),
        tap(state => {
          this.prizmHintShowed.emit(state);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
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
    this.prizmHoveredChange$$.next(!this.show_);
  }

  protected close(): void {
    this.show_ = false;
    this.renderer.removeClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
    this.overlay?.close();
    this.prizmHoveredChange$$.next(this.show_);
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
    if (this.show_) this.show$.next(false);
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
        id: this.prizmHintId,
        hintTheme: this.prizmHintTheme,
        context: this.getContext(),
      })
      .create({
        parentInjector: this.injector,
      });
    if (this.onHoverActive) {
      combineLatest([
        this.hoveredService.createHovered$(this.host),
        this.hintService.childHovered(this.id as string),
      ])
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
