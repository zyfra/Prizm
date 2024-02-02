import { Injector, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';
import { PolymorphContent } from '../../../../directives/polymorph';
import { PrizmInputStatus } from '../models/prizm-input.models';
import * as i0 from "@angular/core";
export declare class PrizmInputStatusTextDirective extends DefaultInputInvalidTextClass {
    enable: boolean;
    status?: PrizmInputStatus;
    templateRef: TemplateRef<any>;
    readonly changed: Subject<void>;
    constructor(injector: Injector);
    protected setInvalidText(text: string): void;
    getStatusMessage(): PolymorphContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputStatusTextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputStatusTextDirective, "[prizmInputStatusText]", never, { "enable": "enable"; "status": "status"; }, {}, never, never, false, never>;
}
