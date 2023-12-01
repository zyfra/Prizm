import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-for-developers',
  templateUrl: './for-developers.component.html',
  styleUrls: ['./for-developers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForDevelopersComponent {
  public readonly joinSvgFonts = `
  "styles": [
     ...
     "@prizm-ui/icons/src/styles/styles.less"
   ],";
   `;
  public readonly joinSvgFontsForImport = `
  @import "~@prizm-ui/icons/src/styles/icons-24/prizm-icons.css;

  @font-face {
    font-family: 'prizm-icons';
    src: url('[YOUR PATH TO STYLES]/icons-24/prizm-icons.ttf?1772816e867a80e18921a5b7d83b4205') format('truetype'),
      url('[YOUR PATH TO STYLES]/icons-24/prizm-icons.woff?1772816e867a80e18921a5b7d83b4205') format('woff'),
      url('[YOUR PATH TO STYLES]/icons-24/prizm-icons.eot?1772816e867a80e18921a5b7d83b4205#iefix') format('embedded-opentype'),
      url('[YOUR PATH TO STYLES]/icons-24/prizm-icons.woff2?1772816e867a80e18921a5b7d83b4205') format('woff2');
    }

  ";
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
