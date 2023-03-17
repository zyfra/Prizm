import { Component, Directive, HostBinding, Input } from '@angular/core';
import { PrizmSplitterAreaComponent } from '../area/area.component';

@Component({
  selector: 'prizm-splitter-gutter',
  template: `<div class="container"><ng-content></ng-content></div>`,
  styleUrls: ['./gutter.component.less'],
})
export class PrizmSplitterGutterComponent {
  @Input() @HostBinding('class.areaBefore') areaBefore: PrizmSplitterAreaComponent | null;
  @Input() @HostBinding('class.areaAfter') areaAfter: PrizmSplitterAreaComponent | null;
}
