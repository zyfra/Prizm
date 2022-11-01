import { Component } from '@angular/core';

@Component({
  selector: 'pzm-scrollbar-all-example',
  templateUrl: './scrollbar-all-example.component.html',
  styles: [`
    .box {
      width: 16rem;
      height: 16rem;
      border: 1px solid gray;
    }

    .content {
      padding: 0 0.6875rem;
    }

    p {
      white-space: nowrap;
    }
  `]
})
export class ZuiScrollbarAllExampleComponent {}
