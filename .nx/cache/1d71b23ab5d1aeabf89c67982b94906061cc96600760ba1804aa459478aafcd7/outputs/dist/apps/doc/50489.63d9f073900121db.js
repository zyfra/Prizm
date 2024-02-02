"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[50489],{50489:e=>{e.exports="import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport {\n  PrizmSelectIdentityMatcher,\n  PrizmSelectSearchMatcher,\n  PrizmSelectStringify,\n} from '@prizm-ui/components';\nimport { tap } from 'rxjs/operators';\n\ntype PrizmItem = {\n  id: number;\n  name: string;\n};\n@Component({\n  selector: 'prizm-select-with-object-example',\n  templateUrl: './select-with-object-example.component.html',\n  styles: [\n    `\n      .item {\n        display: flex;\n        gap: 0.5rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSelectWithObjectExampleComponent {\n  readonly items: PrizmItem[] = [\n    { id: 1, name: '\u0420\u043e\u0441\u0441\u0438\u044f' },\n    { id: 2, name: '\u0421\u0428\u0410' },\n    { id: 3, name: '\u041e\u0410\u042d' },\n  ];\n  readonly valueControl = new UntypedFormControl({ id: 3 });\n\n  readonly searchMatcher: PrizmSelectSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {\n    return item.name.toLowerCase().includes(search.toLowerCase());\n  };\n\n  readonly identityMatcher: PrizmSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {\n    return a?.id === b?.id;\n  };\n\n  readonly stringify: PrizmSelectStringify<PrizmItem> = (item: PrizmItem) => {\n    return item?.name;\n  };\n\n  public setDefaultValue(): void {\n    this.valueControl.setValue(this.items[0]);\n  }\n}\n"}}]);