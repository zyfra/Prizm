'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [47397],
  {
    47397: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { UntypedFormGroup } from '@angular/forms';\nimport { PrizmToastService } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-file-upload-in-form-example',\n  templateUrl: './file-upload-in-form-example.component.html',\n  styleUrls: ['./file-upload-in-form-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmFileUploadInFormExampleComponent {\n  form = new UntypedFormGroup({});\n\n  files: Array<File> = [];\n\n  constructor(private readonly toastService: PrizmToastService) {}\n\n  public onFilesChange(files: Array<File>): void {\n    console.log('fileschange');\n    this.files = files;\n  }\n\n  public formSubmit() {\n    this.toastService.create('Form submitted', {\n      title: `\u0424\u043e\u0440\u043c\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430`,\n      appearance: 'success',\n      timer: 5000,\n    });\n  }\n}\n";
    },
  },
]);
