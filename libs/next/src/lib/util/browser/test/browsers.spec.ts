import { prizmIsEdge } from '../is-edge';
import { prizmIsEdgeOlderThan } from '../is-edge-older-than';
import { prizmIsFirefox } from '../is-firefox';
import { prizmIsIE } from '../is-ie';

describe('Browsers', () => {
    it('isIE', () => {
        expect(prizmIsIE('trident')).toBe(true);
    });

    it('isEdge', () => {
        expect(prizmIsEdge('edge')).toBe(true);
    });

    it('isFirefox', () => {
        expect(prizmIsFirefox('firefox')).toBe(true);
        expect(prizmIsFirefox('Firefox')).toBe(true);
    });

    it('isEdgeOlderThan', () => {
        expect(prizmIsEdgeOlderThan(17, 'edge/16')).toBe(true);
        expect(prizmIsEdgeOlderThan(17, 'edge/18')).toBe(false);
    });
});
