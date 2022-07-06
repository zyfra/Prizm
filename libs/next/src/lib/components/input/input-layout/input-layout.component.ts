import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PolymorpheusContent } from '../../../directives';
import { ZuiInputControl } from '../input-directives/zui-input-control.class';
import { ZuiInputStatusTextDirective } from '../input-directives/zui-input-status-text.directive';
import { ZuiInputSize, ZuiInputStatus } from '../models/zui-input.models';

@Component({
  selector: 'zui-input-layout',
  templateUrl: './input-layout.component.html',
  styleUrls: ['./input-layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'zui-input-layout',
  },
})
export class InputLayoutComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit {
  @Input() label: string;

  @Input() size: ZuiInputSize = 'l';

  @Input() outer: boolean | string = false;
  @Input() status: ZuiInputStatus = 'default';

  @ContentChild(ZuiInputControl, { static: true }) control: ZuiInputControl<any>;
  @ContentChild(ZuiInputStatusTextDirective, { static: false }) inputStatusText: ZuiInputStatusTextDirective;

  public statusIcon: string;
  public statusMessage: PolymorpheusContent | null;

  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);

  private subscriptions: Subscription = new Subscription();

  constructor(private readonly injector: Injector) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.control.stateChanges.subscribe(() => {
        this.actualaizeStatus();
        this.cdr.detectChanges();
      })
    );
  }

  ngAfterContentInit(): void {
    this.actualaizeStatus();

    this.inputStatusText &&
      this.subscriptions.add(
        this.inputStatusText.changed.subscribe(() => {
          this.statusMessage = this.inputStatusText.getStatusMessage();
          this.cdr.detectChanges();
        })
      );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.status) {
      this.actualaizeStatus();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onClearClick(): void {
    this.control.clear();
    this.actualaizeStatus();
  }

  private actualaizeStatus(): void {
    let statusIcon: string;

    switch (this.status) {
      case 'warning':
        statusIcon = 'alerts-warning';
        break;

      case 'success':
        statusIcon = 'success-circle-fill';
        break;

      case 'danger':
        statusIcon = 'alerts-info-circle-fill';
        break;

      case 'default':
      default:
        break;
    }

    if (this.control.invalid) {
      statusIcon = 'alerts-info-circle-fill';
    }

    this.statusIcon = statusIcon;
    this.statusMessage = this.inputStatusText?.getStatusMessage() || '';
  }
}
