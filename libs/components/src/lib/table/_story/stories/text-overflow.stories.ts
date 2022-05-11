import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';
import { getProducts } from '../data';

const Template: Story<ZyfraTableComponent> = args => ({
  template: `
    <zyfra-table
      class="text-overflow"
      [title]="title"
      [value]="value"
      [responsiveLayout]="responsiveLayout"
      [stripedMode]="stripedMode"
      (activeElementChange)="activeElementChange($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-product let-rowIndex="rowIndex">
        <tr [zyfraRow]="product">
          <td>{{product.code}}</td>
          <td>{{product.name}}</td>
          <td>{{product.category}}</td>
          <td style="text-align: right;">{{product.quantity}}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  props: {
    ...args,
    activeElementChange: action('activeElementChange'),
  },
});

export const TextOverflow = Template.bind({});

TextOverflow.args = {
  value: getProducts(),
  responsiveLayout: 'scroll',
  title: 'Таблица со скрывающимся текстом',
  stripedMode: true,
};
