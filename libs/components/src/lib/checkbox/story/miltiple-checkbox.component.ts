import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data, DataFormControl } from './data';

@Component({
  selector: 'zyfra-checkbox-multiple',
  template: ` <form [formGroup]="form">
    <div *ngFor="let data of data">
      <zyfra-checkbox
        *ngFor="let check of data.options"
        [label]="check.label"
        [value]="check.value"
        [formControlName]="data.text"
      >
      </zyfra-checkbox>
    </div>
  </form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./miltiple-checkbox.component.less'],
})
export class ZyfraCheckboxMultipleComponent {
  @Input() label: string;
  @Input() binary: boolean = true;
  @Input() style: object = null;
  @Input() styleClass: string = null;
  @Input() checkboxIcon = 'zyfra-icon selection-check-simple';

  form: FormGroup;
  data: DataFormControl[];

  constructor(private formBuilder: FormBuilder) {
    this.data = data;
    this.form = this.getFormGroup();
  }

  public getFormGroup(): any {
    const formControls = this.data.reduce((controls, dataForm: DataFormControl): any => {
      controls[dataForm.text] = this.formBuilder.control(null);
      return controls;
    }, {});
    return this.formBuilder.group(formControls);
  }
}
