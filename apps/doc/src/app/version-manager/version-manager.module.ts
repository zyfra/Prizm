import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiSelectModule, TuiStringifyContentPipeModule, TuiStringifyPipeModule } from '@taiga-ui/kit';

import { VersionManagerComponent } from './version-manager.component';
import { PrizmButtonComponent } from '@prizm-ui/components';
import { PrizmLetDirective } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    PrizmLetDirective,
    PrizmButtonComponent,
    FormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiTextfieldControllerModule,
    TuiStringifyPipeModule,
    TuiStringifyContentPipeModule,
  ],
  declarations: [VersionManagerComponent],
  exports: [VersionManagerComponent],
})
export class VersionManagerModule {}
