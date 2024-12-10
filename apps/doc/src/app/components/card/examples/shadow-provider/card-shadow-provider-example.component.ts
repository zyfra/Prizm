import { Component } from '@angular/core';
import { PRIZM_CARD_OPTIONS } from '@prizm-ui/components';

@Component({
  selector: 'prizm-card-shadow-provider-example',
  templateUrl: './card-shadow-provider-example.component.html',
  styles: [
    `
      prizm-card {
        padding: 16px;
        color: var(--prizm-text-icon-secondary);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
      }
    `,
  ],
  providers: [
    {
      provide: PRIZM_CARD_OPTIONS,
      useValue: {
        shadow: 'none',
      },
    },
  ],
})
export class PrizmCardShadowProviderExampleComponent {}
