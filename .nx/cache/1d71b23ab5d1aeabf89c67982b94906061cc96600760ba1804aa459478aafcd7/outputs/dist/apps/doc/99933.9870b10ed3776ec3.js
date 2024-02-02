"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[99933],{99933:n=>{n.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmSwitcherItem } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-switcher-only-icon-example',\n  templateUrl: './switcher-only-icon-example.component.html',\n  styleUrls: ['./switcher-only-icon-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SwitcherOnlyIconExampleComponent {\n  public readonly switchers: PrizmSwitcherItem[] = [\n    {\n      icon: 'editor-table',\n      hint: {\n        value: '\u0422\u0430\u0431\u043b\u0438\u0446\u044b',\n        options: {\n          theme: 'light',\n          direction: 'l',\n        },\n      },\n    },\n    {\n      icon: 'network-scheme',\n      hint: {\n        value: '\u041c\u043d\u0435\u043c\u043e\u0441\u0445\u0435\u043c\u044b',\n        options: {\n          theme: 'light',\n          showDelay: 100,\n          hideDelay: 500,\n          autoReposition: false,\n          direction: 'br',\n        },\n      },\n    },\n    {\n      icon: 'view-dashboard',\n      hint: {\n        value: '\u0414\u0430\u0448\u0431\u043e\u0440\u0434\u044b',\n      },\n    },\n  ];\n}\n"}}]);