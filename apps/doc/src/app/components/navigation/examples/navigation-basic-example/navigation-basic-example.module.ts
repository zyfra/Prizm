import { NgModule } from '@angular/core';
import { NavigationBasicExampleComponent } from './navigation-basic-example.component';
import { CommonModule } from '@angular/common';
import {
  PrizmButtonModule,
  PrizmHeaderModule,
  PrizmIconModule,
  PrizmNavigationModule,
  PrizmScrollbarModule,
} from '@prizm-ui/components';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmAddonDocModule } from '@prizm-ui/doc';

@NgModule({
  declarations: [NavigationBasicExampleComponent],
  imports: [
    CommonModule,
    PrizmThemeModule,
    PrizmNavigationModule,
    PrizmScrollbarModule,
    PrizmHeaderModule,
    PrizmButtonModule,
    PrizmAddonDocModule,
    PrizmIconModule,
  ],
  exports: [NavigationBasicExampleComponent],
})
export class NavigationBasicExampleModule {}
