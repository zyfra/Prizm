export function prizmIsCurrentTarget({target, currentTarget}: Event): boolean {
    return target === currentTarget;
}
