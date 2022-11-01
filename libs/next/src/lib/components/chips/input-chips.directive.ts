import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { Component, HostListener, Input } from '@angular/core';
import { PzmInputControl } from '../input';
import { ZuiInputTextComponent } from '../input/input-text/input-text.component';

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
  styleUrls: ['../input/input-text/input-text.component.less'],
  providers: [{ provide: PzmInputControl, useExisting: ZuiInputChipsComponent }, PzmDestroyService],
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

