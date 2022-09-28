import { Component } from '@angular/core';

@Component({
  selector: 'zui-theme-base-example',
  templateUrl: './theme-base-example.component.html',
  styles: [`
    zui-card {
      padding: 16px;
      color: var(--zui-text-main);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  `]
})
export class ZuiThemeBaseExampleComponent {}
