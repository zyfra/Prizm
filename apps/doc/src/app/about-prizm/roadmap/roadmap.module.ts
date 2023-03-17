import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RoadmapComponent } from './roadmap.component';

@NgModule({
  exports: [RoadmapComponent],
  declarations: [RoadmapComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(RoadmapComponent))],
})
export class RoadmapModule {}
