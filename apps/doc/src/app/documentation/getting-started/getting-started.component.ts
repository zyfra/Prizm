import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prizm-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent {
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
