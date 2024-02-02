'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [21148],
  {
    21148: n => {
      n.exports =
        '<div class="container">\n  <prizm-listing-item\n    *ngFor="let cell of cells"\n    [disabled]="cell.disabled"\n    [selected]="cell.selected"\n    [style.--prizm-listing-item-row-selected-hover]="\'var(--prizm-v3-table-fill-row-hover)\'"\n  >\n    <ng-container leftBox>\n      <prizm-checkbox [(ngModel)]="cell.selected" [checked]="cell.selected"></prizm-checkbox>\n    </ng-container>\n\n    <ng-container>\n      {{ cell.title }}\n    </ng-container>\n\n    <ng-container rightBox>\n      <prizm-counter [value]="cell.count" [maxValue]="99" status="info"></prizm-counter>\n      <button\n        [icon]="\'location-map-marker\'"\n        prizmIconButton\n        appearanceType="ghost"\n        appearance="secondary"\n        size="m"\n      ></button>\n    </ng-container>\n  </prizm-listing-item>\n</div>\n';
    },
  },
]);
