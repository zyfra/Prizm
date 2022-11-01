import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {OverlayComponent} from "./overlay.component";
import {PzmOverlayExampleWithViewComponent} from "./examples/with-component/template";
import {PzmButtonModule, PzmOverlayModule} from "@digital-plant/zui-components";
import {PzmOverlayExampleSlideComponent} from "./examples/slide/template";
import {PzmOverlayExampleRelativeComponent} from "./examples/relative/template";
import {PzmOverlayExampleGlobalComponent} from "./examples/global/template";
import {PzmOverlayExampleFullscreenComponent} from "./examples/fullscreen/template";
import {PzmOverlaySomeComponent} from "./examples/with-component/some-component";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmButtonModule,
    PzmOverlayModule,
    RouterModule.forChild(generateRoutes(OverlayComponent)),
  ],
  declarations: [
    PzmOverlayExampleSlideComponent,
    PzmOverlayExampleRelativeComponent,
    PzmOverlayExampleGlobalComponent,
    PzmOverlayExampleFullscreenComponent,
    PzmOverlayExampleWithViewComponent,
    PzmOverlaySomeComponent,
    OverlayComponent,
  ],
  exports: [OverlayComponent],
})
export class OverlayModule {}
