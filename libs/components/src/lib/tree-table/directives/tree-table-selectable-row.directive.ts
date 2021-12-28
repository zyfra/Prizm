import { Directive, Input } from '@angular/core';
import { TTSelectableRow } from 'primeng/treetable';

@Directive({
  selector: '[zyfraTTSelectableRow]',
})
export class ZyfraTreeTableSelectableRowDirective extends TTSelectableRow {
  @Input('zyfraTTSelectableRow') override rowNode: any;
  @Input('zyfraTTSelectableRowDisabled') override ttSelectableRowDisabled: boolean;

  public override onClick(event): void {
    if (this.isEnabled()) {
      this.tt.toggleNodeWithCheckbox({
        rowNode: this.rowNode,
        originalEvent: event,
      });
    }
  }
}
