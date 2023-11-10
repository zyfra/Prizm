import { Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmLetContextService } from './let-context.service';
import { Observable } from 'rxjs';

interface LetContext<T> {
  $implicit: T | null;
  prizmLet: T | null;
}

/**
 * Это директива позволяет повторно использовать вычисленное значение в нескольких местах в шаблоне,
 * чтобы избежать пересчета геттеров или множества асинхронных каналов.
 *
 * @button <ng-container *prizmLet="{items: items$ | async, center: center} as $"> {{$.items?.count}} {{$.center}}</ng-container>
 * @button <ng-container *prizmLet="queryParams.isMap$ | async as isMap">{{isMap}}</ng-container>
 */
@Directive({
  selector: '[prizmLet]',
  exportAs: 'prizmLet',
  standalone: true,
  providers: [PrizmLetContextService],
})
export class PrizmLetDirective<T> implements OnDestroy {
  get context(): T | null {
    return this.contextService.context;
  }
  get context$(): Observable<T | null> {
    return this.contextService.context$;
  }
  constructor(
    private templateRef: TemplateRef<LetContext<T>>,
    private viewContainer: ViewContainerRef,
    private contextService: PrizmLetContextService<T>
  ) {}
  @Input('prizmLet') set init(newContext: T) {
    this.updateContext(newContext);
  }

  private readonly ctx: LetContext<T> = { $implicit: null, prizmLet: null };

  private viewRef: EmbeddedViewRef<LetContext<T>> | null = this.viewContainer.createEmbeddedView(
    this.templateRef,
    this.ctx
  );

  public ngOnDestroy(): void {
    this.viewContainer.clear();
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }

  private updateContext(newContext: T): void {
    this.ctx.$implicit = this.ctx.prizmLet = newContext;
    this.contextService.setContext(newContext);
    if (this.viewRef) {
      this.viewRef.markForCheck();
    }
  }
}
