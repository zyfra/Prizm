import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmInputDateMultiComponent } from './input-date-multi.component';
import { PzmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PolymorphModule, PzmLifecycleModule } from '../../../directives';
import { PzmDataListModule } from '../../data-list';

@NgModule({
    imports: [
      CommonModule,
      PzmInputTextModule,
      PzmLifecycleModule,
      ReactiveFormsModule,
      PzmDataListModule,
      PolymorphModule,
      PzmDropdownHostModule
    ],
    declarations: [PzmInputDateMultiComponent],
    exports: [PzmInputDateMultiComponent],
})
export class PzmInputDateMultiModule {}
