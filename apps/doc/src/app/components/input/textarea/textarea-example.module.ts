import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';

import { TextareaBasicExampleComponent } from './examples/textarea-basic-example/textarea-basic-example.component';
import { TextareaExampleComponent } from './textarea-example.component';
import { PrizmInputTextModule } from '@prizm-ui/components';
import { TextareAautosizeExampleComponent } from './examples/textarea-autosize-example/textarea-autosize-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TextareaExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PrizmInputTextModule,
  ],
  declarations: [TextareaExampleComponent, TextareaBasicExampleComponent, TextareAautosizeExampleComponent],
  exports: [TextareaExampleComponent],
})
export class TextareaExampleModule {}
