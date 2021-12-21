import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

type SliderOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'zyfra-slider',
  templateUrl: './zyfra-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraSliderComponent extends WrappedFormComponent implements ControlValueAccessor {
  @Input() animate: boolean;
  @Input() disabled: boolean; // TODO remove, use FormControl disabled
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() orientation: SliderOrientation = 'horizontal';
  @Input() step: number = 1;
  @Input() range: boolean;
  @Input() style: string;
  @Input() styleClass: string = '';
  @Input() tabindex: number;
  @Input() ariaLabelledBy: string;

  @Output() onSlideEnd: EventEmitter<any> = new EventEmitter();

  get styleClasses(): string {
    return `${this.range ? 'zyfra-slider_range ' : ''} ${this.styleClass}`;
  }

  onSlideEndHandler(event): void {
    this.onSlideEnd.emit(event);
  }

  override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}
