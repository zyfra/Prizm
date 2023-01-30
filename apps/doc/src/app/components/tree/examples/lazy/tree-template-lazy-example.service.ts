import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './tree-template-lazy.model';

@Injectable()
export class TreeTemplateLazyExampleService {
  public loadChildren({ text }: Item): Observable<Item[]> {
    return timer(3000).pipe(
      map(() => [
        { text: `${text} 1`, children: Math.random() > 0.5 },
        { text: `${text} 2`, children: Math.random() > 0.5 },
        { text: `${text} 3`, children: Math.random() > 0.5 },
      ])
    );
  }

  public hasChildren({ children }: Item): boolean {
    return !!children;
  }
}
