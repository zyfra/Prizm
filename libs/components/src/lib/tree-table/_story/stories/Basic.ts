import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { ZyfraTreeTableComponent } from '../../tree-table.component';
import { getFileSystem } from '../data';

const actions = {
  onNodeExpand: action('onNodeExpand'),
  onNodeCollapse: action('onNodeCollapse'),
  elementChange: action('elementChange'),
};

const Template: Story<ZyfraTreeTableComponent> = (args) => ({
  template: `
    <zyfra-tree-table
      [value]="value"
      [columns]="columns"
      [title]="title"
      [stripedMode]="stripedMode"
      (onNodeExpand)="onNodeExpand($event)"
      (onNodeCollapse)="onNodeCollapse($event)"
      (activeElementChange)="elementChange($event)"
    >
      <ng-template zyfraTableTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns">{{ col.header }}</th>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [zyfraRow]="rowData">
          <td *ngFor="let col of columns; let i = index">
            <zyfra-tree-table-toggler [rowNode]="rowNode" *ngIf="i === 0"></zyfra-tree-table-toggler>
            <ng-container *ngIf="i === 0">
              <span
                class="zyfra-icon files-folder"
                *ngIf="rowNode.node.children && rowNode.node.children.length > 0; else docIcon"
                style="margin-right: 10px;"
              ></span>
            </ng-container>
            <span>{{ rowData[col.field ]}}</span>
          </td>
        </tr>
      </ng-template>
    </zyfra-tree-table>

    <ng-template #docIcon>
      <span class="zyfra-icon files-description-properties" style="margin-right: 10px; font-size: 20px;"></span>
    </ng-template>
  `,
  component: ZyfraTreeTableComponent,
  props: {
    ...args,
    onNodeExpand: event => actions.onNodeExpand({ node: event.node, ...event }),
    onNodeCollapse: event => actions.onNodeCollapse({ node: event.node, ...event }),
    elementChange: actions.elementChange,
  },
});

export const Basic = Template.bind({});

Basic.args = {
  title: 'Базовая таблица',
  value: getFileSystem(),
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ],
  stripedMode: true,
};
