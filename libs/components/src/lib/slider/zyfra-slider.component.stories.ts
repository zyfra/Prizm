import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ZyfraSliderComponent } from './zyfra-slider.component';
import { ZyfraSliderModule } from './zyfra-slider.module';
// @ts-ignore
import SliderDoc from './zyfra-slider.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Slider/Slider',
  component: ZyfraSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraSliderModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: SliderDoc,
    },
  },
} as Meta;

const Template: Story<ZyfraSliderComponent> = (args) => ({
  component: ZyfraSliderComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  model: 20,
  min: 0,
  max: 100,
  step: 1,
};

export const Range = Template.bind({});
Range.args = {
  model: [20, 80],
  min: 0,
  max: 100,
  step: 10,
  range: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  model: null,
  min: 0,
  max: 100,
  step: 10,
  orientation: 'vertical',
};
