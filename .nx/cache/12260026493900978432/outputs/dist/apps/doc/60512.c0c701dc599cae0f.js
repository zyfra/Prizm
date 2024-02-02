'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [60512],
  {
    60512: n => {
      n.exports =
        "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'prizm-polymorph-function-example',\n  templateUrl: './function.component.html',\n  styles: [],\n})\nexport class PrizmPolymorphFunctionExampleComponent {\n  public context = { a: 1 };\n  public value = (context: Record<string, unknown>): string => {\n    return `FROM FUNCTION ${context?.a}`;\n  };\n}\n";
    },
  },
]);
