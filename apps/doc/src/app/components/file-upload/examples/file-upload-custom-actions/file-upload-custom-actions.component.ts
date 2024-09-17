import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PrizmFilesProgress } from '@prizm-ui/components';
import { PrizmIconsEnum } from '@prizm-ui/icons/full';
import { getMultiMockFiles } from '../../files.utils';

@Component({
  selector: 'prizm-file-upload-custom-actions',
  templateUrl: './file-upload-custom-actions.component.html',
  styleUrl: './file-upload-custom-actions.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmFileUploadCustomActionsComponent {
  actions = signal<PrizmFilesProgress>({});
  files = signal<File[]>([]);

  constructor() {
    getMultiMockFiles().then(files => {
      this.files.set(files);
    });
  }

  public onActionEvent(event): void {
    console.log(event);
  }

  public addedActions(): void {
    this.actions.set({
      '1.jpeg': {
        actions: [
          { event: 'event1.1', icon: PrizmIconsEnum.PLAY },
          { event: 'event1.2', icon: PrizmIconsEnum.PAUSE },
          { event: 'event1.3', icon: PrizmIconsEnum.REPLAY },
        ],
      },
      '2.jpeg': {
        actions: [{ event: 'event2', icon: PrizmIconsEnum.PAUSE }],
      },
      '3.jpeg': {
        actions: [
          { event: 'event3', icon: PrizmIconsEnum.REPLAY, disabled: true },
          { event: 'event3', icon: PrizmIconsEnum.REPLAY },
        ],
      },
    });
  }
}
