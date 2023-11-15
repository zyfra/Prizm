import { Component } from '@angular/core';

@Component({
  selector: 'prizm-listing-item-base-example',
  templateUrl: './listing-item-base-example.component.html',
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
        background-color: var(--prizm-v3-background-fill-secondary);
      }

      prizm-listing-item {
        max-width: 300px;
      }
    `,
  ],
})
export class PrizmListingItemBaseExampleComponent {
  public open = false;
}
