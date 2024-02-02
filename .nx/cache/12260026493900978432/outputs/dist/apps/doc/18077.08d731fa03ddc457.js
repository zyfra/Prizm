'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [18077],
  {
    18077: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmSwitcherItem } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-switcher-inner-m-example',\n  templateUrl: './switcher-inner-m-example.component.html',\n  styleUrls: ['./switcher-inner-m-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SwitcherInnerMExampleComponent {\n  public readonly switchers: PrizmSwitcherItem[] = [\n    {\n      title: '\u0422\u0430\u0431\u043b\u0438\u0446\u044b',\n    },\n    {\n      title: '\u041c\u043d\u0435\u043c\u043e\u0441\u0445\u0435\u043c\u044b',\n    },\n    {\n      title: '\u0414\u0430\u0448\u0431\u043e\u0440\u0434\u044b',\n    },\n  ];\n}\n";
    },
  },
]);
