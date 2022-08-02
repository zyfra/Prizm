export function zuiIsCurrentTarget({target, currentTarget}: Event): boolean {
    return target === currentTarget;
}
