'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [3850],
  {
    3850: e => {
      e.exports =
        "import { Component, EventEmitter, Input } from '@angular/core';\nimport { prizmAutoEmit, prizmObservable } from '@prizm-ui/core';\nimport { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';\n\n@Component({\n  selector: 'prizm-observable-base-example',\n  templateUrl: './base.component.html',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmObservableBaseExampleComponent {\n  inputOneChange = new EventEmitter<number>();\n\n  @Input()\n  @prizmAutoEmit()\n  inputOne = 100;\n\n  secondTest$$ = new Subject<number>();\n  @prizmAutoEmit({\n    name: 'secondTest$$',\n  })\n  test2 = 200;\n\n  calculated$$ = new BehaviorSubject<number>(0);\n  @prizmAutoEmit({\n    defaultValue: null,\n    name: 'calculated$$',\n    calculate: (value: number, self: PrizmObservableBaseExampleComponent) => value * 2,\n  })\n  test3 = 300;\n\n  test2PlusCurrent$$ = new BehaviorSubject<number>(0);\n  @prizmAutoEmit({\n    defaultValue: null,\n    name: 'test2PlusCurrent$$',\n    calculate: (value: number, self: PrizmObservableBaseExampleComponent) => {\n      return self.test2 + value;\n    },\n  })\n  test4 = 800;\n\n  public plus(): void {\n    this.test4++;\n    this.test3++;\n    this.test2++;\n    this.inputOne++;\n  }\n}\n";
    },
  },
]);
