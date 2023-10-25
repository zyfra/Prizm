import { Component, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { map } from 'rxjs/operators';
import { PrizmHintContainerComponent } from '../hint/hint-container.component';

@Component({
  selector: 'prizm-confirm-popup-container',
  templateUrl: './confirm-popup-container.component.html',
  styleUrls: ['./confirm-popup-container.component.less'],
  providers: [PrizmDestroyService],
})
export class PrizmConfirmPopupContainerComponent extends PrizmHintContainerComponent<unknown> {}
