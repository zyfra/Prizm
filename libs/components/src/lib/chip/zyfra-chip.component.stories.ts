import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraChipComponent } from './zyfra-chip.component';
import { ZyfraChipModule } from './zyfra-chip.module';

export default {
  title: 'Form/Chip',
  component: ZyfraChipComponent,
  decorators: [
    moduleMetadata({
      imports: [ZyfraChipModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-chip.component.story.doc.mdx').default,
    },
  },
} as Meta<ZyfraChipComponent>;

const Template: Story<ZyfraChipComponent> = (args: ZyfraChipComponent) => ({
  component: ZyfraChipComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  removable: true,
};
