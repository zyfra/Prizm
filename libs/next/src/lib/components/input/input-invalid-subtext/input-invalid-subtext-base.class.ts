import { Directive } from '@angular/core';

@Directive()
export abstract class InputInvalidSubtextBaseClass {
  /**
   * Gets invalid text
   */
  public abstract getText(firstInvalidKey: string): string;
}
