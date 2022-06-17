import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {PolymorpheusModule, ZuiButtonModule, ZuiHintModule} from "@digital-plant/zui-components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HintComponent} from "./hint.component";
import {ZuiHintExampleWithTemplateComponent} from "./examples/with-template/template";
import {ZuiHintExampleBasicComponent} from "./examples/basic/template";
import {ZuiHintSomeComponent} from "./examples/with-component/some-component";
import {ZuiHintExampleWithComponent} from "./examples/with-component/template";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorpheusModule,
    ZuiHintModule,
    ZuiButtonModule,
    RouterModule.forChild(generateRoutes(HintComponent)),
  ],
  declarations: [
    ZuiHintExampleWithTemplateComponent,
    ZuiHintExampleWithComponent,
    ZuiHintSomeComponent,
    ZuiHintExampleBasicComponent,
    HintComponent
  ],
  exports: [HintComponent],
})
export class HintModule {}
