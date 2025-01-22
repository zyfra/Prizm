import { Component } from '@angular/core';
import { PrizmHandler } from '@prizm-ui/components';
import { BehaviorSubject } from 'rxjs';

interface TreeNode {
  /** Уникальный идентификатор */
  id: string;
  /** Подпись */
  name: string;
  /** Узел выбран (чекнут) **/
  checked: boolean;
  /** Узел в состоянии неопределённости  */
  indeterminate: boolean;
  /** Дочерние узлы */
  children: TreeNode[];
  /** Общее число потомков */
  constChildrenCount: number;
  /** Отмеченное число потомков */
  selectedChildrenCount: number;
}

const originTree: TreeNode = {
  id: 'f9cfa517-7144-4a72-9fac-1fb234813b8a',
  name: 'Завод',
  checked: false,
  indeterminate: false,
  children: [
    {
      id: '6ad20829-8fd8-4d25-9e42-f097087fe5ab',
      name: 'Производство №1',
      checked: false,
      indeterminate: false,
      children: [
        {
          id: '73ed7ee4-befa-4d70-bfaf-b42b7b99782c',
          name: 'Переработка сырья 1',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
        {
          id: '2be3ef3b-4417-49eb-a636-a21a546ceb65',
          name: 'Резервуар 101',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
        {
          id: 'e5d8b0aa-2f19-4f0c-bf76-ebb186672da9',
          name: 'Резервуар 102',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
        {
          id: 'd90ff26b-9135-41f4-bbf2-03952de4fa6e',
          name: 'Смешения сырья установки 1',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
      ],
      constChildrenCount: 4,
      selectedChildrenCount: 0,
    },
    {
      id: 'e4c8100a-9f6c-443f-9979-915bb6b254e5',
      name: 'Производство №2',
      checked: false,
      indeterminate: false,
      children: [
        {
          id: '2f32dcd6-3d17-4e19-b97b-4d082c347c35',
          name: 'Переработка сырья 2',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
        {
          id: '9841c60b-ac85-44f8-b83c-6097afca151f',
          name: 'Переработка сырья 2.1',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
        {
          id: '3a7b68c9-3918-4f44-80aa-4fdee9e7431f',
          name: 'Резервуар 301',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
        {
          id: '19544871-e1d8-4db3-b8ff-65d658851b48',
          name: 'Резервуар 302',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
        {
          id: 'a2d68cdc-4060-4390-9c15-0e55fdf55e7d',
          name: 'Смешение сырья Установки 2',
          checked: false,
          indeterminate: false,
          children: [],
          constChildrenCount: 0,
          selectedChildrenCount: 0,
        },
      ],
      constChildrenCount: 5,
      selectedChildrenCount: 0,
    },
  ],
  constChildrenCount: 9,
  selectedChildrenCount: 0,
};

@Component({
  selector: 'prizm-tree-function-access-example',
  templateUrl: './function-access-example.component.html',
  styles: `
    .node {
      display: flex;
      align-items: center;

      &__label {
        font-size: 14px;
      }
    }

    prizm-checkbox {
      align-items: center;
    }
  `,
})
export class TreeFunctionAccessExampleComponent {
  /** ID выбранных объектов **/
  public selectedIdSet = new Set<string>();
  public tree$$ = new BehaviorSubject(this.getWorkTree([structuredClone(originTree)], this.selectedIdSet));
  readonly tree$ = this.tree$$.asObservable();
  readonly childrenHandler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children ?? [];

  public toggleNode(node: TreeNode, isSelected: boolean): void {
    if (node.children.length === 0) {
      if (isSelected) {
        this.addSelectedIds([node.id]);
      } else {
        this.removeSelectedIds([node.id]);
      }
      this.rebuildTree();
      return;
    }
    const leafIdList = this.getLeafIdList([originTree], [node.id]);
    if (isSelected) {
      this.addSelectedIds(leafIdList);
    } else {
      this.removeSelectedIds(leafIdList);
    }
    this.rebuildTree();
  }

  private rebuildTree(): void {
    this.tree$$.next(this.getWorkTree(this.tree$$.value, this.selectedIdSet));
  }

  private removeSelectedIds(value: string[]): void {
    const selectedIdSet = new Set(this.selectedIdSet);
    value.forEach(id => selectedIdSet.delete(id));
    this.selectedIdSet = selectedIdSet;
  }

  private addSelectedIds(value: string[]): void {
    this.selectedIdSet = new Set([...this.selectedIdSet, ...value]);
  }

  private getWorkTree(tree: TreeNode[], checkedLeafIds: Set<string>, searchTerm = ''): TreeNode[] {
    return tree.map(node => {
      if (node.children.length === 0) {
        return {
          ...node,
          indeterminate: false,
          checked: checkedLeafIds.has(node.id),
        };
      }
      const children = this.getWorkTree(node.children, checkedLeafIds, searchTerm);
      const selectedChildrenCount = children.reduce((sum, child) => {
        if (child.children.length === 0) {
          sum += Number(child.checked);
        } else {
          sum += child.selectedChildrenCount;
        }
        return sum;
      }, 0);
      return {
        ...node,
        indeterminate: selectedChildrenCount > 0 && selectedChildrenCount < node.constChildrenCount,
        checked: node.constChildrenCount === selectedChildrenCount,
        selectedChildrenCount,
        children,
      };
    });
  }

  /**
   * Получить список идентификаторов листьев дерева
   * @param tree - исходное дерево (поддерево)
   * @param idList - список идентификаторов искомых узлов
   */
  private getLeafIdList(tree: TreeNode[], idList: string[]): string[] {
    const result: string[] = [];
    for (const node of tree) {
      if (node.children.length === 0) {
        // лист
        if (idList.includes(node.id)) {
          result.push(node.id);
        }
        continue;
      }

      const nextIdList = idList.includes(node.id)
        ? [...idList, ...node.children.map(node => node.id)]
        : idList;
      result.push(...this.getLeafIdList(node.children, nextIdList));
    }
    return result;
  }
}
