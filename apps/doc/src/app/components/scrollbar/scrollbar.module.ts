import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ScrollbarComponent } from './scrollbar.component';
import { PzmScrollbarModule } from '@digital-plant/zui-components';
import { ZuiScrollbarBaseExampleComponent } from './examples/base/scrollbar-base-example.component';
import { ZuiScrollbarHorizontalExampleComponent } from './examples/horizontal/scrollbar-horizontal-example.component';
import { ZuiScrollbarHiddenExampleComponent } from './examples/hidden/scrollbar-hidden-example.component';
import { ZuiScrollbarVisibleExampleComponent } from './examples/visible/scrollbar-visible-example.component';
import { ZuiScrollbarAllExampleComponent } from './examples/all/scrollbar-all-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmScrollbarModule,
    RouterModule.forChild(generateRoutes(ScrollbarComponent)),
  ],
  declarations: [
    ZuiScrollbarBaseExampleComponent,
    ZuiScrollbarHorizontalExampleComponent,
    ZuiScrollbarHiddenExampleComponent,
    ZuiScrollbarVisibleExampleComponent,
    ZuiScrollbarAllExampleComponent,
    ScrollbarComponent
  ],
  exports: [ScrollbarComponent],
})
export class ScrollbarModule {}
