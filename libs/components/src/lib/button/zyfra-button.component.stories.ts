import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraButtonModule } from '@zyfra/ui-components';
import { ZyfraButtonComponent } from './zyfra-button.component';
//@ts-ignore
import doc from './zyfra-button.component.story.doc.mdx';

export default {
  title: 'ZyfraButtonComponent',
  component: ZyfraButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ZyfraButtonModule],
    })
  ],
  parameters: {
    docs: {
      page: doc
    }
  }
} as Meta<ZyfraButtonComponent>;

const Template: Story<ZyfraButtonComponent> = (args: ZyfraButtonComponent) => ({
  component: ZyfraButtonComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    label:  '',
    type:  'button',
    icon:  '',
    iconPos:  'left',
    disabled:  false,
    badge:  '',
    style:  '',
    styleClass:  '',
}