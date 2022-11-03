import { pzmDefaultCarouselControlsState, PrizmCarouselContent } from './carousel-content.interface';

export class PrizmCarouselArrayContent<T> implements PrizmCarouselContent {
  private currentIndex = -1;
  currentValue: T = undefined;

  public controlsState = { ...pzmDefaultCarouselControlsState };

  constructor(public set: Array<T>, private searchFn: (arrayItem: T, findEl: T) => boolean) {}

  public setCurrentValue(element: T): void {
    this.currentIndex = this.set.findIndex(item => this.searchFn(item, element));
    this.currentValue = this.currentIndex === -1 ? undefined : this.set[this.currentIndex];
    this.updateControlsState();
  }

  get currentValueNotSet(): boolean {
    return this.currentIndex === -1;
  }

  public stepLeft(): void {
    this.currentIndex--;
    this.currentValue = this.set[this.currentIndex];

    this.updateControlsState();
  }

  public left(): void {
    this.currentIndex = 0;
    this.currentValue = this.set[this.currentIndex];
    this.updateControlsState();
  }

  public stepRight(): void {
    ++this.currentIndex;
    this.currentValue = this.set[this.currentIndex];
    this.updateControlsState();
  }

  public right(): void {
    this.currentIndex = this.set.length - 1;
    this.currentValue = this.set[this.currentIndex];
    this.updateControlsState();
  }

  private updateControlsState(): void {
    if (this.currentIndex === 0) {
      this.controlsState.leftCtrlDisabled = true;
      this.controlsState.stepleftCtrlDisabled = true;
      this.controlsState.stepRightCtrlDisabled = false;
      this.controlsState.rightCtrlDisabled = false;
      return;
    }

    if (this.currentIndex === this.set.length - 1) {
      this.controlsState.leftCtrlDisabled = false;
      this.controlsState.stepleftCtrlDisabled = false;
      this.controlsState.stepRightCtrlDisabled = true;
      this.controlsState.rightCtrlDisabled = true;
      return;
    }

    if (this.currentIndex === -1) {
      this.controlsState.leftCtrlDisabled = true;
      this.controlsState.stepleftCtrlDisabled = true;
      this.controlsState.stepRightCtrlDisabled = true;
      this.controlsState.rightCtrlDisabled = true;
      return;
    }

    this.controlsState.leftCtrlDisabled = false;
    this.controlsState.stepleftCtrlDisabled = false;
    this.controlsState.stepRightCtrlDisabled = false;
    this.controlsState.rightCtrlDisabled = false;
  }
}

