import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiTabsModule } from '@taiga-ui/kit';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { PrizmDocCodeModule } from '../code/code.module';
import { TuiDocCopyModule } from '../copy/copy.module';
import { PrizmDocExampleComponent } from './example.component';
import { PrizmDocExampleCapitalizePipe } from './example-capitalize.pipe';
import { PrizmDocExampleGetTabsPipe } from './example-get-tabs.pipe';
import { TuiMapperPipeModule } from '@taiga-ui/cdk';
import {
  PrizmButtonComponent,
  PrizmDataListModule,
  PrizmDropdownControllerDirective,
  PrizmDropdownHostModule,
  PrizmSwitcherComponent,
} from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    ClipboardModule,
    PrizmSwitcherComponent,
    TuiTabsModule,
    TuiButtonModule,
    TuiMapperPipeModule,
    TuiDocCopyModule,
    PrizmDocCodeModule,
    PolymorpheusModule,
    PrizmButtonComponent,
    PrizmDropdownHostModule,
    PrizmDataListModule,
    PrizmDropdownControllerDirective,
  ],
  declarations: [PrizmDocExampleComponent, PrizmDocExampleGetTabsPipe, PrizmDocExampleCapitalizePipe],
  exports: [PrizmDocExampleComponent, PrizmDocExampleGetTabsPipe, PrizmDocExampleCapitalizePipe],
})
export class PrizmDocExampleModule {}
