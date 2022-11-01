import { AbstractPzmDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { PzmDialogComponent } from './dialog.component';
import { PzmOverlayInsidePlacement } from '../../../modules/overlay';
import { PzmDialogOptions } from './dialog.models';

const DEFAULT_OPTIONS: PzmDialogOptions = {
  size: 'm',
  required: false,
  closeable: true,
  content: '',
  footer: '',
  position: PzmOverlayInsidePlacement.CENTER,
  dismissible: true,
  header: '',
} as const;

@Injectable({
  providedIn: 'root',
})
export class PzmDialogService extends AbstractPzmDialogService<PzmDialogOptions> {
  protected readonly component = PzmDialogComponent;
  protected readonly defaultOptions: PzmDialogOptions = DEFAULT_OPTIONS;
}
