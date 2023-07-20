import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  HostBinding,
} from '@angular/core';
import { AbstractPrizmTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent extends AbstractPrizmTestId {
  @Input() withBackButton = false;
  @Input() header: string = null;
  @Input() subheader: string = null;

  @Output() backClick: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('headerElement', { static: true }) public headerRef: ElementRef;

  override readonly testId_ = 'ui_panel';

  public back(): void {
    this.backClick.emit();
  }
}
