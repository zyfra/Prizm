import { NgModule } from '@angular/core';
import { ZuiInputDateRelativeComponent } from './input-date-relative.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmIconModule } from '../../icon/icon.module';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ZuiInputDateRelativeComponent
  ],
  imports: [
    CommonModule,
    PolymorphModule,
    PzmInputTextModule,
    PzmIconModule,
    ReactiveFormsModule,
    ZuiDropdownHostModule,
  ],
  exports: [
    ZuiInputDateRelativeComponent
  ],
})
export class ZuiInputDateRelativeModule {}
