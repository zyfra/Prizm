import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { getMultiMockFiles } from '../../files.utils';

@Component({
  selector: 'prizm-file-upload-with-init-files',
  templateUrl: './file-upload-with-init-files.component.html',
  styleUrl: './file-upload-with-init-files.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmFileUploadWithInitFilesComponent {
  files = signal<File[]>([]);

  constructor() {
    getMultiMockFiles().then(files => {
      this.files.set(files);
    });
  }

  public onFilesChange(files: Array<File>): void {
    console.log('filesChange', files);
  }

  public onFileAdded(fileName: string): void {
    console.log('fileAdded', fileName);
  }

  public onFileRemoved(fileName: string): void {
    console.log('fileRemoved', fileName);
  }
}
