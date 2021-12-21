import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'zyfra-toast',
  templateUrl: './zyfra-toast.component.html',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraToastComponent {
  @Input() customTemplate: TemplateRef<any>;

  @Input() key: string;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() position: string = 'top-right';
  @Input() baseZIndex: number = 0;
  @Input() autoZIndex: boolean = true;
  @Input() showTransitionOptions: string = '300ms ease-out';
  @Input() hideTransitionOptions: string = '250ms ease-in';
  @Input() showTransformOptions: string = 'translateY(100%)';
  @Input() hideTransformOptions: string = 'translateY(-100%)';
  @Input() preventOpenDuplicates: boolean;
  @Input() preventDuplicates: boolean;

  // --- for message -----
  @Input() severity: string;
  @Input() summary: string;
  @Input() detail: string;
  @Input() id: any;
  @Input() life: number = 3000;
  @Input() sticky: boolean = false;
  @Input() closable: boolean = true;
  @Input() data: any;

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  showMessage(): void {
    this.messageService.add({
      severity: this.severity,
      summary: this.summary,
      detail: this.detail,
      life: this.life,
      id: this.id,
      sticky: this.sticky,
      closable: this.closable,
      data: this.data,
    });
  }

  // нужны ли кастомные методы?
  onReject() {
    this.messageService.clear('c');
    this.onClose.emit(event);
  }
}
