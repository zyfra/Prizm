import { AbstractZuiDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { ZuiDialogComponent } from './dialog.component';
import { PzmOverlayInsidePlacement } from '../../../modules/overlay';
import { ZuiDialogOptions } from './dialog.models';

const DEFAULT_OPTIONS: ZuiDialogOptions = {
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
export class ZuiDialogService extends AbstractZuiDialogService<ZuiDialogOptions> {
  protected readonly component = ZuiDialogComponent;
  protected readonly defaultOptions: ZuiDialogOptions = DEFAULT_OPTIONS;
}
