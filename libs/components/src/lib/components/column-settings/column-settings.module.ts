import { NgModule } from '@angular/core';
import { PrizmColumnSettingsComponent } from './column-settings.component';
import { PrizmColumnDropListComponent } from './components/column-drop-list/column-drop-list.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmColumnSettingsComponent, PrizmColumnDropListComponent],
  exports: [PrizmColumnSettingsComponent],
})
export class PrizmColumnSettingsModule {}
