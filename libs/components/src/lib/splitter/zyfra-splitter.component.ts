import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { ZyfraSplitterTemplateDirective } from './zyfra-splitter.directives';
import { ZyfraSplitterTemplatesService } from './zyfra-splitter-templates.service';
import { delay, takeUntil, tap } from 'rxjs/operators';
import { SplitterExtended } from './p-splitter/splitter';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';

type onResizeEvent = { originalEvent: MouseEvent; sizes: [number, number] };

@Component({
  selector: 'zyfra-splitter',
  templateUrl: './zyfra-splitter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZyfraSplitterTemplatesService, PrizmDestroyService]
})
export class ZyfraSplitterComponent implements AfterContentInit {
  // Вся информация о методах и свойствах хранится тут import { Splitter } from 'primeng/splitter';
  /**
   * Size of the elements relative to 100%.
   *
   */
  @Input() panelSizes: number[] = [];
  /**
   * Minimum size of the elements relative to 100%.
   *
   */
  @Input() minSizes: number[] = [];
  /**
   * Orientation of the panels, valid values are "horizontal" and "vertical".
   *
   */
  @Input() layout: 'horizontal' | 'vertical' = 'vertical';
  /**
   * Size of the divider in pixels.
   *
   */
  @Input() gutterSize = 8;
  /**
   * Storage identifier of a stateful Splitter.
   *
   */
  @Input() stateKey: string = null;
  /**
   * Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.
   *
   */
  @Input() stateStorage: 'session' | 'local' = 'session';
  /**
   * Inline style of the component.
   *
   */
  @Input() style: { [key: string]: string | null } = null;
  /**
   * Style class of the component.
   *
   */
  @Input() styleClass: string = null;
  /**
   * Style class of the panel.
   *
   */
  @Input() panelStyleClass: string = null;
  /**
   * Inline style of the pnanel.
   *
   */
  @Input() panelStyle: { [key: string]: string | null } = null;

  /**
   * Template html.
   *
   */
  @ContentChildren(ZyfraSplitterTemplateDirective)
  templates: QueryList<ZyfraSplitterTemplateDirective>;

  @ViewChild(SplitterExtended, { static: true }) splitter: SplitterExtended;

  /**
   * Callback to invoke when resize starts.
   *
   */
  @Output() onResizeStart = new EventEmitter<onResizeEvent>();

  /**
   * Callback to invoke when resize ends.
   *
   */
  @Output() onResizeEnd = new EventEmitter<onResizeEvent>();

  panels = [];

  constructor(
    private readonly zyfraSplitterService: ZyfraSplitterTemplatesService,
    private readonly pzmDestroyService: PrizmDestroyService,
    private readonly cdRef: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.zyfraSplitterService.list$.pipe(
      tap((templates) => {
        this.panels = templates.map(item => item.template);
        this.cdRef.markForCheck();
      }),
      delay(0),
      tap(() => this.splitter.updateTemplates()),
      takeUntil(this.pzmDestroyService),
    ).subscribe();
  }

  public onResizeStartHandler(event): void {
    this.onResizeStart.emit(event);
  }
}
