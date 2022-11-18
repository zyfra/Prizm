import { Directive, HostBinding, HostListener, Inject, Input } from '@angular/core';
import { TargetTableToken } from '../target-table.token';
import { PrizmBaseTableComponent } from '../prizm-base-table.directive';

@Directive({
  selector: '[prizmRow]',
})
export class PrizmRowBaseDirective<T> {
  @Input('prizmRow') data: T;
  @Input('prizmRowStatus') status: 'primary' | 'error' | 'warning' | 'info' = 'primary';

  constructor(@Inject(TargetTableToken) private readonly targetTable: PrizmBaseTableComponent<T>) {}

  @HostBinding('class')
  get rowStatusClass(): string {
    return `row_status-${this.status}`;
  }

  @HostBinding('class.prizm-active-element')
  get isActiveElement(): boolean {
    return this.data === this.targetTable.activeElement;
  }

  @HostListener('click')
  public onRowClick(): void {
    this.targetTable.activeElement = this.data;
  }
}
