import { Component, Input, Output, EventEmitter } from '@angular/core';

type SliderOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'zyfra-slider',
  templateUrl: './zyfra-slider.component.html',
})
export class ZyfraSliderComponent {
  @Input() model: number | number[];
  @Input() animate: boolean;
  @Input() disabled: boolean;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() orientation: SliderOrientation = 'horizontal'; //| "vertical"
  @Input() step: number = 1;
  @Input() range: boolean;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() tabindex: number;
  @Input() ariaLabelledBy: string;

  /* onChange */
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  /* onSlideEnd */
  @Output() onSlideEnd: EventEmitter<any> = new EventEmitter();

  onChangeHandler(event) {
    //console.log(event, 'event');
    if (event.value) this.model = event.value;
    if (event.values) this.model = event.values;
    this.onChange.emit(this.model);
  }

  onSlideEndHandler(event) {
    this.onSlideEnd.emit(event);
  }
}
