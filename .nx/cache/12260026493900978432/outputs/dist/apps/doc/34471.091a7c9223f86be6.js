'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [34471],
  {
    34471: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { FormControl, UntypedFormControl } from '@angular/forms';\nimport { PrizmDateTime, PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-date-time-range-base-example',\n  templateUrl: './input-layout-date-time-range-base-example.component.html',\n  styles: [\n    `\n      :host {\n        --prizm-input-layout-width: 23rem;\n      }\n\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutDateTimeRangeBaseExampleComponent {\n  readonly value = new FormControl(\n    new PrizmDateTimeRange(new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 2, 10)))\n  );\n}\n";
    },
  },
]);
