import { Directive } from '@angular/core';
import { ZyfraTreeTableComponent } from '../tree-table.component';
import { ZyfraRowBaseDirective } from '../../@core/base-table';

@Directive({
  selector: '[zyfraRow]',
})
export class ZyfraTreeTableBaseRowDirective extends ZyfraRowBaseDirective<unknown> {
  constructor(private readonly table: ZyfraTreeTableComponent) {
    super(table);
  }
}
