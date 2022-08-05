import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-dropdown-test',
  templateUrl: './dropdown-test.component.html',
  styleUrls: ['./dropdown-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownTestComponent {
  public options: any = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  public value = { name: 'New York', code: 'NY' };
  public optionLabel = 'name';
  public placeholder = 'Select a City';
  public showClear = true;
  public mini = true;
  public editable = true;

  public onChange(e: any): void {
    console.log(e);
  }
  public onClick(e: any): void {
    console.log(e);
  }
  public onFocus(e: any): void {
    console.log(e);
  }
  public onBlur(e: any): void {
    console.log(e);
  }
  public onShow(e: any): void {
    console.log(e);
  }
  public onHide(e: any): void {
    console.log(e);
  }
}
