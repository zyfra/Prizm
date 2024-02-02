'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [60528],
  {
    60528: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'prizm-panel-with-instruments-hard',\n  templateUrl: './panel-example-with-instruments-hard.component.html',\n  styleUrls: ['./panel-example-with-instruments-hard.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PanelExampleWithInstrumentsHardComponent {\n  public tabs: string[] = ['\u041f\u0435\u0440\u0432\u044b\u0439', '\u0412\u0442\u043e\u0440\u043e\u0439', '\u0422\u0440\u0435\u0442\u0438\u0439', '\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u044b\u0439', '\u041f\u044f\u0442\u044b\u0439'];\n  public activeTabIndex = 0;\n\n  public toggleValue = true;\n\n  public activeTabIndexChange(idx: number): void {\n    this.activeTabIndex = idx;\n  }\n}\n";
    },
  },
]);
