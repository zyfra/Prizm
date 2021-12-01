import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { DynamicDialogComponent, DynamicDialogConfig, DynamicDialogInjector, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ZyfraDynamicDialogRef } from '.';
import { ZyfraDynamicDialogConfig } from './zyfra-dynamic-dialog-config';

@Injectable()
export class ZyfraDynamicDialogService {

  public dialogComponentRefMap: Map<DynamicDialogRef, ComponentRef<DynamicDialogComponent>> = new Map();
  public config: ZyfraDynamicDialogConfig;
  public ref: ZyfraDynamicDialogRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  public open(componentType: Type<unknown>, config: ZyfraDynamicDialogConfig): ZyfraDynamicDialogRef {
    const dialogRef = this.appendDialogComponentToBody(config);
    this.config = config;
    this.ref = dialogRef;
    this.dialogComponentRefMap.get(dialogRef).instance.childComponentType = componentType;

    return dialogRef;
  }

  private appendDialogComponentToBody(config: DynamicDialogConfig): DynamicDialogRef {
    const map = new WeakMap();
    map.set(DynamicDialogConfig, config);

    const dialogRef = new DynamicDialogRef();
    map.set(DynamicDialogRef, dialogRef);

    const sub = dialogRef.onClose.subscribe(() => {
      this.dialogComponentRefMap.get(dialogRef).instance.close();
    });

    const destroySub = dialogRef.onDestroy.subscribe(() => {
      this.removeDialogComponentFromBody(dialogRef);
      destroySub.unsubscribe();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicDialogComponent);
    const componentRef = componentFactory.create(new DynamicDialogInjector(this.injector, map));

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<unknown>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRefMap.set(dialogRef, componentRef);

    return dialogRef;
  }

  private removeDialogComponentFromBody(dialogRef: DynamicDialogRef): void {
    if (!dialogRef || !this.dialogComponentRefMap.has(dialogRef)) {
      return;
    }

    const dialogComponentRef = this.dialogComponentRefMap.get(dialogRef);
    this.appRef.detachView(dialogComponentRef.hostView);
    dialogComponentRef.destroy();
    this.dialogComponentRefMap.delete(dialogRef);
  }
}
