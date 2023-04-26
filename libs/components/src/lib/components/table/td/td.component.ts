import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PrizmTableCellStatus } from '../table.types';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `th[prizmTd], td[prizmTd]`,
  template: ` <ng-content></ng-content> `,
  styleUrls: [`./td.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTdComponent {
  @Input() @HostBinding('attr.status') public status: PrizmTableCellStatus = 'default';

  @HostBinding(`class._editable`)
  @ContentChild(NgControl)
  readonly control: unknown;
}
