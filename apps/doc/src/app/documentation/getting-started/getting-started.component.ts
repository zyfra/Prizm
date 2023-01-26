import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prizm-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent {
  public readonly joinSvgFonts = `
 "styles": [
    ...
    "@prizm-ui/icons/base/src/styles/styles.less"
  ],";
  `;
  public readonly joinSvgFontsForImport = `@import "~@prizm-ui/icons/base/src/styles/styles.less";
  `;
  public readonly updateAngularStylesFileCode = `
// (Required) Add for use our theme
@import "~@prizm-ui/theme/src/styles/styles.less";
// (Optional) Add only for use our components library
@import "~@prizm-ui/components/src/styles/styles.less";

// (Optional) Add only for use our old icon set (deprecated)
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
    // (Required) Add for use our theme
    "node_modules/@prizm-ui/theme/src/styles/styles.less",
    // (Optional) Add for use our components
    "node_modules/@prizm-ui/components/src/styles/styles.less",
    // (Optional) Add only for use our old icon set (deprecated)
    "node_modules/@prizm-ui/components/src/styles/icons/icons.less",
    "node_modules/@prizm-ui/components/src/styles/icons-16/icons-16.less"
  ],
  `;
}
