import { Injectable } from '@angular/core';
import { PRIZM_DIALOG_DEFAULT_OPTIONS, PrizmDialogOptions, PrizmDialogService } from '@prizm-ui/components';

@Injectable()
export class MyDialogService extends PrizmDialogService {
  protected override readonly defaultOptions = {
    ...PRIZM_DIALOG_DEFAULT_OPTIONS,
    backdrop: true,
  } as PrizmDialogOptions;
}
