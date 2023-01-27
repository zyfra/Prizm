import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResizeObserverModule } from '@ng-web-apis/resize-observer';
import { PrizmSplitterAreaComponent } from './splitter-area.component';
import { PrizmSplitterGutterComponent } from './splitter-gutter.component';

import { PrizmSplitterComponent } from './splitter.component';

@NgModule({
  imports: [CommonModule, ResizeObserverModule],
  declarations: [PrizmSplitterComponent, PrizmSplitterAreaComponent, PrizmSplitterGutterComponent],
  exports: [PrizmSplitterComponent, PrizmSplitterAreaComponent],
})
export class PrizmSplitterModule {}
