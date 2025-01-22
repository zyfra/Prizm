import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { PrizmCardBaseExampleComponent } from './examples/base/card-base-example.component';
import { PrizmCardComponent } from '@prizm-ui/components';
import { PrizmCardShadowProviderExampleComponent } from './examples/shadow-provider/card-shadow-provider-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmCardComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(CardComponent)),
  ],
  declarations: [PrizmCardBaseExampleComponent, CardComponent, PrizmCardShadowProviderExampleComponent],
  exports: [CardComponent],
})
export class CardModule {}
