import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { zuiDefaultProp } from '../../decorators';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiHoveredService } from '../../services';
import { takeUntil, tap } from 'rxjs/operators';
import { ZuiHintService } from './hint.service';
import { ZuiOverlayControl } from '../../modules/overlay';
import { animationFrameScheduler, timer } from 'rxjs';
import { PolymorphContent } from '../polymorph/types/content';
import { ZuiHintOptions } from './hint-options';

@Component({
  selector: 'zui-hint-container',
  template: `
    <div class='zui-font-main-body-12'>
      <zui-scrollbar visibility='hidden'>
        <ng-container *polymorphOutlet="content() as data; context: context">
          {{data}}
        </ng-container>
      </zui-scrollbar>
    </div>
  `,
  styleUrls: ['./hint-container.component.less'],
  providers: [ZuiDestroyService]
})
export class ZuiHintContainerComponent<CONTEXT extends Record<string, unknown> = Record<string, unknown>> implements OnInit, AfterViewInit {
  @Input()
  @HostListener('attr.id')
  id: string;

  @Input()
  content: () => PolymorphContent;

  @Input()
  mode: () => ZuiHintOptions['mode'];

  @Input()
  @zuiDefaultProp()
  context: CONTEXT = {} as CONTEXT;

  @HostListener('attr.mode') get getMode(): ZuiHintOptions['mode'] {
    return this.mode()
  };

  constructor(
    protected readonly destroy$: ZuiDestroyService,
    protected readonly el: ElementRef,
    protected readonly renderer2: Renderer2,
    protected readonly zuiOverlayControl: ZuiOverlayControl,
    @Inject(ZuiHintService) private readonly hintService: ZuiHintService,
    @Inject(ZuiHoveredService) private readonly hoveredService: ZuiHoveredService
  ) {}

  public ngOnInit(): void {
    this.initPositionListener();
    this.initHoverListener();
  }

  public ngAfterViewInit(): void {
    // re-calc positions after fist get container sizes
    timer(10, animationFrameScheduler).pipe(
      tap(() => this.zuiOverlayControl.position.calculate()),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private initPositionListener(): void {
    this.zuiOverlayControl.position.pos$.pipe(
      tap((data) => {
        if(!data.extra) return;
        this.renderer2.setAttribute(this.el.nativeElement, 'position', data.extra);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private initHoverListener(): void {
    this.hoveredService.createHovered$(this.el.nativeElement).pipe(
      tap(state => this.hintService.emit(this.id, state)),
      takeUntil(this.destroy$)
    ).subscribe()
  }
}
