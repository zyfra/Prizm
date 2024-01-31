import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiAlertModule, TuiDialogModule, TuiRootModule, TuiThemeNightModule } from '@taiga-ui/core';
import { TuiToggleModule } from '@taiga-ui/kit';
import { PrizmDocHeaderModule } from '../../internal/header/header.module';
import { PrizmDocNavigationModule } from '../navigation/navigation.module';
import { PrizmDocMainComponent } from './main.component';
import { PrizmLifecycleDirective } from '@prizm-ui/components';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PrizmLifecycleDirective,
    PrizmThemeModule,
    TuiToggleModule,
    TuiThemeNightModule,
    PrizmDocHeaderModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    PrizmDocNavigationModule,
  ],
  declarations: [PrizmDocMainComponent],
  exports: [PrizmDocMainComponent],
})
export class PrizmDocMainModule {}
