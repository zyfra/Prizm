import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiInputDateMultiComponent } from './input-date-multi.component';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ZuiInputTextModule } from '../input-text/input-text.module';
import { PolymorphModule, ZuiLifecycleModule } from '../../../directives';
import { ZuiDataListModule } from '../../data-list';

@NgModule({
    imports: [
      CommonModule,
      ZuiInputTextModule,
      ZuiLifecycleModule,
      ReactiveFormsModule,
      ZuiDataListModule,
      PolymorphModule,
      ZuiDropdownHostModule
    ],
    declarations: [ZuiInputDateMultiComponent],
    exports: [ZuiInputDateMultiComponent],
})
export class ZuiInputDateMultiModule {}
