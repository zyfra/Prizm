"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstHtmlAddIndentation = void 0;
/**
 * @param {string[]} splittedHtml
 * @param {{ char?: string; count?: number}} options
 * @returns {string}
 */
const prizmAstHtmlAddIndentation = (splittedHtml, options = {}) => {
    const char = options.char || ' ';
    const count = options.count || 2;
    let level = 0;
    const opened = [];
    return splittedHtml
        .reverse()
        .reduce((indented, elTag) => {
        if (opened.length &&
            level &&
            opened[level] &&
            /* if current element tag is the same as previously opened one */
            opened[level] === elTag.substring(1, opened[level].length + 1)) {
            opened.splice(level, 1);
            level--;
        }
        const indentation = char.repeat(level ? level * count : 0);
        const newIndented = [`${indentation}${elTag}`, ...indented];
        // if current element tag is closing tag
        // add it to opened elements
        if (elTag.substring(0, 2) === '</') {
            level++;
            opened[level] = elTag.substring(2, elTag.length - 1);
        }
        return newIndented;
    }, [])
        .join('\n');
};
exports.prizmAstHtmlAddIndentation = prizmAstHtmlAddIndentation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWluZGVudGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3Qvc3JjL2xpYi9odG1sL3ByZXR0aWZ5L2FkZC1pbmRlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7OztHQUlHO0FBQ0ksTUFBTSwwQkFBMEIsR0FBRyxDQUN4QyxZQUFzQixFQUN0QixVQUE2QyxFQUFFLEVBQy9DLEVBQUU7SUFDRixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztJQUNqQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUVqQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFFNUIsT0FBTyxZQUFZO1NBQ2hCLE9BQU8sRUFBRTtTQUNULE1BQU0sQ0FBQyxDQUFDLFFBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNqQyxJQUNFLE1BQU0sQ0FBQyxNQUFNO1lBQ2IsS0FBSztZQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDYixpRUFBaUU7WUFDakUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQzlEO1lBQ0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsV0FBVyxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFFNUQsd0NBQXdDO1FBQ3hDLDRCQUE0QjtRQUM1QixJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNsQyxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQixDQUFDLENBQUM7QUF0Q1csUUFBQSwwQkFBMEIsOEJBc0NyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gc3BsaXR0ZWRIdG1sXG4gKiBAcGFyYW0ge3sgY2hhcj86IHN0cmluZzsgY291bnQ/OiBudW1iZXJ9fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgcHJpem1Bc3RIdG1sQWRkSW5kZW50YXRpb24gPSAoXG4gIHNwbGl0dGVkSHRtbDogc3RyaW5nW10sXG4gIG9wdGlvbnM6IHsgY2hhcj86IHN0cmluZzsgY291bnQ/OiBudW1iZXIgfSA9IHt9XG4pID0+IHtcbiAgY29uc3QgY2hhciA9IG9wdGlvbnMuY2hhciB8fCAnICc7XG4gIGNvbnN0IGNvdW50ID0gb3B0aW9ucy5jb3VudCB8fCAyO1xuXG4gIGxldCBsZXZlbCA9IDA7XG4gIGNvbnN0IG9wZW5lZDogc3RyaW5nW10gPSBbXTtcblxuICByZXR1cm4gc3BsaXR0ZWRIdG1sXG4gICAgLnJldmVyc2UoKVxuICAgIC5yZWR1Y2UoKGluZGVudGVkOiBhbnlbXSwgZWxUYWcpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgb3BlbmVkLmxlbmd0aCAmJlxuICAgICAgICBsZXZlbCAmJlxuICAgICAgICBvcGVuZWRbbGV2ZWxdICYmXG4gICAgICAgIC8qIGlmIGN1cnJlbnQgZWxlbWVudCB0YWcgaXMgdGhlIHNhbWUgYXMgcHJldmlvdXNseSBvcGVuZWQgb25lICovXG4gICAgICAgIG9wZW5lZFtsZXZlbF0gPT09IGVsVGFnLnN1YnN0cmluZygxLCBvcGVuZWRbbGV2ZWxdLmxlbmd0aCArIDEpXG4gICAgICApIHtcbiAgICAgICAgb3BlbmVkLnNwbGljZShsZXZlbCwgMSk7XG4gICAgICAgIGxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZGVudGF0aW9uID0gY2hhci5yZXBlYXQobGV2ZWwgPyBsZXZlbCAqIGNvdW50IDogMCk7XG5cbiAgICAgIGNvbnN0IG5ld0luZGVudGVkID0gW2Ake2luZGVudGF0aW9ufSR7ZWxUYWd9YCwgLi4uaW5kZW50ZWRdO1xuXG4gICAgICAvLyBpZiBjdXJyZW50IGVsZW1lbnQgdGFnIGlzIGNsb3NpbmcgdGFnXG4gICAgICAvLyBhZGQgaXQgdG8gb3BlbmVkIGVsZW1lbnRzXG4gICAgICBpZiAoZWxUYWcuc3Vic3RyaW5nKDAsIDIpID09PSAnPC8nKSB7XG4gICAgICAgIGxldmVsKys7XG4gICAgICAgIG9wZW5lZFtsZXZlbF0gPSBlbFRhZy5zdWJzdHJpbmcoMiwgZWxUYWcubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdJbmRlbnRlZDtcbiAgICB9LCBbXSlcbiAgICAuam9pbignXFxuJyk7XG59O1xuIl19