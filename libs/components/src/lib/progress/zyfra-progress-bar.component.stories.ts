import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ZyfraProgressBarComponent } from './zyfra-progress-bar.component';
import { ZyfraProgressBarModule } from './zyfra-progress-bar.module';

// @ts-ignore
import ProgressBarDoc from './zyfra-progress-bar.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Progress/ProgressBar',
  component: ZyfraProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ZyfraProgressBarModule
      ]
    }),
  ],
  parameters: {
    docs: {
      page: ProgressBarDoc,
    }
  }
} as Meta;

const Template: Story<ZyfraProgressBarComponent> = (args: ZyfraProgressBarComponent) => ({
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  value: 50
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Simple.args,
  color: 'secondary',
};

export const Info = Template.bind({});
Info.args = {
  ...Simple.args,
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  ...Simple.args,
  color: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Simple.args,
  color: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  ...Simple.args,
  color: 'success',
};

export const NoValueDisplay = Template.bind({});
NoValueDisplay.args = {
  ...Simple.args,
  showValue: false
};

export const Mini = Template.bind({});
Mini.args = {
  ...Simple.args,
  size: 'mini'
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  mode: 'indeterminate'
};
