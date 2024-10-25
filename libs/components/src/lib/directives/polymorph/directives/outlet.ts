// eslint-disable-next-line no-duplicate-imports
import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  DoCheck,
  Inject,
  inject,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { PolymorphComponent } from '../classes/component';
import { PolymorphContext } from '../classes/context';
import type { PolymorphContent } from '../types/content';
import type { PolymorphPrimitive } from '../types/primitive';
import { PolymorphTemplate } from './template';
import { isPolymorphComponent, isPolymorphDirective } from '../util';

@Directive({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[polymorphOutlet]',
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class PolymorphOutletDirective<C> implements OnChanges, DoCheck {
  private readonly vcr = inject(ViewContainerRef);

  constructor(@Inject(TemplateRef) private readonly t: TemplateRef<PolymorphContext<PolymorphPrimitive>>) {}

  private c?: ComponentRef<unknown>;

  @Input('polymorphOutlet')
  public content: PolymorphContent<C> = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('polymorphOutletInjector')
  injector: Injector = inject(Injector);

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('polymorphOutletContext')
  public context!: C;

  public static ngTemplateContextGuard<T>(
    _dir: PolymorphOutletDirective<T>,
    _ctx: any
  ): _ctx is PolymorphContext<T extends PolymorphPrimitive ? T : never> {
    return true;
  }

  public ngOnChanges({ content }: SimpleChanges): void {
    const context = this.getContext();

    this.c?.injector.get(ChangeDetectorRef).markForCheck();

    if (!content) {
      return;
    }

    this.vcr.clear();

    const proxy =
      context &&
      (new Proxy(context as object, {
        get: (_, key) => this.getContext()?.[key as keyof (C | PolymorphContext<any>)],
      }) as unknown as C);

    if (isPolymorphComponent(this.content)) {
      this.process(this.content, proxy);
    } else {
      this.vcr.createEmbeddedView(this.template, proxy, { injector: this.injector });
    }
  }

  public ngDoCheck(): void {
    if (isPolymorphDirective(this.content)) {
      this.content.check();
    }
  }

  private get template(): TemplateRef<unknown> {
    if (isPolymorphDirective(this.content)) {
      return this.content.template;
    }

    return this.content instanceof TemplateRef ? this.content : this.t;
  }

  private getContext(): C | PolymorphContext<any> | undefined {
    if (isTemplate(this.content) || isPolymorphComponent(this.content)) {
      return this.context;
    }

    return new PolymorphContext(
      typeof this.content === 'function' ? this.content(this.context) : this.content
    );
  }

  private process(content: PolymorphComponent<unknown>, proxy?: C): void {
    const injector = content.createInjector(this.injector, proxy);

    this.c = this.vcr.createComponent(content.component, { injector });
  }
}

function isTemplate<C>(content: PolymorphContent<C>): content is PolymorphTemplate<C> | TemplateRef<C> {
  return isPolymorphDirective(content) || content instanceof TemplateRef;
}
