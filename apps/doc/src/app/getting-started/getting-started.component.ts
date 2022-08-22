import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'zui-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedComponent {
  public readonly updateAngularStylesCode = `
  "styles": [
    // ...
    "node_modules/@digital-plant/zui-components/src/styles/styles.less",
    "node_modules/@digital-plant/zui-components/src/styles/icons/icons.less",
    "node_modules/@digital-plant/zui-components/src/styles/icons-16/icons-16.less"
  ],
  `
}
