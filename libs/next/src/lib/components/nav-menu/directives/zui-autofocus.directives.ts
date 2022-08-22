import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[zuiAutofocus]',
})
export class ZuiAutofocusDirective implements OnInit {
  @Input() set zuiAutofocus(condition: boolean) {
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
