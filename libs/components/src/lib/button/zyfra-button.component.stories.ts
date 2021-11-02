import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraButtonModule } from '@zyfra/ui-components';
import { ZyfraButtonComponent } from './zyfra-button.component';
//@ts-ignore
import doc from './zyfra-button.component.story.doc.mdx';

export default {
  title: 'Buttons/Button',
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


export const Simple = Template.bind({});
Simple.args = {
  label: 'Button',
  type:'button',
  styleClass: 'btn-default btn-primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'disabled Button',
  styleClass: 'btn-secondary'
};


export const Warning = Template.bind({});
Warning.args = {
  disabled: false,
  label: 'Warning',
  styleClass: 'p-button-warning'
};

export const Danger = Template.bind({});
Danger.args = {
  disabled: false,
  label: 'Delete',
  color:  'secondary',
  styleClass: 'p-button-danger'
};



export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Rounded',
  styleClass: 'p-button-rounded'
};

export const Icon = Template.bind({});
Icon.args = {
  icon:"pi pi-check",
  iconPos:"left",
  label: 'Icon',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon:"pi pi-check",
};

export const Submit = Template.bind({});
Submit.args = {
  label:"Submit",
  type:"submit",
  icon:"pi pi-check",
  iconPos:"right",
};

export const Badge = Template.bind({});
Badge.args = {
  label:"with Badge 8",
  badge: "8",
};

