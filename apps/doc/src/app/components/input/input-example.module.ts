import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputExampleModule {}
