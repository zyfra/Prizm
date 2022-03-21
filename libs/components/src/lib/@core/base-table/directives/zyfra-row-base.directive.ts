import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { ZyfraBaseTableComponent } from '../zyfra-base-table.directive';

@Directive({
  selector: '[zyfraRow]',
})
export class ZyfraRowBaseDirective<T> {
  @Input('zyfraRow') data: T;
  @Input('zyfraRowStatus') status: 'primary' | 'error' | 'warning' | 'info' = 'primary';

  constructor(private readonly targetTable: ZyfraBaseTableComponent<T>) {}

  @HostBinding('class')
  get rowStatusClass(): string {
    return `row_status-${this.status}`;
  }

  @HostBinding('class.zyfra-active-element')
  get isActiveElement(): boolean {
    return this.data === this.targetTable.activeElement;
  }

  @HostListener('click')
  public onRowClick(): void {
    this.targetTable.activeElement = this.data;
  }
}
