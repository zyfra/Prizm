import { NgModule } from '@angular/core';
import { PrizmThemeDirective } from './theme.directive';
import { PrizmThemeInvertedDirective } from './theme-inverted.directive';
import { PrizmThemeInvertedValuesDirective } from './theme-inverted-values.directive';

@NgModule({
  declarations: [PrizmThemeDirective, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesDirective],
  exports: [PrizmThemeDirective, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesDirective],
})
export class PrizmThemeModule {}
