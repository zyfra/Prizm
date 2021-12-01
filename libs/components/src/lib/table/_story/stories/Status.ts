import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTableComponent } from '../../zyfra-table.component';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-table
      [title]="title"
      [value]="value"
      (activeElementChange)="elementChange($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th>Status</th>
        </tr>
      </ng-template>
      <ng-template zyfraTableTemplate="body" let-item let-rowIndex="rowIndex">
        <tr [zyfraRow]="rowIndex" [zyfraRowStatus]="item">
          <td>{{ item }}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  component: ZyfraTableComponent,
  props: {
    ...args,
    activeElementChange: action('activeElementChange'),
  },
});

export const Status = Template.bind({});

Status.args = {
  title: 'Статусы ячеек',
  value: ['primary', 'info', 'warning', 'error', 'primary', 'info', 'warning', 'error', 'primary', 'info', 'warning', 'error', 'primary', 'info', 'warning', 'error'],
};
