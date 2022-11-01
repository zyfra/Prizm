/**
 * Clamps a value between two inclusive limits
 *
 * @param value
 * @param min lower limit
 * @param max upper limit
 */
export function pzmClamp(value: number, min: number, max: number): number {
    console.assert(!isNaN(value));
    console.assert(!isNaN(min));
    console.assert(!isNaN(max));
    console.assert(max >= min);

    return Math.min(max, Math.max(min, value));
}
