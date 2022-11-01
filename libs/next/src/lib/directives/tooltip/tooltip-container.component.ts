import { Component, OnInit } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { map } from 'rxjs/operators';
import { PzmHintContainerComponent } from '../hint/hint-container.component';

@Component({
  selector: 'pzm-tooltip-container',
  template: `
    <div class="box pzm-font-main-body-14" pzmFocusTrap>
      <pzm-scrollbar visibility='hidden'>
        <ng-container *polymorphOutlet="content() as data; context: context">
          {{data}}
        </ng-container>
      </pzm-scrollbar>

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
  providers: [PzmDestroyService]
})
export class PzmTooltipContainerComponent extends PzmHintContainerComponent implements OnInit {
  position$ = this.pzmOverlayControl.position.pos$.pipe(
    map(({extra}) => extra)
  );

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
