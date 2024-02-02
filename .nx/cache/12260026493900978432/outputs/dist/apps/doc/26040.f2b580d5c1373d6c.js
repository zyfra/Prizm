'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [26040],
  {
    26040: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmSelectSearchMatcher } from '@prizm-ui/components';\nimport { BehaviorSubject, timer } from 'rxjs';\nimport { tap } from 'rxjs/operators';\n\n@Component({\n  selector: 'prizm-select-with-backend-search-example',\n  templateUrl: './select-with-backend-search-example.component.html',\n})\nexport class PrizmSelectWithBackendSearchExampleComponent {\n  value = true;\n  readonly control = new UntypedFormControl();\n  readonly allItems = [\n    '\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432',\n    '\u0421\u0435\u0440\u0433\u0435\u0439 \u041c\u0430\u0440\u043a\u043e\u0432',\n    '\u0410\u043d\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430',\n    '\u041a\u0430\u0442\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430',\n    '\u0421\u0430\u0448\u0430 \u0414\u0443\u0440\u043e\u0432',\n    '\u0412\u043b\u0430\u0434 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432',\n    '\u041a\u043e\u0441\u0442\u044f \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432',\n    '\u0420\u0443\u0441\u0442\u0430\u043c \u0413\u0443\u0441\u0435\u0432',\n    '\u0424\u0438\u043b\u0438\u043f \u0423\u0432\u0430\u0440\u043e\u0432',\n  ];\n  public items$ = new BehaviorSubject(this.allItems);\n\n  public searchMatcher: PrizmSelectSearchMatcher<unknown> = () => true;\n\n  public search(val: string): void {\n    if (!val) this.items$.next(this.allItems);\n    const foundItems = this.allItems.filter(i => i?.toLowerCase().includes(val?.toLowerCase()));\n\n    timer(500)\n      .pipe(tap(() => this.items$.next(foundItems)))\n      .subscribe();\n  }\n}\n";
    },
  },
]);
