import { PrizmTabComponent } from './components/tab.component';
import { Observable } from 'rxjs';

export type PrizmTabMenuContext = {
  inMenuIdx: number | null;
};
export type PrizmTabCanOpen = (tab: PrizmTabComponent) => Observable<boolean>;
export type PrizmTabContext = { idx: number; tab: PrizmTabComponent };
