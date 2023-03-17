import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResizeObserverModule } from '@ng-web-apis/resize-observer';
import { PrizmSplitterAreaComponent } from './area/area.component';
import { PrizmSplitterGutterDefaultComponent } from './gutter/gutter-default.component';
import { PrizmSplitterGutterComponent } from './gutter/gutter.component';

import { PrizmSplitterComponent } from './splitter.component';

@NgModule({
  imports: [CommonModule, ResizeObserverModule],
  declarations: [
    PrizmSplitterComponent,
    PrizmSplitterAreaComponent,
    PrizmSplitterGutterComponent,
    PrizmSplitterGutterDefaultComponent,
  ],
  exports: [
    PrizmSplitterComponent,
    PrizmSplitterAreaComponent,
    PrizmSplitterGutterComponent,
    PrizmSplitterGutterDefaultComponent,
  ],
})
export class PrizmSplitterModule {}
