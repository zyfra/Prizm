import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';
import { TABLE_EXAMPLE_DATA_2 } from '../../table-example.const';

@Component({
  selector: 'prizm-table-selectable-meta-example',
  templateUrl: './table-selectable-meta-example.component.html',
  styleUrls: ['./table-selectable-meta-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSelectableMetaExampleComponent {
  public selected = new Set<ITableProduct>();

  active: { product: ITableProduct; index: number } | null = null;

  public columns: string[] = ['checkbox', 'code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_2;

  rowClickWithShift = false;

  public onSelectStart(event: Event): void {
    event.preventDefault();
  }
  public rowClick(e: MouseEvent, product: ITableProduct, index: number): void {
    e.preventDefault();

    if (e.shiftKey) {
      this.rowClickWithShift = true;

      if (!this.active) {
        this.active = { product, index };
        this.addToSelection(product);
        return;
      }

      const [from, to] = [this.active.index, index].sort((a, b) => a - b);
      this.products.forEach((product, productIndex) => {
        if (productIndex >= from && productIndex <= to) {
          this.addToSelection(product);
        } else {
          this.removeFromSelection(product);
        }
      });
      return;
    }

    if (e.ctrlKey || e.metaKey) {
      this.changeSelectionState(product);
      this.active = { product, index };
      return;
    }

    if (this.rowClickWithShift) {
      this.selected.clear();
      this.rowClickWithShift = false;
    }

    this.active = { product, index };
  }

  public productIsSelected(product: ITableProduct): boolean {
    return this.selected.has(product);
  }

  public selectAllChanged(value: boolean): void {
    if (value === true) {
      this.selected = new Set([...this.products]);
    } else {
      this.selected = new Set([]);
    }
  }

  public productCheckboxChange(product: ITableProduct, index: number): void {
    this.active = { product, index };
    this.changeSelectionState(product);
  }

  public trackBy(index: number, item: ITableProduct): string {
    return item.code;
  }

  private changeSelectionState(product: ITableProduct): void {
    if (this.selected.has(product)) {
      this.removeFromSelection(product);
    } else {
      this.addToSelection(product);
    }
  }

  private addToSelection(product: ITableProduct): void {
    this.selected.add(product);
  }

  private removeFromSelection(product: ITableProduct): void {
    this.selected.delete(product);
  }
}
