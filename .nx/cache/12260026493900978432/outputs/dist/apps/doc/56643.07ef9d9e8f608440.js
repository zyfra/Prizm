'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [56643],
  {
    56643: e => {
      e.exports =
        "```ts\nimport { PrizmThemeService } from '@prizm-ui/theme';\n\nexport class PrizmThemeBaseExampleComponent {\n  @ViewChild('myContainer', { static: true, read: ElementRef }) el!: ElementRef;\n\n  constructor(public readonly theme: PrizmThemeService) {}\n\n  public light(): void {\n    this.theme.update('light');\n  }\n\n  public dark(): void {\n    this.theme.update('dark');\n  }\n\n  public toggle(): void {\n    this.theme.update(this.theme.getByElement(this.theme.rootElement) === 'light' ? 'dark' : 'light');\n  }\n\n  public updateMyContainerTheme(): void {\n    this.theme.update('light', this.el.nativeElement);\n  }\n}\n```\n";
    },
  },
]);
