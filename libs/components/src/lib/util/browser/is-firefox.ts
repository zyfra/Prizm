export function prizmIsFirefox(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('firefox');
}
