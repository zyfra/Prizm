'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [10886],
  {
    10886: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'prizm-splitter-areas-control-ngif-example',\n  templateUrl: './areas-control-ngif.component.html',\n  styleUrls: ['./areas-control-ngif.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmSplitterAreasControlNgIfExampleComponent {\n  area1Size = 25;\n  area2Size = 25;\n  area3Size = 25;\n  area4Size = 25;\n\n  showArea1 = true;\n  showArea2 = true;\n  showArea3 = true;\n  showArea4 = true;\n\n  public change(): void {\n    if (this.showArea1) {\n      this.showArea1 = false;\n      this.showArea4 = false;\n\n      this.area2Size = 50;\n      this.area3Size = 50;\n    } else {\n      this.showArea1 = true;\n      this.showArea4 = true;\n      this.area1Size = 25;\n      this.area2Size = 25;\n      this.area3Size = 25;\n      this.area4Size = 25;\n    }\n  }\n}\n";
    },
  },
]);
