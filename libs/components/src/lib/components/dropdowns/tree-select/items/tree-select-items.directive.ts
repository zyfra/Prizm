// import { AfterViewInit, Directive, inject, Injector, Input, Renderer2 } from '@angular/core';
// import { BehaviorSubject, combineLatest } from 'rxjs';
// import { takeUntil, tap } from 'rxjs/operators';
// import { filterTruthy, PrizmDestroyService, PrizmSyncParentDirective } from '@prizm-ui/helpers';
// import { TREE_SELECT_VIEW_CONTAINER } from '../const';
// import { PrizmTreeSelectItemComponent } from '../tree-select-item/tree-select-item.component';
// import { PrizmTreeSelectItem } from '../model';
//
// @Directive({
//   selector: '[prizmSwitcherItems]',
//   standalone: true,
//   providers: [PrizmDestroyService],
// })
// export class PrizmTreeSelectItemsDirective implements AfterViewInit {
//   private readonly destroy$ = inject(PrizmDestroyService);
//   private readonly injector = inject(Injector);
//   private readonly renderer2 = inject(Renderer2);
//   private readonly prizmSyncParentDirective = inject(PrizmSyncParentDirective);
//   private readonly viewRef$$ = inject(TREE_SELECT_VIEW_CONTAINER);
//   ngAfterViewInit(): void {
//     combineLatest([this.items$$, this.viewRef$$.pipe(filterTruthy())])
//       .pipe(
//         tap(([items, viewRef]) => {
//           viewRef.clear();
//
//           // TODO add identity matcher for update only changed items
//           items.forEach((item, idx) => {
//             const projectableNodes: Node[][] = [];
//
//             if (item.title) {
//               projectableNodes.push([document.createTextNode(item.title.toString())]);
//             }
//
//             const cmp = viewRef.createComponent(PrizmTreeSelectItemComponent, {
//               injector: this.injector,
//               index: idx,
//               projectableNodes: projectableNodes?.length ? projectableNodes : undefined,
//             });
//
//             if (item.appearanceType) cmp.setInput('appearanceType', item.appearanceType);
//             if (item.appearance) {
//               cmp.setInput('appearance', item.appearance);
//             }
//             if (item.icon) cmp.setInput('icon', item.icon);
//             if (item.disabled || item.hide) cmp.setInput('disabled', true);
//             if (item.hint?.value) cmp.setInput('hint', item.hint.value);
//             if (item.hint?.options) {
//               if (item.hint.options.autoReposition)
//                 cmp.setInput('hintAutoReposition', item.hint.options.autoReposition);
//               if (item.hint.options.direction) cmp.setInput('hintDirection', item.hint.options.direction);
//               if (item.hint.options.hideDelay) cmp.setInput('hintHideDelay', item.hint.options.hideDelay);
//               if (item.hint.options.showDelay) cmp.setInput('hintShowDelay', item.hint.options.showDelay);
//               if (item.hint.options.theme) cmp.setInput('hintTheme', item.hint.options.theme);
//             }
//
//             if (item.hide) {
//               this.renderer2.setStyle(cmp.location.nativeElement, 'display', 'none');
//             }
//
//             if (projectableNodes?.length) cmp.changeDetectorRef.detectChanges();
//           });
//
//           this.prizmSyncParentDirective.sync();
//         }),
//         takeUntil(this.destroy$)
//       )
//       .subscribe();
//   }
//   public readonly items$$: BehaviorSubject<PrizmTreeSelectItem[]> = new BehaviorSubject<
//     PrizmTreeSelectItem[]
//   >([]);
//
//   @Input()
//   get items(): PrizmTreeSelectItem[] {
//     return this.items$$.value;
//   }
//   set items(value: PrizmTreeSelectItem[]) {
//     if (value) this.items$$.next(value);
//   }
// }
