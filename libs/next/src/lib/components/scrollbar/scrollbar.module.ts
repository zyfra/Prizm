import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiScrollRefDirective } from './scroll-ref.directive';
import { ZuiScrollbarComponent } from './scrollbar.component';
import { ZuiScrollableDirective } from './scrollable.directive';
import { ZuiScrollControlsModule } from './scroll-controls.module';

@NgModule({
    imports: [CommonModule, ZuiScrollControlsModule],
    declarations: [ZuiScrollbarComponent, ZuiScrollRefDirective, ZuiScrollableDirective],
    exports: [ZuiScrollbarComponent, ZuiScrollRefDirective, ZuiScrollableDirective],
})
export class ZuiScrollbarModule {}
