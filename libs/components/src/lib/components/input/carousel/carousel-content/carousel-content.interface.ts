export interface PrizmCarouselControlsState {
  leftCtrlDisabled: boolean;
  stepleftCtrlDisabled: boolean;
  stepRightCtrlDisabled: boolean;
  rightCtrlDisabled: boolean;
}

export const prizmDefaultCarouselControlsState: PrizmCarouselControlsState = {
  leftCtrlDisabled: true,
  stepleftCtrlDisabled: true,
  stepRightCtrlDisabled: true,
  rightCtrlDisabled: true,
};

export interface PrizmCarouselContent {
  currentValue: any;
  currentValueNotSet: boolean;

  setCurrentValue(value: any): void;

  controlsState: PrizmCarouselControlsState;

  stepLeft(): void;

  left(): void;

  stepRight(): void;

  right(): void;
}
