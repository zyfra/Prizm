import { Component, OnInit } from '@angular/core';
import { addCommentToImportUsage } from '@prizm-ui/ast';
import { TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-ast-ts-example',
  templateUrl: './ts.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstTsExampleComponent implements OnInit {
  public updatedFileContent: string;
  readonly tsExample: TuiDocExample = {
    TypeScript: import('./example.ts?raw'),
  };
  public ngOnInit(): void {
    const fileName = 'example.ts';
    const moduleName = '@prizm-ui/ast';
    const commentText = 'Этот импорт был обновлен';

    this.updatedFileContent = addCommentToImportUsage(fileName, moduleName, commentText);

    console.log('#mz updatedFileContent', this.updatedFileContent);
  }
}
