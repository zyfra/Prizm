'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [26085],
  {
    26085: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'prizm-splitter-areas-control-size-example',\n  templateUrl: './areas-control-size.component.html',\n  styleUrls: ['./areas-control-size.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmSplitterAreasControlSizeExampleComponent {\n  area1Size = 25;\n  area2Size = 25;\n  area3Size = 25;\n  area4Size = 25;\n\n  public change(): void {\n    if (this.area1Size === 25) {\n      this.area1Size = 40;\n      this.area2Size = 40;\n      this.area3Size = 10;\n      this.area4Size = 10;\n    } else {\n      this.area1Size = 25;\n      this.area2Size = 25;\n      this.area3Size = 25;\n      this.area4Size = 25;\n    }\n  }\n}\n";
    },
  },
]);
