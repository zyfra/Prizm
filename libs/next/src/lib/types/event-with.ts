export interface ZuiTypedEventTarget<E> {
    addEventListener(
        type: string,
        listener: ((evt: E) => void) | null,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener?: ((evt: E) => void) | null,
        options?: boolean | EventListenerOptions,
    ): void;
}

/**
 * Wrapper around {@link Event} to add typings to target and currentTarget.
 */
export type ZuiEventWith<G extends Event, T extends ZuiTypedEventTarget<G>> = G & {
    readonly currentTarget: T;
};
