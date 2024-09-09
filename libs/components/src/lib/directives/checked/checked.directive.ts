import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'input[prizmChecked], input[prizmCheckedChange]',
  standalone: true,
})
export class PrizmCheckedDirective {
  @Input()
  set prizmChecked(checked: null | boolean) {
    this.updateProperty('checked', checked || false);
    this.updateProperty('indeterminate', checked === null);
  }

  @Output()
  readonly prizmCheckedChange = new EventEmitter<boolean>();

  constructor(
    @Inject(ElementRef)
    private readonly element: ElementRef<HTMLInputElement>,
    @Inject(Renderer2) private readonly renderer: Renderer2
  ) {
    this.updateProperty('checked', false);
  }

  @HostListener('change', ['$event.target'])
  public onChange({ checked }: HTMLInputElement): void {
    this.updateProperty('indeterminate', false);
    this.prizmCheckedChange.emit(checked);
  }

  private updateProperty(property: 'checked' | 'indeterminate', value: boolean): void {
    this.renderer.setProperty(this.element.nativeElement, property, value);
  }
}
