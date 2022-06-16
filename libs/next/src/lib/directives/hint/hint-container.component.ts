import {ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Input, OnInit, Renderer2,} from '@angular/core';
import {PolymorpheusContent} from '../index';
import {ZuiHintOptions} from "@digital-plant/zui-components";
import {zuiDefaultProp} from "../../decorators";
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {ZuiHoveredService} from "../../services";
import {takeUntil, tap} from "rxjs/operators";
import {ZuiHintService} from "./hint.service";
import {ZuiOverlayControl} from "../../modules/overlay";

@Component({
  selector: 'zui-hint-container',
  template: `
    <ng-container *polymorpheusOutlet="content() as data; context: context">
      {{data}}
    </ng-container>
  `,
  styleUrls: ['./hint-container.component.less'],
  providers: [ZuiDestroyService]
})
export class ZuiHintContainerComponent implements OnInit {
  @Input()
  @HostListener('attr.id')
  id: string;

  @Input()
  content: () => PolymorpheusContent;

  @Input()
  mode: () => ZuiHintOptions['mode'];

  @Input()
  @zuiDefaultProp()
  context: Record<string, unknown> = {};

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
