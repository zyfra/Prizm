import { NgModule } from '@angular/core';
import { NavigationBasicExampleComponent } from './navigation-basic-example.component';
import { CommonModule } from '@angular/common';
import {
  PrizmButtonComponent,
  PrizmHeaderModule,
  PrizmNavigationModule,
  PrizmScrollbarModule,
} from '@prizm-ui/components';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmAddonDocModule } from '@prizm-ui/doc';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@NgModule({
  declarations: [NavigationBasicExampleComponent],
  imports: [
    CommonModule,
    PrizmThemeModule,
    PrizmNavigationModule,
    PrizmScrollbarModule,
    PrizmHeaderModule,
    PrizmButtonComponent,
    PrizmAddonDocModule,
    PrizmIconsFullComponent,
  ],
  exports: [NavigationBasicExampleComponent],
})
export class NavigationBasicExampleModule {}
