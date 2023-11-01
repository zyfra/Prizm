import { NgModule } from '@angular/core';
import { PrizmSidebarComponent } from './sidebar.component';

/**
 * @deprecated
 * use standalone component instead
 * */
@NgModule({
  imports: [PrizmSidebarComponent],
  exports: [PrizmSidebarComponent],
})
export class PrizmSidebarModule {}
