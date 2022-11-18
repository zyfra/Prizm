import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';
import { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'prizm-table-filter-example',
  templateUrl: './table-filter-example.component.html',
  styleUrls: ['./table-filter-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
  public productsCategories: string[] = ['Premium', 'Active', 'Sport', 'Sport+'];

  public filterOpen = false;
  public filterOn = false;

  public formGroup = new FormGroup({
    control1: new FormControl(true),
    control2: new FormControl(true),
    control3: new FormControl(true),
    control4: new FormControl(true),
  });

  public filteredProducts$: Observable<ITableProduct[]> = this.formGroup.valueChanges.pipe(
    map(formVal => {
      const mask = Object.values(formVal);
      const chosenCategories = this.productsCategories.filter((category, i) => mask[i]);
      this.filterOn = chosenCategories.length !== mask.length;
      return this.products.filter(products => chosenCategories.includes(products.category));
    }),
    startWith(this.products)
  );
}
