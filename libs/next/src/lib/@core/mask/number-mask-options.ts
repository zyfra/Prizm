import { PzmDecimalSymbol } from '../../types/decimal-symbol';

export interface PzmNumberMaskOptions {
    readonly allowDecimal?: boolean;
    readonly decimalSymbol?: PzmDecimalSymbol;
    readonly thousandSymbol?: string;
    readonly autoCorrectDecimalSymbol?: boolean;
    readonly decimalLimit?: number;
    readonly requireDecimal?: boolean;
    readonly allowNegative?: boolean;
    readonly integerLimit?: number;
}
