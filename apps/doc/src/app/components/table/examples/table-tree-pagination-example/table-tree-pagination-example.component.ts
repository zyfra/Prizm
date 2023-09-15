import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ITableProduct {
  id?: number | string;
  status?: PrizmTableCellStatus;
  code: string;
  name: string;
  category: string;
  count: number;
  children?: ITableProduct[];
}

@Component({
  selector: 'prizm-table-tree-pagination-example',
  templateUrl: './table-tree-pagination-example.component.html',
  styleUrls: ['./table-tree-pagination-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTreePaginationExampleComponent {
  public activeFirstPage$ = new BehaviorSubject(true);

  public entities$ = this.activeFirstPage$.pipe(
    map(activeFirstPage => {
      console.log('activeFirstPage', activeFirstPage);
      if (activeFirstPage) {
        return [
          { id: '1', name: 'test1' },
          {
            id: '2',
            name: 'test2',
            children: [
              {
                id: '4',
                name: 'test4',
              },
              {
                id: '5',
                name: 'test5',
                children: [
                  {
                    id: '7',
                    name: 'test7',
                  },
                  {
                    id: '8',
                    name: 'test8',
                  },
                  {
                    id: '9',
                    name: 'test9',
                  },
                ],
              },
              {
                id: '6',
                name: 'test6',
              },
            ],
          },
          { id: '3', name: 'test3' },
        ];
      } else {
        return [
          { id: '10', name: 'test10' },
          {
            id: '11',
            name: 'test11',
            children: [
              {
                id: '13',
                name: 'test13',
              },
              {
                id: '14',
                name: 'test14',
                children: [
                  {
                    id: '16',
                    name: 'test16',
                  },
                  {
                    id: '17',
                    name: 'test17',
                  },
                  {
                    id: '18',
                    name: 'test18',
                  },
                ],
              },
              {
                id: '15',
                name: 'test15',
              },
            ],
          },
          { id: '12', name: 'test12' },
        ];
      }
    })
  );

  public readonly getTableChildren = (item: any): Observable<any[]> => {
    return of(item.children ?? []);
  };

  public toggleActiveFirstPage(): void {
    this.activeFirstPage$.next(!this.activeFirstPage$.value);
  }

  public getRowId(i: any): any {
    return i.id;
  }

  public trackBy(idx: any, item: any): any {
    return item.id;
  }
}
