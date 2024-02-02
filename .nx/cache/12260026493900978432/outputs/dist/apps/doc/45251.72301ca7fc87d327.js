'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [45251],
  {
    45251: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmSwitcherItem } from '@prizm-ui/components';\nimport { FormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-switcher-basic-example',\n  templateUrl: './switcher-basic-example.component.html',\n  styleUrls: ['./switcher-basic-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SwitcherBasicExampleComponent {\n  public readonly switchers: PrizmSwitcherItem[] = [\n    {\n      title: '\u0422\u0430\u0431\u043b\u0438\u0446\u044b',\n      disabled: true,\n    },\n    {\n      title: '\u0413\u0440\u0430\u0444\u0438\u043a\u0438',\n    },\n    {\n      title: '\u041c\u043d\u0435\u043c\u043e\u0441\u0445\u0435\u043c\u044b',\n      appearanceType: 'outline',\n    },\n    {\n      title: '\u0414\u0430\u0448\u0431\u043e\u0440\u0434\u044b',\n      appearance: 'primary',\n    },\n  ];\n  public readonly control = new FormControl(1);\n}\n";
    },
  },
]);
