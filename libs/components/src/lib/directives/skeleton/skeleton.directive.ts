import { Directive, HostBinding, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';

@Directive({
    selector: '[prizmSkeleton], [prizmSkeletonText], [prizmSkeletonRounded], [prizmSkeletonShort]',
})
export class PrizmSkeletonDirective {
  @Input('prizmSkeletonText')
  @HostBinding('class.prizm-skeleton_text')
  @prizmDefaultProp()
  isText = false;

  @Input('prizmSkeletonRounded')
  @HostBinding('class.prizm-skeleton_rounded')
  @prizmDefaultProp()
  isRounded = false;

  @Input('prizmSkeletonShort')
  @HostBinding('class.prizm-skeleton_short')
  @prizmDefaultProp()
  isShort = false;


  @Input('prizmSkeleton')
  @HostBinding('class.prizm-skeleton')
  @prizmDefaultProp()
  active = true;
}
