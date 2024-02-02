'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [25644],
  {
    25644: r => {
      r.exports =
        '<div>\n  <p class="title">Size XL</p>\n  <div class="block">\n    <prizm-progress-circle [max]="max" [value]="(value$ | async) || 0" size="xl"></prizm-progress-circle>\n  </div>\n</div>\n\n<br />\n<div>\n  <p class="title">Size L</p>\n  <div class="block">\n    <prizm-progress-circle\n      [max]="max"\n      [trackColor]="\'transparent\'"\n      [value]="(value$ | async) || 0"\n      size="l"\n    ></prizm-progress-circle>\n\n    <prizm-progress-circle [max]="max" [value]="(value$ | async) || 0" size="l"></prizm-progress-circle>\n\n    <prizm-progress-circle\n      [max]="max"\n      [trackColor]="\'var(--prizm-v3-status-warning-primary-default)\'"\n      [color]="\'var(--prizm-v3-status-warning-primary-default)\'"\n      [value]="(value$ | async) || 0"\n      size="l"\n    ></prizm-progress-circle>\n  </div>\n</div>\n<br />\n\n<br />\n<div>\n  <p class="title">Size S</p>\n  <div class="block">\n    <prizm-progress-circle [max]="max" [value]="(value$ | async) || 0" size="s"></prizm-progress-circle>\n    <prizm-progress-circle\n      [max]="max"\n      [value]="(value$ | async) || 0"\n      size="s"\n      color="var(--prizm-v3-status-warning-primary-default)"\n      trackColor="transparent"\n    ></prizm-progress-circle>\n  </div>\n</div>\n\n<br />\n<div>\n  <p class="title">Size M</p>\n  <div class="block">\n    <prizm-progress-circle [max]="max" [value]="(value$ | async) || 0" size="m"></prizm-progress-circle>\n\n    <prizm-progress-circle\n      [max]="max"\n      [value]="(value$ | async) || 0"\n      size="m"\n      color="var(--prizm-v3-status-warning-primary-default)"\n    ></prizm-progress-circle>\n  </div>\n</div>\n\n<br />\n<div>\n  <p class="title">With label</p>\n  <div class="block">\n    <div>\n      <label *ngIf="value$ | async as value" prizmProgressLabel>\n        <span class="percent">{{ value }}%</span>\n\n        <prizm-progress-circle [max]="max" [value]="value" size="xl"></prizm-progress-circle>\n      </label>\n    </div>\n    <div>\n      <label *ngIf="value$ | async as value" prizmProgressLabel>\n        <span class="percent">{{ value }}%</span>\n        <prizm-progress-circle\n          [max]="max"\n          [trackColor]="\'transparent\'"\n          [value]="value"\n          size="l"\n        ></prizm-progress-circle>\n      </label>\n    </div>\n  </div>\n</div>\n';
    },
  },
]);
