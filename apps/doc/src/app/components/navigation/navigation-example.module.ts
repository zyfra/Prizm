import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationExampleComponent } from './navigation-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PrizmButtonComponent,
  PrizmHeaderModule,
  PrizmNavigationModule,
  PrizmScrollbarModule,
} from '@prizm-ui/components';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { NavigationBasicExampleModule } from './examples/navigation-basic-example/navigation-basic-example.module';

@NgModule({
  declarations: [NavigationExampleComponent],
  imports: [
    CommonModule,
    PrizmNavigationModule,
    PrizmScrollbarModule,
    PrizmHeaderModule,
    PrizmButtonComponent,
    PrizmThemeModule,
    PrizmAddonDocModule,
    NavigationBasicExampleModule,
    RouterModule.forChild(prizmDocGenerateRoutes(NavigationExampleComponent)),
  ],
})
export class NavigationExampleModule {}
