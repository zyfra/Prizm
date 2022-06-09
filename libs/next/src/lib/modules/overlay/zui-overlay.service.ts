import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ZuiOverlayDefaultConfig } from './config';
import { ZuiOverlayContentData, ZuiOverlayContentProps, ZuiOverlayContentType, ZuiOverlayInputs, ZuiOverlayInsidePlacement, ZuiOverlayId, ZuiOverlayConfig } from './models';
import { ZuiOverlayGlobalPosition } from './position';
import { ZuiOverlayPosition } from './position/position';
import { ZuiOverlayControl } from './zui-overlay-control';
import { EventBus, generateID, getContent } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ZuiOverlayService {
  static controls: { [key: string]: ZuiOverlayControl } = {};
  private tid: ZuiOverlayId;
  private inputs: ZuiOverlayInputs = {
    position: null,
    config: ZuiOverlayDefaultConfig,
    content: { type: ZuiOverlayContentType.STRING, data: 'hello', props: {} },
    tid: null
  };

  constructor(private injector: Injector) {
    this.inputs.position = new ZuiOverlayGlobalPosition({ placement: ZuiOverlayInsidePlacement.TOP });
  }

  public position(position: ZuiOverlayPosition): ZuiOverlayService {
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
    this.tid = this.inputs.tid = key || generateID();

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
    if (ZuiOverlayService.controls[this.tid]) {
      this.tid = generateID();
    }
    this.inputs.position.init(this.tid);
    ZuiOverlayService.controls[this.tid] = Object.assign(tc, this.inputs);
    return tc;
  }

  public getCtrl(tid: ZuiOverlayId): ZuiOverlayControl {
    return ZuiOverlayService.controls[tid];
  }

  public destroy(): void {
    // tslint:disable-nexz-line:forin
    for (const key in ZuiOverlayService.controls) {
      ZuiOverlayService.controls[key].close();
    }
    ZuiOverlayService.controls = {};
    EventBus.stop();
  }
}
