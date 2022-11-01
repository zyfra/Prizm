import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {OverlayComponent} from "./overlay.component";
import {ZuiOverlayExampleWithViewComponent} from "./examples/with-component/template";
import {PzmButtonModule, PzmOverlayModule} from "@digital-plant/zui-components";
import {ZuiOverlayExampleSlideComponent} from "./examples/slide/template";
import {ZuiOverlayExampleRelativeComponent} from "./examples/relative/template";
import {ZuiOverlayExampleGlobalComponent} from "./examples/global/template";
import {ZuiOverlayExampleFullscreenComponent} from "./examples/fullscreen/template";
import {ZuiOverlaySomeComponent} from "./examples/with-component/some-component";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmButtonModule,
    PzmOverlayModule,
    RouterModule.forChild(generateRoutes(OverlayComponent)),
  ],
  declarations: [
    ZuiOverlayExampleSlideComponent,
    ZuiOverlayExampleRelativeComponent,
    ZuiOverlayExampleGlobalComponent,
    ZuiOverlayExampleFullscreenComponent,
    ZuiOverlayExampleWithViewComponent,
    ZuiOverlaySomeComponent,
    OverlayComponent,
  ],
  exports: [OverlayComponent],
})
export class OverlayModule {}
