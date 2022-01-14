import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'zyfra-toast',
  templateUrl: './zyfra-toast.component.html',
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

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
}
