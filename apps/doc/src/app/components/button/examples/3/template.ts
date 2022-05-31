import {Component} from '@angular/core';

@Component({
  selector: 'zui-button-example-3',
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
  templateUrl: './template.html',
})
export class ZuiButtonExample3 {
}
