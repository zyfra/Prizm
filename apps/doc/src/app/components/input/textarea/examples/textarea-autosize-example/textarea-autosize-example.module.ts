import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmAddonDocModule } from '@prizm-ui/doc';
import { PrizmAutoResizeModule, PrizmInputTextModule } from '@prizm-ui/components';
import { TextareAautosizeExampleComponent } from './textarea-autosize-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    ReactiveFormsModule,
    FormsModule,
    PrizmInputTextModule,
    PrizmAutoResizeModule,
  ],
  declarations: [TextareAautosizeExampleComponent],
  exports: [TextareAautosizeExampleComponent],
})
export class TextareaAutosizeExampleModule {}
