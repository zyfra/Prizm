import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZuiExpandComponent } from './expand.component';
import { ZuiExpandContentDirective } from './expand-content.directive';
import { PzmLoaderModule } from '../loader';

@NgModule({
    imports: [CommonModule, PzmLoaderModule],
    declarations: [ZuiExpandComponent, ZuiExpandContentDirective],
    exports: [ZuiExpandComponent, ZuiExpandContentDirective],
})
export class ZuiExpandModule {}
