import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable()
export class NavMenuService {
  private selection = new BehaviorSubject<TreeNode>(null);
  selection$ = this.selection.asObservable();

  selectionChange(node: TreeNode): void {
    if (this.selection.value) {
      this.selection.value.styleClass = '';
    }
    if (node) {
      node.styleClass = 'active';
    }
    this.selection.next(node);
  }
}
