'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [20878],
  {
    20878: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmDay, PrizmDayWithStatus } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-calendar-base-example',\n  templateUrl: './calendar-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmCalendarBaseExampleComponent {\n  public day = new PrizmDay(2017, 0, 15);\n  public daysWithStatus = [\n    new PrizmDayWithStatus(2017, 0, 10, 'index'),\n    new PrizmDayWithStatus(2017, 0, 11, 'warning'),\n    new PrizmDayWithStatus(2017, 0, 12, 'danger'),\n    new PrizmDayWithStatus(2017, 0, 13, 'success'),\n    new PrizmDayWithStatus(2017, 0, 17, 'yellow'),\n  ];\n\n  public onDayClick(day: PrizmDay): void {\n    this.day = day;\n  }\n}\n";
    },
  },
]);
