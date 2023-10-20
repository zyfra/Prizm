import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[prizmInputCorrector]',
  providers: [PrizmDestroyService],
})
export class PrizmInputCorrectorDirective implements OnInit {
  @Input('prizmInputCorrector') corrector: ((value: string) => string) | null = null;
  @Input() needCorrect: (value: string) => boolean = () => true;

  private readonly inputs$ = new Subject<any>();

  @HostListener('paste', [])
  @HostListener('input', [])
  onInputOrPaste(): void | false {
    this.inputs$.next(this.el.nativeElement.value);
  }

  constructor(
    private readonly el: ElementRef<HTMLInputElement>,
    @Optional() @Self() private ngControl: NgControl,
    private cdr: ChangeDetectorRef,
    private destroy$: PrizmDestroyService
  ) {
    this.overrideSetValue();
  }

  private overrideSetValue(): void {
    if (this.ngControl.control) {
      const originFunc = this.ngControl.control.setValue;
      const self = this;
      this.ngControl.control.setValue = function (value, options) {
        const newValue = self.correctValue(value);
        originFunc.call(this, newValue, options);
        self.updateNativeValue(newValue);
      };
    }
  }

  private correctValue(value: string): typeof value {
    if (!this.needCorrect(value)) return value;
    if (!this.corrector) return value;
    return this.corrector(value);
  }

  private updateNativeValue(value: string): void {
    this.el.nativeElement.value = value;
  }

  private updateNgValue(value: string): void {
    this.ngControl?.control?.setValue(value);
  }

  ngOnInit(): void {
    this.inputs$
      .pipe(
        debounceTime(100),
        tap(value => {
          const correctValue = this.correctValue(value);
          if (correctValue !== value) {
            this.updateNativeValue(correctValue);
            this.updateNgValue(correctValue);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
