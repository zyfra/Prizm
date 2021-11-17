import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraTabMenuComponent } from './zyfra-tab-menu.component';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { ZyfraTabMenuModule } from './zyfra-tab-menu.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SlideMenuModule } from 'primeng/slidemenu';
// @ts-ignore
import TabMenuDoc from './zyfra-tab-menu.component.story.doc.mdx';

export default {
  moduleId: module.id,
  title: 'Tabs/TabMenu',
  component: ZyfraTabMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        ZyfraTabMenuModule,
        SlideMenuModule,
        OverlayPanelModule
      ]
    }),
  ],
  parameters: {
    docs: {
      page: TabMenuDoc,
    }
  }
} as Meta;

const Template: Story<ZyfraTabMenuComponent> = (args) => ({
  props: {
    ...args,
  }
});

const items: MenuItem[] = [
  {
    label: 'Наименование вкладки 1',
    icon: 'zyfra-icon files-file',
    items: [{
      label: 'New',
      icon: 'zyfra-icon add-plus',
      items: [
        {
          label: 'Bookmark',
          icon: 'zyfra-icon   bookmarks-bookmark',
          items: [
            {
              label: 'Video',
              icon: 'zyfra-icon camera-video'
            },
            {
              label: 'Bookmark',
              icon: 'zyfra-icon   bookmarks-bookmark',
              items: [
                {
                  label: 'Video',
                  icon: 'zyfra-icon camera-video',
                }
              ]
            }
          ]
        },
        {
          label: 'Video',
          icon: 'zyfra-icon camera-video',
        }
      ]
    },
      {
        label: 'Delete',
        icon: 'zyfra-icon delete',
      },
      {
        label: 'Export',
        icon: 'zyfra-icon network-external-link'
      }
    ]
  },
  { label: 'Наименование вкладки 2',
    icon: 'zyfra-icon settings-power',
    items: [{
      label: 'New',
      icon: 'zyfra-icon add-plus'
    }]
  },
  {
    label: 'Наименование вкладки 3',
    icon: 'zyfra-icon settings-power'
  },
  {
    label: 'Наименование вкладки 4',
    icon: 'zyfra-icon editor-mode',
    items: [
      {
        label: 'Left',
        icon: 'zyfra-icon editor-format-align-left'
      },
      {
        label: 'Right',
        icon: 'zyfra-icon editor-format-align-right'
      },
      {
        label: 'Center',
        icon: 'zyfra-icon editor-format-align-center'
      },
      {
        label: 'Justify',
        icon: 'zyfra-icon editor-format-align-justify'
      }]
  },
  {
    label: 'Наименование вкладки 5',
    icon: 'zyfra-icon settings-power'
  },
  {
    label: 'Наименование вкладки 6',
    icon: 'zyfra-icon settings-power'
  },
  {
    label: 'Наименование вкладки 7',
    icon: 'zyfra-icon settings-power'
  },
  {
    label: 'Наименование вкладки 8',
    icon: 'zyfra-icon settings-power'
  },
  {
    label: 'Наименование вкладки 9',
    icon: 'zyfra-icon account',
    items: [
      {
        label: 'New',
        icon: 'zyfra-icon account-plus',

      },
      {
        label: 'Delete',
        icon: 'zyfra-icon account-minus',

      }]
  }
];

const simpleMenuItems: MenuItem[] = [
  {
    label: 'Наименование вкладки 1'
  },
  {
    label: 'Наименование вкладки 2'
  },
  {
    label: 'Наименование вкладки 3',
    disabled: true
  },
  {
    label: 'Наименование вкладки 4'
  },
];

const simpleMenuItemsWithIcons: MenuItem[] = [
  {
    label: 'Наименование вкладки 1',
    icon: 'zyfra-icon files-file',
  },
  {
    label: 'Наименование вкладки 2',
    icon: 'zyfra-icon bookmarks-bookmark',
  },
  {
    label: 'Наименование вкладки 3',
    icon: 'zyfra-icon editor-mode',
    disabled: true
  },
  {
    label: 'Наименование вкладки 4',
    icon: '',
  },
];

export const Simple = Template.bind({});
Simple.args = {
  model: simpleMenuItems
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Simple.args,
  activeItem: items[1],
  styleClass: 'secondary-tab'
};

export const Header = Template.bind({});
Header.args = {
  ...Simple.args,
  styleClass: 'header-tab'
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  model: simpleMenuItemsWithIcons
};

export const WithSubMenu = Template.bind({});
WithSubMenu.args = {
  model: items
};
