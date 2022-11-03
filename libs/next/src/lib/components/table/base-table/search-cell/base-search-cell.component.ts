import { HostBinding, Input, Output, EventEmitter, Directive } from '@angular/core';

type ValueChangeEvent = {
  field: string;
  value: string;
};

@Directive()
export abstract class PrizmBaseSearchCellComponent {
  @Input() placeholder = '';
  @Input() field: string;
  /**
   * If the value is true, then the native filtering of the table will be used,
   * otherwise the valueChange event will be emitted
   */
  @Input() isNativeFiltering = true;
  @Input() matchMode = 'contains';

  @Output() valueChange = new EventEmitter<ValueChangeEvent>();

  @HostBinding('class') hostClass = 'search-cell';

  public abstract readonly table: any;

  // TODO refactor this, need form control
  public filter(value: any, field: string, matchMode: string): void {
    if (this.isNativeFiltering) {
      this.table.filter(value, field, matchMode);
    } else {
      this.valueChange.emit({ field, value });
    }
  }
}
