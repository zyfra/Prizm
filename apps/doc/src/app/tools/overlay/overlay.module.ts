import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {OverlayComponent} from "./overlay.component";
import {PrizmOverlayExampleWithViewComponent} from "./examples/with-component/template";
import {PrizmButtonModule, PrizmOverlayModule} from "@prizm-ui/components";
import {PrizmOverlayExampleSlideComponent} from "./examples/slide/template";
import {PrizmOverlayExampleRelativeComponent} from "./examples/relative/template";
import {PrizmOverlayExampleGlobalComponent} from "./examples/global/template";
import {PrizmOverlayExampleFullscreenComponent} from "./examples/fullscreen/template";
import {PrizmOverlaySomeComponent} from "./examples/with-component/some-component";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmButtonModule,
    PrizmOverlayModule,
    RouterModule.forChild(generateRoutes(OverlayComponent)),
  ],
  declarations: [
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
