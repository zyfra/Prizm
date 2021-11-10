import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule } from '@angular/forms';
import { ZyfraToggleButtonComponent } from './zyfra-toggle-button.component';
import { ZyfraToggleButtonModule } from './zyfra-toggle-button.module';


export default {
  moduleId: module.id,
  title: 'Buttons/ToggleButton',
  component: ZyfraToggleButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ZyfraToggleButtonModule
      ]

    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-toggle-button.component.story.doc.mdx').default,
    }
  }

} as Meta;

const Template: Story<ZyfraToggleButtonComponent> = (args) => ({
  component: ZyfraToggleButtonComponent,
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  onLabel: 'I confirm',
  offLabel: 'I reject',
  inIcon: 'zyfra-icon selection-check-simple',
  offIcon: 'zyfra-icon cancel-close',
};

export const Info = Template.bind({});
Info.args = {
  ...Default.args,
  styleClass: 'p-togglebutton-info',
};

export const DangerMini = Template.bind({});
DangerMini.args = {
  ...Default.args,
  styleClass: 'p-togglebutton-danger p-togglebutton-mini',
};
