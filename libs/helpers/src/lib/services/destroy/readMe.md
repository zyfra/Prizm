### Описание

Абстракция над ngOnDestroy для использования с takeUntil

### Пример с компонентом

```typescript
import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'destroy-button',
  templateUrl: './template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmDestroyExample {
  constructor(private destroy$: PrizmDestroyService) {
    const someStream$ = of(1);
    someStream$.pipe(takeUntil(destroy$)).subscribe();
  }
}
```
