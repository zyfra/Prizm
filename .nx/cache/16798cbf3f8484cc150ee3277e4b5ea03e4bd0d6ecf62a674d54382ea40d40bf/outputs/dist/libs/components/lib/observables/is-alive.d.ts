import { OperatorFunction } from 'rxjs';
/**
 * Operator to set lifespan after which current value is considered obsolete
 */
export declare function prizmIsAlive(lifespan?: number): OperatorFunction<any, boolean>;
