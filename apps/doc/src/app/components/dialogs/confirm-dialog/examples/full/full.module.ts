import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmButtonModule, PrizmDialogConfirmComponent } from '@prizm-ui/components';
import { PrizmDialogFullExampleComponent } from './full.component';

@NgModule({
  imports: [CommonModule, PrizmButtonModule, PrizmDialogConfirmComponent],
  declarations: [PrizmDialogFullExampleComponent],
  exports: [PrizmDialogFullExampleComponent],
})
export class FullExampleModule {}
