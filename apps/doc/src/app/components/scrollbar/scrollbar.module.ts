import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ScrollbarComponent } from './scrollbar.component';
import { PzmScrollbarModule } from '@digital-plant/zui-components';
import { PzmScrollbarBaseExampleComponent } from './examples/base/scrollbar-base-example.component';
import { PzmScrollbarHorizontalExampleComponent } from './examples/horizontal/scrollbar-horizontal-example.component';
import { PzmScrollbarHiddenExampleComponent } from './examples/hidden/scrollbar-hidden-example.component';
import { PzmScrollbarVisibleExampleComponent } from './examples/visible/scrollbar-visible-example.component';
import { PzmScrollbarAllExampleComponent } from './examples/all/scrollbar-all-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmScrollbarModule,
    RouterModule.forChild(generateRoutes(ScrollbarComponent)),
  ],
  declarations: [
    PzmScrollbarBaseExampleComponent,
    PzmScrollbarHorizontalExampleComponent,
    PzmScrollbarHiddenExampleComponent,
    PzmScrollbarVisibleExampleComponent,
    PzmScrollbarAllExampleComponent,
    ScrollbarComponent
  ],
  exports: [ScrollbarComponent],
})
export class ScrollbarModule {}
