/**
 * TODO remove in 2.0 version
 * @deprecated
 * use PrizmInputCarouselControlsState
 * */
export interface PrizmCarouselControlsState {
  leftCtrlDisabled: boolean;
  stepleftCtrlDisabled: boolean;
  stepRightCtrlDisabled: boolean;
  rightCtrlDisabled: boolean;
}

export type PrizmInputCarouselControlsState = PrizmCarouselControlsState;

/**
 * TODO remove in 2.0 version
 * @deprecated
 * use prizmInputCarouselDefaultControlsState
 * */
export const prizmDefaultCarouselControlsState: PrizmCarouselControlsState = {
  leftCtrlDisabled: true,
  stepleftCtrlDisabled: true,
  stepRightCtrlDisabled: true,
  rightCtrlDisabled: true,
};

export const prizmInputCarouselDefaultControlsState = prizmDefaultCarouselControlsState;

/**
 * TODO remove in 2.0 version
 * @deprecated
 * use PrizmInputCarouselContent
 * */
export interface PrizmCarouselContent {
  currentValue: unknown;
  currentValueNotSet: boolean;

  setCurrentValue(value: unknown): void;

  controlsState: PrizmCarouselControlsState;

  stepLeft(): void;

  left(): void;

  stepRight(): void;

  right(): void;
}

export type PrizmInputCarouselContent = PrizmCarouselContent;
