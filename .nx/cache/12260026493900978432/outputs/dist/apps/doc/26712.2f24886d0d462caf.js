'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [26712],
  {
    26712: n => {
      n.exports =
        "import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({ name: 'prizmMonthExample' })\nexport class PrizmMonthExamplePipe implements PipeTransform {\n  private defaultMonthNames = [\n    '\u044f\u043d\u0432\u0430\u0440\u044c',\n    '\u0444\u0435\u0432\u0440\u0430\u043b\u044c',\n    '\u043c\u0430\u0440\u0442',\n    '\u0430\u043f\u0440\u0435\u043b\u044c',\n    '\u043c\u0430\u0439',\n    '\u0438\u044e\u043d\u044c',\n    '\u0438\u044e\u043b\u044c',\n    '\u0430\u0432\u0433\u0443\u0441\u0442',\n    '\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c',\n    '\u043e\u043a\u0442\u044f\u0431\u0440\u044c',\n    '\u043d\u043e\u044f\u0431\u0440\u044c',\n    '\u0434\u0435\u043a\u0430\u0431\u0440\u044c',\n  ];\n  public transform(value: number): string {\n    return this.defaultMonthNames[value - 1];\n  }\n}\n";
    },
  },
]);
