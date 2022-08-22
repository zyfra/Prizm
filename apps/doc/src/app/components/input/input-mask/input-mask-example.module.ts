import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';


import { InputMaskExampleComponent } from './input-mask-example.component';
import { InputMaskBasicExampleComponent } from './examples/input-mask-basic-example/input-mask-basic-example.component';
import { InputPhoneExampleComponent } from './examples/input-phone-example/input-phone-example.component';
import { ZuiInputTextModule } from '@digital-plant/zui-components';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InputMaskExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    ZuiInputTextModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [InputMaskExampleComponent, InputMaskBasicExampleComponent, InputPhoneExampleComponent],
  exports: [InputMaskExampleComponent],
})
export class InputMaskExampleModule {}

