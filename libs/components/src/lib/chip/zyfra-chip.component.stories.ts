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
  removeIcon: 'zyfra-icon cancel-close',
  removable: true
};


export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: 'zyfra-icon location-compass'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  label: 'Text'
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Icon',
  icon: 'zyfra-icon location-compass',
  removeIcon: 'zyfra-icon cancel-close',
  removable: true
};


