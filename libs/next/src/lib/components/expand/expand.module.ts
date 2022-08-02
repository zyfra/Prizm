import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZuiExpandComponent } from './expand.component';
import { ZuiExpandContentDirective } from './expand-content.directive';
import { ZuiLoaderModule } from '../loader';

@NgModule({
    imports: [CommonModule, ZuiLoaderModule],
    declarations: [ZuiExpandComponent, ZuiExpandContentDirective],
    exports: [ZuiExpandComponent, ZuiExpandContentDirective],
})
export class ZuiExpandModule {}
