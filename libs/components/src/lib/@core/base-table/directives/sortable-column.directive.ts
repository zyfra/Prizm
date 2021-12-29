/* eslint-disable */
// @ts-nocheck
import { DomHandler } from 'primeng/dom';

export function onSortColumnClick(event: MouseEvent): void {
  if (this.canClick(event)) {
    this.updateSortState();

    if (this.shouldReset()) {
      this.zyfraTable.resetSort();
    } else {
      this.emitSort({
        originalEvent: event,
        field: this.field
      });
    }

    DomHandler.clearSelection();
  }
}
