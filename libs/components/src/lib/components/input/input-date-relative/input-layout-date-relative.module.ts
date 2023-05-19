import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateRelativeComponent } from './input-layout-date-relative.component';
import { PrizmInputTextModule } from '../input-text';
import { PrizmInputLayoutDateRelativeDirective } from './input-layout-date-relative.directive';
import { PrizmPluckPipeModule } from '@prizm-ui/helpers';
import { PrizmLifecycleModule } from '../../../directives';

@NgModule({
  declarations: [PrizmInputLayoutDateRelativeComponent, PrizmInputLayoutDateRelativeDirective],
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmLifecycleModule,
    FormsModule,
    PrizmInputTextModule,
    PrizmPluckPipeModule,
    PrizmIconModule,
    ReactiveFormsModule,
    PrizmDropdownHostModule,
  ],
  exports: [
    PrizmInputLayoutDateRelativeComponent,
    PrizmInputLayoutDateRelativeDirective,
    PrizmInputTextModule,
  ],
})
export class PrizmInputLayoutDateRelativeModule {}
