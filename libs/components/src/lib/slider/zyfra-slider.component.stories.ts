import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ZyfraSliderComponent } from './zyfra-slider.component';
import { ZyfraSliderModule } from './zyfra-slider.module';
// @ts-ignore
import SliderDoc from './zyfra-slider.component.story.doc.mdx';
import { action } from '@storybook/addon-actions';

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
  template: `
    <zyfra-slider
      [(ngModel)]="ngModel"
      [min]="min"
      [max]="max"
      [step]="step"
      [range]="range"
      [orientation]="orientation"
      (ngModelChange)="ngModelChange($event)"
      (onSlideEnd)="onSlideEnd($event)"
    ></zyfra-slider>
    <br>
    <p style="font-size: 14px; font-family: Inter, sans-serif;">Control value: {{ngModel}}</p>
  `,
  props: {
    ...args,
    ngModelChange: action('ngModelChange'),
    onSlideEnd: action('onSlideEnd'),
  },
});

export const Simple = Template.bind({});
Simple.args = {
  ngModel: 20,
  min: 0,
  max: 100,
  step: 1,
};

export const Range = Template.bind({});
Range.args = {
  ngModel: [20, 80],
  min: 0,
  max: 100,
  step: 5,
  range: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  ngModel: null,
  min: 0,
  max: 100,
  step: 5,
  orientation: 'vertical',
};
