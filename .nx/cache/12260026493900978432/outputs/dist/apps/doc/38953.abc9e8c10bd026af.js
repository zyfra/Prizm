'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [38953],
  {
    38953: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { delay } from 'rxjs/operators';\nimport { BehaviorSubject } from 'rxjs';\n\n@Component({\n  selector: 'prizm-to-observable-base-example',\n  templateUrl: './to-obsrvable-base-example.component.html',\n})\nexport class PrizmToObservableBaseExampleComponent {\n  delay = delay(3000);\n  counter = 0;\n  counter$ = new BehaviorSubject(this.counter);\n}\n";
    },
  },
]);
