import { AnimationOptions } from '@angular/animations';
export interface PrizmAnimationOptions extends AnimationOptions {
    readonly value: string;
}
export declare const enum PrizmDropdownAnimation {
    FadeInBottom = "fadeInBottom",
    FadeInTop = "fadeInTop"
}
