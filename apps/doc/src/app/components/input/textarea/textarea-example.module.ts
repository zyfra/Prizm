import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';

import { TextareaBasicExampleComponent } from './examples/textarea-basic-example/textarea-basic-example.component';
import { TextareaExampleComponent } from './textarea-example.component';
import { ZuiInputTextModule } from '@digital-plant/zui-components';
import { TextareAautosizeExampleComponent } from './examples/textarea-autosize-example/textarea-autosize-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(TextareaExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    ZuiInputTextModule,
  ],
  declarations: [TextareaExampleComponent, TextareaBasicExampleComponent, TextareAautosizeExampleComponent],
  exports: [TextareaExampleComponent],
})
export class TextareaExampleModule {}

