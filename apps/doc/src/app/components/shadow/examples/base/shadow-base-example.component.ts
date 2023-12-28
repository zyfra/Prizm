import { Component } from '@angular/core';
import { PrizmShadowTypeEnum } from '@prizm-ui/components';

@Component({
  selector: 'prizm-shadow-base-example',
  templateUrl: './shadow-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
      }

      .shadow-container {
        width: 200px;
        height: 200px;
        background: var(--prizm-v3-background-fill-primary);
        border-radius: 0.5rem;
        display: flex;
        flex-flow: column;
        gap: 1rem;
        padding: 16px;

        .title {
          color: var(--prizm-v3-text-icon-secondary);
          font-size: 14px;
          font-weight: 800;
        }

        .description {
          color: var(--prizm-v3-text-icon-tertiary);
          font-size: 12px;
        }
      }
    `,
  ],
})
export class PrizmShadowBaseExampleComponent {
  readonly PrizmShadowTypeEnum = PrizmShadowTypeEnum;
}
