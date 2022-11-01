import { pzmIsEdge } from '../is-edge';
import { pzmIsEdgeOlderThan } from '../is-edge-older-than';
import { pzmIsFirefox } from '../is-firefox';
import { pzmIsIE } from '../is-ie';

describe('Browsers', () => {
    it('isIE', () => {
        expect(pzmIsIE('trident')).toBe(true);
    });

    it('isEdge', () => {
        expect(pzmIsEdge('edge')).toBe(true);
    });

    it('isFirefox', () => {
        expect(pzmIsFirefox('firefox')).toBe(true);
        expect(pzmIsFirefox('Firefox')).toBe(true);
    });

    it('isEdgeOlderThan', () => {
        expect(pzmIsEdgeOlderThan(17, 'edge/16')).toBe(true);
        expect(pzmIsEdgeOlderThan(17, 'edge/18')).toBe(false);
    });
});
