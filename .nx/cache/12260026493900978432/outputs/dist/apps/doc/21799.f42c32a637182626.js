'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [21799],
  {
    21799: t => {
      t.exports =
        '<h1>Button With Icon</h1>\n\n<div class="box">\n  <div class="title">Pass icon name</div>\n  <div class="content">\n    <button [icon]="\'account-card-details\'" prizmButton>Left Icon</button>\n    <button [iconRight]="\'account-card-details\'" prizmButton>Right Icon</button>\n    <button [icon]="\'account-card-details\'" [iconRight]="\'account-card-details\'" prizmButton>\n      Right and Left Icon\n    </button>\n  </div>\n</div>\n\n<div class="box">\n  <div class="title">Pass Template</div>\n  <div class="content">\n    <button [icon]="someTemplate" prizmButton>Left Template</button>\n    <button [iconRight]="someTemplate" prizmButton>Right Template</button>\n    <button [icon]="someTemplate" [iconRight]="someTemplate" prizmButton>Right and Reft Template</button>\n    <ng-template #someTemplate>%</ng-template>\n  </div>\n</div>\n';
    },
  },
]);
