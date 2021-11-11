import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'zyfra-dialog',
  templateUrl: './zyfra-dialog.component.html',
  styles: [],
})
export class ZyfraDialogComponent {
  @Input() htmlTemplate: SafeHtml;

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
  @Input() style: string;
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
  @Input() closeIcon: string = 'zyfra-icon selection-check-simple';
  @Input() minimizeIcon: string = 'zyfra-icon arrows-collapse';
  @Input() maximizeIcon: string = 'zyfra-icon arrows-expand';

  /* onHide */
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  onHideHandler(event) {
    this.visible = false;
    this.onHide.emit(this.visible);
  }

  /* onShow */
  @Output() onShow: EventEmitter<any> = new EventEmitter();

  onShowHandler(event) {
    this.visible = true;
    this.onShow.emit(this.visible);
  }

  /* onResizeInit */
  @Output() onResizeInit: EventEmitter<any> = new EventEmitter();

  onResizeInitHandler(event) {
    this.onResizeInit.emit(event);
  }

  /* onResizeEnd */
  @Output() onResizeEnd: EventEmitter<any> = new EventEmitter();

  onResizeEndHandler(event) {
    this.onResizeEnd.emit(event);
  }

  /* onDragEnd */
  @Output() onDragEnd: EventEmitter<any> = new EventEmitter();

  onDragEndHandler(event) {
    this.onDragEnd.emit(event);
  }

  /* onMaximize */
  @Output() onMaximize: EventEmitter<any> = new EventEmitter();

  onInit() {
    this.visible = true;
  }

  onMaximizeHandler(event) {
    this.onMaximize.emit(event);
  }
}
