'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [50871],
  {
    50871: e => {
      e.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { FormControl, UntypedFormControl } from '@angular/forms';\nimport { PrizmDateTime, PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-date-time-range-base-example',\n  templateUrl: './input-date-time-range-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputDateTimeRangeBaseExampleComponent {\n  readonly value = new FormControl(\n    new PrizmDateTimeRange(new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 2, 10)))\n  );\n  readonly min = new PrizmDateTime(new PrizmDay(2000, 2, 20), new PrizmTime(0, 0));\n  readonly max = new PrizmDateTime(new PrizmDay(2040, 2, 20), new PrizmTime(0, 0));\n}\n";
    },
  },
]);
