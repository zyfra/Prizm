import { NgModule } from '@angular/core';

import { PrizmFileUploadComponent } from './file-upload.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmFileUploadComponent],
  exports: [PrizmFileUploadComponent],
})
export class PrizmFileUploadModule {}
