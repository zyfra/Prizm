import { NgModule } from '@angular/core';
import { PzmInputDateRelativeComponent } from './input-date-relative.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmIconModule } from '../../icon/icon.module';
import { PzmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PzmInputDateRelativeComponent
  ],
  imports: [
    CommonModule,
    PolymorphModule,
    PzmInputTextModule,
    PzmIconModule,
    ReactiveFormsModule,
    PzmDropdownHostModule,
  ],
  exports: [
    PzmInputDateRelativeComponent
  ],
})
export class PzmInputDateRelativeModule {}
