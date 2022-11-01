import { Component } from '@angular/core';
import { PzmShadowTypeEnum } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-shadow-base-example',
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
      background: var(--zui-bg-body);
      border-radius: .5rem;
      display: flex;
      flex-flow: column;
      gap: 1rem;
      padding: 16px;

      .title {
        color: var(--zui-text-main);
        font-size: 14px;
        font-weight: 800;
      }

      .description {
        color: var(--zui-text-subscript);
        font-size: 12px;
      }
    }
  `]
})
export class ZuiShadowBaseExampleComponent {
  readonly ZuiShadowTypeEnum  = PzmShadowTypeEnum;
}
