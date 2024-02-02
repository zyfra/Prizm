import { PrizmCarouselContent } from './carousel-content.interface';
/**
 * TODO remove in 2.0 version
 * @deprecated
 * use PrizmInputCarouselYearMonthValue
 * */
export type PrizmCarouselYearMonthValue = {
    year: number;
    month: number;
};
export type PrizmInputCarouselYearMonthValue = PrizmCarouselYearMonthValue;
/**
 * TODO remove in 2.0 version
 * @deprecated
 * use PrizmInputCarouselYearMonth
 * */
export declare class PrizmCarouselYearMonth implements PrizmCarouselContent {
    currentValue: PrizmCarouselYearMonthValue;
    min: PrizmCarouselYearMonthValue;
    max: PrizmCarouselYearMonthValue;
    constructor(min?: PrizmCarouselYearMonthValue, max?: PrizmCarouselYearMonthValue);
    controlsState: {
        leftCtrlDisabled: boolean;
        stepleftCtrlDisabled: boolean;
        stepRightCtrlDisabled: boolean;
        rightCtrlDisabled: boolean;
    };
    setCurrentValue(element: PrizmCarouselYearMonthValue): void;
    get currentValueNotSet(): boolean;
    left(): void;
    stepLeft(): void;
    stepRight(): void;
    right(): void;
    private updateControlsState;
    private compare;
}
export declare class PrizmInputCarouselYearMonth extends PrizmCarouselYearMonth {
}
