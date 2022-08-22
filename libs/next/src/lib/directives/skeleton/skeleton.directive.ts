import { Directive, HostBinding, Input } from '@angular/core';
import { zuiDefaultProp } from '../../decorators';

@Directive({
    selector: '[zuiSkeleton], [zuiSkeletonText], [zuiSkeletonRounded], [zuiSkeletonShort]',
})
export class ZuiSkeletonDirective {
  @Input('zuiSkeletonText')
  @HostBinding('class.zui-skeleton_text')
  @zuiDefaultProp()
  isText = false;

  @Input('zuiSkeletonRounded')
  @HostBinding('class.zui-skeleton_rounded')
  @zuiDefaultProp()
  isRounded = false;

  @Input('zuiSkeletonShort')
  @HostBinding('class.zui-skeleton_short')
  @zuiDefaultProp()
  isShort = false;


  @Input('zuiSkeleton')
  @HostBinding('class.zui-skeleton')
  @zuiDefaultProp()
  active = true;
}
