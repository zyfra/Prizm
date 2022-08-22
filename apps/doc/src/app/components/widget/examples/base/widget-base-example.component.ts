import { Component } from '@angular/core';

@Component({
  selector: 'zui-widget-base-example',
  templateUrl: './widget-base-example.component.html',
  styles: [`
    zui-widget {
      padding: 16px;
      color: var(--text-main);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  `]
})
export class ZuiWidgetBaseExampleComponent {}
