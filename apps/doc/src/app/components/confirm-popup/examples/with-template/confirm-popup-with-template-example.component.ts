import { Component } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-confirm-popup-with-template-example',
  templateUrl: './confirm-popup-with-template-example.component.html',
  styles: [`
    .box {
      max-width: 288px;
      padding: 8px;

      .title {
        font-size: 14px;
        font-weight: 500;
      }

      a {
        color: #337EFF;
        text-decoration: underline;
      }

      .date {
        color: #A1A5B7;
        margin: 8px 0;
      }

      img {
        max-width: 100%;
      }

      .footer {
        display: flex;
        margin-top: 32px;
        gap: 8px;
        flex-wrap: nowrap;

        button {
          flex-grow: 1;
        }
      }
    }
  `]
})
export class PrizmConfirmPopupWithTemplateExampleComponent {
  direction = PrizmOverlayOutsidePlacement.RIGHT
}
