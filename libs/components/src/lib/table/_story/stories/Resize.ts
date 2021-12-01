import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getProducts } from '../data';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      [resizableColumns]="resizableColumns"
      (colResize)="colResize($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th zyfraResizableColumn>Code</th>
          <th zyfraResizableColumn>Name</th>
          <th zyfraResizableColumn>Category</th>
          <th zyfraResizableColumn>Quantity</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-product>
        <tr [zyfraRow]="product">
          <td>{{ product.code }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td style="text-align: right;">{{ product.quantity }}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  component: ZyfraTableComponent,
  props: {
    ...args,
    colResize: action('colResize')
  },
});

export const Resize = Template.bind({});

Resize.args = {
  title: 'Таблица с возможностью изменения размера колонок',
  value: getProducts(),
  resizableColumns: true,
};
