import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraHintComponent } from './zyfra-hint.component';
import { ZyfraHintModule } from './zyfra-hint.module';
import { ZyfraButtonModule } from '../button';
import { ZyfraHintOverlayManager } from './zyfra-hint-overlay-manager.service';

export default {
  moduleId: module.id,
  title: 'Hint/Main',
  component: ZyfraHintComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraHintModule,
        ZyfraButtonModule,
      ],
      providers: [ZyfraHintOverlayManager],
    }),
  ],
  parameters: {
    docs: {
      page: require('./').default,
    },
  },
} as Meta;

const Template: Story<ZyfraHintComponent> = (args) => ({
  template: `
    <div
      style="height: 400px;width: 800px;display: flex;justify-content: center;align-items: center;flex-direction: column;"
    >
      <div *ngIf="hintTitle !== undefined">
        <div>
          <ng-template #testHint>
            <div class="zyfra_hint_title">{{ hintTitle }}</div>
            <div>{{ hintText }}</div>
          </ng-template>

          <zyfra-button
            [zyfraHint]="testHint"
            [position]="position"
            label="Button"
            type="button"
            styleClass="btn-default btn-primary"
          ></zyfra-button>
        </div>
      </div>
      <div *ngIf="hintTitle == undefined">
        <div>
          <zyfra-button
            [zyfraHint]="hintText"
            [position]="position"
            label="Button"
            type="button"
            styleClass="btn-default btn-primary"
          ></zyfra-button>
        </div>
      </div>
    </div>
  `,
  props: args,
});

export const HintTitleExample = Template.bind({});
HintTitleExample.args = {
  hintText:
    'В современных веб-интерфейсах граница между кнопками и ссылками размыта. Ссылка также может запускать действие. Отличие кнопки в том, что она заметнее, и почти не используется для перехода на страницу.',
  position: 'right',
  hintTitle: 'Название приложения в пять слов',
};

export const HintTextExample = Template.bind({});
HintTextExample.args = {
  hintText:
    'В современных веб-интерфейсах граница между кнопками и ссылками размыта. Ссылка также может запускать действие. Отличие кнопки в том, что она заметнее, и почти не используется для перехода на страницу.',
  position: 'right',
};
