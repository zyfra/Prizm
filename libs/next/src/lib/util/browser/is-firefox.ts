export function pzmIsFirefox(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('firefox');
}
