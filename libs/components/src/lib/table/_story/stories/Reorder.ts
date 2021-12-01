import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getProductsSmall } from '../data';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [columns]="columns"
      [reorderableColumns]="reorderableColumns"
      (colReorder)="colReorder($event)"
      (rowReorder)="rowReorder($event)"
    >
      <ng-template zyfraTableTemplate="header" let-columns>
        <tr>
          <th style="width: 32px"></th>
          <th *ngFor="let col of columns" zyfraReordableColumn>{{ col.header }}</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-rowData let-columns="columns" let-index="rowIndex">
        <tr [zyfraRow]="rowData" [zyfraReordableRow]="index">
          <td>
            <span class="pi pi-bars" [zyfraReordableRowHandler]="index"></span>
          </td>
          <td *ngFor="let col of columns" [style]="col.field === 'quantity' ? { 'text-align': 'right' } : null">{{ rowData[col.field] }}</td>
        </tr>
      </ng-template>
    </zyfra-table>

  `,
  component: ZyfraTableComponent,
  props: {
    ...args,
    colReorder: action('colReorder'),
    rowReorder: action('rowReorder'),
  },
});

export const Reorder = Template.bind({});

Reorder.args = {
  title: 'Таблица с возможностью перестановки столбцов и строк',
  value: getProductsSmall(),
  columns: [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
  ],
  reorderableColumns: true
};
