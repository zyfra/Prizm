import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {ZuiOverlayDefaultConfig} from './config';
import {
  ZuiOverlayConfig,
  ZuiOverlayContentData,
  ZuiOverlayContentProps,
  ZuiOverlayContentType,
  ZuiOverlayId,
  ZuiOverlayInputs,
  ZuiOverlayInsidePlacement
} from './models';
import {ZuiOverlayGlobalPosition} from './position';
import {ZuiOverlayAbstractPosition} from './position/position';
import {ZuiOverlayControl} from './zui-overlay-control';
import {EventBus, generateID, getContent} from './utils';

@Injectable({
  providedIn: 'root'
})
export class ZuiOverlayService {
  static controls: { [key: string]: ZuiOverlayControl } = {};
  private zid: ZuiOverlayId;
  private inputs: ZuiOverlayInputs = {
    position: null,
    config: ZuiOverlayDefaultConfig,
    content: { type: ZuiOverlayContentType.STRING, data: 'hello', props: {} },
    zid: null
  };

  constructor(private injector: Injector) {
    this.inputs.position = new ZuiOverlayGlobalPosition({ placement: ZuiOverlayInsidePlacement.TOP });
  }

  public position(position: ZuiOverlayAbstractPosition): ZuiOverlayService {
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

  public create(key: string = null): ZuiOverlayControl {
    this.zid = this.inputs.zid = key || generateID();

    const injector = Injector.create(
      [
        {
          provide: ZuiOverlayControl,
          deps: [ApplicationRef, ComponentFactoryResolver, Injector]
        }
      ],
      this.injector
    );

    const tc = injector.get(ZuiOverlayControl);
    if (ZuiOverlayService.controls[this.zid]) {
      this.zid = generateID();
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
