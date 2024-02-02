import { PrizmToastControl } from './toast-control';
import * as i0 from "@angular/core";
import * as i1 from "./toast-container/toast-container.component";
import * as i2 from "./toast-wrapper/toast-wrapper.component";
import * as i3 from "./toast/toast.component";
import * as i4 from "@angular/common";
import * as i5 from "../../modules/overlay/overlay.module";
import * as i6 from "../input/common/input-common.module";
import * as i7 from "../indicator/indicator.module";
import * as i8 from "../../directives/polymorph/polymorph.module";
import * as i9 from "../button/button.module";
import * as i10 from "@prizm-ui/theme";
import * as i11 from "../../directives/focus-trap/focus-trap.module";
import * as i12 from "../scrollbar/scrollbar.module";
export declare class PrizmToastModule {
    private readonly toastControl;
    constructor(toastControl: PrizmToastControl);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmToastModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PrizmToastModule, [typeof i1.PrizmToastContainerComponent, typeof i2.ToastWrapperComponent, typeof i3.ToastComponent], [typeof i4.CommonModule, typeof i5.PrizmOverlayModule, typeof i6.PrizmInputCommonModule, typeof i7.PrizmIndicatorModule, typeof i8.PolymorphModule, typeof i9.PrizmButtonModule, typeof i10.PrizmThemeModule, typeof i11.PrizmFocusTrapModule, typeof i12.PrizmScrollbarModule], [typeof i1.PrizmToastContainerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PrizmToastModule>;
}
