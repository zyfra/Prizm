import { OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class AbstractPrizmController implements OnChanges {
    readonly change$: Subject<void>;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractPrizmController, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AbstractPrizmController, never, never, {}, {}, never, never, false, never>;
}
