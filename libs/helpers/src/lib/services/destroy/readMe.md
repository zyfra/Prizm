### Описание
Абстракция над ngOnDestroy для использования с takeUntil

### Пример с компонентом
```typescript
  import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
  import {PzmDestroyService} from '@digital-plant/zyfra-helpers';
  import {takeUntil} from 'rxjs/operators';
  
  @Component({
      selector: 'destroy-button',
      templateUrl: './template.html',
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [PzmDestroyService],
  })
  export class PzmDestroyExample {
      constructor(private destroy$: PzmDestroyService) {
          const someStream$ = of(1);
          someStream$.pipe(takeUntil(destroy$)).subscribe();
      }
  }
```
