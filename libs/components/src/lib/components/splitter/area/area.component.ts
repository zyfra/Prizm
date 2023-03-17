import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmSplitterComponent } from '../splitter.component';

@Component({
  selector: 'prizm-splitter-area',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./area.component.less'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterAreaComponent implements OnChanges {
  @Input() size: number | string | null = 0;
  @Input() minSize: number | string | null = 0;

  @HostBinding('style.flex-basis') currentSize = '0px';

  public ngOnChanges(changes: SimpleChanges): void {
    const isFirst = Object.entries(changes).every(([_, { firstChange }]) => firstChange);

    if (isFirst === false) {
      console.log('new Change', changes);
      this.splitter.stateChanges.next();
    }
  }

  public hide(): void {
    if (this.hidden === false) {
      this.elementRef.nativeElement.hidden = true;
    }
  }

  public show(): void {
    if (this.hidden !== false) {
      this.elementRef.nativeElement.hidden = false;
    }
  }

  get hidden(): boolean {
    return this.elementRef.nativeElement.hidden;
  }

  constructor(private splitter: PrizmSplitterComponent, private elementRef: ElementRef<HTMLElement>) {}
}
