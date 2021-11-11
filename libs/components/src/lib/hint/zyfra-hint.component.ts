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
import { ZyfraHintOptionsModel } from './zyfra-hint.model';

@Component({
  selector: 'zyfra-hint',
  templateUrl: './zyfra-hint.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraHintComponent {
  @HostBinding('style.top.px') get topParam(): number {
    return this.options.top;
  }
  @HostBinding('style.left.px') get leftParam(): number {
    return this.options.left;
  }

  set options(op: ZyfraHintOptionsModel) {
    this._options = op;
    this.hostClasses = op.className;
  }
  get options(): ZyfraHintOptionsModel {
    return this._options;
  }

  get hasTemplateRef(): boolean {
    return this._options.content instanceof TemplateRef;
  }
  @HostBinding('class') hostClasses = '';

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  private _options: ZyfraHintOptionsModel;
  @HostListener('animationend', ['$event']) animationend(event: AnimationEvent): void {
    if (event.animationName === 'hintOut') {
      this.close.emit(true);
    }
  }
}
