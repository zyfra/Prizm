import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmIconModule } from '../icon';
import { PrizmButtonModule } from '../button';

@Component({
  selector: 'prizm-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less'],
  standalone: true,
  imports: [CommonModule, PrizmIconModule, PrizmButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent extends PrizmAbstractTestId {
  @Input() withBackButton = false;
  @Input() header: string | null = null;
  @Input() subheader: string | null = null;

  @Output() backClick: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('headerElement', { static: true }) public headerRef!: ElementRef;

  override readonly testId_ = 'ui_panel';

  public back(): void {
    this.backClick.emit();
  }
}

export const PrizmPanelComponent = PanelComponent;
