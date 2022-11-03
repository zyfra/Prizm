export function pzmPx(value: number): string {
    console.assert(Number.isFinite(value), `Value must be finite number`);

    return `${value}px`;
}
