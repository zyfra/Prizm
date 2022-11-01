import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiInputDateMultiComponent } from './input-date-multi.component';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PolymorphModule, PzmLifecycleModule } from '../../../directives';
import { ZuiDataListModule } from '../../data-list';

@NgModule({
    imports: [
      CommonModule,
      PzmInputTextModule,
      PzmLifecycleModule,
      ReactiveFormsModule,
      ZuiDataListModule,
      PolymorphModule,
      ZuiDropdownHostModule
    ],
    declarations: [ZuiInputDateMultiComponent],
    exports: [ZuiInputDateMultiComponent],
})
export class ZuiInputDateMultiModule {}
