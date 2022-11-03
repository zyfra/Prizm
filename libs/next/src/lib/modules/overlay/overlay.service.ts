import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { PzmOverlayDefaultConfig } from './config';
import {
  PzmOverlayConfig,
  PzmOverlayContent,
  PzmOverlayContentData,
  PzmOverlayContentProps,
  PzmOverlayContentType,
  PzmOverlayId,
  PzmOverlayInputs,
  PzmOverlayInsidePlacement,
} from './models';
import { PzmOverlayGlobalPosition } from './position';
import { PzmOverlayAbstractPosition } from './position/position';
import { EventBus, getContent } from './utils';
import { pzmGenerateId } from '../../util';
import { PzmOverlayControl } from './overlay-control';
import { PzmOverlayContentToken } from './token';

@Injectable({
  providedIn: 'root'
})
export class PzmOverlayService {
  static controls: { [key: string]: PzmOverlayControl } = {};
  private zid: PzmOverlayId;
  private inputs: PzmOverlayInputs = {
    position: null,
    config: PzmOverlayDefaultConfig,
    content: { type: PzmOverlayContentType.STRING, data: '', props: {} },
    zid: null
  };

  constructor(private injector: Injector) {
    this.inputs.position = new PzmOverlayGlobalPosition({ placement: PzmOverlayInsidePlacement.TOP });
  }

  public position<T extends PzmOverlayAbstractPosition<any>>(position: T): PzmOverlayService {
    this.inputs.position = position;
    return this;
  }

  public config(config: Partial<PzmOverlayConfig>): PzmOverlayService {
    this.inputs.config = { ...PzmOverlayDefaultConfig, ...config };
    return this;
  }

  public content(data: PzmOverlayContentData, props: PzmOverlayContentProps = {}): PzmOverlayService {
    this.inputs.content = getContent(data, props);
    return this;
  }

  public create({key, parentInjector}: {
    key?: string,
    parentInjector?: Injector
  } = {}): PzmOverlayControl {
    this.zid = this.inputs.zid = key ?? pzmGenerateId();

    const injector = Injector.create({
        providers: [
          {
            provide: PzmOverlayContentToken,
            useFactory: (): PzmOverlayContent => this.inputs.content
          },
          {
            provide: PzmOverlayControl,
            deps: [ApplicationRef, ComponentFactoryResolver, Injector]
          }
        ],
        parent: parentInjector ?? this.injector
    });

    const tc = injector.get(PzmOverlayControl);
    if (PzmOverlayService.controls[this.zid]) {
      this.zid = pzmGenerateId();
    }
    this.inputs.position.init(this.zid);
    PzmOverlayService.controls[this.zid] = Object.assign(tc, this.inputs);
    return tc;
  }

  public getCtrl(zid: PzmOverlayId): PzmOverlayControl {
    return PzmOverlayService.controls[zid];
  }

  public destroy(): void {
    for (const key in PzmOverlayService.controls) {
      PzmOverlayService.controls[key].close();
    }
    PzmOverlayService.controls = {};
    EventBus.stop();
  }
}
