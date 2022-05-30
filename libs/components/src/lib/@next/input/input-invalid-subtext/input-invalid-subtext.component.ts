import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Injector,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { filter, takeUntil } from 'rxjs/operators';
import { ZuiInputControl } from '../input-directives/zui-input-control.class';
import { InputInvalidSubtextBaseClass } from './input-invalid-subtext-base.class';
import { ZuiInputValidationTexts } from './input-invalid-subtext.models';

@Component({
  selector: 'zui-input-invalid-subtext',
  templateUrl: './input-invalid-subtext.component.html',
  styleUrls: ['./input-invalid-subtext.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZuiDestroyService],
})
export class InputInvalidSubtextComponent extends InputInvalidSubtextBaseClass implements OnInit {
  @Input() control: ZuiInputControl<unknown>;

  public invalidText: string;

  private readonly cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);
  private readonly destroy$: ZuiDestroyService = this.injector.get(ZuiDestroyService);
  private readonly validationTexts: ZuiInputValidationTexts;

  constructor(protected readonly injector: Injector) {
    super();

    this.validationTexts = injector.get(ZuiInputValidationTexts, new ZuiInputValidationTexts());
  }

  ngOnInit(): void {
    this.actualizeText();

    this.control.stateChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.actualizeText();
    });
  }

  public getText(firstInvalidKey: string): string {
    return firstInvalidKey && this.validationTexts.getText(firstInvalidKey);
  }

  private actualizeText(): void {
    if (!this.control.touched) return;

    const errors = this.control.ngControl.errors || {};
    const firstInvalidKey = Object.keys(errors)[0];
    const errorText = this.getText(firstInvalidKey);

    if (this.invalidText !== errorText) {
      this.invalidText = errorText;
      this.cdr.detectChanges();
    }
  }
}
