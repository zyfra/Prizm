import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraTooltipComponent } from './zyfra-tooltip.component';
import { ZyfraTooltipModule } from './zyfra-tooltip.module';
import { ZyfraButtonModule } from '../button';
import { ZyfraTooltipOverlayManager } from './zyfra-tooltip-overlay-manager.service';

export default {
  moduleId: module.id,
  title: 'Tooltip/Main',
  component: ZyfraTooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ZyfraTooltipModule,
        ZyfraButtonModule,
      ],
      providers: [ZyfraTooltipOverlayManager],
    }),
  ],
  parameters: {
    docs: {
      page: require('./').default,
    },
  },
} as Meta;

const Template: Story<ZyfraTooltipComponent> = (args) => ({
  template: `
    <div
      style="height: 100vh;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;"
    >
      <div *ngIf="title !== undefined">
        <div>
          <ng-template #testTooltip>
            <div class="zyfra-tooltip__title">{{ title }}</div>
            <div>{{ text }}</div>
          </ng-template>

          <zyfra-button
            [ngStyle]="{display: 'block'}"
            [zyfraTooltip]="testTooltip"
            [zyfraTooltipColor]="color"
            [zyfraTooltipPosition]="position"
            label="Button"
            type="button"
            styleClass="btn-default btn-primary"
          ></zyfra-button>
        </div>
      </div>
      <div *ngIf="title == undefined">
        <div>
          <zyfra-button
            [ngStyle]="{display: 'block'}"
            [zyfraTooltip]="text"
            [zyfraTooltipColor]="color"
            [zyfraTooltipPosition]="position"
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

export const TooltipWithTitle = Template.bind({});
TooltipWithTitle.args = {
  text:
    'В современных веб-интерфейсах граница между кнопками и ссылками размыта. Ссылка также может запускать действие. Отличие кнопки в том, что она заметнее, и почти не используется для перехода на страницу.',
  position: 'left',
  title: 'Название приложения в пять слов',
  color: 'info'
};

export const TooltipWithoutTitle = Template.bind({});
TooltipWithoutTitle.args = {
  text:
    'В современных веб-интерфейсах граница между кнопками и ссылками размыта. Ссылка также может запускать действие. Отличие кнопки в том, что она заметнее, и почти не используется для перехода на страницу.',
  position: 'right',
  color: 'warning'
};
