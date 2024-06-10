import { Component, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { map } from 'rxjs/operators';
import { PrizmHintContainerComponent } from '../hint/hint-container.component';

@Component({
  selector: 'prizm-context-menu-container',
  template: `
    <div class="box prizm-font-main-body-14" prizmFocusTrap>
      <ng-container *polymorphOutlet="content() as data; context: context">
        <div class="content">{{ data }}</div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./context-menu-container.component.less'],
  providers: [PrizmDestroyService],
})
export class PrizmContextMenuContainerComponent extends PrizmHintContainerComponent implements OnInit {
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
