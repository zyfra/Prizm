import { Directive, HostBinding, HostListener, Inject, Input } from '@angular/core';
import { TargetTableToken } from '../target-table.token';
import { ZuiBaseTableComponent } from '../zui-base-table.directive';

@Directive({
  selector: '[zuiRow]',
})
export class ZuiRowBaseDirective<T> {
  @Input('zuiRow') data: T;
  @Input('zuiRowStatus') status: 'primary' | 'error' | 'warning' | 'info' = 'primary';

  constructor(@Inject(TargetTableToken) private readonly targetTable: ZuiBaseTableComponent<T>) {}

  @HostBinding('class')
  get rowStatusClass(): string {
    return `row_status-${this.status}`;
  }

  @HostBinding('class.zui-active-element')
  get isActiveElement(): boolean {
    return this.data === this.targetTable.activeElement;
  }

  @HostListener('click')
  public onRowClick(): void {
    this.targetTable.activeElement = this.data;
  }
}
