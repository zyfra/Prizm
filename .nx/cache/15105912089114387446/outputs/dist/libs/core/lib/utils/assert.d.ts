export declare enum PRIZM_LOG_LEVEL {
    warn = 0,
    error = 1,
    log = 2
}
export declare const prizmAssert: {
    enabled: PRIZM_LOG_LEVEL[];
    defaultLevel: PRIZM_LOG_LEVEL;
    readonly assertBy: (assertion: boolean, level: PRIZM_LOG_LEVEL, ...args: unknown[]) => void;
    readonly assert: (assertion: boolean, ...args: unknown[]) => void;
    readonly assertWarning: (assertion: boolean, ...args: unknown[]) => void;
};
