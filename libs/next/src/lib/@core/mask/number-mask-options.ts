import { ZuiDecimalSymbol } from '../../types/decimal-symbol';

export interface ZuiNumberMaskOptions {
    readonly allowDecimal?: boolean;
    readonly decimalSymbol?: ZuiDecimalSymbol;
    readonly thousandSymbol?: string;
    readonly autoCorrectDecimalSymbol?: boolean;
    readonly decimalLimit?: number;
    readonly requireDecimal?: boolean;
    readonly allowNegative?: boolean;
    readonly integerLimit?: number;
}
