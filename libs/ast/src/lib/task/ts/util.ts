import { PrizmAstCodeTask } from './abstract';

export function prizmAstCreateCodeTaskBy<T extends PrizmAstCodeTask<any>>(
  objClass: new () => T,
  payload: T['payload']
): ReturnType<T['create']> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return new objClass().create(payload);
}
