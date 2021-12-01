import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getProducts } from '../data';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [sortMode]="sortMode"
      (sort)="sort($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th zyfraSortableColumn="code">Code <zyfra-sort-icon field="code"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="name">Name <zyfra-sort-icon field="name"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="category">Category <zyfra-sort-icon field="category"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="quantity">Quantity <zyfra-sort-icon field="quantity"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="price">Price <zyfra-sort-icon field="price"></zyfra-sort-icon></th>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="body" let-product>
        <tr [zyfraRow]="product">
          <td>{{product.code}}</td>
          <td>{{product.name}}</td>
          <td>{{product.category}}</td>
          <td style="text-align: right;">{{product.quantity}}</td>
          <td style="text-align: right;">{{product.price | currency: 'USD'}}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  component: ZyfraTableComponent,
  props: {
    ...args,
    sort: action('sort'),
  },
});

export const SortMultiple = Template.bind({});

SortMultiple.args = {
  title: 'Сортировка по нескольким столбцам (с зажатым ctrl)',
  value: getProducts(),
  sortMode: 'multiple',
};
