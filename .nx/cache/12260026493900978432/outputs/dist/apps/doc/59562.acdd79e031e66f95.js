'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [59562],
  {
    59562: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport {\n  prizmIconFlagSvgAs,\n  PrizmIconSvgFlagSvgEnum,\n  PrizmFlagIconsRegistry,\n  prizmIconFlagSvgRu,\n} from '@prizm-ui/flag-icons';\n\n@Component({\n  selector: 'prizm-icon-base-example',\n  templateUrl: './icon-base-example.component.html',\n})\nexport class PrizmIconSvgBaseExampleComponent {\n  readonly PrizmIconSvgFlagSvgEnum = PrizmIconSvgFlagSvgEnum;\n  constructor(private readonly iconFlagsRegistry: PrizmFlagIconsRegistry) {\n    this.iconFlagsRegistry.registerIcons([prizmIconFlagSvgAs, prizmIconFlagSvgRu]);\n  }\n}\n";
    },
  },
]);
