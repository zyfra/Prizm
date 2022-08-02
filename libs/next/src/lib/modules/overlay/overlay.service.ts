import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ZuiOverlayDefaultConfig } from './config';
import {
  ZuiOverlayConfig,
  ZuiOverlayContent,
  ZuiOverlayContentData,
  ZuiOverlayContentProps,
  ZuiOverlayContentType,
  ZuiOverlayId,
  ZuiOverlayInputs,
  ZuiOverlayInsidePlacement,
} from './models';
import { ZuiOverlayGlobalPosition } from './position';
import { ZuiOverlayAbstractPosition } from './position/position';
import { EventBus, getContent } from './utils';
import { generateId } from '../../util';
import { ZuiOverlayControl } from './overlay-control';
import { ZuiOverlayContentToken } from './token';

@Injectable({
  providedIn: 'root'
})
export class ZuiOverlayService {
  static controls: { [key: string]: ZuiOverlayControl } = {};
  private zid: ZuiOverlayId;
  private inputs: ZuiOverlayInputs = {
    position: null,
    config: ZuiOverlayDefaultConfig,
    content: { type: ZuiOverlayContentType.STRING, data: '', props: {} },
    zid: null
  };

  constructor(private injector: Injector) {
    this.inputs.position = new ZuiOverlayGlobalPosition({ placement: ZuiOverlayInsidePlacement.TOP });
  }

  public position<T extends ZuiOverlayAbstractPosition<any>>(position: T): ZuiOverlayService {
    this.inputs.position = position;
    return this;
  }

  public config(config: Partial<ZuiOverlayConfig>): ZuiOverlayService {
    this.inputs.config = { ...ZuiOverlayDefaultConfig, ...config };
    return this;
  }

  public content(data: ZuiOverlayContentData, props: ZuiOverlayContentProps = {}): ZuiOverlayService {
    this.inputs.content = getContent(data, props);
    return this;
  }

  public create({key, parentInjector}: {
    key?: string,
    parentInjector?: Injector
  } = {}): ZuiOverlayControl {
    this.zid = this.inputs.zid = key ?? generateId();

    const injector = Injector.create({
        providers: [
          {
            provide: ZuiOverlayContentToken,
            useFactory: (): ZuiOverlayContent => this.inputs.content
          },
          {
            provide: ZuiOverlayControl,
            deps: [ApplicationRef, ComponentFactoryResolver, Injector]
          }
        ],
        parent: parentInjector ?? this.injector
    });

    const tc = injector.get(ZuiOverlayControl);
    if (ZuiOverlayService.controls[this.zid]) {
      this.zid = generateId();
    }
    this.inputs.position.init(this.zid);
    ZuiOverlayService.controls[this.zid] = Object.assign(tc, this.inputs);
    return tc;
  }

  public getCtrl(zid: ZuiOverlayId): ZuiOverlayControl {
    return ZuiOverlayService.controls[zid];
  }

  public destroy(): void {
    for (const key in ZuiOverlayService.controls) {
      ZuiOverlayService.controls[key].close();
    }
    ZuiOverlayService.controls = {};
    EventBus.stop();
  }
}
