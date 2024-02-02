'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [18113],
  {
    72059: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { timer } from 'rxjs';\nimport { map, startWith, takeWhile } from 'rxjs/operators';\n\n@Component({\n  selector: 'prizm-progress-base-example',\n  templateUrl: './progress-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n\n      [prizmProgressLabel] {\n        width: 100%;\n      }\n\n      .label-wrapper {\n        width: 50%;\n      }\n\n      .progress-block {\n        display: flex;\n        gap: 8px;\n        align-items: center;\n      }\n\n      .progress {\n        &:nth-child(1) {\n          color: #a3ecb3;\n        }\n        &:nth-child(2) {\n          color: #39b54a;\n        }\n      }\n    `,\n  ],\n})\nexport class PrizmProgressBaseExampleComponent {\n  readonly value$ = timer(300, 500).pipe(\n    map(i => i + 30),\n    takeWhile(i => i != 101),\n    startWith(30)\n  );\n  readonly colors = [`var(--prizm-v3-status-alarm-primary-default)`, `lightskyblue`, `#3682db`, `red`];\n  readonly max = 100;\n}\n";
    },
  },
]);
