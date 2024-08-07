import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { POLYMORPH_CONTEXT, PrizmTabContext } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example-component-content',
  template: `{{ context.idx + 1 }} element`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleComponentContentComponent {
  constructor(@Inject(POLYMORPH_CONTEXT) readonly context: PrizmTabContext) {}
}
