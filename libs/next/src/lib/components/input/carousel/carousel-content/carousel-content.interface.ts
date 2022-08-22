export interface ZuiCarouselControlsState {
  leftCtrlDisabled: boolean;
  stepleftCtrlDisabled: boolean;
  stepRightCtrlDisabled: boolean;
  rightCtrlDisabled: boolean;
}

export const zuiDefaultCarouselControlsState: ZuiCarouselControlsState = {
  leftCtrlDisabled: true,
  stepleftCtrlDisabled: true,
  stepRightCtrlDisabled: true,
  rightCtrlDisabled: true,
};

export interface ZuiCarouselContent {
  currentValue: any;
  set: any;

  currentValueNotSet: boolean;

  controlsState: ZuiCarouselControlsState;

  setCurrentValue(value: any): void;

  stepLeft(): void;

  left(): void;

  stepRight(): void;

  right(): void;
}

