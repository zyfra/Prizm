import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { PrizmCardBaseExampleComponent } from './examples/base/card-base-example.component';
import { PrizmCardModule } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmCardModule,
    RouterModule.forChild(generateRoutes(CardComponent)),
  ],
  declarations: [
    PrizmCardBaseExampleComponent,
    CardComponent,
  ],
  exports: [CardComponent],
})
export class CardModule {}
