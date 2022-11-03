import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { pzmDefaultProp } from '../../decorators';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { PrizmHoveredService } from '../../services';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmHintService } from './hint.service';
import { PrizmOverlayControl } from '../../modules/overlay';
import { animationFrameScheduler, timer } from 'rxjs';
import { PolymorphContent } from '../polymorph/types/content';
import { PrizmHintOptions } from './hint-options';

@Component({
  selector: 'pzm-hint-container',
  template: `
    <div class='pzm-font-main-body-12'>
      <pzm-scrollbar visibility='hidden'>
        <ng-container *polymorphOutlet="content() as data; context: context">
          {{data}}
        </ng-container>
      </pzm-scrollbar>
    </div>
  `,
  styleUrls: ['./hint-container.component.less'],
  providers: [PrizmDestroyService]
})
export class PrizmHintContainerComponent<CONTEXT extends Record<string, unknown> = Record<string, unknown>> implements OnInit, AfterViewInit {
  @Input()
  @HostListener('attr.id')
  id: string;

  @Input()
  content: () => PolymorphContent;

  @Input()
  mode: () => PrizmHintOptions['mode'];

  @Input()
  @pzmDefaultProp()
  context: CONTEXT = {} as CONTEXT;

  @HostListener('attr.mode') get getMode(): PrizmHintOptions['mode'] {
    return this.mode()
  };

  constructor(
    protected readonly destroy$: PrizmDestroyService,
    protected readonly el: ElementRef,
    protected readonly renderer2: Renderer2,
    protected readonly pzmOverlayControl: PrizmOverlayControl,
    @Inject(PrizmHintService) private readonly hintService: PrizmHintService,
    @Inject(PrizmHoveredService) private readonly hoveredService: PrizmHoveredService
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
