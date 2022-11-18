import { Component } from '@angular/core';

@Component({
  selector: 'prizm-theme-base-example',
  templateUrl: './theme-base-example.component.html',
  styles: [`
    prizm-card {
      padding: 16px;
      color: var(--prizm-text-main);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  `]
})
export class PrizmThemeBaseExampleComponent {}
