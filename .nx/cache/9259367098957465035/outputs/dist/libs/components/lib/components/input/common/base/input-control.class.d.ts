import { DoCheck } from '@angular/core';
import { AbstractControlDirective, NgControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PrizmInputLayoutBottomDirective } from '../input-layout/input-layout-bottom.directive';
import { PrizmInputLayoutInBodyDirective } from '../input-layout/input-layout-in-body.directive';
import { PrizmInputLayoutLeftDirective } from '../input-layout/input-layout-left.directive';
import { PrizmInputLayoutRightDirective } from '../input-layout/input-layout-right.directive';
import { PrizmInputLayoutSubtextDirective } from '../input-layout/input-layout-subtext.directive';
import { PrizmInputStatusTextDirective } from '../input-status-text/input-status-text.directive';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare abstract class PrizmInputControl<T> extends PrizmAbstractTestId implements DoCheck {
    statusText?: PrizmInputStatusTextDirective;
    layoutBottom: PrizmInputLayoutBottomDirective | null;
    layoutInBody: PrizmInputLayoutInBodyDirective | null;
    layoutLeft: PrizmInputLayoutLeftDirective | null;
    layoutRight: PrizmInputLayoutRightDirective | null;
    layoutSubtext: PrizmInputLayoutSubtextDirective | null;
    defaultLabel: string;
    protected readonly lastSyncedState: {
        touched: boolean | null;
        pristine: boolean | null;
    };
    /** The value of the control. */
    abstract value: T | null;
    readonly stateChanges: Subject<void>;
    abstract readonly empty: boolean | Observable<boolean>;
    /** Gets the AbstractControlDirective for this control. */
    abstract readonly ngControl: NgControl | AbstractControlDirective | null;
    /** Whether the control is required. */
    abstract readonly required: boolean | Observable<boolean>;
    /** Whether the control is disabled. */
    abstract readonly disabled: boolean | Observable<boolean>;
    /** Whether the control is required. */
    abstract readonly focused: boolean | Observable<boolean>;
    /** Whether the control is validity. */
    abstract readonly invalid: boolean | Observable<boolean>;
    /** Whether the control is validity. */
    abstract readonly touched: boolean | Observable<boolean>;
    abstract nativeElementType: string | undefined;
    abstract hasClearButton: boolean;
    hidden: boolean;
    abstract clear(ev: MouseEvent): void;
    ngDoCheck(): void;
    private updateLayoutOnTouched;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputControl<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputControl<any>, never, never, {}, {}, never, never, false, never>;
}
