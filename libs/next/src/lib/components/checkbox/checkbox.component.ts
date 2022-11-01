import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { pzmWatch } from '../../observables';

@Component({
  selector: 'zui-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'zui-checkbox',
    '[attr.tabindex]': "disabled ? null : '0'",
  },
})
export class ZuiCheckboxComponent implements ControlValueAccessor, OnDestroy, OnChanges, OnInit {
  @Input() @HostBinding('attr.data-size') public size: 's' | 'l' = 's';

  @Input() indeterminate = false;
  @Input() host: HTMLElement | null = null;
  @Input() @HostBinding('class.zui-checkbox--disabled') disabled = false;
  @Input() @HostBinding('class.zui-checkbox--required') required = false;

  private _checked = false;
  get checked(): boolean {
    return this._checked;
  }
  @Input() set checked(val: boolean) {
    if (this.ngControl) return;
    this.setValue(val);
  }

  @Output() changed = new EventEmitter<boolean>();

  @HostBinding('attr.testId')
  readonly testId = 'pzm_checkbox';

  changeFn: (value: boolean) => void;
  touchedFn: () => void;
  private readonly destroyElement$ = new Subject<void>();


  constructor(
    private readonly el: ElementRef,
    @Optional() @Self() private ngControl: NgControl, private cdr: ChangeDetectorRef) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.initListener();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.host) this.initListener();
  }

  ngOnDestroy(): void {
    this.destroyElement$.next();
    this.destroyElement$.complete();
  }

  private onClick(event: Event): void {
    event.preventDefault();
    if (this.disabled) {
      return;
    }

    this._checked = !this._checked;
    this.indeterminate = false;

    if (this.ngControl) {
      this.touchedFn();
      this.changeFn(this._checked);
    }

    this.changed.next(this._checked);
  }

  private initListener(): void {
    this.destroyElement$.next();
    const el = this.host ?? this.el.nativeElement;
    merge(
      fromEvent(
        el,
        'click',
      ),
      fromEvent<KeyboardEvent>(
        el,
        'keydown',
      ).pipe(
        filter((i) => i.key === ' ')
      )
    ).pipe(
      tap((event) => this.onClick(event)),
      pzmWatch(this.cdr),
      takeUntil(this.destroyElement$)
    ).subscribe();
  }

  private setValue(value: boolean): void {
    this.indeterminate = false;
    this._checked = value;
    this.cdr.markForCheck();
  }

  public writeValue(value: boolean): void {
    this.setValue(value);
  }

  public registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touchedFn = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

