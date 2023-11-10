import { ChangeDetectorRef, Component, ElementRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { noop } from 'rxjs';
import { PrizmInputTextComponent } from './input-text.component';

@Component({
  selector:
    // eslint-disable-next-line @angular-eslint/component-selector
    'div[prizmInput]',
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-filled]': '!empty',
    '[disabled]': 'disabled',
  },
  exportAs: 'prizmInputBlock',
  styleUrls: [
    'input-block.component.less',
    '../common/styles/input.component.less',
    'input-textarea.component.less',
  ],
  standalone: true,
  providers: [{ provide: PrizmInputControl, useExisting: PrizmInputBlockComponent }, PrizmDestroyService],
})
export class PrizmInputBlockComponent extends PrizmInputTextComponent implements ControlValueAccessor {
  onChange: (v: number) => void = noop;
  onTouched: () => void = noop;

  public writeValue(obj: any): void {
    super.value = obj;
  }

  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  constructor(
    @Optional() @Self() public readonly ngControl_: NgControl,
    public readonly elementRef_: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    private readonly destroy_: PrizmDestroyService,
    private readonly cdr_: ChangeDetectorRef
  ) {
    super(ngControl_, elementRef_, destroy_, cdr_);

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
}
