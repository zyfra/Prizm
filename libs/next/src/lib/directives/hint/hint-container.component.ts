import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { pzmDefaultProp } from '../../decorators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { PzmHoveredService } from '../../services';
import { takeUntil, tap } from 'rxjs/operators';
import { PzmHintService } from './hint.service';
import { ZuiOverlayControl } from '../../modules/overlay';
import { animationFrameScheduler, timer } from 'rxjs';
import { PolymorphContent } from '../polymorph/types/content';
import { PzmHintOptions } from './hint-options';

@Component({
  selector: 'zui-hint-container',
  template: `
    <div class='zui-font-main-body-12'>
      <pzm-scrollbar visibility='hidden'>
        <ng-container *polymorphOutlet="content() as data; context: context">
          {{data}}
        </ng-container>
      </pzm-scrollbar>
    </div>
  `,
  styleUrls: ['./hint-container.component.less'],
  providers: [PzmDestroyService]
})
export class PzmHintContainerComponent<CONTEXT extends Record<string, unknown> = Record<string, unknown>> implements OnInit, AfterViewInit {
  @Input()
  @HostListener('attr.id')
  id: string;

  @Input()
  content: () => PolymorphContent;

  @Input()
  mode: () => PzmHintOptions['mode'];

  @Input()
  @pzmDefaultProp()
  context: CONTEXT = {} as CONTEXT;

  @HostListener('attr.mode') get getMode(): PzmHintOptions['mode'] {
    return this.mode()
  };

  constructor(
    protected readonly destroy$: PzmDestroyService,
    protected readonly el: ElementRef,
    protected readonly renderer2: Renderer2,
    protected readonly pzmOverlayControl: ZuiOverlayControl,
    @Inject(PzmHintService) private readonly hintService: PzmHintService,
    @Inject(PzmHoveredService) private readonly hoveredService: PzmHoveredService
  ) {}

  public ngOnInit(): void {
    this.initPositionListener();
    this.initHoverListener();
  }

  public ngAfterViewInit(): void {
    // re-calc positions after fist get container sizes
    timer(10, animationFrameScheduler).pipe(
      tap(() => this.pzmOverlayControl.position.calculate()),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private initPositionListener(): void {
    this.pzmOverlayControl.position.pos$.pipe(
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
