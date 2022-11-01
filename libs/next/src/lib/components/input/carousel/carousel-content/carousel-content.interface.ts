export interface PzmCarouselControlsState {
  leftCtrlDisabled: boolean;
  stepleftCtrlDisabled: boolean;
  stepRightCtrlDisabled: boolean;
  rightCtrlDisabled: boolean;
}

export const pzmDefaultCarouselControlsState: PzmCarouselControlsState = {
  leftCtrlDisabled: true,
  stepleftCtrlDisabled: true,
  stepRightCtrlDisabled: true,
  rightCtrlDisabled: true,
};

export interface PzmCarouselContent {
  currentValue: any;
  currentValueNotSet: boolean;

  setCurrentValue(value: any): void;

  controlsState: PzmCarouselControlsState;

  stepLeft(): void;

  left(): void;

  stepRight(): void;

  right(): void;
}

