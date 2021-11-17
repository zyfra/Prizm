import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'zyfra-tab-panel',
  templateUrl: './zyfra-tab-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraTabPanelComponent {
  @ContentChild('header') public headerTemplate: TemplateRef<any>;
  @ContentChild('content') public contentTemplate: TemplateRef<any>;

  @ViewChild(TemplateRef) implicitContent: TemplateRef<any>;
  @Input() selected: boolean = false;
  @Input() closable: boolean = false;
  @Input() headerStyle: string = null;
  @Input() headerStyleClass: string = null;
  @Input() cache: boolean = true;
  @Input() tooltip: any = null;
  @Input() tooltipStyleClass: string = null;
  @Input() tooltipPosition: 'right' | 'left' | 'top' | 'bottom' = 'top';
  @Input() tooltipPositionStyle: string = 'absolute';

  @Input() set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.propChange.emit();
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input() set header(header: string) {
    this._header = header;
    this.propChange.emit();
  }

  get header(): string {
    return this._header;
  }

  @Input() set leftIcon(leftIcon: string) {
    this._leftIcon = leftIcon;
    this.propChange.emit();
  }

  get leftIcon(): string {
    return this._leftIcon;
  }

  @Input() set rightIcon(rightIcon: string) {
    this._rightIcon = rightIcon;
    this.propChange.emit();
  }

  get rightIcon(): string {
    return this._rightIcon;
  }

  @Output() propChange: EventEmitter<void> = new EventEmitter();

  private _header: string = null;
  private _disabled: boolean = false;
  private _leftIcon: string = null;
  private _rightIcon: string = null;
}
