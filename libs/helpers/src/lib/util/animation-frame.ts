/**
 * Функция prizmExecuteAfterFrames вызывает переданный коллбэк cb после заданного количества кадров frame, используя requestAnimationFrame.
 * */
export function prizmExecuteAfterFrames(cb: () => void, frames: number = PRIZM_DEFAULT_FRAMES_NUMBER): void {
  if (frames <= 0) {
    cb();
    return;
  }

  requestAnimationFrame(() => prizmExecuteAfterFrames(cb, frames - 1));
}

export const PRIZM_DEFAULT_FRAMES_NUMBER = 3;
