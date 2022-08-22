import {Component, OnInit,} from '@angular/core';
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import { map } from 'rxjs/operators';
import {ZuiHintContainerComponent} from '../hint/hint-container.component';

@Component({
  selector: 'zui-tooltip-container',
  template: `
    <div class="box zui-font-main-body-14" zuiFocusTrap>
      <zui-scrollbar visibility='hidden'>
        <ng-container *polymorphOutlet="content() as data; context: context">
          {{data}}
        </ng-container>
      </zui-scrollbar>

      <ng-container [ngSwitch]="position$ | async">
        <zui-icon class="arrow-icon" *ngSwitchCase="'r'" iconClass="chevrons-menu-left"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'rb'" iconClass="chevrons-menu-left"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'rt'" iconClass="chevrons-menu-left"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'l'" iconClass="chevrons-menu-right"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'lb'" iconClass="chevrons-menu-right"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'lt'" iconClass="chevrons-menu-right"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'tl'" iconClass="chevrons-dropdown"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'tr'" iconClass="chevrons-dropdown"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'b'" iconClass="chevrons-dropup"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'bl'" iconClass="chevrons-dropup"></zui-icon>
        <zui-icon class="arrow-icon" *ngSwitchCase="'br'" iconClass="chevrons-dropup"></zui-icon>
      </ng-container>
    </div>
  `,
  styleUrls: ['./tooltip-container.component.less'],
  providers: [ZuiDestroyService]
})
export class ZuiTooltipContainerComponent extends ZuiHintContainerComponent implements OnInit {
  position$ = this.zuiOverlayControl.position.pos$.pipe(
    map(({extra}) => extra)
  );

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
