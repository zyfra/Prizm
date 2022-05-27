import { Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  $implicit: T | null;
  zuiLet: T | null;
}

/**
 * Это директива позволяет повторно использовать вычисленное значение в нескольких местах в шаблоне,
 * чтобы избежать пересчета геттеров или множества асинхронных каналов.
 *
 * @example <ng-container *zuiLet="{items: items$ | async, center: center} as $"> {{$.items?.count}} {{$.center}}</ng-container>
 * @example <ng-container *zuiLet="queryParams.isMap$ | async as isMap">{{isMap}}</ng-container>
 */
@Directive({ selector: '[zuiLet]' })
export class ZuiLetDirective<T> implements OnDestroy {
  constructor(private templateRef: TemplateRef<LetContext<T>>, private viewContainer: ViewContainerRef) {}

  @Input('zuiLet') set init(newContext: T) {
    this.updateContext(newContext);
  }

  private readonly context: LetContext<T> = { $implicit: null, zuiLet: null };

  private viewRef: EmbeddedViewRef<LetContext<T>> | null = this.viewContainer.createEmbeddedView(
    this.templateRef,
    this.context
  );

  ngOnDestroy(): void {
    this.viewContainer.clear();
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }

  private updateContext(newContext: T): void {
    this.context.$implicit = this.context.zuiLet = newContext;
    if (this.viewRef) {
      this.viewRef.markForCheck();
    }
  }
}
