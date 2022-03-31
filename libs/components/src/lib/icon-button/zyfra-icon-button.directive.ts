import { Directive } from '@angular/core';

@Directive({
  selector: 'button[zyfraIconButton]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[attr.type]': "'button'",
    'class': 'zyfra-icon-button'
  }
})
export class ZyfraIconButtonDirective {
}
