import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';
import { LogoComponent } from './logo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrizmIconsSvgComponent } from '@prizm-ui/icons';
import { PrizmToggleModule } from '@prizm-ui/components';
import { PrizmLetDirective } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    PrizmLetDirective,
    TuiLinkModule,
    CommonModule,
    RouterModule,
    FormsModule,
    PrizmIconsSvgComponent,
    PrizmToggleModule,
  ],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class PrizmDocLogoModule {}
