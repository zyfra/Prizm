'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [42791],
  {
    42791: e => {
      e.exports =
        '<prizm-input-layout [label]="\'\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c\'" [size]="\'l\'" [outer]="true" [position]="\'center\'">\n  <prizm-carousel-auxiliary-left [carousel]="carousel" prizm-input-left></prizm-carousel-auxiliary-left>\n  <prizm-carousel\n    #carousel\n    [required]="true"\n    [carouselContent]="carouselContent"\n    [value]="2"\n    [lightMode]="true"\n  >\n    {{ carouselContent.currentValue }}\n  </prizm-carousel>\n  <prizm-carousel-auxiliary-right [carousel]="carousel" prizm-input-right></prizm-carousel-auxiliary-right>\n  <ng-template prizmInputStatusText>\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430</ng-template>\n</prizm-input-layout>\n';
    },
  },
]);
