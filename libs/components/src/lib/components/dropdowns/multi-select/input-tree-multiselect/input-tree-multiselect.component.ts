import { AfterViewInit, ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_EMPTY_ARRAY } from 'libs/core/src/lib/const';
import { PrizmInputControl, PrizmInputNgControl } from '../../../input';
import { PrizmInputMultiSelectComponent } from '../input-multi-select.component';
import { TreeNode } from 'primeng/api';
import { PrizmHandler } from 'libs/components/src/lib/types';
import {take, takeUntil} from 'rxjs/operators';
import { PrizmMultiSelectItemWithChecked } from '@prizm-ui/components';
@Component({
  selector: 'prizm-input-tree-multi-select',
  templateUrl: './input-tree-multiselect.component.html',
  styleUrls: ['../input-multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputTreeMultiselectComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputTreeMultiselectComponent },
  ],
})
export class PrizmInputTreeMultiselectComponent<T> extends PrizmInputMultiSelectComponent<any> {
  map = new Map<TreeNode, boolean>();

  data: any = {};

  override ngOnInit() {
    super.ngOnInit();
    this.items$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      this.data = { children: list_to_tree(items) };
    });
  }

  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;

  readonly getValue = (item: TreeNode, map: Map<TreeNode, boolean>): boolean | null => {
    const flat = flatten(item);
    const result = !!map.get(flat[0]);

    for (let i = 0; i < flat.length; i++) {
      if (result !== !!map.get(flat[i])) {
        return null;
      }
    }

    return result;
  };

  public onChecked(node: any, value: boolean): void {
    // Just example
    this.filteredItems$.pipe(take(1)).subscribe(items => this.select(items.find(n => n.obj.id === node.id)));
  }
}

function flatten(item: TreeNode): readonly TreeNode[] {
  return item.children ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], []) : [item];
}

function list_to_tree(list: any[]) {
  const map = {};
  let node = [];
  const roots = [];

  for (let i = 0; i < list.length; i += 1) {
    // @ts-ignore
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (let i = 0; i < list.length; i += 1) {
    node = list[i];
    // @ts-ignore
    if (node.parentId !== '0') {
      // @ts-ignore
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}
