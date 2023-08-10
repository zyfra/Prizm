import { NgModule } from '@angular/core';
import { PrizmOverlayModule } from '../../../modules/overlay';
import { PolymorphModule, PrizmAutoFocusModule, PrizmLifecycleModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmDataListModule } from '../../data-list';
import { PrizmDropdownHostModule } from '../dropdown-host';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmDropdownControllerModule } from '../../../directives/dropdown-controller';
import { PrizmChipsModule } from '../../chips';
import { PrizmInputTextModule } from '../../input/input-text/input-text.module';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmHintModule } from '../../../directives/hint';
import { PrizmCheckboxModule } from '../../checkbox';
import { PrizmIconModule } from '../../icon';
import { PrizmInputMultiSelectComponent } from './input-multi-select.component';
import {PrizmInputTreeMultiselectComponent} from "./input-tree-multiselect/input-tree-multiselect.component";
import {PrizmTreeModule} from "../../tree";
import {PrizmMapperPipeModule} from "../../../pipes";

@NgModule({
  imports: [
    PrizmOverlayModule,
    PolymorphModule,
    PrizmInputTextModule,
    PrizmChipsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrizmLetModule,
    PrizmHintModule,
    PrizmIconModule,
    PrizmCallFuncModule,
    PrizmAutoFocusModule,
    PrizmScrollbarModule,
    PrizmDropdownControllerModule,
    PrizmDataListModule,
    PrizmCheckboxModule,
    PrizmLifecycleModule,
    PrizmDropdownHostModule,
    PrizmTreeModule,
    PrizmMapperPipeModule,
  ],
  declarations: [PrizmInputMultiSelectComponent, PrizmInputTreeMultiselectComponent],
  exports: [PrizmInputMultiSelectComponent, PrizmInputTreeMultiselectComponent, PrizmInputTextModule],
})
export class PrizmInputMultiSelectModule {}
