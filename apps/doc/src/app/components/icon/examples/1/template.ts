import {Component} from '@angular/core';
import {ALL_ICONS} from "../mock";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-icon-example-1',
  templateUrl: './template.html',
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
          font-size: 20px;
          flex-wrap: wrap;
        }

        zui-icon {
          cursor: pointer;
        }
      }
    `
  ],
})
export class ZuiIconExample1Component {
  readonly ALL_ICONS = ALL_ICONS;

  public copy(icon: string): void {
    navigator?.clipboard?.writeText(icon)
  }
}
