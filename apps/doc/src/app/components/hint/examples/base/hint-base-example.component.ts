import { Component } from '@angular/core';

@Component({
  selector: 'prizm-hint-base-example',
  templateUrl: './hint-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmHintBaseExampleComponent {
  get hintText(): string {
    return `Кол-во: ${this.amount}`;
  }
  amount = 0;
}
