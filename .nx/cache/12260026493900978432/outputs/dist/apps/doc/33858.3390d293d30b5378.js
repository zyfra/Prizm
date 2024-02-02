'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [33858],
  {
    33858: e => {
      e.exports =
        "```ts\nimport { Component } from '@angular/core';\nimport { prizmObservable } from '@prizm-ui/core';\n\n@Component({\n  selector: 'prizm-observable-base-example',\n})\nexport class PrizmObservableBaseExampleComponent {\n  @prizmObservable()\n  test1: number;\n  test1$$!: ReplaySubject<number>;\n\n  public plus() {\n    this.test1++;\n  }\n}\n```\n";
    },
  },
]);
