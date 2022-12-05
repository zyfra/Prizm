import { PrizmDecimalSymbol } from '../../types/decimal-symbol';

export interface PrizmNumberMaskOptions {
    readonly allowDecimal?: boolean;
    readonly decimalSymbol?: PrizmDecimalSymbol;
    readonly thousandSymbol?: string;
    readonly autoCorrectDecimalSymbol?: boolean;
    readonly decimalLimit?: number;
    readonly requireDecimal?: boolean;
    readonly allowNegative?: boolean;
    readonly integerLimit?: number;
}
