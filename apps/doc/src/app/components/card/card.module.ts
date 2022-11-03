import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { PzmCardBaseExampleComponent } from './examples/base/card-base-example.component';
import { PzmCardModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmCardModule,
    RouterModule.forChild(generateRoutes(CardComponent)),
  ],
  declarations: [
    PzmCardBaseExampleComponent,
    CardComponent,
  ],
  exports: [CardComponent],
})
export class CardModule {}
