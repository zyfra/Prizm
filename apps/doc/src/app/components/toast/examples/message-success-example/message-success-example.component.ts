import { Component, TemplateRef } from '@angular/core';
import { PrizmToastService, PrizmToastAppearance, PrizmToastPosition } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-message-success-example',
  templateUrl: './message-success-example.component.html',
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
export class PrizmToastSuccessExampleComponent {
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

  appearance: PrizmToastAppearance = 'success';
  readonly formControl = new FormControl(PrizmToastPosition.TOP_RIGHT);
  constructor(private readonly toastService: PrizmToastService) {}

  public showToast(): void {
    this.toastService.create('Hello #' + Math.random(), {
      appearance: this.appearance,
      position: this.formControl.value,
      timer: 5000,
      title: 'Заголовок',
    });
  }

  public showToastWithoutTitle(): void {
    this.toastService.create('Старайтесь уместить текст в 1 строку.', {
      appearance: this.appearance,
      position: this.formControl.value,
      timer: 5000,
    });
  }

  public showToastWithoutTimer(): void {
    this.toastService.create('Это сообщение будет показываться пока не закроете.', {
      appearance: this.appearance,
      position: this.formControl.value,
      timer: 0,
      title: 'Заголовок',
    });
  }

  public showToastWithBigText(): void {
    this.toastService.create('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', {
      appearance: this.appearance,
      position: this.formControl.value,
      timer: 5000,
      title: 'Большой заголовок очень очень очень очень',
    });
  }

  public showToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(contentTemplate, {
      appearance: this.appearance,
      position: this.formControl.value,
      timer: 5000,
      title: 'Большой заголовок очень очень очень очень',
    });
  }

  public showToastWithHeaderTemplate(headerTemplate: TemplateRef<unknown>): void {
    this.toastService.create('Шаблон в хедере', {
      appearance: this.appearance,
      position: this.formControl.value,
      timer: 5000,
      title: headerTemplate,
    });
  }

  public showToastWithBigTitle(): void {
    this.toastService.create('Содержимое', {
      appearance: this.appearance,
      position: this.formControl.value,
      timer: 5000,
      title:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    });
  }
}
