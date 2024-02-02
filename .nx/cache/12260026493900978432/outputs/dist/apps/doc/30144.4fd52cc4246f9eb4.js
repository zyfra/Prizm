'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [30144],
  {
    30144: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport {\n  PrizmCronPeriod,\n  PrizmCronTabSpecifiedList,\n  PrizmCronUiBaseType,\n  PrizmCronUiDayType,\n} from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-cron-filtered-list-example',\n  templateUrl: './cron-filtered-list-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmCronFilteredListExampleComponent {\n  public value = true;\n  public showedList: PrizmCronTabSpecifiedList = {\n    second: [PrizmCronUiBaseType.every],\n    month: [PrizmCronUiBaseType.every],\n    minute: [PrizmCronUiBaseType.every],\n    hour: [PrizmCronUiBaseType.every],\n    year: [PrizmCronUiBaseType.every],\n    day: [PrizmCronUiDayType.every],\n  };\n  public period: PrizmCronPeriod = {\n    start: null,\n    end: null,\n    indefinitely: true,\n  };\n}\n";
    },
  },
]);
