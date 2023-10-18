import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { PrizmToastService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-file-upload-in-form-example',
  templateUrl: './file-upload-in-form-example.component.html',
  styleUrls: ['./file-upload-in-form-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmFileUploadInFormExampleComponent {
  form = new UntypedFormGroup({
    file: new UntypedFormControl(),
  });

  files: Array<File> = [];

  constructor(private readonly toastService: PrizmToastService) {}

  public onFilesChange(files: Array<File>): void {
    console.log('fileschange');
    this.files = files;
  }

  public formSubmit() {
    this.toastService.create('Form submitted', {
      title: `Форма отправлена`,
      appearance: 'success',
      timer: 5000,
    });
  }
}
