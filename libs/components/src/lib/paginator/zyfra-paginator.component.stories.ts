import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ZyfraPaginatorComponent } from './zyfra-paginator.component';
import { ZyfraPaginatorModule } from './zyfra-paginator.module';

export default {
  moduleId: module.id,
  title: 'Pagination/Paginator',
  component: ZyfraPaginatorComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule, ZyfraPaginatorModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-paginator.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraPaginatorComponent> = (args) => ({
  component: ZyfraPaginatorComponent,
  props: args,
});

export const Basic = Template.bind({});

Basic.args = {
  rows: 10,
  totalRecords: 100,
  pageLinkSize: 10,
};

export const WithPageOptions = Template.bind({});

WithPageOptions.args = {
  rows: 10,
  totalRecords: 100,
  rowsPerPageOptions: [25, 50, 75, 100],
  pageLinkSize: 4,
};
