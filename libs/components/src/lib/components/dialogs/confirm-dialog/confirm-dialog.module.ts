import { NgModule } from '@angular/core';
import { PrizmDialogConfirmComponent } from './confirm-dialog.component';

/**
 * @deprecated
 * use standalone component instead
 * */
@NgModule({
  imports: [PrizmDialogConfirmComponent],
  exports: [PrizmDialogConfirmComponent],
})
export class PrizmConfirmDialogModule {}
