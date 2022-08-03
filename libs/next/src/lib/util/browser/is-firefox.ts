export function zuiIsFirefox(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('firefox');
}
