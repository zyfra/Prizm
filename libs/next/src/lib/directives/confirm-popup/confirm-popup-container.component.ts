import {Component, OnInit,} from '@angular/core';
import {PrizmDestroyService} from "@digital-plant/zyfra-helpers";
import { map } from 'rxjs/operators';
import {PrizmHintContainerComponent} from '../hint/hint-container.component';

@Component({
  selector: 'pzm-confirm-popup-container',
  templateUrl: './confirm-popup-container.component.html',
  styleUrls: ['./confirm-popup-container.component.less'],
  providers: [PrizmDestroyService]
})
export class PrizmConfirmPopupContainerComponent extends PrizmHintContainerComponent<any> {
}
