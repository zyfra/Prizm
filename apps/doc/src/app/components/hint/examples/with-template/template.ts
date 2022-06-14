import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-hint-example-with-template',
  templateUrl: './template.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiHintExampleWithTemplate {
}
