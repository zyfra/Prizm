import { Directive } from '@angular/core';
import { ZyfraRowBaseDirective } from '../../@core/base-table';
import { ZyfraTableComponent } from '../zyfra-table.component';

@Directive({
  selector: '[zyfraRow]',
})
export class ZyfraRowDirective extends ZyfraRowBaseDirective<unknown> {
  constructor(private readonly table: ZyfraTableComponent) {
    super(table);
  }
}
