import {Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-button-example-1',
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
        }
      }
    `
  ],
})
export class ZuiButtonExample1 {
  visible = true;
}
