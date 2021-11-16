import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { IconDefs } from './story/icon-definitions';

//@ts-ignore
import doc from './icon.component.story.doc.mdx';

@Component({
  template: `
    <div *ngFor="let def of defs">
      <h4>{{ def.dir }}</h4>

      <div class="icons">
        <div *ngFor="let name of def.data" class="icon-def">
          <zyfra-icon [iconClass]="name" class="icon"></zyfra-icon>
          <div class="name">{{ name }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        font-family: Inter;
      }

      h4 {
        text-transform: capitalize;
      }

      .icons {
        display: flex;
        flex-wrap: wrap;
      }

      .icon-def {
        display: flex;
        width: 90px;
        height: 90px;
        max-width: 90px;
        flex-direction: column;
        align-items: center;
        margin: 4px;
        padding-top: 8px;
      }

      .icon-def:hover {
        background-color: #eeeeee99;
      }

      .icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
      }

      .name {
        font-size: 12px;
        text-align: center;
        margin-top: 12px;
      }
    `,
  ],
})
class IconComponents {
  defs = IconDefs;
}

export default {
  title: 'Icons/IconComponent',
  component: IconComponents,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [IconComponent],
    }),
  ],
  parameters: {
    docs: {
      page: doc,
    },
  },
} as Meta<IconComponent>;

const Template: Story<IconComponents> = (args: IconComponents) => ({
  component: IconComponents,
  props: args,
});

export const IconsSet = Template.bind({});
IconsSet.args = {};
