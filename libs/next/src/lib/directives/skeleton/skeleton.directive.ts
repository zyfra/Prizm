import { Directive, HostBinding, Input } from '@angular/core';
import { pzmDefaultProp } from '../../decorators';

@Directive({
    selector: '[pzmSkeleton], [pzmSkeletonText], [pzmSkeletonRounded], [pzmSkeletonShort]',
})
export class PrizmSkeletonDirective {
  @Input('pzmSkeletonText')
  @HostBinding('class.pzm-skeleton_text')
  @pzmDefaultProp()
  isText = false;

  @Input('pzmSkeletonRounded')
  @HostBinding('class.pzm-skeleton_rounded')
  @pzmDefaultProp()
  isRounded = false;

  @Input('pzmSkeletonShort')
  @HostBinding('class.pzm-skeleton_short')
  @pzmDefaultProp()
  isShort = false;


  @Input('pzmSkeleton')
  @HostBinding('class.pzm-skeleton')
  @pzmDefaultProp()
  active = true;
}
