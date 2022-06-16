import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-dropdown-host-example-1',
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
export class ZuiDropdownHostExample1 {
  readonly items = [
    'Edit',
    'Download',
    'Rename',
    'Edit',
    'Download',
    'Rename',
    'Delete'
  ];

  open = false;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  public onClick(): void {
    this.open = false;
    this.cdRef.markForCheck();
  }
}
