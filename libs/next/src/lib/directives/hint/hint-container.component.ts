import {Component, ElementRef, HostListener, Inject, Input, OnInit,} from '@angular/core';
import {PolymorpheusContent} from '../index';
import {ZuiHintOptions} from "@digital-plant/zui-components";
import {zuiDefaultProp} from "../../decorators";
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {ZuiHoveredService} from "../../services";
import {takeUntil, tap} from "rxjs/operators";
import {ZuiHintService} from "./hint.service";

@Component({
  selector: 'zui-hint-container',
  template: `
    <ng-container *polymorpheusOutlet="content() as data; context: context">
      {{data}}
    </ng-container>
  `,
  styles: [`
      :host {
        display: inline-block;
        max-width: 288px;
        background-color: #303340;
        padding: 8px;
        margin: 8px;
        border-radius: 2px;
        color: white;
        font-size: 12px;
      }

      :host[mode="error"] {
        background-color: #FF7C0A;
      }

      /* TODO add dark theme  */
      :host[mode="dark"] {
      }
  `],
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
    private readonly destroy$: ZuiDestroyService,
    private readonly el: ElementRef,
    @Inject(ZuiHintService) private readonly hintService: ZuiHintService,
    @Inject(ZuiHoveredService) private readonly hoveredService: ZuiHoveredService
  ) {
  }

  public ngOnInit(): void {
    this.hoveredService.createHovered$(this.el.nativeElement).pipe(
      tap(state => this.hintService.emit(this.id, state)),
      takeUntil(this.destroy$)
    ).subscribe()
  }
}
