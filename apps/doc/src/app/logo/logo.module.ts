import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';
import { LogoComponent } from './logo.component';
import { PrizmToggleModule } from '@prizm-ui/components';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [TuiLinkModule, CommonModule, RouterModule, FormsModule, PrizmToggleModule],
    declarations: [LogoComponent],
    exports: [LogoComponent],
})
export class PrizmDocLogoModule {}
