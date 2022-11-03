export function pzmIsCurrentTarget({target, currentTarget}: Event): boolean {
    return target === currentTarget;
}
