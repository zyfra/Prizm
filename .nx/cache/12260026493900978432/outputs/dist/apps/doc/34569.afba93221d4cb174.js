'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [34569],
  {
    34569: e => {
      e.exports =
        '<prizm-select\n  [items]="$any(items$ | async)"\n  [searchable]="true"\n  [searchMatcher]="searchMatcher"\n  [formControl]="control"\n  (searchChange)="search($any($event))"\n  icon="sort-zoom-in"\n></prizm-select>\n';
    },
  },
]);
