import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrizmSanitizerPipeModule } from '@prizm-ui/helpers';
import { PrizmButtonModule } from '../button/button.module';
import { PrizmIconModule } from '../icon/icon.module';
import { PrizmProgressModule } from '../progress/progress.module';

import { PrizmFileUploadComponent } from './file-upload.component';

@NgModule({
  imports: [CommonModule, PrizmSanitizerPipeModule, PrizmButtonModule, PrizmProgressModule, PrizmIconModule],
  declarations: [PrizmFileUploadComponent],
  exports: [PrizmFileUploadComponent],
})
export class PrizmFileUploadModule {}
