import {AnimationOptions} from "@angular/animations";

export interface PzmAnimationOptions extends AnimationOptions {
  readonly value: string;
}

export const enum PzmDropdownAnimation {
  FadeInBottom = 'fadeInBottom',
  FadeInTop = 'fadeInTop',
}
