/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, forwardRef, HostListener, inject, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_TOOLTIP_OPTIONS } from './dropdown-context-options';
import { PolymorphContent } from '../polymorph';
import { PRIZM_HINT_OPTIONS } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';
import { PrizmOverlayWindowControl } from '../../modules/overlay/models';
import { PrizmContextMenuContainerComponent } from './dropdown-context-container.component';

@Directive({
  selector: '[prizmContextMenu]:not(ng-container)',
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_HINT_OPTIONS,
      useExisting: forwardRef(() => PRIZM_TOOLTIP_OPTIONS),
    },
  ],
  hostDirectives: [
    {
      directive: PrizmHintDirective,
      inputs: [
        'prizmAutoReposition: prizmContextMenuAutoReposition',
        'prizmHintHideDelay: prizmContextMenuHideDelay',
        'prizmHintDirection: prizmContextMenuDirection',
        'prizmHintId: prizmContextMenuId',
        'prizmHint: prizmContextMenu',
        'prizmHintShowDelay: prizmContextMenuShowDelay',
        'prizmHintTheme: prizmContextMenuTheme',
        'prizmHintHost: prizmContextMenuHost',
        'prizmHintContext: prizmContextMenuContext',
        'prizmHintCanShow: prizmContextMenuCanShow',
      ],
      outputs: ['prizmHintShowed: prizmContextMenuShowed'],
    },
  ],
  exportAs: 'prizmContextMenu',
  standalone: true,
})
export class PrizmContextMenuDirective implements PrizmOverlayWindowControl {
  @Input()
  set prizmContextMenu(value: PolymorphContent | null) {
    if (!value) {
      this.hostedHint.content = '';
      return;
    }

    this.hostedHint.content = value;
    this.hostedHint.prizmHint = value;
  }
  get prizmContextMenu() {
    return this.hostedHint.content;
  }

  public readonly hostedHint = inject(PrizmHintDirective);

  constructor() {
    this.hostedHint.containerComponent = PrizmContextMenuContainerComponent;
    this.hostedHint.onHoverActive = false;
  }

  protected clickedInside = false;
  @HostListener('document:contextmenu', ['$event.target']) public onClick(target: HTMLElement): void {
    if (this.hostedHint.overlay?.viewEl?.contains(target)) return;
    const clickedOnElement = this.hostedHint.elementRef.nativeElement.contains(target);
    if (clickedOnElement && !this.clickedInside) this.clickedInside = true;
    if (!this.clickedInside) return;
    this.hostedHint.show$.next(clickedOnElement);
  }

  @HostListener('document:keydown.esc', ['$event'])
  public closeOnEsc(): void {
    if (this.hostedHint.show) this.hostedHint.show = false;
  }

  public close(): void {
    this.hostedHint.show$.next(false);
  }

  public open(): void {
    this.hostedHint.show$.next(true);
  }
}
