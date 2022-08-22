import {AnimationOptions} from "@angular/animations";

export interface ZuiAnimationOptions extends AnimationOptions {
  readonly value: string;
}

export const enum ZuiDropdownAnimation {
  FadeInBottom = 'fadeInBottom',
  FadeInTop = 'fadeInTop',
}
