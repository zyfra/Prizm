import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmButtonModule, PrizmConfirmDialogModule } from '@prizm-ui/components';
import { PrizmDialogFullExampleComponent } from './full.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmButtonModule,
    PrizmConfirmDialogModule
  ],
  declarations: [PrizmDialogFullExampleComponent],
  exports: [PrizmDialogFullExampleComponent],
})
export class FullExampleModule {}
