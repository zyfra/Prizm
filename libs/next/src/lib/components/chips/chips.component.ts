import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'zui-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZuiChipsComponent),
      multi: true,
    },
  ],
})
export class ZuiChipsComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() @HostBinding('attr.data-size') public size: 's' | 'l' = 'l';
  @Input() set chips(data: string[]) {
    this.chipsList = data;
  }
  @Input() public deletable = true;
  @Input() set disabled(isDisabled: boolean) {
    this.accessorIsDisabled = isDisabled;
  }

  @Output() public addChipEvent: EventEmitter<string> = new EventEmitter();
  @Output() public removeChipEvent: EventEmitter<string> = new EventEmitter();
  @Output() public clickChipEvent: EventEmitter<string> = new EventEmitter();

  public accessorIsDisabled = false;
  public chipsList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private subscription: Subscription = new Subscription();

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onChange: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTouched: (value: unknown) => void = () => {};

  get chipsList(): string[] {
    return this.chipsList$.getValue() as string[];
  }

  set chipsList(data: string[]) {
    this.chipsList$.next(data);
  }

  public addChips(chipName: string): void {
    if (this.accessorIsDisabled) return;
    this.chipsList = [...this.chipsList, chipName];
    this.addChipEvent.emit(chipName);
    this.cdRef.markForCheck();
  }

  public removeChips(event: MouseEvent, idx: number): void {
    if (this.accessorIsDisabled) return;
    event.stopPropagation();
    this.removeChipEvent.emit(this.chipsList[idx]);
    this.chipsList = this.chipsList.filter((item, i) => i !== idx);
    this.cdRef.markForCheck();
  }

  public chipClick(chipName: string): void {
    this.clickChipEvent.emit(chipName);
  }

  public ngOnInit(): void {
    this.subscription = this.chipsList$.subscribe(chips => {
      this.onChange(chips);
    });
  }

  public ngOnDestroy(): void {
    this.chipsList$.complete();
    this.subscription.unsubscribe();
  }

  public writeValue(data: string[]): void {
    this.chipsList = data;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.accessorIsDisabled = isDisabled;
  }

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

