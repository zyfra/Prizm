import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraMenuApplicationsItemComponent } from './zyfra-menu-applications-item.component';

export default {
  title: '_hidden_ZyfraMenuApplicationsItemComponent',
  component: ZyfraMenuApplicationsItemComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ZyfraMenuApplicationsItemComponent>;

const Template: Story<ZyfraMenuApplicationsItemComponent> = (args: ZyfraMenuApplicationsItemComponent) => ({
  component: ZyfraMenuApplicationsItemComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  item: null,
  isActive: false,
};
