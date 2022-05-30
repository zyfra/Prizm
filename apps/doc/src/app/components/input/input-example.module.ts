import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputModule } from '@digital-plant/zyfra-components';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InputComponent)),
    InputModule,
  ],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputExampleModule {}
