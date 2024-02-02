'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [1787],
  {
    1787: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { prizmAstHtmlParse, prizmAstHtmlPrettify } from '@prizm-ui/ast';\n\n@Component({\n  selector: 'prizm-parse-base-example',\n  templateUrl: './base.component.html',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n        flex-flow: row;\n        margin: 16px 0;\n      }\n    `,\n  ],\n})\nexport class PrizmParseBaseExampleComponent {\n  result = '';\n  html = '';\n\n  public cancel(): void {\n    this.result = '';\n    this.html = '';\n  }\n\n  public confirm(): void {\n    this.result = prizmAstHtmlParse(this.html);\n  }\n}\n";
    },
  },
]);
