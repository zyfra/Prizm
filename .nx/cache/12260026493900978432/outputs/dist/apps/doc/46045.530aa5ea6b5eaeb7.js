'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [46045],
  {
    46045: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmTabItem } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-tabs-in-panel',\n  templateUrl: './tabs-example-in-panel.component.html',\n  styleUrls: ['./tabs-example-in-panel.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TabsExampleInPanelComponent {\n  public tabs: PrizmTabItem[] = [\n    {\n      title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1',\n      icon: 'charts-donut',\n    },\n    {\n      title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2',\n      icon: 'selection-radio-off',\n    },\n    {\n      title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3',\n      icon: 'location-person-pin-circle',\n    },\n    {\n      title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4',\n      icon: 'editor-format-textdirection-l-to-r',\n    },\n  ];\n\n  public tabCancelClick(): void {\n    // do something\n  }\n\n  public activeTabIndexChange(): void {\n    // do something\n  }\n}\n";
    },
  },
]);
