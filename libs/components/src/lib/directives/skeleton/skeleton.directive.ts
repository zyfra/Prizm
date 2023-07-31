import { Directive, HostBinding, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';

@Directive({
  selector: '[prizmSkeleton], [prizmSkeletonText], [prizmSkeletonRounded], [prizmSkeletonShort]',
})
export class PrizmSkeletonDirective {
  @Input('prizmSkeletonText')
  @prizmDefaultProp()
  isText = false;

  @Input('prizmSkeletonRounded')
  @prizmDefaultProp()
  isRounded = false;

  @Input('prizmSkeletonShort')
  @prizmDefaultProp()
  isShort = false;

  @Input('prizmSkeleton')
  @HostBinding('class.prizm-skeleton')
  @prizmDefaultProp()
  active = true;

  @HostBinding('class.prizm-skeleton_text') get prizmSkeletonText() {
    return this.active && this.isText;
  }
  @HostBinding('class.prizm-skeleton_rounded') get prizmSkeletonRounded() {
    return this.active && this.isRounded;
  }
  @HostBinding('class.prizm-skeleton_short') get prizmSkeletonShort() {
    return this.active && this.isShort;
  }
}
