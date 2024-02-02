'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [46751],
  {
    46751: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, PrizmDayRange } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-date-range-disabled-example',\n  templateUrl: './input-date-range-disabled-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputDateRangeDisabledExampleComponent implements OnInit {\n  readonly value = new UntypedFormControl(\n    new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 3, 20))\n  );\n  readonly min = new PrizmDay(2000, 2, 20);\n\n  readonly max = new PrizmDay(2040, 2, 20);\n\n  public ngOnInit(): void {\n    this.value.disable();\n  }\n}\n";
    },
  },
]);
