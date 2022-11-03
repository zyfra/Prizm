import { Component } from '@angular/core';

@Component({
  selector: 'pzm-theme-base-example',
  templateUrl: './theme-base-example.component.html',
  styles: [`
    pzm-card {
      padding: 16px;
      color: var(--pzm-text-main);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  `]
})
export class PzmThemeBaseExampleComponent {}
