import { Component, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCard } from '@prizm-ui/icons/full/source';
import { PrizmButtonComponent, PrizmCounterDirective } from '@prizm-ui/components';

@Component({
  selector: 'prizm-icons-buttons-example',
  styles: [
    `
      .box {
        margin-bottom: 2rem;

        .title {
          margin-bottom: 0.5rem;
        }

        .content {
          display: flex;
          gap: 1rem;
        }
      }
    `,
  ],
  standalone: true,
  imports: [PrizmButtonComponent, PrizmCounterDirective],
  templateUrl: './icons-buttons-example.component.html',
})
export class prizmIconsButtonsExampleComponent {
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCard);
  }
}
