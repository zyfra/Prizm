import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { SplitButtonComponent } from './split-button.component';
import { PzmButtonModule } from '@digital-plant/zui-components';
import { PzmSplitButtonsExampleComponent } from './examples/split/split-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmButtonModule,
    RouterModule.forChild(generateRoutes(SplitButtonComponent)),
  ],
  declarations: [
    PzmSplitButtonsExampleComponent,
    SplitButtonComponent
  ],
  exports: [SplitButtonComponent],
})
export class SplitButtonModule {}
