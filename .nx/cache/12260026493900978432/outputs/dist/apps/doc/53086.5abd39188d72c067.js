'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [53086],
  {
    53086: r => {
      r.exports =
        '<prizm-input-layout [label]="\'\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c\'" [size]="\'l\'" [outer]="true" [position]="\'center\'">\n  <prizm-carousel-auxiliary-left [carousel]="carousel" prizm-input-left></prizm-carousel-auxiliary-left>\n\n  <prizm-carousel\n    #carousel\n    [required]="true"\n    [carouselContent]="arrayWithObjects"\n    [value]="arrayWithObjects.set[0]"\n  >\n    {{ arrayWithObjects.currentValue.title }}\n  </prizm-carousel>\n  <prizm-carousel-auxiliary-right [carousel]="carousel" prizm-input-right></prizm-carousel-auxiliary-right>\n  <ng-template prizmInputStatusText>\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430</ng-template>\n</prizm-input-layout>\n';
    },
  },
]);
