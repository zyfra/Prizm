import { ComponentFactoryResolver, Directive, Input, OnChanges, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[zyfraApp]',
})
export class AppDirective<T> implements OnChanges {
  @Input() zyfraApp: Type<T>;

  constructor(private cfr: ComponentFactoryResolver, private vcr: ViewContainerRef) {}

  ngOnChanges(): void {
    if (this.zyfraApp) {
      const componentFactory = this.cfr.resolveComponentFactory(this.zyfraApp);
      this.vcr.createComponent(componentFactory);
    }
  }
}
