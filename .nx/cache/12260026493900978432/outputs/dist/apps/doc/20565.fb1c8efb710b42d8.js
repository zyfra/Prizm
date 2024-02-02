'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [20565],
  {
    20565: r => {
      r.exports =
        '<div class="container">\n  <h2>8 columns grid</h2>\n  <prizm-grid [style.height.px]="400" cols="8" rows="8">\n    <prizm-grid-item\n      *ngFor="let grid of grids8"\n      [colPos]="grid.colPos"\n      [rowPos]="grid.rowPos"\n    ></prizm-grid-item>\n  </prizm-grid>\n\n  <h2>12 columns grid</h2>\n  <prizm-grid [style.height.px]="400" cols="12" rows="14">\n    <prizm-grid-item\n      *ngFor="let grid of grids12"\n      [colPos]="grid.colPos"\n      [rowPos]="grid.rowPos"\n    ></prizm-grid-item>\n  </prizm-grid>\n</div>\n';
    },
  },
]);
