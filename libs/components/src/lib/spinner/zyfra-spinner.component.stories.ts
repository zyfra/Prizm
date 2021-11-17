import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { ZyfraSpinnerModule } from './zyfra-spinner.module';
import { ZyfraSpinnerComponent } from './zyfra-spinner.component';

// @ts-ignore
import SliderDoc from './zyfra-spinner.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Loading/Spinner',
  component: ZyfraSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraSpinnerModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: SliderDoc,
    },
  },
} as Meta;

const Template: Story<ZyfraSpinnerComponent> = (args) => ({
  component: ZyfraSpinnerComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  color: 'primary',
};

export const Size = Template.bind({});
Size.args = {
  color: 'secondary',
  size: '50px',
};

export const Style = Template.bind({});
Style.args = {
  color: 'danger',
  style: {
    opacity: 0.5,
  },
};
