'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [29337],
  {
    29337: n => {
      n.exports =
        "```ts\nimport { Component } from '@angular/core';\nimport { prizmAutoEmit } from '@prizm-ui/core';\n\n@Component({\n  selector: 'prizm-observable-base-example',\n})\nexport class PrizmObservableBaseExampleComponent {\n  @Input()\n  @prizmAutoEmit()\n  inputOne = 100;\n\n  public plus() {\n    this.inputOne++;\n  }\n}\n```\n";
    },
  },
]);
