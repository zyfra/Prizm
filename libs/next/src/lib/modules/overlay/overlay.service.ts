import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ZuiOverlayDefaultConfig } from './config';
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
import { ZuiOverlayGlobalPosition } from './position';
import { PzmOverlayAbstractPosition } from './position/position';
import { EventBus, getContent } from './utils';
import { pzmGenerateId } from '../../util';
import { ZuiOverlayControl } from './overlay-control';
import { ZuiOverlayContentToken } from './token';

@Injectable({
  providedIn: 'root'
})
export class PzmOverlayService {
  static controls: { [key: string]: ZuiOverlayControl } = {};
  private zid: PzmOverlayId;
  private inputs: PzmOverlayInputs = {
    position: null,
    config: ZuiOverlayDefaultConfig,
    content: { type: PzmOverlayContentType.STRING, data: '', props: {} },
    zid: null
  };

  constructor(private injector: Injector) {
    this.inputs.position = new ZuiOverlayGlobalPosition({ placement: PzmOverlayInsidePlacement.TOP });
  }

  public position<T extends PzmOverlayAbstractPosition<any>>(position: T): PzmOverlayService {
    this.inputs.position = position;
    return this;
  }

  public config(config: Partial<PzmOverlayConfig>): PzmOverlayService {
    this.inputs.config = { ...ZuiOverlayDefaultConfig, ...config };
    return this;
  }

  public content(data: PzmOverlayContentData, props: PzmOverlayContentProps = {}): PzmOverlayService {
    this.inputs.content = getContent(data, props);
    return this;
  }

  public create({key, parentInjector}: {
    key?: string,
    parentInjector?: Injector
  } = {}): ZuiOverlayControl {
    this.zid = this.inputs.zid = key ?? pzmGenerateId();

    const injector = Injector.create({
        providers: [
          {
            provide: ZuiOverlayContentToken,
            useFactory: (): PzmOverlayContent => this.inputs.content
          },
          {
            provide: ZuiOverlayControl,
            deps: [ApplicationRef, ComponentFactoryResolver, Injector]
          }
        ],
        parent: parentInjector ?? this.injector
    });

    const tc = injector.get(ZuiOverlayControl);
    if (PzmOverlayService.controls[this.zid]) {
      this.zid = pzmGenerateId();
    }
    this.inputs.position.init(this.zid);
    PzmOverlayService.controls[this.zid] = Object.assign(tc, this.inputs);
    return tc;
  }

  public getCtrl(zid: PzmOverlayId): ZuiOverlayControl {
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
