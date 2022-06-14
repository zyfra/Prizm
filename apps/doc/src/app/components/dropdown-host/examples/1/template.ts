import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-dropdown-host-example-1',
  templateUrl: './template.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
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
