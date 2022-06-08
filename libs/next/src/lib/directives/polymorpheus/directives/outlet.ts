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
import {PolymorpheusComponent} from '../classes/component';
import {PrimitiveContext} from '../classes/primitive-context';
import {PolymorpheusContent} from '../types/content';
import {PolymorpheusTemplate} from './template';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[polymorpheusOutlet]',
})
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
export class PolymorpheusOutletDirective<C extends Record<string, unknown>> implements OnChanges, DoCheck {
    private viewRef?: EmbeddedViewRef<unknown>;

    private componentRef?: ComponentRef<unknown>;

    @Input('polymorpheusOutlet')
    content: PolymorpheusContent<C> = '';

    @Input('polymorpheusOutletContext')
    context!: C;

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly injector: Injector,
        private readonly templateRef: TemplateRef<PrimitiveContext>,
    ) {}

    private get template(): TemplateRef<unknown> {
        if (isDirective(this.content)) {
            return this.content.template;
        }

        return this.content instanceof TemplateRef ? this.content : this.templateRef;
    }

    // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
    ngOnChanges({content}: SimpleChanges): void {
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

        if (isComponent(this.content)) {
            const proxy = new Proxy(this.context, {
                get: (_, key): unknown => this.context[key as keyof C],
            });
            const injector = this.content.createInjector(this.injector, proxy);
            const componentFactory = injector
                .get(ComponentFactoryResolver)
                .resolveComponentFactory(this.content.component);

            this.componentRef = this.viewContainerRef.createComponent(
                componentFactory,
                0,
                injector,
            );
        } else {
            this.viewRef = this.viewContainerRef.createEmbeddedView(
                this.template,
                this.getContext(),
            );
        }
    }

    // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
    ngDoCheck() {
        if (isDirective(this.content)) {
            this.content.check();
        }
    }

    private getContext(): unknown {
        return isTemplate(this.content)
            ? this.context
            : new PrimitiveContext(
                  typeof this.content === 'function'
                      ? this.content(this.context)
                      : this.content,
              );
    }
}

function isDirective<C extends Record<string, unknown>>(
    content: PolymorpheusContent<C> | null,
): content is PolymorpheusTemplate<C> {
    return content instanceof PolymorpheusTemplate;
}

function isComponent<C extends Record<string, unknown>>(
    content: PolymorpheusContent<C> | null,
): content is PolymorpheusComponent<Record<string, unknown>, C> {
    return content instanceof PolymorpheusComponent;
}

function isTemplate<C extends Record<string, unknown>>(
    content: PolymorpheusContent<C> | null,
): content is PolymorpheusTemplate<C> | TemplateRef<C> {
    return isDirective(content) || content instanceof TemplateRef;
}
