import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'zyfra-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './zyfra-tree.component.html',
})
export class ZyfraTreeComponent {
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();

  @Output() onNodeUnselect: EventEmitter<any> = new EventEmitter();

  @Output() onNodeExpand: EventEmitter<any> = new EventEmitter();

  @Output() onNodeCollapse: EventEmitter<any> = new EventEmitter();

  @Output() onNodeContextMenuSelect: EventEmitter<any> = new EventEmitter();

  @Output() onNodeDrop: EventEmitter<any> = new EventEmitter();

  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  @Input() items: TreeNode[];

  @Input() selectionMode: string; // single | multipple | checkbox

  @Input() selection: any;

  @Input() style: any;

  @Input() styleClass: string;

  @Input() contextMenu: any;

  @Input() layout = 'vertical';

  @Input() draggableScope: any;

  @Input() droppableScope: any;

  @Input() draggableNodes: boolean;

  @Input() droppableNodes: boolean;

  @Input() metaKeySelection = true;

  @Input() propagateSelectionUp = true;

  @Input() propagateSelectionDown = true;

  @Input() loading: boolean;

  @Input() loadingIcon = 'pi pi-spinner';

  @Input() emptyMessage = '';

  @Input() ariaLabel: string;

  @Input() ariaLabelledBy: string;

  @Input() validateDrop: boolean;

  @Input() enableFilter: boolean;

  @Input() filterBy = 'label';

  @Input() filterMode = 'lenient';

  @Input() filterPlaceholder: string;

  @Input() filterLocale: string;

  @Input() scrollHeight: string;

  @Input() virtualScroll: boolean;

  @Input() virtualNodeHeight: string;

  @Input() minBufferPx: number;

  @Input() maxBufferPx: number;

  @Input() indentation = 1.5;

  @Input() trackBy = (index: number, item: any) => item;

  onNodeSelectHandler(event: Event): void {
    this.onNodeSelect.emit(event);
  }

  onNodeUnselectHandler(event: Event): void {
    this.onNodeUnselect.emit(event);
  }

  onNodeExpandHandler(event: Event): void {
    this.onNodeExpand.emit(event);
  }

  onNodeCollapseHandler(event: Event): void {
    this.onNodeCollapse.emit(event);
  }

  onNodeContextMenuSelectHandler(event: Event): void {
    this.onNodeContextMenuSelect.emit(event);
  }

  onNodeDropHandler(event: Event): void {
    this.onNodeDrop.emit(event);
  }

  onFilterHandler(event: Event): void {
    this.onFilter.emit(event);
  }
}
