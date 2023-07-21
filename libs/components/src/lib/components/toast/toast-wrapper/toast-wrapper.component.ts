import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Injector,
  Input,
  OnInit,
  Type,
  ViewEncapsulation,
} from '@angular/core';
import { PrizmToastRef } from '../toast-ref';
import { PrizmAbstractTestId } from '../../../abstract/interactive';

@Component({
  selector: 'prizm-toast-wrapper',
  templateUrl: './toast-wrapper.component.html',
  styleUrls: ['./toast-wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToastWrapperComponent extends PrizmAbstractTestId implements OnInit {
  @Input() ref!: PrizmToastRef;

  override readonly testId_ = 'ui_toast_wrapper';

  @HostBinding('attr.id') get getRefId(): string {
    return 'prizm-toast-id' + this.ref.id;
  }

  get component(): Type<unknown> {
    switch (this.ref.appearance) {
      case 'danger':
        return this.ref.options.templateDanger;
      case 'success':
        return this.ref.options.templateSuccess;
      case 'info':
        return this.ref.options.templateInfo;
      case 'warning':
        return this.ref.options.templateWarning;
    }
  }
  tempInjector: Injector;

  constructor(private readonly injector: Injector) {
    super();
  }

  public ngOnInit(): void {
    this.createInjectorForChild();
  }

  private createInjectorForChild(): void {
    this.tempInjector = Injector.create({
      providers: [
        {
          provide: PrizmToastRef,
          useValue: this.ref,
        },
      ],
      parent: this.injector,
    });
  }
}
