import { Directive, HostBinding, HostListener, Inject, Input } from '@angular/core';
import { TargetTableToken } from '../target-table.token';
import { PzmBaseTableComponent } from '../pzm-base-table.directive';

@Directive({
  selector: '[pzmRow]',
})
export class PzmRowBaseDirective<T> {
  @Input('pzmRow') data: T;
  @Input('pzmRowStatus') status: 'primary' | 'error' | 'warning' | 'info' = 'primary';

  constructor(@Inject(TargetTableToken) private readonly targetTable: PzmBaseTableComponent<T>) {}

  @HostBinding('class')
  get rowStatusClass(): string {
    return `row_status-${this.status}`;
  }

  @HostBinding('class.pzm-active-element')
  get isActiveElement(): boolean {
    return this.data === this.targetTable.activeElement;
  }

  @HostListener('click')
  public onRowClick(): void {
    this.targetTable.activeElement = this.data;
  }
}
