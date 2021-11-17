import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraTabPanelComponent } from './zyfra-tab-panel.component';

export default {
  title: '_hidden_ZyfraTabPanelComponent',
  component: ZyfraTabPanelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ZyfraTabPanelComponent>;

const Template: Story<ZyfraTabPanelComponent> = (args: ZyfraTabPanelComponent) => ({
  component: ZyfraTabPanelComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    selected:  false,
    closable:  false,
    headerStyle:  null,
    headerStyleClass:  null,
    cache:  true,
    tooltip:  null,
    tooltipStyleClass:  null,
    tooltipPosition:  'top',
    tooltipPositionStyle:  'absolute',
    disabled:  '',
    header:  '',
    leftIcon:  '',
    rightIcon:  '',
}
