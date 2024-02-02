import { PrizmCarouselContent } from './carousel-content.interface';
/**
 * TODO remove in 2.0 version
 * @deprecated
 * use PrizmInputCarouselArrayContent
 * */
export declare class PrizmCarouselArrayContent<T> implements PrizmCarouselContent {
    set: Array<T>;
    private searchFn;
    private currentIndex;
    currentValue: T;
    controlsState: {
        leftCtrlDisabled: boolean;
        stepleftCtrlDisabled: boolean;
        stepRightCtrlDisabled: boolean;
        rightCtrlDisabled: boolean;
    };
    constructor(set: Array<T>, searchFn?: (arrayItem: T, findEl: T) => boolean);
    get first(): T;
    get last(): T;
    setCurrentValue(element: T): void;
    get currentValueNotSet(): boolean;
    stepLeft(): void;
    left(): void;
    stepRight(): void;
    right(): void;
    private updateControlsState;
}
export declare class PrizmInputCarouselArrayContent<T> extends PrizmCarouselArrayContent<T> {
}
