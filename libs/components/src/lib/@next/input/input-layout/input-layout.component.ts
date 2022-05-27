import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Injector,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ZuiInputControl } from '../input-directives/zui-input-control.class';
import { ZuiInputSize } from '../models/zui-input.models';

@Component({
  selector: 'zui-input-layout',
  templateUrl: './input-layout.component.html',
  styleUrls: ['./input-layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'zui-input-layout',
  },
})
export class InputLayoutComponent implements OnInit, OnDestroy {
  @Input() label: string;
  @Input() size: ZuiInputSize = 'l';
  @Input() outer: boolean | string = false;

  @ContentChild(ZuiInputControl, { static: true }) control: ZuiInputControl<any>;

  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);

  private subscriptions: Subscription = new Subscription();

  constructor(private readonly injector: Injector) {}

  ngOnInit(): void {
    this.subscriptions.add(this.control.stateChanges.subscribe(() => this.cdr.detectChanges()));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
