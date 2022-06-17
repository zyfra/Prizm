import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'zyfra-message',
  templateUrl: './zyfra-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  providers: [MessageService],
})
export class ZyfraMessageComponent {
  //---- message component --------
  @Input() value: Message[];
  @Input() closable: boolean = true;
  @Input() style: any = '';
  @Input() styleClass: string = '';
  @Input() enableService: boolean = true;
  @Input() escape: boolean = true;
  @Input() showTransitionOptions: string = '300ms ease-out';
  @Input() hideTransitionOptions: string = '200ms cubic-bezier(0.86, 0, 0.07, 1)';

  // --- for message service -----
  // @Input() severity:string;
  // @Input() summary:string;
  // @Input() detail:string;
  // @Input() id:any;
  // @Input() life:number    = 3000;
  // @Input() sticky:boolean = false;
  // @Input() data:any;

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  public clear(): void {
    this.value = [];
  }
}
