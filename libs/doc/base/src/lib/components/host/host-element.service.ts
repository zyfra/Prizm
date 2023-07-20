import { ComponentFactoryResolver, ElementRef, Injectable, OnDestroy, Type } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { PrizmDocumentationPropertyType } from '../../types/pages';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { PrizmPageService } from '../page/page.service';
import { PrizmDocHostElementListenerService } from './host-element-listener.service';

export type PrizmDocHosSet = {
  type: string;
  key: string;
};

@Injectable()
export class PrizmDocHostElementService implements OnDestroy {
  private readonly hostElementMap = new Map<string, ElementRef>();
  private readonly hostElementMap$$ = new BehaviorSubject(this.hostElementMap);
  private readonly subscription = new Subscription();

  public outputs: Map<string, { propName: string; templateName: string }[]> = new Map();
  public inputs: Map<string, { propName: string; templateName: string }[]> = new Map();
  public readonly componentInfo: Map<
    string,
    {
      selector: string;
      type: unknown;
      name: string;
    }
  > = new Map();

  public readonly emitInfoAboutCheckResult$$ = new Subject<void>();

  private readonly destroyListener$ = new Subject<void>();
  // public readonly inputOutputMap = new Map<string, PrizmDocHosSet>();
  public readonly outputMap = new Map<string, Map<string, PrizmDocHosSet>>();
  public readonly inputMap = new Map<string, Map<string, PrizmDocHosSet>>();
  public safeReInit(): void {
    this.destroyListener$.next();
    this.hostElementMap$$
      .pipe(
        takeUntil(this.destroyListener$),
        tap(map => {
          const entries = [...map.entries()];
          entries.forEach(([hostKey, el]) => {
            this.updateComponentInfo(hostKey, el);
            this.emitInfoAboutCheckResult$$.next();
          });
        })
      )
      .subscribe();
  }

  private getListComponentInputsOutputs<T>(componentClass: Type<T>) {
    const inputs = new Map<string, string>();
    const outputs = new Map<string, string>();
    let selector: string | null = null;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const componentMetadata = componentClass['ɵcmp'] || componentClass['ɵdir'];
    if (componentMetadata) {
      selector = componentMetadata.selectors?.[0]?.[0] as string;
      const inputProperties = componentMetadata.inputs;
      const outputProperties = componentMetadata.outputs;

      for (const inputName in inputProperties) {
        const classPropertyName = inputProperties[inputName];
        const inputFromSet = inputs.get(classPropertyName);
        if (inputFromSet && inputFromSet !== classPropertyName) continue;
        inputs.set(classPropertyName, inputName);
      }

      for (const outputKey in outputProperties) {
        const classPropertyName = outputProperties[outputKey];
        const nameFromSet = outputs.get(classPropertyName);
        if (nameFromSet && nameFromSet !== classPropertyName) continue;
        outputs.set(classPropertyName, outputKey);
      }
    } else {
      console.error('The provided class is not an Angular component.');
    }

    return {
      inputs: [...inputs.values()],
      inputProperties: [...inputs.keys()],
      outputs: [...outputs.values()],
      outputProperties: [...outputs.keys()],
      origin: {
        inputs: componentMetadata.inputs,
        outputs: componentMetadata.outputs,
      },
      selector,
    };
  }

  private updateComponentInfo(listenerElementKey: string, el: ElementRef): void {
    const currentOutputMap = this.outputMap.get(listenerElementKey) || new Map();
    const metaComponentData = this.getListComponentInputsOutputs(el.nativeElement.constructor);

    this.outputs.set(
      listenerElementKey,
      metaComponentData.outputs.map(i => ({
        propName: i,
        templateName: i,
      }))
    );
    this.inputs.set(
      listenerElementKey,
      metaComponentData.inputs.map(i => ({
        propName: i,
        templateName: i,
      }))
    );
    this.componentInfo.set(listenerElementKey, {
      selector: metaComponentData.selector,
      type: el.nativeElement.constructor.name,
      name: el.nativeElement.constructor.name,
    });

    const notSpecifiedKeys = metaComponentData.outputs.map(i => i).filter(key => !currentOutputMap.has(key));
    currentOutputMap.forEach(({ key, type }) => {
      this.addOutputListener(listenerElementKey, el, type, metaComponentData.origin.outputs[key]);
    });
    notSpecifiedKeys.forEach(key => {
      this.addOutputListener(listenerElementKey, el, 'unknown', metaComponentData.origin.outputs[key], true);
    });
  }

  private initChecker(): void {
    this.subscription.add(
      this.emitInfoAboutCheckResult$$
        .pipe(
          debounceTime(500),
          tap(() => {
            this.emitInfoAboutCheckResult();
          })
        )
        .subscribe()
    );
  }

  private addOutputListener(
    listenerElementKey: string,
    el: ElementRef<any>,
    type: string,
    eventRealKey: string,
    hasNotListener = false
  ): void {
    if (!el.nativeElement?.[eventRealKey]) {
      console.error(`Prizm component output <${eventRealKey}> does not exists`, {
        name: eventRealKey,
        el: el.nativeElement,
      });
      return;
    }

    el.nativeElement?.[eventRealKey]
      ?.pipe(
        takeUntil(this.destroyListener$),
        tap(data => {
          this.emit(listenerElementKey, data, type, eventRealKey, hasNotListener);
        })
      )
      .subscribe();
  }

  private emitInfoAboutCheckResult(): void {
    [...this.componentInfo.keys()].forEach(key => {
      this.emitInfoSingle(key);
    });
  }

  private emit(
    listenerElementKey: string,
    data: unknown,
    type: string,
    event: string,
    hasNotListener: boolean
  ): void {
    this.prizmDocHostElementListenerService.emit(
      hasNotListener,
      listenerElementKey,
      data,
      event,
      type,
      this.prizmPageService.info
    );
  }

  private emitInfoSingle(key: string): void {
    const allOutputs = this.outputs.get(key).map(i => i.propName);
    const allInputs = this.inputs.get(key).map(i => i.propName);
    const allListenerInputs = this.inputMap.get(key)?.values()
      ? [...this.inputMap.get(key).values()].map(i => i.key)
      : [];
    const allListenerOutputs = this.outputMap.get(key)?.values()
      ? [...(this.outputMap.get(key)?.values() ?? [])].map(i => i.key)
      : [];

    this.prizmDocHostElementListenerService.emitInfo({
      key,
      selector: this.componentInfo.get(key).selector,
      allOutputs,
      allInputs,
      unnecessaryInputs: allListenerInputs.filter(i => !allInputs.includes(i)),
      unnecessaryOutputs: allListenerOutputs.filter(i => !allOutputs.includes(i)),
      notListenerInputs: allInputs.filter(i => !this.inputMap.get(key)?.has(i)),
      notListenerOutputs: allOutputs.filter(i => !this.outputMap.get(key)?.has(i)),
    });
  }

  public setHostElement(key: string, hostElement: ElementRef): void {
    this.hostElementMap.set(key, new ElementRef<any>(hostElement));
    this.hostElementMap$$.next(this.hostElementMap);
  }

  public getHostElement(key: string): ElementRef<any> | null {
    return this.hostElementMap.get(key) ?? null;
  }

  constructor(
    private readonly prizmPageService: PrizmPageService,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly prizmDocHostElementListenerService: PrizmDocHostElementListenerService
  ) {
    this.initChecker();
  }

  public destroy(): void {
    this.hostElementMap$$.complete();
    this.hostElementMap$$.unsubscribe();
    this.subscription.unsubscribe();
    this.destroyListener$.next();
    this.destroyListener$.complete();
  }

  public ngOnDestroy(): void {
    this.destroy();
  }

  public addListener(
    key: string,
    propertyMode: PrizmDocumentationPropertyType,
    propertyType: string,
    event: string
  ): void {
    const currentOutputMap = this.outputMap.get(key) ?? new Map();
    const currentInputMap = this.inputMap.get(key) ?? new Map();

    switch (propertyMode) {
      case 'input-output':
        {
          const emitEventKey = `${event}Change`;
          currentOutputMap.set(emitEventKey, {
            key: emitEventKey,
            type: propertyType,
          });
          currentInputMap.set(event, {
            key: event,
            type: propertyType,
          });
        }
        break;
      case 'output':
        currentOutputMap.set(event, {
          key: event,
          type: propertyType,
        });
        break;
      case 'input':
        currentInputMap.set(event, {
          key: event,
          type: propertyType,
        });
        break;
    }

    this.outputMap.set(key, currentOutputMap);
    this.inputMap.set(key, currentInputMap);
    this.safeReInit();
  }
}
