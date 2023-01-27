import { NgModule } from '@angular/core';
import { PrizmThemeDirective } from './theme.directive';

@NgModule({
  declarations: [PrizmThemeDirective],
  exports: [PrizmThemeDirective],
})
export class PrizmThemeModule {}
