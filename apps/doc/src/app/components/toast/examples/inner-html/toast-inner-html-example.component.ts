import { Component, TemplateRef } from '@angular/core';
import { PrizmToastService, PrizmToastAppearance, PrizmToastPosition } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-toast-inner-html-example',
  templateUrl: './toast-inner-html-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      a {
        color: #337eff;
        text-decoration: underline;
      }

      .footer {
        margin-top: 8px;
      }

      .date {
        color: #a1a5b7;
        margin: 8px 0;
      }

      .header-title {
        width: 400px;
        display: flex;
        justify-content: space-between;
        gap: 30px;

        .title {
          font-weight: inherit;
          font-size: inherit;
        }
      }
    `,
  ],
})
export class PrizmToastInnerHtmlExampleComponent {
  readonly data = [
    {
      val: PrizmToastPosition.TOP_MIDDLE,
      label: 'Top Middle',
    },
    {
      val: PrizmToastPosition.TOP_LEFT,
      label: 'Top Left',
    },
    {
      val: PrizmToastPosition.TOP_RIGHT,
      label: 'Top Right',
    },
    {
      val: PrizmToastPosition.BOTTOM_MIDDLE,
      label: 'Bottom Middle',
    },
    {
      val: PrizmToastPosition.BOTTOM_LEFT,
      label: 'Bottom Left',
    },
    {
      val: PrizmToastPosition.BOTTOM_RIGHT,
      label: 'Bottom Right',
    },
  ];
  readonly formControl = new UntypedFormControl(PrizmToastPosition.TOP_RIGHT);
  constructor(private readonly toastService: PrizmToastService) {}

  public showSuccessToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(contentTemplate, {
      appearance: 'success',
      position: this.formControl.value,
      timer: 5000,
      isPlatform: true,
      title: 'Большой заголовок очень очень очень очень',
    });
  }

  public showWarningToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(contentTemplate, {
      appearance: 'warning',
      position: this.formControl.value,
      timer: 5000,
      isPlatform: true,
      title: 'Большой заголовок очень очень очень очень',
    });
  }

  public showDangerToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(contentTemplate, {
      appearance: 'danger',
      position: this.formControl.value,
      timer: 5000,
      isPlatform: true,
      title: 'Большой заголовок очень очень очень очень',
    });
  }

  public showInfoToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(contentTemplate, {
      appearance: 'info',
      position: this.formControl.value,
      timer: 5000,
      isPlatform: true,
      title: 'Большой заголовок очень очень очень очень',
    });
  }
}
