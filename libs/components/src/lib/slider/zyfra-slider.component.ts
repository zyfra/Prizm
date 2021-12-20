import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type SliderOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'zyfra-slider',
  templateUrl: './zyfra-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraSliderComponent {
  @Input() model: number | number[];
  @Input() animate: boolean;
  @Input() disabled: boolean;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() orientation: SliderOrientation = 'horizontal';
  @Input() step: number = 1;
  @Input() range: boolean;
  @Input() style: string;
  @Input() styleClass: string = '';
  @Input() tabindex: number;
  @Input() ariaLabelledBy: string;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onSlideEnd: EventEmitter<any> = new EventEmitter();

  get styleClasses(): string {
    return `${this.range ? 'zyfra-slider_range ' : ''} ${this.styleClass}`;
  }

  onChangeHandler(event): void {
    if (event.value) this.model = event.value;
    if (event.values) this.model = event.values;
    this.onChange.emit(this.model);
  }

  onSlideEndHandler(event): void {
    this.onSlideEnd.emit(event);
  }
}
