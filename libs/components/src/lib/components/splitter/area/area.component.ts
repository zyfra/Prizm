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
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-splitter-area',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./area.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterAreaComponent extends PrizmAbstractTestId {
  static id = 0;
  override readonly testId_ = 'ui_splitter--area';
  id = ++PrizmSplitterAreaComponent.id;

  private _size!: number | null;
  @Input() set size(value: number | null) {
    if (value === null) {
      this.hide();
      this.setSize(value ?? 0);
      this.setCurrentSize(0);
    }

    if (value !== null) {
      this.show();
      this.setCurrentSize(value);
      this.setSize(value);
    }

    this.splitterService.areaInputSizeChange$$.next(this);
  }
  get size(): number | null {
    return this._size;
  }

  @Input() minSize = 0;
  @Output() areaMinSize = new EventEmitter();

  @HostBinding('style.order') order!: number;
  @HostBinding('style.flex-basis') currentSize!: string;

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
  ) {
    super();
  }
}
