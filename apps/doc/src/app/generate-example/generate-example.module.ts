import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { GenerateExampleComponent } from './generate-example.component';
import { ZyfraButtonModule } from '@digital-plant/zyfra-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZyfraButtonModule,
    RouterModule.forChild(generateRoutes(GenerateExampleComponent)),
  ],
  declarations: [
    GenerateExampleComponent
  ],
  exports: [GenerateExampleComponent],
})
export class GenerateExampleModule {}
