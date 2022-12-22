import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prizm-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent {
  public readonly joinSvgFonts = `# Использование шрифтов
 # Добавить в конфиг файл ангуляра для использования шрифтов
 "styles": [
    ...
    "@prizm-ui/icons/base/src/styles/styles.less"
  ],";
  `;
  public readonly joinSvgFontsForImport = `@import "~@prizm-ui/icons/base/src/styles/styles.less";
  `;
  public readonly updateAngularStylesFileCode = `@import "~@prizm-ui/components/src/styles/styles.less";
@import "~@prizm-ui/components/src/styles/icons/icons.less";
@import "~@prizm-ui/components/src/styles/icons-16/icons-16.less";
  `;
  public readonly updateAngularStylesCode = `
  "assets": [
    // ....
     {
       "glob": "**/*",
       "input": "node_modules/@prizm-ui/components/src/styles/fonts",
       "output": "assets/prizm-ui/fonts"
     },
   ],
  "styles": [
    // ...
    "node_modules/@prizm-ui/components/src/styles/styles.less",
    "node_modules/@prizm-ui/components/src/styles/icons/icons.less",
    "node_modules/@prizm-ui/components/src/styles/icons-16/icons-16.less"
  ],
  `;
}
