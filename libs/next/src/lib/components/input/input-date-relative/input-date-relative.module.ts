import { NgModule } from '@angular/core';
import { PrizmInputDateRelativeComponent } from './input-date-relative.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrizmInputDateRelativeComponent
  ],
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmInputTextModule,
    PrizmIconModule,
    ReactiveFormsModule,
    PrizmDropdownHostModule,
  ],
  exports: [
    PrizmInputDateRelativeComponent
  ],
})
export class PrizmInputDateRelativeModule {}
