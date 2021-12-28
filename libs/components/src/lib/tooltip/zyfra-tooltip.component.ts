import {
  Component,
  EventEmitter,
  ViewEncapsulation,
  Output,
  TemplateRef,
  HostBinding,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { ZyfraTooltipOptionsModel } from './zyfra-tooltip.model';

@Component({
  selector: 'zyfra-tooltip',
  templateUrl: './zyfra-tooltip.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTooltipComponent {
  @HostBinding('style.top.px') get topParam(): number {
    return this.options.top;
  }
  @HostBinding('style.left.px') get leftParam(): number {
    return this.options.left;
  }

  set options(op: ZyfraTooltipOptionsModel) {
    this._options = op;
    this.hostClasses = op.className;
  }
  get options(): ZyfraTooltipOptionsModel {
    return this._options;
  }

  get hasTemplateRef(): boolean {
    return this._options.content instanceof TemplateRef;
  }
  @HostBinding('class') hostClasses = '';

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  private _options: ZyfraTooltipOptionsModel;
  @HostListener('animationend', ['$event'])
  public animationend(event: AnimationEvent): void {
    if (event.animationName === 'tooltipOut') {
      this.close.emit(true);
    }
  }
}
