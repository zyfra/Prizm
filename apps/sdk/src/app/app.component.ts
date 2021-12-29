import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zyfra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'sdk';

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
  public label = 'City';

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
