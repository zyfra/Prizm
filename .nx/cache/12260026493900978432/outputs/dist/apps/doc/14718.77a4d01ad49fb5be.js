'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [14718],
  {
    14718: a => {
      a.exports =
        '<prizm-calendar\n  [value]="day"\n  [month]="day"\n  [daysWithStatus]="daysWithStatus"\n  (dayClick)="onDayClick($event)"\n></prizm-calendar>\n\n<div>\n  <p>\u0412\u044b\u0431\u0440\u0430\u043d\u043e</p>\n  <span>{{ day && (day.toLocalNativeDate() | date : \'dd/MM/yyyy\') }}</span>\n</div>\n';
    },
  },
]);
