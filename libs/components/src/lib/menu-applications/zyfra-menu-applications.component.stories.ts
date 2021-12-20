import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraMenuApplicationsComponent } from './zyfra-menu-applications.component';

import { ZyfraMenuAppItem, ZyfraMenuAppTransitionSettings } from './zyfra-menu-applications.interface';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraMenuApplicationsModule } from './zyfra-menu-applications.module';
import { BrowserModule } from '@angular/platform-browser';
import { ZyfraButtonModule } from '../button';

// @ts-ignore
import MenuApplicationsDoc from './zyfra-menu-applications.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Menu/Applications',
  component: ZyfraMenuApplicationsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraMenuApplicationsModule,
        ZyfraButtonModule,
      ]
    }),
  ],
  parameters: {
    docs: {
      page: MenuApplicationsDoc,
    }
  }
} as Meta;

const Template: Story<ZyfraMenuApplicationsComponent> = (args) => ({
  template: `
    <div>
      <zyfra-button
        label="Toggle"
        [style]="{'margin-right': '10px'}"
        (onClick)="menu.toggle()"
      ></zyfra-button>

      <zyfra-button
        label="Open"
        [style]="{'margin-right': '10px'}"
        (onClick)="menu.open()"
      ></zyfra-button>

      <zyfra-button
        label="Close"
        [style]="{'margin-right': '10px'}"
        (onClick)="menu.close()"
      ></zyfra-button>
    </div>

    <br>

    <div style="height: 650px; display: flex; position: relative;">
      <zyfra-menu-applications
        #menu
        [transition]="transition"
        [tooltipDelay]="tooltipDelay"
        [style]="layoutShift ? null : { position: 'absolute', top: '0', left: '0', height: '100%' }"
        [topMenuItems]="topMenuItems"
        [bottomMenuItems]="bottomMenuItems"
        [activeItem]="activeItem"
        (selectItem)="selectItem($event);"
        (toggleState)="toggleState($event)"
      ></zyfra-menu-applications>

      <div id="content" [style]="layoutShift ? { 'padding-left': '10px' } : { 'padding-left': '60px' }">
        <p>Some content</p>
      </div>
    </div>
  `,
  props: {
    ...args,
    activeItem: null,
    toggleState: value => action('toggleState')({ value }),
    selectItem(item: any): void {
      action('selectItem')(item);

      const isTopItem = this.topMenuItems.includes(item);

      if (isTopItem) {
        this.activeItem = item;
      } else {
        alert(JSON.stringify(item, null, 2));
      }
    }
  },
});

const topMenuItems: ZyfraMenuAppItem[] = [
  {
    title: 'Z-QA — Zyfra Quality Assurance',
    icon: 'shapes-cube',
    description: 'Описание для приложения "Z-QA — Zyfra Quality Assurance"'
  },
  {
    title: 'Zyfra Document Explorer',
    icon: 'view-dashboard',
    description: 'Описание для приложения "Zyfra Document Explorer"'
  },
  {
    title: 'Z-MEB — Mass & Energy Balance',
    icon: 'charts-bar-stacked',
    description: 'Описание для приложения "Z-MEB — Mass & Energy Balance"'
  },
  {
    title: 'Z-PS — Zyfra Production Scheduling',
    icon: 'tools-eyedropper',
    description: 'Описание для приложения "Z-PS — Zyfra Production Scheduling"'
  },
  {
    title: 'Z-MEB — Mass & Energy Balance',
    icon: 'vectors-difference-ab',
    description: 'Описание для приложения "Z-MEB — Mass & Energy Balance"'
  },
];

const bottomMenuItems: ZyfraMenuAppItem[] = [
  {
    title: 'Избранное',
    icon: 'social-star'
  },
  {
    title: 'Поиск',
    icon: 'sort-zoom-in'
  },
  {
    title: 'Служба техподдежки',
    icon: 'alerts-pulse'
  },
];

const defaultTransition = {
  open: {
    duration: 300,
    delay: 500,
    timingFunction: 'ease-in',
  },
  close: {
    duration: 300,
    delay: 300,
    timingFunction: 'ease-out',
  }
};

export const WithLayoutShift = Template.bind({});
WithLayoutShift.args = {
  topMenuItems,
  bottomMenuItems,
  layoutShift: true,
  tooltipDelay: 1000,
  transition: defaultTransition,
};

export const WithoutLayoutShift = Template.bind({});
WithoutLayoutShift.args = {
  topMenuItems,
  bottomMenuItems,
  layoutShift: false,
  tooltipDelay: 1000,
  transition: defaultTransition,
};

export const ManyItems = Template.bind({});
ManyItems.args = {
  topMenuItems: [
    ...topMenuItems.map(item => ({ ...item })),
    ...topMenuItems.map(item => ({ ...item })),
    ...topMenuItems.map(item => ({ ...item })),
    ...topMenuItems.map(item => ({ ...item })),
  ],
  bottomMenuItems,
  layoutShift: false,
  tooltipDelay: 1000,
  transition: defaultTransition,
};

export const CustomTransition = Template.bind({});
CustomTransition.args = {
  topMenuItems: [
    ...topMenuItems.map(item => ({ ...item })),
    ...topMenuItems.map(item => ({ ...item })),
    ...topMenuItems.map(item => ({ ...item })),
    ...topMenuItems.map(item => ({ ...item })),
  ],
  bottomMenuItems,
  layoutShift: false,
  tooltipDelay: 2500,
  transition: {
    open: {
      duration: 2000,
      delay: 1000,
      timingFunction: 'ease-in'
    },
    close: {
      delay: 1500,
      duration: 300,
      timingFunction: 'ease-out'
    }
  } as ZyfraMenuAppTransitionSettings
};
