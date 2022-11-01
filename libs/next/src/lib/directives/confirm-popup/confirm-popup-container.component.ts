import {Component, OnInit,} from '@angular/core';
import {PzmDestroyService} from "@digital-plant/zyfra-helpers";
import { map } from 'rxjs/operators';
import {PzmHintContainerComponent} from '../hint/hint-container.component';

@Component({
  selector: 'pzm-confirm-popup-container',
  templateUrl: './confirm-popup-container.component.html',
  styleUrls: ['./confirm-popup-container.component.less'],
  providers: [PzmDestroyService]
})
export class PzmConfirmPopupContainerComponent extends PzmHintContainerComponent<any> {
}
