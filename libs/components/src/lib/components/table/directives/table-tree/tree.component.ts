// import { Directive, Inject, Input, TemplateRef, TrackByFunction } from '@angular/core';
// import { prizmDefaultProp } from '@prizm-ui/core';
// import { PrizmRowContext } from './model';
// import { PrizmRowDataService, PrizmTableTreeService } from './tree.service';
//
//
// @Directive({
//   selector: `ng-template[prizmTableTree]`,
//   providers: [
//     PrizmTableTreeService
//   ],
//   exportAs: 'prizmTableTree',
// })
// export class PrizmRowTableTreeDirective<T extends Partial<Record<keyof T, unknown>>> {
//   @Input()
//   @prizmDefaultProp()
//   prizmRowOf: readonly T[] = [];
//
//   @Input()
//   @prizmDefaultProp()
//   prizmRowShowChild = false;
//
//   @Input()
//   @prizmDefaultProp()
//   prizmRowChildren: T[] = [];
//
//   public static ngTemplateContextGuard<T>(
//     _dir: PrizmRowDirective<T>,
//     _ctx: unknown
//   ): _ctx is PrizmRowContext<T> {
//     return true;
//   }
//
//   @Input()
//   prizmRowTrackBy: TrackByFunction<T> = (i, item) => {
//     return i;
//   };
//
//   constructor(
//     @Inject(TemplateRef) readonly template: TemplateRef<PrizmRowContext<T>>,
//     private readonly context: PrizmRowDataService<T>
//   ) {
//     // this.context.
//   }
// }
