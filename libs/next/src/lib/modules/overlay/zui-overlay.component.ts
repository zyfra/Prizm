import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';
import { ZuiOverlayContent, ZuiOverlayContentType, ZuiOverlayId, ZuiOverlayConfig } from './models';
import { ZuiOverlayPosition } from './position/position';
import { EventBus, cssClass, objToCss } from './utils';
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'overlay',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZuiDestroyService]
})
export class ZuiOverlayComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('compOutlet', { read: ViewContainerRef }) compOutlet: ViewContainerRef;
  content: ZuiOverlayContent = {
    type: ZuiOverlayContentType.STRING,
    data: '',
    props: {}
  };
  config: ZuiOverlayConfig;
  position: ZuiOverlayPosition;
  tid: ZuiOverlayId;
  el: HTMLElement | any;
  wrapperEl: HTMLElement | any;
  extra: string;
  parentInjector: any;
  compInstance: any;

  constructor(
    public readonly inj: Injector,
    private readonly cd: ChangeDetectorRef,
    private readonly destroy$: ZuiDestroyService,
    private readonly compResolver: ComponentFactoryResolver,
    private readonly elRef: ElementRef
  ) {
    this.parentInjector = Injector;
  }

  public ngOnInit(): void {
    this.el = this.elRef.nativeElement;
    this.wrapperEl = this.el.querySelector('.z-wrapper');
    let cls = ['z-container', this.config.containerClass, this.position.getClassName()];
    if (this.config.closeOnDocClick) {
      cls = cls.concat(['no-pointers']);
    }
    this.el.setAttribute('data-tid', this.tid);
    cssClass('add', cls, `[data-tid='${[this.tid]}']`);
    cssClass('add', [this.config.bodyClass]);
  }

  ngAfterViewInit() {
    this.listenPos().subscribe();
    if (this.content.type === ZuiOverlayContentType.COMPONENT) {
      this.compInstance = this.setComponent(this.content.props);
      EventBus.send(this.tid, 'z_compins', this.compInstance);
    }
  }

  public setComponent(props: Record<string, any>): any {
    const compRef = this.compOutlet.createComponent(
      this.compResolver.resolveComponentFactory(this.content.data as any)
    );
    Object.assign(compRef.instance, props);
    compRef.changeDetectorRef.detectChanges();
    return compRef.instance;
  }

  public updateTextContent(data: string): void {
    if (this.content.type === ZuiOverlayContentType.STRING) {
      this.content.data = data;
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    cssClass('remove', [this.config.bodyClass]);
    EventBus.send(this.tid, 'z_detach');
  }

  private listenPos(): Observable<any> {
    return EventBus.listen(this.tid, 'z_dynpos').pipe(
      startWith(1),
      takeUntil(this.destroy$),
      tap(e => {
        if (!e || !e.x) return this.setPos();
        const coords = { left: e.x, top: e.y };
        this.wrapperEl.style = objToCss(coords);
      })
    );
  }

  private setPos(): void {
    const { extra, ...coords } = this.position.getPositions(this.wrapperEl);
    if (this.extra !== extra) {
      this.extra = extra;
      this.cd.detectChanges();
    }
    Object.assign(coords, { visibility: 'visible', opacity: '1' });
    this.wrapperEl.style = objToCss(coords);
    EventBus.send(this.tid, 'z_posupdate');
  }
}
