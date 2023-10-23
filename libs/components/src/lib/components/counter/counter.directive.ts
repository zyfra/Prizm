import {
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Input,
  OnChanges,
  OnDestroy,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { PrizmCounterComponent } from './counter.component';
import { PrizmCounterPosition, PrizmCounterStatus } from './counter.models';

@Directive({
  selector: '[prizmCounter]',
})
export class PrizmCounterDirective implements OnChanges, OnDestroy {
  @Input() counterDisabled = false;

  @Input() counterStatus: PrizmCounterStatus = 'info';

  @Input() counterPosition: PrizmCounterPosition = 'tr';

  @Input() prizmCounter: number | string | undefined;

  private vcr: ViewContainerRef;
  private counterRef!: ComponentRef<PrizmCounterComponent>;

  constructor(private elRef: ElementRef<HTMLElement>) {
    this.vcr = inject(ViewContainerRef);
    if (!this.elRef.nativeElement.style.position || this.elRef.nativeElement.style.position === 'static') {
      this.elRef.nativeElement.style.position = 'relative';
    }
  }

  ngOnChanges(chages: any): void {
    console.log(chages);
    this.updateCounter();
  }

  ngOnDestroy() {
    if (this.counterRef) {
      this.counterRef.destroy();
    }
  }

  private updateCounter() {
    if (!this.counterRef) {
      this.create();
    }

    this.setCounterData();
    this.setPosition();
  }

  private create(): void {
    this.counterRef = this.vcr.createComponent(PrizmCounterComponent);
    const counter = (this.counterRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.elRef.nativeElement.appendChild(counter);
  }

  private setCounterData(): void {
    this.counterRef.instance.value = this.prizmCounter;
    this.counterRef.instance.status = this.counterStatus;
    this.counterRef.instance.disabled = this.counterDisabled;
  }

  private setPosition() {
    this.counterRef.instance.class = `counter counter_${this.counterPosition}`;
  }
}
