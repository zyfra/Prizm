import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'zyfra-dialog',
  templateUrl: './zyfra-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraDialogComponent {
  @Input() header: string;
  @Input() draggable: boolean = true;
  @Input() acceptVisible: boolean = true;
  @Input() keepInViewport: boolean = true;
  @Input() resizable: boolean = true;
  @Input() contentStyle: object;
  @Input() visible: boolean;
  @Input() modal: boolean;
  @Input() position: string = 'center';
  @Input() blockScroll: boolean;
  @Input() closeOnEscape: boolean;
  @Input() dismissableMask: boolean;
  @Input() rtl: boolean;
  @Input() closable: boolean = true;
  @Input() appendTo: any;
  @Input() style: any;
  @Input() styleClass: string;
  @Input() maskStyleClass: string;
  @Input() contentStyleClass: string;
  @Input() showHeader: boolean = true;
  @Input() baseZIndex: number = 0;
  @Input() autoZIndex: boolean = true;
  @Input() minX: number = 0;
  @Input() minY: number = 0;
  @Input() focusOnShow: boolean = true;
  @Input() focusTrap: boolean = true;
  @Input() maximizable: boolean;
  @Input() breakpoints: object;
  @Input() transitionOptions: string = '150ms cubic-bezier(0, 0, 0.2, 1)';
  @Input() closeIcon: string = 'zyfra-icon cancel-close';
  @Input() minimizeIcon: string = 'zyfra-icon arrows-collapse';
  @Input() maximizeIcon: string = 'zyfra-icon arrows-expand';

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onResizeInit: EventEmitter<any> = new EventEmitter();
  @Output() onResizeEnd: EventEmitter<any> = new EventEmitter();
  @Output() onDragEnd: EventEmitter<any> = new EventEmitter();
  @Output() onMaximize: EventEmitter<any> = new EventEmitter();

  public onHideHandler(event: unknown): void {
    this.visible = false;
    this.onHide.emit(this.visible);
  }

  public onShowHandler(event: unknown): void {
    this.visible = true;
    this.onShow.emit(this.visible);
  }

  public onResizeInitHandler(event: unknown): void {
    this.onResizeInit.emit(event);
  }

  public onResizeEndHandler(event: unknown): void {
    this.onResizeEnd.emit(event);
  }

  public onDragEndHandler(event: unknown): void {
    this.onDragEnd.emit(event);
  }

  public onMaximizeHandler(event: unknown): void {
    this.onMaximize.emit(event);
  }
}
