import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ZyfraButtonModule } from '../button';
import { CustomBlockableModule } from './custom-blockable';
import { ZyfraBlockUiComponent } from './zyfra-block-ui.component';
import { ZyfraBlockUiModule } from './zyfra-block-ui.module';

export default {
  moduleId: module.id,
  title: 'Misc/BlockUI',
  component: ZyfraBlockUiComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        ZyfraBlockUiModule,
        ZyfraButtonModule,
        CustomBlockableModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-block-ui.component.story.doc.mdx').default,
    },
  },
} as Meta;

const BlockDocumentTemplate: Story<ZyfraBlockUiComponent> = (args: ZyfraBlockUiComponent) => ({
  template: `
    <zyfra-block-ui [blocked]="blockedDocument"></zyfra-block-ui>
    <zyfra-button label="Заблокировать документ на 3 секунды" (click)="block()"></zyfra-button>
  `,
  props: {
    ...args,
    block() {
      this.blockedDocument = true;
      setTimeout(() => {
        this.blockedDocument = false;
      }, 3000);
    },
  },
});

export const BlockDocument = BlockDocumentTemplate.bind({});
BlockDocument.args = {
  blockedDocument: false,
};

const BlockCustomComponentTemplate: Story<ZyfraBlockUiComponent> = (args: ZyfraBlockUiComponent) => ({
  template: `
    <div style="display: flex; gap: 10px;">
      <zyfra-button label="Заблокировать компонент" (click)="block()"></zyfra-button>
      <zyfra-button label="Разблокировать компонент" (click)="unblock()"></zyfra-button>
    </div>

    <zyfra-block-ui [blocked]="blockedComponent" [target]="blockableComponent">
      <i class="pi pi-lock" style="font-size: 3rem"></i>
    </zyfra-block-ui>
    <zyfra-test-custom-blockable #blockableComponent></zyfra-test-custom-blockable>
  `,
  props: {
    ...args,
    block() {
      this.blockedComponent = true;
    },
    unblock() {
      this.blockedComponent = false;
    },
  },
});

export const BlockCustomComponent = BlockCustomComponentTemplate.bind({});
BlockCustomComponent.args = {
  blockedComponent: false,
};
