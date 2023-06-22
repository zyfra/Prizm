import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmSplitterAreaComponent } from './area/area.component';
import { PrizmSplitterGutterDefaultComponent } from './gutter/gutter-default.component';
import { PrizmSplitterGutterComponent } from './gutter/gutter.component';

import { PrizmSplitterComponent } from './splitter.component';
import { ResizeObserverModule } from '@ng-web-apis/resize-observer';
import { PrizmSplitterCustomGutterDirective } from './custom-gutter.directive';

@NgModule({
  imports: [CommonModule, ResizeObserverModule],
  declarations: [
    PrizmSplitterComponent,
    PrizmSplitterAreaComponent,
    PrizmSplitterGutterComponent,
    PrizmSplitterGutterDefaultComponent,
    PrizmSplitterCustomGutterDirective,
  ],
  exports: [PrizmSplitterComponent, PrizmSplitterAreaComponent, PrizmSplitterCustomGutterDirective],
})
export class PrizmSplitterModule {}
