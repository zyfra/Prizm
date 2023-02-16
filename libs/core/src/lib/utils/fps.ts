import { defer, Observable } from 'rxjs';

export async function prizmGetFPS(): Promise<number> {
  return new Promise(resolve =>
    requestAnimationFrame(t1 => requestAnimationFrame(t2 => resolve(1000 / (t2 - t1))))
  );
}

export function prizmGetFPS$(): Observable<number> {
  return defer(() => prizmGetFPS());
}
