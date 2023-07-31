import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';

import { TextareaBasicExampleComponent } from './examples/textarea-basic-example/textarea-basic-example.component';
import { TextareaExampleComponent } from './textarea-example.component';
import { PrizmInputTextModule } from '@prizm-ui/components';
import { TextareaAutosizeExampleModule } from './examples/textarea-autosize-example/textarea-autosize-example.module';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TextareaExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PrizmInputTextModule,
    TextareaAutosizeExampleModule,
  ],
  declarations: [TextareaExampleComponent, TextareaBasicExampleComponent],
  exports: [TextareaExampleComponent],
})
export class TextareaExampleModule {}
