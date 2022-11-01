import { Directive, HostBinding, Input } from '@angular/core';
import { pzmDefaultProp } from '../../decorators';

@Directive({
    selector: '[zuiSkeleton], [zuiSkeletonText], [zuiSkeletonRounded], [zuiSkeletonShort]',
})
export class PzmSkeletonDirective {
  @Input('zuiSkeletonText')
  @HostBinding('class.zui-skeleton_text')
  @pzmDefaultProp()
  isText = false;

  @Input('zuiSkeletonRounded')
  @HostBinding('class.zui-skeleton_rounded')
  @pzmDefaultProp()
  isRounded = false;

  @Input('zuiSkeletonShort')
  @HostBinding('class.zui-skeleton_short')
  @pzmDefaultProp()
  isShort = false;


  @Input('zuiSkeleton')
  @HostBinding('class.zui-skeleton')
  @pzmDefaultProp()
  active = true;
}
