import { Component } from '@angular/core';

@Component({
  selector: 'pzm-widget-base-example',
  templateUrl: './widget-base-example.component.html',
  styles: [`
    pzm-widget {
      padding: 16px;
      color: var(--pzm-text-main);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  `]
})
export class PzmWidgetBaseExampleComponent {}
