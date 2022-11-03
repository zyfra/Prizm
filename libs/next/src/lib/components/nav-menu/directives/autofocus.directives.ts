import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[pzmAutofocus]',
})
export class PzmAutofocusDirective implements OnInit {
  @Input() set pzmAutofocus(condition: boolean) {
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
