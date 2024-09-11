import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';
import { LogoComponent } from './logo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrizmButtonComponent, PrizmDialogComponent, PrizmToggleComponent } from '@prizm-ui/components';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { ThemeTokenChangerComponent } from '../theme-token-changer/theme-token-changer.component';
import { PrizmIconsSvgComponent } from '../icons-svg';

@NgModule({
  imports: [
    PrizmLetDirective,
    TuiLinkModule,
    PrizmButtonComponent,
    CommonModule,
    RouterModule,
    PrizmDialogComponent,
    ThemeTokenChangerComponent,
    FormsModule,
    PrizmIconsSvgComponent,
    PrizmToggleComponent,
  ],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class PrizmDocLogoModule {}
