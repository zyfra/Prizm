import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmHoveredService } from '../../services';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmHintService } from './hint.service';
import { PrizmOverlayControl } from '../../modules/overlay';
import { animationFrameScheduler, timer } from 'rxjs';
import { PolymorphContent } from '../polymorph/types/content';
import { PrizmHintOptions } from './hint-options';

@Component({
  selector: 'prizm-hint-container',
  template: `
    <div class="prizm-font-main-body-12">
      <prizm-scrollbar visibility="hidden">
        <ng-container *polymorphOutlet="content() as data; context: context">
          {{ data }}
        </ng-container>
      </prizm-scrollbar>
    </div>
  `,
  styleUrls: ['./hint-container.component.less'],
  providers: [PrizmDestroyService],
})
export class PrizmHintContainerComponent<CONTEXT extends Record<string, unknown> = Record<string, unknown>>
  implements OnInit, AfterViewInit
{
  @Input()
  @HostListener('attr.id')
  id: string;

  @Input()
  content: () => PolymorphContent;

  @Input()
  mode: () => PrizmHintOptions['mode'];

  @Input()
  @prizmDefaultProp()
  context: CONTEXT = {} as CONTEXT;

  @HostListener('attr.mode') get getMode(): PrizmHintOptions['mode'] {
    return this.mode();
  }

  constructor(
    protected readonly destroy$: PrizmDestroyService,
    protected readonly el: ElementRef,
    protected readonly renderer2: Renderer2,
    protected readonly prizmOverlayControl: PrizmOverlayControl,
    @Inject(PrizmHintService) private readonly hintService: PrizmHintService,
    @Inject(PrizmHoveredService) private readonly hoveredService: PrizmHoveredService
  ) {}

  public ngOnInit(): void {
    this.initPositionListener();
    this.initHoverListener();
  }

  public ngAfterViewInit(): void {
    // re-calc positions after fist get container sizes
    timer(10, animationFrameScheduler)
      .pipe(
        tap(() => this.prizmOverlayControl.position.calculate()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private initPositionListener(): void {
    this.prizmOverlayControl.position.pos$
      .pipe(
        tap(data => {
          if (!data.extra) return;
          this.renderer2.setAttribute(this.el.nativeElement, 'position', data.extra);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private initHoverListener(): void {
    this.hoveredService
      .createHovered$(this.el.nativeElement)
      .pipe(
        tap(state => this.hintService.emit(this.id, state)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
