import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { PolymorphComponent } from '../classes/component';
import { PrimitiveContext } from '../classes/primitive-context';
import { PolymorphContent } from '../types/content';
import { PolymorphTemplate } from './template';
import { isPolymorphComponent, isPolymorphDirective } from '../util';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[polymorphOutlet]',
  standalone: true,
})
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle,@typescript-eslint/ban-types
export class PolymorphOutletDirective<C extends object> implements OnChanges, DoCheck {
  private viewRef?: EmbeddedViewRef<unknown>;

  private componentRef?: ComponentRef<unknown>;

  @Input('polymorphOutlet')
  content: PolymorphContent<C> = '';

  @Input('polymorphOutletContext')
  context!: C;

  @Input('polymorphOutletInjector')
  injector: Injector = this.currentInjector;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly currentInjector: Injector,
    private readonly templateRef: TemplateRef<PrimitiveContext>
  ) {}

  private get template(): TemplateRef<unknown> {
    if (isPolymorphDirective(this.content)) {
      return this.content.template;
    }

    return this.content instanceof TemplateRef ? this.content : this.templateRef;
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnChanges({ content }: SimpleChanges): void {
    if (this.viewRef) {
      this.viewRef.context = this.getContext();
    }

    if (this.componentRef) {
      this.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    }

    if (!content) {
      return;
    }

    this.viewContainerRef.clear();

    if (isPolymorphComponent(this.content)) {
      const proxy = new Proxy(this.context ?? ({} as unknown as C), {
        get: (_, key): unknown => this.context[key as keyof C],
      });
      const injector = this.content.createInjector(this.injector, proxy);
      this.componentRef = this.viewContainerRef.createComponent(this.content.component, {
        injector: injector,
      });
    } else {
      this.viewRef = this.viewContainerRef.createEmbeddedView(this.template, this.getContext(), {
        injector: this.injector,
      });
    }
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngDoCheck(): void {
    if (isPolymorphDirective(this.content)) {
      this.content.check();
    }
  }

  private getContext(): unknown {
    return isTemplate(this.content)
      ? this.context
      : new PrimitiveContext(typeof this.content === 'function' ? this.content(this.context) : this.content);
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
function isTemplate<C extends object>(
  content: PolymorphContent<C> | null
): content is PolymorphTemplate<C> | TemplateRef<C> {
  return isPolymorphDirective(content) || content instanceof TemplateRef;
}
