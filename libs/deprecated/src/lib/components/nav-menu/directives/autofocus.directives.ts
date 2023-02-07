import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[prizmAutofocus]',
})
export class PrizmAutofocusDirective implements OnInit {
  @Input() set prizmAutofocus(condition: boolean) {
    this.focus = condition !== false;
  }

  private focus = true;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.focus) {
      this.el.nativeElement.focus();
    }
  }
}
