import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-form-control-example',
  templateUrl: './input-form-control-example.component.html',
  styleUrls: ['./input-form-control-example.component.less'],
})
export class InputFormControlExampleComponent {
  public readonly control: FormControl = new FormControl();

  public valueText = '';
  public ngModelText = '';

  public changeControl(): void {
    this.control.setValue('New text control from method!');
  }

  public changeText(): void {
    this.valueText = 'New text random text ' + Math.random();
  }

  public changeNgModel(): void {
    this.ngModelText = 'New for ngModel';
  }
}
