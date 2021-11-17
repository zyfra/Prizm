import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraTabViewModule } from '../zyfra-tab-view.module';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SlideMenuModule } from 'primeng/slidemenu';
// @ts-ignore
import TabViewDoc from './zyfra-tab-view.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Tabs/TabView',
  argTypes: {
    onChangeHandler: { action: 'onChange' },
    onCloseHandler: { action: 'onClose' },
  },
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ZyfraTabViewModule,
        BadgeModule,
        SlideMenuModule,
        OverlayPanelModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: TabViewDoc,
    },
  },
} as Meta;

const Template: Story = (args) => ({
  template: `
    <zyfra-tab-view
      [class]="zyfraTabViewTagStyle"
      [activeIndex]="activeIndex"
      [controlClose]="controlClose"
      [style]="style"
      [styleClass]="styleClass"
      (onChange)="onChangeHandler($event)"
      (onClose)="onCloseHandler($event)"
    >
      <ng-container *ngFor="let tab of tabs">
        <zyfra-tab-panel
          [header]="tab.header"
          [selected]="tab.selected"
          [disabled]="tab.disabled"
          [closable]="tab.closable"
          [leftIcon]="tab.leftIcon"
          [rightIcon]="tab.rightIcon"
          [headerStyle]="tab.headerStyle"
          [headerStyleClass]="tab.headerStyleClass"
          [cache]="tab.cache"
          [tooltip]="tab.tooltip"
          [tooltipPosition]="tab.tooltipPosition"
          [tooltipStyleClass]="tab.tooltipStyleClass"
        >
          {{ tab.content }}
        </zyfra-tab-panel>
      </ng-container>
    </zyfra-tab-view>
  `,
  props: {
    ...args,
  },
});

const CustomWithBadge: Story = (args) => ({
  props: {
    ...args,
  },
  template: `
      <zyfra-tab-view [class]="zyfraTabViewTagStyle"
              [activeIndex]="activeIndex"
              [controlClose]="controlClose"
              [style]="style"
              [styleClass]="styleClass"
              (onChange)="onChangeHandler($event)"
              (onClose)="onCloseHandler($event)">
          <ng-container *ngFor="let tab of tabs">
              <zyfra-tab-panel [header]="tab.header"
                               [selected]="tab.selected"
                               [disabled]="tab.disabled"
                               [closable]="tab.closable"
                               [leftIcon]="tab.leftIcon"
                               [rightIcon]="tab.rightIcon"
                               [headerStyle]="tab.headerStyle"
                               [headerStyleClass]="tab.headerStyleClass"
                               [cache]="tab.cache"
                               [tooltip]="tab.tooltip"
                               [tooltipPosition]="tab.tooltipPosition"
                               [tooltipStyleClass]="tab.tooltipStyleClass">
                  <ng-template #header>
                      <div class="p-tabview-title">{{tab?.header}}</div>
                      <p-badge styleClass="p-tabview-right-icon no-active-color"
                               [value]="tab.badgeValue"
                               [severity]="tab.severity"></p-badge>
                  </ng-template>

                {{tab.content}}
              </zyfra-tab-panel>
          </ng-container>
      </zyfra-tab-view>`,
});

export const Simple = Template.bind({});
Simple.args = {
  tabs: [
    {
      header: 'Наименование вкладки 1',
      content: 'Content of tab 1',
    },
    {
      header: 'Наименование вкладки 2',
      content: 'Content of tab 2',
    },
    {
      header: 'Наименование вкладки 3',
      content: 'Content of tab 3',
      disabled: true,
    },
    {
      header: 'Наименование вкладки 4',
      content: 'Content of tab 4',
    },
  ],
};

export const SimpleSecondary = Template.bind({});
SimpleSecondary.args = {
  ...Simple.args,
  styleClass: 'secondary-tab',
};

export const SimpleHeader = Template.bind({});
SimpleHeader.args = {
  ...Simple.args,
  styleClass: 'header-tab',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  tabs: [
    {
      header: 'Tab1',
      content: 'Content of tab 1',
      leftIcon: 'zyfra-icon selection-checkbox-blank-circle danger marker no-active-color',
    },
    {
      header: 'Tab2',
      content: 'Content of tab 2',
      leftIcon: 'zyfra-icon selection-checkbox-blank-circle success marker no-active-color',
    },
    {
      header: 'Tab3',
      content: 'Content of tab 3',
      leftIcon: 'zyfra-icon selection-checkbox-blank-circle info marker no-active-color',
      disabled: true,
    },
    {
      header: 'Tab4',
      content: 'Content of tab 4',
      leftIcon: 'zyfra-icon selection-checkbox-blank-circle warning marker no-active-color',
    },
  ],
};

export const Closable = Template.bind({});
Closable.args = {
  tabs: [
    {
      header: 'Tab1',
      content: 'Content of tab 1',
      closable: true,
    },
    {
      header: 'Tab2',
      content: 'Content of tab 2',
      closable: true,
      disabled: true,
    },
    {
      header: 'Tab3',
      content: 'Content of tab 3',
      closable: true,
    },
  ],
};

export const CustomTemplateWithBadge = CustomWithBadge.bind({});
CustomTemplateWithBadge.args = {
  tabs: [
    {
      header: 'Наименование вкладки 1',
      content: 'Content of tab 1',
      badgeValue: 0,
    },
    {
      header: 'Наименование вкладки 2',
      content: 'Content of tab 2',
      severity: 'success',
      badgeValue: 1,
    },
    {
      header: 'Наименование вкладки 3',
      content: 'Content of tab 3',
      severity: 'info',
      badgeValue: 2,
    },
    {
      header: 'Наименование вкладки 4',
      content: 'Content of tab 4',
      severity: 'warning',
      badgeValue: 3,
      disabled: true,
    },
    {
      header: 'Наименование вкладки 5',
      content: 'Content of tab 5',
      severity: 'danger',
      badgeValue: 4,
    },
  ],
};

export const SimpleWithIcon = Simple.bind({});
SimpleWithIcon.args = {
  tabs: [
    {
      header: 'Наименование вкладки 1',
      content: 'Content of tab 1',
      leftIcon: 'zyfra-icon files-file',
    },
    {
      header: 'Наименование вкладки 2',
      content: 'Content of tab 2',
      leftIcon: 'zyfra-icon files-file',
    },
    {
      header: 'Наименование вкладки 3',
      content: 'Content of tab 3',
      leftIcon: 'zyfra-icon files-file',
      disabled: true,
    },
    {
      header: 'Наименование вкладки 4',
      content: 'Content of tab 4',
      leftIcon: 'zyfra-icon files-file',
    },
  ],
};

export const OverflowTabs = Template.bind({});
OverflowTabs.args = {
  activeIndex: 2,
  tabs: [
    {
      header: 'Наименование вкладки 1',
      content: 'Content of tab 1',
      closable: true,
    },
    {
      header: 'Наименование вкладки 2',
      content: 'Content of tab 2',
      closable: true,
    },
    {
      header: 'Наименование вкладки 3',
      content: 'Content of tab 3',
      closable: true,
    },
    {
      header: 'Наименование вкладки 4',
      content: 'Content of tab 4',
      closable: true,
    },
    {
      header: 'Наименование вкладки 5',
      content: 'Content of tab 5',
      closable: true,
    },
    {
      header: 'Наименование вкладки 6',
      content: 'Content of tab 6',
      closable: true,
    },
    {
      header: 'Наименование вкладки 7',
      content: 'Content of tab 7',
      closable: true,
    },
    {
      header: 'Наименование вкладки 8',
      content: 'Content of tab 8',
      closable: true,
    },
    {
      header: 'Наименование вкладки 9',
      content: 'Content of tab 9',
      closable: true,
    },
  ],
};
