import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from './overlay.component';
import { PrizmOverlayExampleWithViewComponent } from './examples/with-component/template';
import { PrizmButtonComponent, PrizmOverlayComponent } from '@prizm-ui/components';
import { PrizmOverlayExampleSlideComponent } from './examples/slide/template';
import { PrizmOverlayExampleRelativeComponent } from './examples/relative/template';
import { PrizmOverlayExampleGlobalComponent } from './examples/global/template';
import { PrizmOverlayExampleFullscreenComponent } from './examples/fullscreen/template';
import { PrizmOverlaySomeComponent } from './examples/with-component/some-component';
import { PrizmOverlayCustomContextExampleComponent } from './examples/custom-context/custom-context.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    PrizmOverlayComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(OverlayComponent)),
  ],
  declarations: [
    PrizmOverlayCustomContextExampleComponent,
    PrizmOverlayExampleSlideComponent,
    PrizmOverlayExampleRelativeComponent,
    PrizmOverlayExampleGlobalComponent,
    PrizmOverlayExampleFullscreenComponent,
    PrizmOverlayExampleWithViewComponent,
    PrizmOverlaySomeComponent,
    OverlayComponent,
  ],
  exports: [OverlayComponent],
})
export class OverlayModule {}
