import { Component } from '@angular/core';
import { PrizmShadowTypeEnum } from '@prizm-ui/components';

@Component({
  selector: 'prizm-shadow-base-example',
  templateUrl: './shadow-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
    }

    .shadow-container {
      width: 200px;
      height: 200px;
      background: var(--prizm-bg-body);
      border-radius: .5rem;
      display: flex;
      flex-flow: column;
      gap: 1rem;
      padding: 16px;

      .title {
        color: var(--prizm-text-main);
        font-size: 14px;
        font-weight: 800;
      }

      .description {
        color: var(--prizm-text-subscript);
        font-size: 12px;
      }
    }
  `]
})
export class PrizmShadowBaseExampleComponent {
  readonly PrizmShadowTypeEnum  = PrizmShadowTypeEnum;
}
