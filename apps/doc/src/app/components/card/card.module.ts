import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { PrizmCardBaseExampleComponent } from './examples/base/card-base-example.component';
import { PrizmCardComponent } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmCardComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(CardComponent)),
  ],
  declarations: [PrizmCardBaseExampleComponent, CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
