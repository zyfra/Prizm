import {Component} from '@angular/core';

@Component({
  selector: 'pzm-loader-base-example',
  templateUrl: './loader-base-example.component.html',
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

        pzm-icon {
          cursor: pointer;
        }
      }
    `
  ],
})
export class PzmLoaderBaseExampleComponent {
}
