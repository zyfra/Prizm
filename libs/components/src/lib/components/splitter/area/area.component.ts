import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { PrizmSplitterService } from '../splitter.service';

@Component({
  selector: 'prizm-splitter-area',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./area.component.less'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterAreaComponent {
  static id = 0;

  id = ++PrizmSplitterAreaComponent.id;

  private _size: number | null;
  @Input() set size(value: number | null) {
    if ((value === null && this._size !== null) || (value !== null && this._size === null)) {
      this.splitterService.areasUpdate$$.next();
    }

    if (value === null) {
      this.hide();
    }

    if (value !== null) {
      this.show();
      this.splitterService.areaInputSizeChange$$.next(this);
      this.setCurrentSize(value);
      this.setSize(value);
    }

    this._size = value;
  }
  get size(): number | null {
    return this._size;
  }

  @Input() minSize = 0;
  @Output() areaMinSize = new EventEmitter();

  @HostBinding('style.order') order: number;
  @HostBinding('style.flex-basis') currentSize: string;

  markForUpdate = false;

  public hide(): void {
    this.elementRef.nativeElement.hidden = true;
  }

  public show(): void {
    this.elementRef.nativeElement.hidden = false;
  }

  get hidden(): boolean {
    return this.elementRef.nativeElement.hidden;
  }

  public setCurrentSize(size: number): void {
    this.currentSize = size + '%';
  }

  public setCurrentSizeWithCalc(gap: number): void {
    this.currentSize = `calc(${this._size}% - ${gap}px)`;
  }

  public setSize(size: number): void {
    this._size = size;
  }

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef,
    private splitterService: PrizmSplitterService
  ) {}
}
