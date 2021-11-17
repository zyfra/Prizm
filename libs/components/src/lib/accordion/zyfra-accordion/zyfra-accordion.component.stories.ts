import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraAccordionComponent } from './zyfra-accordion.component';
import { ZyfraAccordionModule } from '../zyfra-accordion.module';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import AccordionDoc from './zyfra-accordion.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Menu/Accordion',
  component: ZyfraAccordionComponent,

  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraAccordionModule,
      ]
    }),
  ],
  parameters: {
    docs: {
      page: AccordionDoc,
    }
  }
} as Meta;

const Template: Story<ZyfraAccordionComponent> = (args: ZyfraAccordionComponent) => ({
  template: `
  <zyfra-accordion [multiple]="multiple"
                   (mouseover)="mouseover()"
                   (onOpen)="onOpen($event)"
                   (onClose)="onClose($event)"
                   (activeIndexChange)="activeIndexChange($event)">
    <zyfra-accordion-tab header="Header 1" [disabled]="disabled" (selectedChange)="selectedChange($event)">
      Content 1
    </zyfra-accordion-tab>
    <zyfra-accordion-tab [disabled]="disabled" [selected]="selectedTwo" (selectedChange)="selectedTwo = $event;selectedChange($event)">
      <ng-template zyfraTemplate="header">
          {{dynamicString}} header Content 2
      </ng-template>
      <ng-template zyfraTemplate="icons">
          <span class="zyfra-icon chevrons-double-up" title="{{dynamicString}} title"></span>
          <span class="zyfra-icon chevrons-double-down" title="static title"></span>
      </ng-template>
      <ng-template zyfraTemplate="content">
      {{dynamicString}} body Content 2
      </ng-template>
    </zyfra-accordion-tab>
    <zyfra-accordion-tab *ngIf="showThirdForReInitTabTest" [disabled]="disabled" (selectedChange)="selectedChange($event)" (activeIndexChange)="activeIndexChange($event)">
      <ng-template zyfraTemplate="header">template header content</ng-template>
      <ng-template zyfraTemplate="content">template body content</ng-template>
    </zyfra-accordion-tab>
  </zyfra-accordion>
  `,
  props: {
    ...args,
    selectedChange: action('selectedChange'),
    onOpen: action('onOpen'),
    onClose: action('onClose'),
    activeIndexChange: action('activeIndexChange'),
    mouseover(): void {
      // для теста нормально ли подхватывается новый таб и учавствует модели. метод activeIndexChange должен выдавать правильную модель
      this.showThirdForReInitTabTest = true;
    }
  }
});

export const Simple = Template.bind({});
Simple.args = {
  dynamicString: 'Dynamic',
  multiple: true,
  selectedTwo: true,
  disabled: false,
  expandIcon: 'zyfra-icon chevrons-double-up',
  collapseIcon: 'zyfra-icon chevrons-double-down',
};
