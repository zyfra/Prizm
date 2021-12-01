import { Directive, Input } from '@angular/core';
import { TTSelectableRow } from 'primeng/treetable';

@Directive({
  selector: '[zyfraTTSelectableRow]',
})
export class ZyfraTreeTableSelectableRowDirective extends TTSelectableRow {
  @Input('zyfraTTSelectableRow') rowNode: any;
  @Input('zyfraTTSelectableRowDisabled') ttSelectableRowDisabled: boolean;

  onClick(event): void {
    if (this.isEnabled()) {
      this.tt.toggleNodeWithCheckbox({
        rowNode: this.rowNode,
        originalEvent: event,
      });
    }
  }
}
