import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ComboboxExampleComponent } from './combobox-example.component';
import {
  PolymorphModule,
  PrizmButtonComponent,
  PrizmComboboxModule,
  PrizmLoaderComponent,
  PrizmScrollbarModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmComboboxWithTemplateExampleComponent } from './examples/with-template/combobox-with-template-example.component';
import { PrizmComboboxBaseExampleComponent } from './examples/base/combobox-base-example.component';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmComboboxWithObjectExampleComponent } from './examples/with-object/combobox-with-object-example.component';
import { PrizmComboboxWithBackendSearchExampleComponent } from './examples/with-backend-search/combobox-with-backend-search-example.component';
import { PrizmComboboxFullWidthExampleComponent } from './examples/full-width/combobox-full-width-example.component';
import { PrizmComboboxValidatorsExampleComponent } from './examples/validators/combobox-validators-example.component';
import { PrizmComboboxStringifyExampleComponent } from './examples/stringify/combobox-stringify-example.component';
import { PrizmComboboxWithTransformerExampleComponent } from './examples/with-transformer/combobox-with-transformer-example.component';
import { PrizmComboboxWithListItemTemplateExampleComponent } from './examples/with-list-item-template/combobox-with-list-item-template-example.component';
import { PrizmComboboxAsyncExampleComponent } from './examples/async/combobox-async-example.component';
import { PrizmComboboxVirtualScrollExampleComponent } from './examples/virtual-scroll/combobox-virtual-scroll-example.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import { PrizmComboboxMissingValueHandlerExampleComponent } from './examples/missing-value-handler/combobox-missing-value-handler-example.component';
import { PrizmComboboxAutocompleteModeExampleComponent } from './examples/autocomplete-mode/combobox-autocomplete-mode-example.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmLetDirective,
    PrizmScrollbarModule,
    PrizmButtonComponent,
    PrizmComboboxModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ComboboxExampleComponent)),
    PrizmIconsFullComponent,
    PrizmIfLanguageDirective,
    PrizmLoaderComponent,
  ],
  declarations: [
    PrizmComboboxAutocompleteModeExampleComponent,
    PrizmComboboxAsyncExampleComponent,
    PrizmComboboxWithTransformerExampleComponent,
    PrizmComboboxFullWidthExampleComponent,
    PrizmComboboxValidatorsExampleComponent,
    PrizmComboboxBaseExampleComponent,
    PrizmComboboxWithBackendSearchExampleComponent,
    PrizmComboboxStringifyExampleComponent,
    PrizmComboboxWithObjectExampleComponent,
    PrizmComboboxWithTemplateExampleComponent,
    PrizmComboboxWithListItemTemplateExampleComponent,
    ComboboxExampleComponent,
    PrizmComboboxVirtualScrollExampleComponent,
    PrizmComboboxMissingValueHandlerExampleComponent,
  ],
  exports: [ComboboxExampleComponent],
})
export class ComboboxExampleModule {}
