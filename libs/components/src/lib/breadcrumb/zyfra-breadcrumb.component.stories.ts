import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraBreadcrumbComponent } from './zyfra-breadcrumb.component';
import { ZyfraBreadcrumbModule } from './zyfra-breadcrumb.module';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { MenuItem } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// @ts-ignore
import BreadcrumbDoc from './zyfra-breadcrumb.component.story.doc.mdx';


export default {
  moduleId: module.id,
  title: 'Menu/Breadcrumb',
  component: ZyfraBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraBreadcrumbModule
      ]
    }),
  ],
  parameters: {
    docs: {
      page: BreadcrumbDoc,
    }
  }
} as Meta;

const Template: Story<ZyfraBreadcrumbComponent> = (args: ZyfraBreadcrumbComponent) => ({
  component: ZyfraBreadcrumbComponent,
  props: {
    ...args,
    onItemClick: (event) => action('onItemClick')({ item: event.item, ...event })
  }
});

const items: MenuItem[] = [
  { label: 'Начало' },
  { label: 'Название цеха 1' },
  { label: 'Название цеха 2' },
  { label: 'Название цеха 3' },
  { label: 'Название цеха 4' }
];

export const Simple = Template.bind({});
Simple.args = {
  items,
  home: { icon: 'zyfra-icon social-home-breadcrumbs' },
};
