import { Component } from '@angular/core';

@Component({
  selector: 'prizm-hint-change-theme-example',
  templateUrl: './hint-change-theme-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmHintChangeThemeExampleComponent {
  get hintText(): string {
    return `Кол-во: ${this.amount}`;
  }
  amount = 0;
}
