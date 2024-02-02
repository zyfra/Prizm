import { PrizmTextfieldHost } from '../types/textfield-host';
import { AbstractPrizmControl } from './control';
import * as i0 from "@angular/core";
export declare abstract class AbstractPrizmTextfieldHost<T extends AbstractPrizmControl<any>> implements PrizmTextfieldHost {
    protected readonly host: T;
    constructor(host: T);
    get readOnly(): boolean;
    get disabled(): boolean;
    get invalid(): boolean;
    get focusable(): boolean;
    get value(): string;
    abstract onValueChange(value: string): void;
    process(_input: HTMLInputElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractPrizmTextfieldHost<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AbstractPrizmTextfieldHost<any>, never, never, {}, {}, never, never, false, never>;
}
