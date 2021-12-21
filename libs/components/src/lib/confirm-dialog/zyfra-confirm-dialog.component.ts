import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, ConfirmEventType, Message } from 'primeng/api';

@Component({
  selector: 'zyfra-confirm-dialog',
  templateUrl: './zyfra-confirm-dialog.component.html',
  providers: [ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraConfirmDialogComponent {
  @Input() message = '';
  @Input() key: string;
  @Input() icon: string;
  @Input() header: string = '';
  @Input() accept: Function = () => {};
  @Input() reject: Function = () => {};
  @Input() acceptMessages: { severity: string; summary: string; detail: string }[] = [
    { severity: '', summary: '', detail: '' },
  ];
  @Input() rejectMessages: { severity: string; summary: string; detail: string }[] = [
    { severity: '', summary: '', detail: '' },
  ];
  @Input() acceptLabel: string = 'yes';
  @Input() rejectLabel: string = 'no';
  @Input() acceptIcon: string;
  @Input() rejectIcon: string;
  @Input() acceptButtonStyleClass: string;
  @Input() rejectButtonStyleClass: string;
  @Input() acceptVisible: boolean = true;
  @Input() rejectVisible: boolean = true;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() maskStyleClass: string;
  @Input() blockScroll: boolean = true;
  @Input() closeOnEscape: boolean = true;
  @Input() closable: boolean = false;
  @Input() focusTrap: boolean = true;
  @Input() appendTo: any;
  @Input() dismissableMask: boolean;
  @Input() baseZIndex: number = 0;
  @Input() autoZIndex: boolean = true;
  @Input() breakpoints: object;
  @Input() transitionOptions: string = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';
  @Input() defaultFocus: string = 'accept';
  @Input() position: string = 'center';

  @Output() onHide: EventEmitter<ConfirmEventType> = new EventEmitter();

  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  onClick(): void {
    this.confirmationService.confirm({
      message: this.message,
      header: this.header,
      icon: this.icon,
      accept: () => {
        this.msgs = this.acceptMessages;
        this.accept();
      },
      reject: () => {
        this.msgs = this.rejectMessages;
        this.reject();
      },
    });
  }

  onHideHandler(event: ConfirmEventType): void {
    this.onHide.emit(event);
  }
}
