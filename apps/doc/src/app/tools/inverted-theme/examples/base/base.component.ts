import { Component } from '@angular/core';

@Component({
  selector: 'prizm-theme-base-example',
  templateUrl: './base.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
      .zone {
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
      }
    `,
  ],
})
export class PrizmThemeBaseExampleComponent {
  themeValue = 'light';

  public light(): void {
    this.themeValue = 'light';
  }

  public dark(): void {
    this.themeValue = 'dark';
  }

  public toggle(): void {
    this.themeValue = this.themeValue === 'light' ? 'dark' : 'light';
  }
}
