import {
  Directive, ElementRef,
  Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[zyfraAutofocus]'
})
export class ZyfraAutofocusDirective implements OnInit {
  @Input() set zyfraAutofocus(condition: boolean) {
    this.focus = condition !== false;
  }

  private focus = true;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.focus) {
      this.el.nativeElement.focus();
    }
  }
}
