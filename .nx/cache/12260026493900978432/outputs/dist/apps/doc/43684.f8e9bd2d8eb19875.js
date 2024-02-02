'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [43684],
  {
    43684: n => {
      n.exports =
        "import { Component, TemplateRef } from '@angular/core';\nimport { PrizmToastService, PrizmToastAppearance, PrizmToastPosition } from '@prizm-ui/components';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-message-success-example',\n  templateUrl: './message-success-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 10px;\n        flex-wrap: wrap;\n      }\n\n      a {\n        color: var(--prizm-v3-text-icon-link);\n        text-decoration: underline;\n        font-weight: 500;\n      }\n\n      .link-content {\n        a {\n          font-weight: 400;\n        }\n      }\n\n      .footer {\n        margin-top: 8px;\n      }\n\n      .date {\n        color: var(--prizm-v3-text-icon-tertiary);\n        margin: 8px 0;\n      }\n\n      .header-title {\n        width: 400px;\n        display: flex;\n        justify-content: space-between;\n        gap: 30px;\n\n        .title {\n          font-weight: inherit;\n          font-size: inherit;\n        }\n      }\n    `,\n  ],\n})\nexport class PrizmToastSuccessExampleComponent {\n  readonly data = [\n    {\n      val: PrizmToastPosition.TOP_MIDDLE,\n      label: 'Top Middle',\n    },\n    {\n      val: PrizmToastPosition.TOP_LEFT,\n      label: 'Top Left',\n    },\n    {\n      val: PrizmToastPosition.TOP_RIGHT,\n      label: 'Top Right',\n    },\n    {\n      val: PrizmToastPosition.BOTTOM_MIDDLE,\n      label: 'Bottom Middle',\n    },\n    {\n      val: PrizmToastPosition.BOTTOM_LEFT,\n      label: 'Bottom Left',\n    },\n    {\n      val: PrizmToastPosition.BOTTOM_RIGHT,\n      label: 'Bottom Right',\n    },\n  ];\n\n  appearance: PrizmToastAppearance = 'success';\n  readonly formControl = new UntypedFormControl(PrizmToastPosition.TOP_RIGHT);\n  constructor(private readonly toastService: PrizmToastService) {}\n\n  public showToast(): void {\n    this.toastService.create('Hello #' + Math.random(), {\n      appearance: this.appearance,\n      position: this.formControl.value,\n      timer: 5000,\n      title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',\n    });\n  }\n\n  public showToastWithoutTitle(): void {\n    this.toastService.create('\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 1 \u0441\u0442\u0440\u043e\u043a\u0443.', {\n      appearance: this.appearance,\n      position: this.formControl.value,\n      timer: 5000,\n    });\n  }\n\n  public showToastWithoutTimer(): void {\n    this.toastService.create('\u042d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435.', {\n      appearance: this.appearance,\n      position: this.formControl.value,\n      timer: 0,\n      title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',\n    });\n  }\n\n  public showToastWithBigText(): void {\n    this.toastService.create('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', {\n      appearance: this.appearance,\n      position: this.formControl.value,\n      timer: 5000,\n      title: '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',\n    });\n  }\n\n  public showToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {\n    this.toastService.create(contentTemplate, {\n      appearance: this.appearance,\n      position: this.formControl.value,\n      timer: 5000,\n      title: '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',\n    });\n  }\n\n  public showToastWithHeaderTemplate(headerTemplate: TemplateRef<unknown>): void {\n    this.toastService.create('\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435', {\n      appearance: this.appearance,\n      position: this.formControl.value,\n      timer: 5000,\n      title: headerTemplate,\n    });\n  }\n\n  public showToastWithBigTitle(): void {\n    this.toastService.create('\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435', {\n      appearance: this.appearance,\n      position: this.formControl.value,\n      timer: 5000,\n      title:\n        \" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\",\n    });\n  }\n}\n";
    },
  },
]);
