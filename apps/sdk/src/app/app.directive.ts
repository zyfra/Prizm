import { ComponentFactoryResolver, Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[zyfraApp]',
})
export class AppDirective<T> implements OnInit {
  @Input() zyfraApp: Type<T>;

  constructor(private cfr: ComponentFactoryResolver, private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    const componentFactory = this.cfr.resolveComponentFactory(this.zyfraApp);
    this.vcr.createComponent(componentFactory);
  }
}
