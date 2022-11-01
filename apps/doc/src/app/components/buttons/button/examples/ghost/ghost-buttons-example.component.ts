import { Component } from '@angular/core';

@Component({
  selector: 'pzm-ghost-buttons-example',
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
  templateUrl: './ghost-buttons-example.component.html',
})
export class PzmGhostButtonsExampleComponent {}
