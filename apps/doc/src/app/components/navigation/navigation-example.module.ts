import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationExampleComponent } from './navigation-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PrizmButtonModule,
  PrizmHeaderModule,
  PrizmIconModule,
  PrizmNavigationModule,
  PrizmScrollbarModule,
} from '@prizm-ui/components';
import { NavigationBasicExampleComponent } from './examples/navigation-basic-example/navigation-basic-example.component';

@NgModule({
  declarations: [NavigationExampleComponent, NavigationBasicExampleComponent],
  imports: [
    CommonModule,
    PrizmNavigationModule,
    PrizmScrollbarModule,
    PrizmHeaderModule,
    PrizmButtonModule,
    PrizmAddonDocModule,
    PrizmIconModule,
    RouterModule.forChild(prizmDocGenerateRoutes(NavigationExampleComponent)),
  ],
})
export class NavigationExampleModule {}

