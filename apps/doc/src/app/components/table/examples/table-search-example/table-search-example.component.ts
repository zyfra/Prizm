import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';
import { TABLE_EXAMPLE_DATA_SEARCH } from '../../table-example.const';

@Component({
  selector: 'prizm-table-search-example',
  templateUrl: './table-search-example.component.html',
  styleUrls: ['./table-search-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSearchExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];
  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_SEARCH;
  public searchString: string = null;
  public searchAllowedProducts: ITableProduct[] = this.products;

  public search<T extends keyof ITableProduct>(value: string, key: T): void {
    this.searchString = value.toLowerCase();
    this.searchAllowedProducts = this.products.filter(product =>
      (product[key] as string).toLowerCase().includes(this.searchString)
    );
  }
}
