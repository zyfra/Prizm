'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [40583],
  {
    40583: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'prizm-side-menu-example-basic',\n  templateUrl: './side-menu-example-basic.component.html',\n  styleUrls: ['./side-menu-example-basic.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SideMenuExampleBasicComponent {\n  public elementList: string[] = [\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 1',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 2',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 3',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 4',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 5',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 6',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 7',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 8',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 9',\n    '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 10',\n  ];\n\n  public isSideMenuOpened = false;\n  public selectedElementIdx = -1;\n  public sideMenuType: 'col' | 'line' = 'line';\n\n  public toggleElementState(idx: number): void {\n    this.selectedElementIdx = this.selectedElementIdx === idx ? -1 : idx;\n  }\n\n  public changeSideMenuType(): void {\n    this.sideMenuType = this.sideMenuType === 'line' ? 'col' : 'line';\n  }\n\n  public toggleSideMenu(): void {\n    this.isSideMenuOpened = !this.isSideMenuOpened;\n  }\n}\n";
    },
  },
]);
