import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injector,
  ViewRef,
} from '@angular/core';
import { animationFrameScheduler, fromEvent, merge as mergeObs, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  observeOn,
  skipWhile,
  startWith,
  takeUntil,
  tap,
} from 'rxjs/operators';
import {
  PrizmOverlayConfig,
  PrizmOverlayContent,
  PrizmOverlayContentData,
  PrizmOverlayContentProps,
  PrizmOverlayEventName,
  PrizmOverlayId,
} from './models';
import { PrizmOverlayAbstractPosition } from './position/position';
import { PrizmOverlayComponent } from './overlay.component';
import { BODY_ELEMENT, EventBus, getContent } from './utils';
import { WINDOW } from '@ng-web-apis/common';
import { raceEmit } from '@prizm-ui/helpers';

export class PrizmOverlayControl {
  position!: PrizmOverlayAbstractPosition;
  readonly config!: PrizmOverlayConfig;
  content!: PrizmOverlayContent;
  zid!: PrizmOverlayId;
  zIndex = 9999;
  comp!: PrizmOverlayComponent | null;
  updateTextContent: Subject<string> = new Subject();
  hostView!: ViewRef | null;
  parentContainer!: HTMLElement | null;
  compRef!: ComponentRef<PrizmOverlayComponent>;

  public viewEl!: HTMLElement | null;
  isOpen = false;
  private compFac!: ComponentFactory<PrizmOverlayComponent>;
  private destroy$ = new Subject<void>();

  constructor(
    private appRef: ApplicationRef,
    private compResolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(WINDOW) private readonly window: Window
  ) {
    this.updateTextContent.pipe(takeUntil(this.destroy$)).subscribe(content => {
      if (this.isOpen) this.comp?.updateTextContent(content);
    });
  }

  public open(): void {
    if (this.isOpen) return;
    this.destroy$.next();

    this.attach();
    if (this.viewEl) {
      mergeObs(this.onDocumentClick(), this.onWindowResize(), this.onEscClick())
        .pipe(takeUntil(this.destroy$))
        .subscribe();
      setTimeout(() => EventBus.send(this.zid, 'z_dynpos'), 1);
    }

    EventBus.send(this.zid, 'z_open');
    this.isOpen = true;
  }

  public close(): void {
    if (!this.isOpen) return;

    this.detach();
    this.destroy$.next();
    EventBus.send(this.zid, 'z_close');
    this.isOpen = false;
  }

  public toggle(): void {
    return this.isOpen ? this.close() : this.open();
  }

  public onEscClick(): Observable<any> {
    return fromEvent<KeyboardEvent>(BODY_ELEMENT as any, 'keydown').pipe(
      takeUntil(this.destroy$),
      skipWhile(() => !this.config.closeOnEsc),
      filter(
        (e: KeyboardEvent) =>
          (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) &&
          (e.target as HTMLElement).nodeName === 'BODY'
      ),
      tap(e => e.preventDefault()),
      map(e => e.target),
      tap(() => this.close())
    );
  }

  public onDocumentClick(): Observable<any> {
    const insideClick = fromEvent<MouseEvent>(
      this.viewEl?.querySelector('.z-overlay-wrapper') as any,
      'click'
    ).pipe(
      // first init for block closing
      startWith(null as any)
    );
    const outsideClick = fromEvent<MouseEvent>(document.body as any, 'click');

    return raceEmit<[MouseEvent, boolean]>(
      100,
      insideClick.pipe(map((e: MouseEvent) => [e, false])),
      outsideClick.pipe(map((e: MouseEvent) => [e, true]))
    ).pipe(
      filter(([, isOutsideClick]) => isOutsideClick),
      map(([e]: [MouseEvent, boolean]) => e.target),
      skipWhile(() => !this.config.closeOnDocClick),
      tap(() => {
        this.config.docClickCallback();
        this.close();
      })
    );
  }

  public onWindowResize(): Observable<any> {
    const onResize = fromEvent(window, 'resize');
    const onScroll = fromEvent(window, 'scroll', { passive: true });
    return mergeObs(onResize, onScroll).pipe(
      skipWhile(() => !this.config.listenWindowEvents),
      takeUntil(this.destroy$),
      debounceTime(5),
      observeOn(animationFrameScheduler),
      distinctUntilChanged(),
      tap(() => {
        EventBus.send(this.zid, 'z_dynpos');
        this.reCalculatePositions();
        this.config.windowResizeCallback();
      })
    );
  }

  public changePosition(newPosition: PrizmOverlayAbstractPosition): void {
    this.position = newPosition;
  }

  public updatePosition(positionConfig: PrizmOverlayAbstractPosition): void {
    this.position.updateConfig(positionConfig);
  }

  public updateContent(content: PrizmOverlayContentData, props: PrizmOverlayContentProps = {}): void {
    this.content = getContent(content, { ...this.content.props, ...props });
  }

  public updateParentContainer(node: HTMLElement): void {
    this.parentContainer = node instanceof HTMLElement ? node : null;
  }

  public listen<T = any>(eventName: PrizmOverlayEventName): Observable<T> {
    return EventBus.listen(this.zid, eventName);
  }

  public reCalculatePositions(): void {
    EventBus.send(this.zid, 'z_dynpos');
  }

  private isNotHostElement(el: HTMLElement): boolean {
    const wrapperEl = this.viewEl?.querySelector('.z-overlay-wrapper');
    return el !== wrapperEl && !wrapperEl?.contains(el);
  }

  private attach(): void {
    /* create component */
    this.compFac = this.compResolver.resolveComponentFactory(PrizmOverlayComponent);
    this.compRef = this.compFac.create(this.injector);
    this.comp = this.compRef.instance;

    /* assign props */
    const { position, content, config, zid, zIndex, parentContainer } = this;
    content.props.close = this.close.bind(this);
    Object.assign(this.comp, { position, content, config, zid: zid, zIndex: zIndex, parentContainer });

    /* attach view */
    this.hostView = this.compRef.hostView;
    this.appRef.attachView(this.hostView);
    this.viewEl = (this.hostView as any).rootNodes[0];
    (parentContainer ?? (BODY_ELEMENT as HTMLElement)).appendChild(this.viewEl as any);
  }

  private detach(): void {
    if (!this.hostView) return;

    this.appRef.detachView(this.hostView);
    this.compRef.destroy();
    this.hostView = this.viewEl = this.comp = null;
  }
}
