import { Directive, ElementRef, HostBinding, inject, Input } from '@angular/core';
import { PrizmHintDirective } from '../../../../directives/hint';
import { PrizmOverlayOutsidePlacement } from '../../../../modules/overlay/models';
import { prizmIsTextOverflow } from '../../../../util/dom/is-textoverflow';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { PrizmInputLayoutComponent } from '../input-layout';

@Directive({
  selector: 'input[prizmHintDirection], input[prizmHintCanShow]',
  exportAs: 'prizmInputHint',
  standalone: true,
})
export class PrizmInputHintDirective {
  readonly prizmHint_ = new PrizmHintDirective();

  @HostBinding('attr.prizmHint') get prizmHint(): string {
    return this.el.nativeElement.value;
  }

  @Input()
  set prizmHintDirection(value: PrizmOverlayOutsidePlacement) {
    this.prizmHint_.prizmHintDirection = value;
    this.hintSyncChanges();
  }
  get prizmHintDirection(): PrizmOverlayOutsidePlacement {
    return this.prizmHint_.prizmHintDirection;
  }

  private prizmHintCanShow_ = true;
  @Input()
  set prizmHintCanShow(value: BooleanInput) {
    this.prizmHint_.prizmHintCanShow = this.prizmHintCanShow_ = coerceBooleanProperty(value);
  }
  get prizmHintCanShow(): boolean {
    return this.prizmHintCanShow_;
  }

  readonly layout = inject(PrizmInputLayoutComponent, {
    optional: true,
  });
  readonly el = inject(ElementRef<HTMLInputElement>);

  public ngOnInit(): void {
    this.prizmHint_.ngOnInit();
  }

  public ngOnChanges(): void {
    this.hintSyncChanges();
  }

  private hintSyncChanges(): void {
    this.prizmHint_.drawHint();
  }

  public updateHint(): void {
    if (!this.prizmHintCanShow_) {
      this.prizmHint_.prizmHintCanShow = this.prizmHintCanShow_;
    } else {
      this.prizmHint_.prizmHintCanShow = prizmIsTextOverflow(this.el.nativeElement);
      this.prizmHint_.prizmHint = this.el.nativeElement.value as any;
      this.prizmHint_.prizmHintHost = this.layout?.el?.nativeElement ?? null;
    }
    this.hintSyncChanges();
  }
}
