"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[73318],{73318:n=>{n.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PolymorphComponent, PrizmTabItem } from '@prizm-ui/components';\nimport { TabsExampleComponentContentComponent } from './tabs-example-content-component.component';\n\n@Component({\n  selector: 'prizm-tabs-example-component',\n  templateUrl: './tabs-example-component.component.html',\n  styleUrls: ['./tabs-example-component.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TabsExampleComponentComponent {\n  public activeTabIndex = 0;\n  public content = new PolymorphComponent(TabsExampleComponentContentComponent);\n  public tabs: PrizmTabItem[] = [\n    {\n      title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1',\n    },\n    {\n      title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2',\n    },\n    {\n      title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3',\n    },\n    {\n      title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4',\n    },\n  ];\n}\n"}}]);