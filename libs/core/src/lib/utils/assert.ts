export enum PRIZM_LOG_LEVEL {
  warn,
  error,
  log,
}

export const prizmAssert = {
  enabled: [] as PRIZM_LOG_LEVEL[],
  defaultLevel: PRIZM_LOG_LEVEL.error,
  get assertBy(): (assertion: boolean, level: PRIZM_LOG_LEVEL, ...args: unknown[]) => void {
    return (assertion: boolean, level: PRIZM_LOG_LEVEL, ...args: unknown[]): void => {
      if (assertion) return;
      if (!this.enabled.includes(level)) return;
      switch (level) {
        case PRIZM_LOG_LEVEL.error:
          return void console.error(...args);
        case PRIZM_LOG_LEVEL.warn:
          return void console.warn(...args);
        case PRIZM_LOG_LEVEL.log:
          return void console.log(...args);
      }
    };
  },
  get assert(): (assertion: boolean, ...args: unknown[]) => void {
    return (assertion: boolean, ...args: unknown[]): void => {
      return this.assertBy(assertion, this.defaultLevel, ...args);
    };
  },
  get assertWarning(): (assertion: boolean, ...args: unknown[]) => void {
    return (assertion: boolean, ...args: unknown[]): void => {
      return this.assertBy(assertion, PRIZM_LOG_LEVEL.warn, ...args);
    };
  },
};
