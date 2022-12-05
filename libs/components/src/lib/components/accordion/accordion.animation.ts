import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const expandAnimation: AnimationTriggerMetadata = trigger('expand', [
  state('init', style({ height: 0 })),
  state('expanded', style({ height: '*' })),
  transition('init <=> expanded', animate('0.4s')),
]);
