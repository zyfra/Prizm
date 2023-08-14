import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostBinding,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrizmDestroyService, prizmStyleGetVars } from '@prizm-ui/helpers';
import { PrizmThemeService } from '@prizm-ui/theme';
import { Observable, timer } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';
import { PrizmOverlayConfig, PrizmOverlayContent, PrizmOverlayContentType, PrizmOverlayId } from './models';
import { PrizmOverlayAbstractPosition } from './position/position';
import { cssClass, EventBus, objToCss } from './utils';

@Component({
  selector: 'prizm-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmOverlayComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('compOutlet', { read: ViewContainerRef }) compOutlet: ViewContainerRef;
  content: PrizmOverlayContent = {
    type: PrizmOverlayContentType.STRING,
    data: '',
    props: {},
  };
  config: PrizmOverlayConfig;
  position: PrizmOverlayAbstractPosition;
  zid: PrizmOverlayId;
  @HostBinding('style.zIndex')
  zIndex: number;
  el: HTMLElement | any;
  wrapperEl: HTMLElement | any;
  extra: string;
  parentInjector: any;
  compInstance: any;
  parentContainer: HTMLElement;

  @HostBinding('style.position')
  get stylePosition(): string {
    return this.parentContainer ? 'absolute' : 'fixed';
  }

  constructor(
    public readonly inj: Injector,
    public readonly theme: PrizmThemeService,
    private readonly cd: ChangeDetectorRef,
    private readonly destroy$: PrizmDestroyService,
    private readonly compResolver: ComponentFactoryResolver,
    private readonly overlayElRef: ElementRef<HTMLElement>
  ) {
    this.parentInjector = Injector;
  }

  public ngOnInit(): void {
    this.el = this.overlayElRef.nativeElement;
    this.wrapperEl = this.el.querySelector('.z-overlay-wrapper');
    let cls = [
      'z-container',
      ...(this.config.containerClass || 'z-overlay').split(' '),
      this.position.getClassName(),
    ];
    if (this.config.closeOnDocClick) {
      cls = cls.concat(['no-pointers']);
    }
    this.el.setAttribute('data-zid', this.zid);
    cssClass('add', cls, `[data-zid='${[this.zid]}']`);
    cssClass('add', [this.config.bodyClass]);

    this.initStyleVars();
  }

  ngAfterViewInit(): void {
    this.listenPos().subscribe();
    if (this.content.type === PrizmOverlayContentType.COMPONENT) {
      this.compInstance = this.setComponent(this.content.props);
      EventBus.send(this.zid, 'z_compins', this.compInstance);
    }
  }

  private initStyleVars(): void {
    if (this.config.styleVars) {
      Object.entries(prizmStyleGetVars(this.config.styleVars)).forEach(([key, value]) => {
        this.overlayElRef.nativeElement.style.setProperty(key, value);
      });
    }
  }

  public setComponent(props: Record<string, unknown>): Record<string, any> {
    const compRef = this.compOutlet.createComponent(
      this.compResolver.resolveComponentFactory(this.content.data as any)
    );
    Object.assign(compRef.instance, props);
    compRef.changeDetectorRef.detectChanges();
    return compRef.instance;
  }

  public updateTextContent(data: string): void {
    if (this.content.type === PrizmOverlayContentType.STRING) {
      this.content.data = data;
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    cssClass('remove', [this.config.bodyClass]);
    EventBus.send(this.zid, 'z_detach');
  }

  private listenPos(): Observable<any> {
    return EventBus.listen(this.zid, 'z_dynpos').pipe(
      startWith(1),
      takeUntil(this.destroy$),
      tap(e => {
        if (!e || !e.x) return this.setPos();
        const coords = { left: e.x, top: e.y };
        this.wrapperEl.style = objToCss(coords);
      })
    );
  }

  private updatePos(): void {
    const positions = this.position.getPositions(this.wrapperEl, this.parentContainer);
    const { extra, ...coords } = positions;
    if (this.extra !== extra) {
      this.extra = extra;
      this.cd.detectChanges();
    }
    Object.assign(coords, { visibility: 'visible', opacity: '1' });
    this.wrapperEl.style = objToCss(coords);
    this.position.savePosition(positions);
    EventBus.send(this.zid, 'z_posupdate');

    this.cd.markForCheck();
  }

  private setPos(): void {
    this.updatePos();

    /** if position will be changed after render > we re-update position */
    timer(0)
      .pipe(
        tap(() => this.updatePos()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
