import { Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  $implicit: T | null;
  pzmLet: T | null;
}

/**
 * Это директива позволяет повторно использовать вычисленное значение в нескольких местах в шаблоне,
 * чтобы избежать пересчета геттеров или множества асинхронных каналов.
 *
 * @button <ng-container *pzmLet="{items: items$ | async, center: center} as $"> {{$.items?.count}} {{$.center}}</ng-container>
 * @button <ng-container *pzmLet="queryParams.isMap$ | async as isMap">{{isMap}}</ng-container>
 */
@Directive({ selector: '[pzmLet]' })
export class PrizmLetDirective<T> implements OnDestroy {
  constructor(private templateRef: TemplateRef<LetContext<T>>, private viewContainer: ViewContainerRef) {}

  @Input('pzmLet') set init(newContext: T) {
    this.updateContext(newContext);
  }

  private readonly context: LetContext<T> = { $implicit: null, pzmLet: null };

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
    this.context.$implicit = this.context.pzmLet = newContext;
    if (this.viewRef) {
      this.viewRef.markForCheck();
    }
  }
}
