import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraIconComponent } from './zyfra-icon.component';
import { Icon16Defs } from './story/icon-16-definitions';

//@ts-ignore
import doc from './zyfra-icon.component.story.doc.mdx';

@Component({
  template: `
    <div *ngFor="let def of defs">
      <h4>{{ def.dir }}</h4>
      <div class="icons">
        <div *ngFor="let name of def.data" class="icon-def">
          <zyfra-icon [iconClass]="name" [className]="className" class="icon-16"></zyfra-icon>
          <div class="name">{{ name }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        font-family: Inter;
        color: #777b92;
      }

      h4 {
        text-transform: capitalize;
        color: #353e50;
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

      .icon-16 {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }

      .name {
        font-size: 12px;
        text-align: center;
        margin-top: 12px;
        color: #353e50;
      }
    `,
  ],
})
class Icon16Components {
  defs = Icon16Defs;
  className = 'zyfra-icon-16';
}

export default {
  title: 'Icons/Icon16Component',
  component: Icon16Components,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ZyfraIconComponent],
    }),
  ],
  parameters: {
    docs: {
      page: doc,
    },
  },
} as Meta<ZyfraIconComponent>;

const Template: Story<Icon16Components> = (args: Icon16Components) => ({
  component: Icon16Components,
  props: args,
});

export const IconsSet16 = Template.bind({});
IconsSet16.args = {};
