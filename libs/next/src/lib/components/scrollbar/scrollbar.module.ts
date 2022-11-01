import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmScrollRefDirective } from './scroll-ref.directive';
import { PzmScrollbarComponent } from './scrollbar.component';
import { PzmScrollableDirective } from './scrollable.directive';
import { PzmScrollControlsModule } from './scroll-controls.module';

@NgModule({
    imports: [CommonModule, PzmScrollControlsModule],
    declarations: [PzmScrollbarComponent, PzmScrollRefDirective, PzmScrollableDirective],
    exports: [PzmScrollbarComponent, PzmScrollRefDirective, PzmScrollableDirective],
})
export class PzmScrollbarModule {}
