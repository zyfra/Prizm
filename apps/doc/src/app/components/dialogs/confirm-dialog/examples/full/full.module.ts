import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmButtonComponent, PrizmDialogConfirmComponent } from '@prizm-ui/components';
import { PrizmDialogFullExampleComponent } from './full.component';

@NgModule({
  imports: [CommonModule, PrizmButtonComponent, PrizmDialogConfirmComponent],
  declarations: [PrizmDialogFullExampleComponent],
  exports: [PrizmDialogFullExampleComponent],
})
export class FullExampleModule {}
