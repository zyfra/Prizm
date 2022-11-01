import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'pzm-dropdown-host-example-with-template',
  templateUrl: './template.html',
  styles: [`
    .box {
      display: flex;
      flex-flow: column;
      gap: 8px;
      padding: 16px;
    }

    [pzmButton] {
      width: 100%;
    }
  `]
})
export class PzmDropdownHostExampleWithTemplateComponent {
  open = false;

  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
