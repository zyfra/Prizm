'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [57409],
  {
    57409: n => {
      n.exports =
        '<h3>\n  Current Value:\n  <b>{{ item.valueChange | async }}</b>\n</h3>\n<h3>\n  Period:\n  <pre>{{ period | json }}</pre>\n</h3>\n\n<hr />\n<br />\n<br />\n<prizm-cron #item [(period)]="period"></prizm-cron>\n';
    },
  },
]);
