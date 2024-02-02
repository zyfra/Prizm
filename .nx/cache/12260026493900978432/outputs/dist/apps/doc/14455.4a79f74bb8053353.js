'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [14455],
  {
    14455: e => {
      e.exports =
        "```ts\nimport { PrizmThemeService } from '@prizm-ui/theme';\n\nexport class AppComponent {\n  constructor(public readonly theme: PrizmThemeService) {}\n\n  public setCustomLightTheme(): void {\n    this.theme.update('customLight');\n  }\n\n  public setCustomDarkTheme(): void {\n    this.theme.update('customDark');\n  }\n}\n```\n";
    },
  },
]);
