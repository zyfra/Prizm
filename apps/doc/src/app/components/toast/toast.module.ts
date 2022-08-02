import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {ToastComponent} from "./toast.component";
import {ZuiToastInfoExampleComponent} from "./examples/toast-info-example/template";
import {
  ZuiButtonModule,
  ZuiRadioButtonModule,
  ZuiToastModule,
  zuiToastOptionsProvider
} from "@digital-plant/zui-components";
import {ZuiToastWarningExampleComponent} from "./examples/toast-warning-example/template";
import {ZuiToastSuccessExampleComponent} from "./examples/toast-success-example/template";
import {ZuiToastDangerExampleComponent} from "./examples/toast-danger-example/template";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiButtonModule,
    ZuiRadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ZuiToastModule,
    RouterModule.forChild(generateRoutes(ToastComponent)),
  ],
  declarations: [
    ZuiToastInfoExampleComponent,
    ZuiToastWarningExampleComponent,
    ZuiToastSuccessExampleComponent,
    ZuiToastDangerExampleComponent,
    ToastComponent,
  ],
  providers: [
    zuiToastOptionsProvider({
      timer: 1000
    })
  ],
  exports: [ToastComponent],
})
export class ToastModule {}
