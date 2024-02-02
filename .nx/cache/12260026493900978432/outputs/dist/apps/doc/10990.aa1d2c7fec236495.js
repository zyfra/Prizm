'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [10990],
  {
    10990: e => {
      e.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { prizmObservable } from '@prizm-ui/core';\nimport { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';\nimport { tap } from 'rxjs/operators';\n\nconst symbol = Symbol('test symbol');\n\n@Component({\n  selector: 'prizm-observable-base-example',\n  templateUrl: './base.component.html',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmObservableBaseExampleComponent {\n  @prizmObservable()\n  test1!: number;\n  test1$$!: Subject<number>;\n\n  @prizmObservable({\n    name: 'secondTest$$',\n    subject: new ReplaySubject(),\n  })\n  test2!: number;\n  secondTest$$!: ReplaySubject<number>;\n\n  @prizmObservable({\n    defaultValue: null,\n    subject: new BehaviorSubject(null),\n  })\n  test3!: number;\n  test3$$!: BehaviorSubject<number>;\n\n  @prizmObservable({\n    name: 'enumerable$$',\n    subject: new ReplaySubject(),\n    attributes: {\n      enumerable: true,\n    },\n  })\n  test4!: number;\n  enumerable$$!: ReplaySubject<number>;\n\n  @prizmObservable({\n    name: symbol,\n    subject: new ReplaySubject(),\n    attributes: {\n      enumerable: true,\n    },\n  })\n  test5!: number;\n\n  public getFromSymbol(): Observable<any> {\n    return this[symbol];\n  }\n\n  public plus(): void {\n    this.test5++;\n    this.test4++;\n    this.test3++;\n    this.test2++;\n    this.test1++;\n  }\n}\n";
    },
  },
]);
