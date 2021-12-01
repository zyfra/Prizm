import { ZyfraTreeTableComponent } from '../tree-table.component';
import { Directive } from '@angular/core';
import { ZyfraRowBaseDirective } from '../../@core/base-table';

@Directive({
  selector: '[zyfraRow]',
})
export class ZyfraTreeTableRowDirective extends ZyfraRowBaseDirective<unknown> {
  constructor(private readonly table: ZyfraTreeTableComponent) {
    super(table);
  }
}
