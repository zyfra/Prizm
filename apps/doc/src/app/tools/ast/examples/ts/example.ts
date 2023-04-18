import { OnInit } from '@angular/core';
import { addCommentToImportUsage, PrizmTask } from '@prizm-ui/ast';

export class PrizmObservableBaseExampleComponent implements OnInit {
  readonly task: PrizmTask = {
    name: 'zyfra-button',
    selector: [
      { type: 'change-name', value: 'button' },
      { type: 'add-attribute', value: 'prizmButton' },
    ],
    inputs: {
      label: [{ type: 'move-to-content' }],
      iconPos: [{ type: 'add-comment', value: "TODO: we don't have input iconPos: fix manually" }],
    },
    outputs: {},
  };
  readonly html = `<zyfra-button label='123' iconPos='left'></zyfra-button>`;
  resultHtml: string;

  public ngOnInit(): void {
    const fileName = 'example.ts';
    const moduleName = 'my-module';
    const commentText = 'Этот импорт был обновлен';

    const updatedFileContent = addCommentToImportUsage(fileName, moduleName, commentText);

    console.log(updatedFileContent);
  }
}
