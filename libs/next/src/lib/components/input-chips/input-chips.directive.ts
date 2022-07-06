import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { Component, HostListener, Input } from '@angular/core';
import { ZuiInputControl, ZuiInputTextComponent } from '../input';

interface IZuiChipsComponent {
  addChips: (chipsName: string) => void;
  removeChips: (event: MouseEvent, idx: number) => void;
  chipClick: (chipsName: string) => void;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[zuiInputChips]',
  template: '',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-invalid]': 'ngControl?.invalid',
    '[class.ng-valid]': 'ngControl?.valid',
    '[class.ng-dirty]': 'ngControl?.dirty',
    '[class.ng-touched]': 'ngControl?.touched',
    '[class.ng-filled]': 'empty',
    '[disabled]': 'disabled',
    '[required]': 'required',
  },
  styleUrls: ['../input/input-directives/zui-input-text.directive.less'],
  providers: [{ provide: ZuiInputControl, useExisting: ZuiInputChipsComponent }, ZuiDestroyService],
})
export class ZuiInputChipsComponent extends ZuiInputTextComponent {
  @Input() chipsComponent: IZuiChipsComponent;

  @HostListener('keydown.enter', ['$event'])
  public addChipsHandler(): void {
    if (this.value === '') return;
    this.chipsComponent.addChips(this.value);
    this.value = '';
  }
}
