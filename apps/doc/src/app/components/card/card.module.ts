import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { ZuiCardBaseExampleComponent } from './examples/base/card-base-example.component';
import { ZuiCardModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiCardModule,
    RouterModule.forChild(generateRoutes(CardComponent)),
  ],
  declarations: [
    ZuiCardBaseExampleComponent,
    CardComponent,
  ],
  exports: [CardComponent],
})
export class CardModule {}
