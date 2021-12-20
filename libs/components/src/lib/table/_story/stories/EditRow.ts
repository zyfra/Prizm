import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getProductsSmall, Product } from '../data';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [dataKey]="dataKey"
      [editMode]="editMode"
      [responsiveLayout]="responsiveLayout"
      (editInit)="editInit($event)"
      (editComplete)="editComplete($event)"
      (editCancel)="editCancel($event)"
      (rowsChange)="rowsChange($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th style="width:8rem"></th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-product let-editing="editing" let-ri="rowIndex">
        <tr [zyfraRow]="product" [zyfraEditableRow]="product">
          <td>
            <zyfra-cell-editor [(value)]="product.code">
              {{product.code}}
            </zyfra-cell-editor>
          </td>
          <td>
            <zyfra-cell-editor [(value)]="product.name">
              {{product.name}}
            </zyfra-cell-editor>
          </td>
          <td>
            <zyfra-cell-editor [(value)]="product.inventoryStatus">
              {{product.inventoryStatus}}
            </zyfra-cell-editor>
          </td>
          <td style="text-align: right;">
            <zyfra-cell-editor [(value)]="product.price">
              <ng-template zyfraTableTemplate="input">
                <input type="text" [(ngModel)]="product.price">
              </ng-template>
              {{product.price | currency: 'USD'}}
            </zyfra-cell-editor>
          </td>
          <td style="text-align: center; font-size: 16px;">
            <button *ngIf="!editing" type="button" zyfraInitEditableRow (click)="onRowEditInit(product)" style="background: none; border: none; color: #7887A5; cursor: pointer;">
              <i class="zyfra-icon editor-mode"></i>
            </button>
            <button *ngIf="editing" type="button" zyfraSaveEditableRow (click)="onRowEditSave(product)" style="background: none; border: none; color: #62BC65; cursor: pointer;">
              <i class="pi pi-check"></i>
            </button>
            <button *ngIf="editing" type="button" zyfraCancelEditableRow (click)="onRowEditCancel(product, ri)" style="background: none; border: none; color: #EC5050; cursor: pointer;">
              <i class="pi pi-times"></i>
            </button>
          </td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  component: ZyfraTableComponent,
  props: {
    ...args,
    editComplete: action('editComplete'),
    editCancel: action('editCancel'),
    editInit: action('editInit'),
    statuses: [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ],
    clonedProducts: {} as { [s: string]: Product; },
    onRowEditInit(product: Product): void {
      this.clonedProducts[product.id] = { ...product };
    },
    onRowEditSave(product: Product): void {
      if (product.price > 0) {
        delete this.clonedProducts[product.id];
      }
    },
    onRowEditCancel(product: Product, index: number): void {
      this.value[index] = this.clonedProducts[product.id];
      delete this.clonedProducts[product.id];
    },
  },
});

export const EditRow = Template.bind({});

EditRow.args = {
  title: 'Редактирование строк',
  value: getProductsSmall(),
  editMode: 'row',
  dataKey: 'id',
  responsiveLayout: 'scroll',
};
