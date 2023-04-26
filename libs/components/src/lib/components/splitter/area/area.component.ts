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
  private _size: number | null;
  @Input() set size(value: number | null) {
    this.setSize(value);
    this.splitterService.areaInputSizeChange$$.next(this);
  }
  get size(): number | null {
    return this._size;
  }

  @Input() minSize = 0;
  @Output() areaMinSize = new EventEmitter();

  @HostBinding('style.order') order: number;
  @HostBinding('style.flex-basis') currentSize: string;

  public hide(): void {
    this.elementRef.nativeElement.hidden = true;
  }

  public show(): void {
    this.elementRef.nativeElement.hidden = false;
  }

  get hidden(): boolean {
    return this.elementRef.nativeElement.hidden;
  }

  public setCurrentSize(guttersSize: number): void {
    if (this._size === null) {
      this.hide();
    } else {
      this.show();
      this.currentSize = `calc(${this._size}% - ${guttersSize}px)`;
    }
  }

  public setSize(size: number): void {
    this._size = size;
  }

  public setCurrentSizeFromReal(realSize: number): void {
    this.currentSize = realSize + '%';
  }

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef,
    private splitterService: PrizmSplitterService
  ) {}
}
