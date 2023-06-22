import { Component, TemplateRef } from '@angular/core';
import { PrizmToastAppearance, PrizmToastPosition, PrizmToastService } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-message-info-example',
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

      .inline-container {
        border: 1px solid black;
        padding: 10px;
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
export class PrizmToastInfoExampleComponent {
  readonly containerId = 'inline-container-info';

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
    {
      val: this.containerId,
      label: 'В строковом контейнере',
    },
  ];

  appearance: PrizmToastAppearance = 'info';
  readonly formControl = new UntypedFormControl(PrizmToastPosition.TOP_RIGHT);

  constructor(private readonly toastService: PrizmToastService) {}

  public showToast(): void {
    this.toastService.create('Hello #' + Math.random(), {
      appearance: this.appearance,
      position: this.formControl.value,
      title: 'Заголовок',
    });
  }

  public showToastWithoutTitle(): void {
    this.toastService.create('Старайтесь уместить текст в 1 строку.', {
      timer: 5000,
      appearance: this.appearance,
      position: this.formControl.value,
    });
  }

  public showToastWithoutTimer(): void {
    this.toastService.create('Это сообщение будет показываться пока не закроете.', {
      timer: 0,
      appearance: this.appearance,
      title: 'Заголовок',
      position: this.formControl.value,
    });
  }

  public showWithId(): void {
    this.toastService.create('Это сообщение будет показываться пока не закроете.', {
      timer: 0,
      id: 'our-id-1',
      appearance: this.appearance,
      title: 'Заголовок',
      position: this.formControl.value,
    });
  }

  public updateContentWithId(): void {
    this.toastService.updateContent('our-id-1', 'Обновили содержимое №' + Math.random());
  }

  public updateTitleWithId(template: TemplateRef<unknown>): void {
    this.toastService.updateTitle('our-id-1', template);
  }

  public closeWithId(): void {
    this.toastService.delete('our-id-1');
  }

  public closeAll(): void {
    this.toastService.deleteAll();
  }

  public showToastWithBigText(): void {
    this.toastService.create('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', {
      timer: 5000,
      appearance: this.appearance,
      title: 'Большой заголовок очень очень очень очень',
      position: this.formControl.value,
    });
  }

  public showToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(contentTemplate, {
      timer: 5000,
      appearance: this.appearance,
      title: 'Большой заголовок очень очень очень очень',
      position: this.formControl.value,
    });
  }

  public showToastWithHeaderTemplate(headerTemplate: TemplateRef<unknown>): void {
    this.toastService.create('Шаблон в хедере', {
      timer: 5000,
      appearance: this.appearance,
      title: headerTemplate,
      position: this.formControl.value,
    });
  }

  public showToastWithBigTitle(): void {
    this.toastService.create('Содержимое', {
      timer: 5000,
      appearance: this.appearance,
      position: this.formControl.value,
      title:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    });
  }
}
