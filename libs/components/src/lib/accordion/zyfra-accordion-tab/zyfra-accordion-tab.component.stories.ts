import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraAccordionTabComponent } from './zyfra-accordion-tab.component';

export default {
  title: 'zHidden/ZyfraAccordionTabComponent',
  component: ZyfraAccordionTabComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ZyfraAccordionTabComponent>;

const Template: Story<ZyfraAccordionTabComponent> = (args: ZyfraAccordionTabComponent) => ({
  component: ZyfraAccordionTabComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    header:  '',
    disabled:  false,
    cache:  true,
    transitionOptions:  '200ms cubic-bezier(0.86, 0, 0.07, 1)',
    selected:  false,
}
