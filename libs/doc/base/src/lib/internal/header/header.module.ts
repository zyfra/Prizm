import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/core';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

import { PrizmDocNavigationModule } from '../../components/navigation/navigation.module';
import { PrizmDocHeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    PolymorpheusModule,
    TuiButtonModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    PrizmDocNavigationModule,
  ],
  declarations: [PrizmDocHeaderComponent],
  exports: [PrizmDocHeaderComponent],
})
export class PrizmDocHeaderModule {}
