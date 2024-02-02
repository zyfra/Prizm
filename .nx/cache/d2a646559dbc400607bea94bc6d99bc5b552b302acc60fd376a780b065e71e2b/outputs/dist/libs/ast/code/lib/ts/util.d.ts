import { PrizmAstCodeTask } from './abstract';
export declare function prizmAstCreateCodeTaskBy<T extends PrizmAstCodeTask<any>>(objClass: new () => T, payload: T['payload']): ReturnType<T['create']>;
