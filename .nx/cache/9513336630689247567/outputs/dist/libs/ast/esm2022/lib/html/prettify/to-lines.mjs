"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstHtmlPrettifyMergeAttributesWithElements = exports.prizmAstHtmlPrettifyRemoveEmptyLines = void 0;
/**
 * @param {string} nonFormattedString Any non formatted string
 * @returns {string[]} Array of strings separated on new lines
 */
const prizmAstHtmlPrettifyRemoveEmptyLines = (nonFormattedString) => 
// Replace
// - 1 or more spaces or tabs at the start of line
// - 1 or more spaces or tabs at the end of line
// - empty lines
// with empty string
nonFormattedString.trim().replace(/(^(\s|\t)+|(( |\t)+)$)/gm, '');
exports.prizmAstHtmlPrettifyRemoveEmptyLines = prizmAstHtmlPrettifyRemoveEmptyLines;
/**
 * @param {string} markup
 * @returns {string[]} Array of strings splitted on new lines without empty lines
 */
const prizmAstHtmlPrettifyMergeAttributesWithElements = (markup) => {
    const splittedMarkup = (0, exports.prizmAstHtmlPrettifyRemoveEmptyLines)(markup).split('\n');
    const mergedLines = [];
    let currentElement = '';
    for (let i = 0; i < splittedMarkup.length; i += 1) {
        const line = splittedMarkup[i];
        // If line is closing element/tag separate closing tag from rest of the line with space
        if (line.endsWith('/>')) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            mergedLines.push(`${currentElement}${line.slice(0, -2)} />`);
            currentElement = '';
            // eslint-disable-next-line no-continue
            continue;
        }
        if (line.endsWith('>')) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            mergedLines.push(`${currentElement}${line.startsWith('>') || line.startsWith('<') ? '' : ' '}${line}`);
            currentElement = '';
            // eslint-disable-next-line no-continue
            continue;
        }
        currentElement += currentElement.length ? ` ${line}` : line;
    }
    return mergedLines;
};
exports.prizmAstHtmlPrettifyMergeAttributesWithElements = prizmAstHtmlPrettifyMergeAttributesWithElements;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tbGluZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9zcmMvbGliL2h0bWwvcHJldHRpZnkvdG8tbGluZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7OztHQUdHO0FBQ0ksTUFBTSxvQ0FBb0MsR0FBRyxDQUFDLGtCQUEwQixFQUFFLEVBQUU7QUFDakYsVUFBVTtBQUNWLGtEQUFrRDtBQUNsRCxnREFBZ0Q7QUFDaEQsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFOdkQsUUFBQSxvQ0FBb0Msd0NBTW1CO0FBRXBFOzs7R0FHRztBQUNJLE1BQU0sK0NBQStDLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUNoRixNQUFNLGNBQWMsR0FBRyxJQUFBLDRDQUFvQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDdkIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDakQsTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9CLHVGQUF1RjtRQUN2RixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsNkRBQTZEO1lBQzdELGFBQWE7WUFDYixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdELGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDcEIsdUNBQXVDO1lBQ3ZDLFNBQVM7U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0Qiw2REFBNkQ7WUFDN0QsYUFBYTtZQUNiLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZHLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDcEIsdUNBQXVDO1lBQ3ZDLFNBQVM7U0FDVjtRQUVELGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDN0Q7SUFFRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUM7QUEvQlcsUUFBQSwrQ0FBK0MsbURBK0IxRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5vbkZvcm1hdHRlZFN0cmluZyBBbnkgbm9uIGZvcm1hdHRlZCBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQXJyYXkgb2Ygc3RyaW5ncyBzZXBhcmF0ZWQgb24gbmV3IGxpbmVzXG4gKi9cbmV4cG9ydCBjb25zdCBwcml6bUFzdEh0bWxQcmV0dGlmeVJlbW92ZUVtcHR5TGluZXMgPSAobm9uRm9ybWF0dGVkU3RyaW5nOiBzdHJpbmcpID0+XG4gIC8vIFJlcGxhY2VcbiAgLy8gLSAxIG9yIG1vcmUgc3BhY2VzIG9yIHRhYnMgYXQgdGhlIHN0YXJ0IG9mIGxpbmVcbiAgLy8gLSAxIG9yIG1vcmUgc3BhY2VzIG9yIHRhYnMgYXQgdGhlIGVuZCBvZiBsaW5lXG4gIC8vIC0gZW1wdHkgbGluZXNcbiAgLy8gd2l0aCBlbXB0eSBzdHJpbmdcbiAgbm9uRm9ybWF0dGVkU3RyaW5nLnRyaW0oKS5yZXBsYWNlKC8oXihcXHN8XFx0KSt8KCggfFxcdCkrKSQpL2dtLCAnJyk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcmt1cFxuICogQHJldHVybnMge3N0cmluZ1tdfSBBcnJheSBvZiBzdHJpbmdzIHNwbGl0dGVkIG9uIG5ldyBsaW5lcyB3aXRob3V0IGVtcHR5IGxpbmVzXG4gKi9cbmV4cG9ydCBjb25zdCBwcml6bUFzdEh0bWxQcmV0dGlmeU1lcmdlQXR0cmlidXRlc1dpdGhFbGVtZW50cyA9IChtYXJrdXA6IHN0cmluZykgPT4ge1xuICBjb25zdCBzcGxpdHRlZE1hcmt1cCA9IHByaXptQXN0SHRtbFByZXR0aWZ5UmVtb3ZlRW1wdHlMaW5lcyhtYXJrdXApLnNwbGl0KCdcXG4nKTtcblxuICBjb25zdCBtZXJnZWRMaW5lcyA9IFtdO1xuICBsZXQgY3VycmVudEVsZW1lbnQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdHRlZE1hcmt1cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGxpbmUgPSBzcGxpdHRlZE1hcmt1cFtpXTtcblxuICAgIC8vIElmIGxpbmUgaXMgY2xvc2luZyBlbGVtZW50L3RhZyBzZXBhcmF0ZSBjbG9zaW5nIHRhZyBmcm9tIHJlc3Qgb2YgdGhlIGxpbmUgd2l0aCBzcGFjZVxuICAgIGlmIChsaW5lLmVuZHNXaXRoKCcvPicpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtZXJnZWRMaW5lcy5wdXNoKGAke2N1cnJlbnRFbGVtZW50fSR7bGluZS5zbGljZSgwLCAtMil9IC8+YCk7XG4gICAgICBjdXJyZW50RWxlbWVudCA9ICcnO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGluZS5lbmRzV2l0aCgnPicpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtZXJnZWRMaW5lcy5wdXNoKGAke2N1cnJlbnRFbGVtZW50fSR7bGluZS5zdGFydHNXaXRoKCc+JykgfHwgbGluZS5zdGFydHNXaXRoKCc8JykgPyAnJyA6ICcgJ30ke2xpbmV9YCk7XG4gICAgICBjdXJyZW50RWxlbWVudCA9ICcnO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjdXJyZW50RWxlbWVudCArPSBjdXJyZW50RWxlbWVudC5sZW5ndGggPyBgICR7bGluZX1gIDogbGluZTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZWRMaW5lcztcbn07XG4iXX0=