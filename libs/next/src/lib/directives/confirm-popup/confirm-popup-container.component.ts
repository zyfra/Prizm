import {Component, OnInit,} from '@angular/core';
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import { map } from 'rxjs/operators';
import {ZuiHintContainerComponent} from '../hint/hint-container.component';

@Component({
  selector: 'zui-confirm-popup-container',
  templateUrl: './confirm-popup-container.component.html',
  styleUrls: ['./confirm-popup-container.component.less'],
  providers: [ZuiDestroyService]
})
export class ZuiConfirmPopupContainerComponent extends ZuiHintContainerComponent<any> {
}
