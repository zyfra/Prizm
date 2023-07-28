import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: `[prizmAutoResize]`,
})
export class PrizmAutoResizeDirective implements OnInit {
  @Input() prizmAutoResize = true;

  constructor(private elementRef: ElementRef) {}

  @HostListener(':input')
  private onInput() {
    if (!this.prizmAutoResize) return;
    this.resize();
  }

  public ngOnInit(): void {
    if (!this.prizmAutoResize) return;
    if (this.elementRef.nativeElement.scrollHeight) {
      setTimeout(() => this.resize());
    }
  }

  public resize(): void {
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
  }
}
