import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmOverlayService, PrizmTableCellStatus } from '@prizm-ui/components';

interface ITableProduct {
  id: number;
  status?: PrizmTableCellStatus;
  code: string;
  name: string;
  category: string;
  count: number;
  active: boolean;
}

@Component({
  selector: 'prizm-table-track-by-example',
  templateUrl: './table-track-by-example.component.html',
  styleUrls: ['./table-track-by-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTrackByExampleComponent {
  constructor(private overlay: PrizmOverlayService) {}
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = [
    {
      id: 1,
      name: 'aaa',
      code: 'aaa',
      category: 'aaa',
      count: 1,
      active: false,
    },
    {
      id: 2,
      name: 'bbb',
      code: 'bbb',
      category: 'bbb',
      count: 2,
      active: false,
    },
    {
      id: 3,
      name: 'ccc',
      code: 'ccc',
      category: 'ccc',
      count: 3,
      active: false,
    },
    {
      id: 4,
      name: 'ddd',
      code: 'ddd',
      category: 'ddd',
      count: 4,
      active: false,
    },
    {
      id: 5,
      name: 'eee',
      code: 'eee',
      category: 'eee',
      count: 5,
      active: false,
    },
  ];

  public onTrClick(event: MouseEvent, product: ITableProduct) {
    this.products = this.products.map(item => {
      return { ...item, active: item.id === product.id ? true : false };
    });
  }

  public trackByFn(index: number, item: ITableProduct) {
    return index;
  }
}
