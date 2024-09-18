import { prizmHostDirective, PrizmHostDirectiveOptions } from '../../util';
import { PrizmHostDirective } from '../../types';
import { PrizmDisabledDirective } from './disabled.directive';

export function prizmDisabledHostDirective(options?: PrizmHostDirectiveOptions): PrizmHostDirective {
  return prizmHostDirective(PrizmDisabledDirective, options);
}
