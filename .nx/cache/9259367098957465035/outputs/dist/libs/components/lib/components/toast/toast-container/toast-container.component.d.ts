import { OnChanges } from '@angular/core';
import { PrizmToastRef } from '../toast-ref';
import { Observable } from 'rxjs';
import { PrizmToastPosition } from '../types';
import { PrizmToastService } from '../toast.service';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmToastContainerComponent extends PrizmAbstractTestId implements OnChanges {
    private readonly prizmToastService;
    refs$: Observable<PrizmToastRef[]>;
    containerId?: string;
    position?: PrizmToastPosition;
    readonly testId_ = "ui_toast_container";
    constructor(prizmToastService: PrizmToastService);
    ngOnChanges(): void;
    trackByHash(_: number, item: PrizmToastRef): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmToastContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmToastContainerComponent, "prizm-toast-container", never, { "containerId": { "alias": "containerId"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, never, false, never>;
}
