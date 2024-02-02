'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [3366],
  {
    3366: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PRIZM_HINT_DEFAULT_OPTIONS, PrizmHintOptions } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-hint-change-theme-example',\n  templateUrl: './hint-change-theme-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmHintChangeThemeExampleComponent {\n  public readonly prizmHintThemeVariants: ReadonlyArray<PrizmHintOptions['theme']> = [null, 'dark', 'light'];\n  public prizmHintTheme: PrizmHintOptions['theme'] = PRIZM_HINT_DEFAULT_OPTIONS.theme;\n  public hintText = '\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438';\n\n  public setTheme(theme: PrizmHintOptions['theme']) {\n    this.prizmHintTheme = theme;\n  }\n}\n";
    },
  },
]);
