import { NgModule } from '@angular/core';
import { PrizmThemeDirective } from './theme.directive';
import { PrizmThemeInvertedDirective } from './theme-inverted.directive';

@NgModule({
  declarations: [PrizmThemeDirective, PrizmThemeInvertedDirective],
  exports: [PrizmThemeDirective, PrizmThemeInvertedDirective],
})
export class PrizmThemeModule {}
