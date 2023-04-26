import { PrizmAstCodeTask } from './abstract';

export function prizmAstCreateCodeTaskBy<T extends PrizmAstCodeTask<any>>(
  objClass: new () => T,
  payload: T['payload']
): ReturnType<T['create']> {
  return new objClass().create(payload);
}
