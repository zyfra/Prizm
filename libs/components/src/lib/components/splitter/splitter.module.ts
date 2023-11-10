import { NgModule } from '@angular/core';
import { PrizmSplitterAreaComponent } from './area/area.component';
import { PrizmSplitterGutterDefaultComponent } from './gutter/gutter-default.component';
import { PrizmSplitterGutterComponent } from './gutter/gutter.component';

import { PrizmSplitterComponent } from './splitter.component';
import { PrizmSplitterCustomGutterDirective } from './custom-gutter.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [
    PrizmSplitterComponent,
    PrizmSplitterAreaComponent,
    PrizmSplitterGutterComponent,
    PrizmSplitterGutterDefaultComponent,
    PrizmSplitterCustomGutterDirective,
  ],
  exports: [PrizmSplitterComponent, PrizmSplitterAreaComponent, PrizmSplitterCustomGutterDirective],
})
export class PrizmSplitterModule {}
