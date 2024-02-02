'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [39281],
  {
    39281: e => {
      e.exports =
        "import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDateItemTemplate, PrizmDay, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-date-multi-base-example',\n  templateUrl: './input-date-multi-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n      prizm-input-date-multi {\n        width: 20rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputDateMultiBaseExampleComponent implements OnInit {\n  @ViewChild('dateTime', { static: true }) dateTime!: TemplateRef<unknown>;\n  @ViewChild('dateRelativeTime', { static: true }) dateRelativeTime!: TemplateRef<unknown>;\n  public readonly timeControl = new UntypedFormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30)]);\n  public readonly relativeControl = new UntypedFormControl();\n  public items: PrizmDateItemTemplate[] = [];\n\n  public ngOnInit(): void {\n    this.items = [\n      {\n        template: this.dateTime,\n        name: '\u0410\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f',\n      },\n      {\n        template: this.dateRelativeTime,\n        name: '\u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f',\n      },\n    ];\n  }\n}\n";
    },
  },
]);
