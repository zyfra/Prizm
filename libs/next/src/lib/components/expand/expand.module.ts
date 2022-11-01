import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PzmExpandComponent } from './expand.component';
import { PzmExpandContentDirective } from './expand-content.directive';
import { PzmLoaderModule } from '../loader';

@NgModule({
    imports: [CommonModule, PzmLoaderModule],
    declarations: [PzmExpandComponent, PzmExpandContentDirective],
    exports: [PzmExpandComponent, PzmExpandContentDirective],
})
export class PzmExpandModule {}
