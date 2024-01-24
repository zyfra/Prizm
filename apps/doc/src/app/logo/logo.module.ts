import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';
import { LogoComponent } from './logo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrizmIconsSvgComponent } from '@prizm-ui/icons';
import {
  PrizmButtonComponent,
  PrizmDialogComponent,
  PrizmDialogModule,
  PrizmToggleComponent,
} from '@prizm-ui/components';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { ThemeTokenChangerComponent } from '../theme-token-changer/theme-token-changer.component';

@NgModule({
  imports: [
    PrizmLetDirective,
    TuiLinkModule,
    PrizmButtonComponent,
    CommonModule,
    RouterModule,
    PrizmDialogModule,
    ThemeTokenChangerComponent,
    FormsModule,
    PrizmIconsSvgComponent,
    PrizmToggleComponent,
  ],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class PrizmDocLogoModule {}
