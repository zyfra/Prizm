/**
 * @deprecated use String.prototype.padStart in 2.0 (after Chrome 49 support is dropped)
 * Pads a string with symbols in the beginning
 *
 * @param sourceString
 * @param minResultLength
 * @param padString string to pad with
 */
export function pzmPadStart(
    sourceString: string,
    minResultLength: number,
    padString: string = ` `,
): string {
    const padSize = minResultLength - sourceString.length;

    if (padSize <= 0) {
        return sourceString;
    }

    return padString.repeat(padSize / padString.length).slice(0, padSize) + sourceString;
}
