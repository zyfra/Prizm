import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'zui-dropdown-host-example-with-template',
  templateUrl: './template.html',
  styles: [`
    .box {
      display: flex;
      flex-flow: column;
      gap: 8px;
      padding: 16px;
    }

    [zuiButton] {
      width: 100%;
    }
  `]
})
export class ZuiDropdownHostExampleWithTemplateComponent {
  open = false;

  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
