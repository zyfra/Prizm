import { NgModule } from '@angular/core';
import { ZuiInputDateRelativeComponent } from './input-date-relative.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { ZuiInputTextModule } from '../input-text/input-text.module';
import { ZuiIconModule } from '../../icon/icon.module';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ZuiInputDateRelativeComponent
  ],
  imports: [
    CommonModule,
    PolymorphModule,
    ZuiInputTextModule,
    ZuiIconModule,
    ReactiveFormsModule,
    ZuiDropdownHostModule,
  ],
  exports: [
    ZuiInputDateRelativeComponent
  ],
})
export class ZuiInputDateRelativeModule {}
