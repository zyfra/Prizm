import { Component } from '@angular/core';
import { ZuiShadowTypeEnum } from '@digital-plant/zui-components';

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
      background: white;
      border-radius: .5rem;
      display: flex;
      flex-flow: column;
      gap: 1rem;
      padding: 16px;

      .title {
        color: #20222B;
        font-size: 14px;
        font-weight: 800;
      }

      .description {
        color: #50546B;
        font-size: 12px;
      }
    }
  `]
})
export class ZuiShadowBaseExampleComponent {
  readonly ZuiShadowTypeEnum  = ZuiShadowTypeEnum;
}
