"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstUpdateAllFilesWhen = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Recursively updates all files in the given directory tree if they meet the condition
 * specified by `canUpdateFunc`. The updates are made using the `updaterFunc`.
 *
 * @param {Tree} tree - The file tree representing the project.
 * @param {string} [dir=''] - The directory to start the search from. Default is the root directory.
 * @param {(entryPath: string, content: string) => boolean} canUpdateFunc - A function that determines if a file can be updated.
 * @param {(entryPath: string, fileContent: string) => string} updaterFunc - A function that updates the file content.
 */
function prizmAstUpdateAllFilesWhen(tree, dir = '', canUpdateFunc, updaterFunc) {
    // Get the list of children (files and directories) in the current directory
    const entries = tree.children(dir);
    // Iterate through each entry in the directory
    for (const entry of entries) {
        // Construct the entry path by joining the current directory and entry name
        const entryPath = (0, devkit_1.joinPathFragments)(dir, entry);
        // If the entry is a file, check if it can be updated and update if necessary
        if (tree.isFile(entryPath)) {
            const content = tree.read(entryPath, 'utf-8');
            // Check if the file meets the condition for updating
            if (!canUpdateFunc(entryPath, content))
                continue;
            // Update the file content using the provided updater function
            const newContent = updaterFunc(entryPath, content);
            // Write the updated content back to the file only if it has changed
            if (newContent !== content)
                tree.write(entryPath, newContent);
        }
        else {
            // If the entry is a directory, recursively call the function to process its children
            prizmAstUpdateAllFilesWhen(tree, entryPath, canUpdateFunc, updaterFunc);
        }
    }
}
exports.prizmAstUpdateAllFilesWhen = prizmAstUpdateAllFilesWhen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tYXN0LXVwZGF0ZS1hbGwtZmlsZXMtd2hlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NjaGVtYXRpY3MtaGVscGVycy9zcmMvdXBkYXRlLWFsbC1maWxlcy13aGVuL3ByaXptLWFzdC11cGRhdGUtYWxsLWZpbGVzLXdoZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXVEO0FBRXZEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsMEJBQTBCLENBQ3hDLElBQVUsRUFDVixHQUFHLEdBQUcsRUFBRSxFQUNSLGFBQThELEVBQzlELFdBQStEO0lBRS9ELDRFQUE0RTtJQUM1RSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRW5DLDhDQUE4QztJQUM5QyxLQUFLLE1BQU0sS0FBSyxJQUFJLE9BQU8sRUFBRTtRQUMzQiwyRUFBMkU7UUFDM0UsTUFBTSxTQUFTLEdBQUcsSUFBQSwwQkFBaUIsRUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFaEQsNkVBQTZFO1FBQzdFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQVEsQ0FBQztZQUVyRCxxREFBcUQ7WUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO2dCQUFFLFNBQVM7WUFFakQsOERBQThEO1lBQzlELE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbkQsb0VBQW9FO1lBQ3BFLElBQUksVUFBVSxLQUFLLE9BQU87Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLHFGQUFxRjtZQUNyRiwwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN6RTtLQUNGO0FBQ0gsQ0FBQztBQS9CRCxnRUErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmVlLCBqb2luUGF0aEZyYWdtZW50cyB9IGZyb20gJ0BucndsL2RldmtpdCc7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdXBkYXRlcyBhbGwgZmlsZXMgaW4gdGhlIGdpdmVuIGRpcmVjdG9yeSB0cmVlIGlmIHRoZXkgbWVldCB0aGUgY29uZGl0aW9uXG4gKiBzcGVjaWZpZWQgYnkgYGNhblVwZGF0ZUZ1bmNgLiBUaGUgdXBkYXRlcyBhcmUgbWFkZSB1c2luZyB0aGUgYHVwZGF0ZXJGdW5jYC5cbiAqXG4gKiBAcGFyYW0ge1RyZWV9IHRyZWUgLSBUaGUgZmlsZSB0cmVlIHJlcHJlc2VudGluZyB0aGUgcHJvamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGlyPScnXSAtIFRoZSBkaXJlY3RvcnkgdG8gc3RhcnQgdGhlIHNlYXJjaCBmcm9tLiBEZWZhdWx0IGlzIHRoZSByb290IGRpcmVjdG9yeS5cbiAqIEBwYXJhbSB7KGVudHJ5UGF0aDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpID0+IGJvb2xlYW59IGNhblVwZGF0ZUZ1bmMgLSBBIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyBpZiBhIGZpbGUgY2FuIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0geyhlbnRyeVBhdGg6IHN0cmluZywgZmlsZUNvbnRlbnQ6IHN0cmluZykgPT4gc3RyaW5nfSB1cGRhdGVyRnVuYyAtIEEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSBmaWxlIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUFzdFVwZGF0ZUFsbEZpbGVzV2hlbihcbiAgdHJlZTogVHJlZSxcbiAgZGlyID0gJycsXG4gIGNhblVwZGF0ZUZ1bmM6IChlbnRyeVBhdGg6IHN0cmluZywgY29udGVudDogc3RyaW5nKSA9PiBib29sZWFuLFxuICB1cGRhdGVyRnVuYzogKGVudHJ5UGF0aDogc3RyaW5nLCBmaWxlQ29udGVudDogc3RyaW5nKSA9PiBzdHJpbmdcbik6IHZvaWQge1xuICAvLyBHZXQgdGhlIGxpc3Qgb2YgY2hpbGRyZW4gKGZpbGVzIGFuZCBkaXJlY3RvcmllcykgaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5XG4gIGNvbnN0IGVudHJpZXMgPSB0cmVlLmNoaWxkcmVuKGRpcik7XG5cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggZW50cnkgaW4gdGhlIGRpcmVjdG9yeVxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGVudHJ5IHBhdGggYnkgam9pbmluZyB0aGUgY3VycmVudCBkaXJlY3RvcnkgYW5kIGVudHJ5IG5hbWVcbiAgICBjb25zdCBlbnRyeVBhdGggPSBqb2luUGF0aEZyYWdtZW50cyhkaXIsIGVudHJ5KTtcblxuICAgIC8vIElmIHRoZSBlbnRyeSBpcyBhIGZpbGUsIGNoZWNrIGlmIGl0IGNhbiBiZSB1cGRhdGVkIGFuZCB1cGRhdGUgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKHRyZWUuaXNGaWxlKGVudHJ5UGF0aCkpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0cmVlLnJlYWQoZW50cnlQYXRoLCAndXRmLTgnKSBhcyBhbnk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBmaWxlIG1lZXRzIHRoZSBjb25kaXRpb24gZm9yIHVwZGF0aW5nXG4gICAgICBpZiAoIWNhblVwZGF0ZUZ1bmMoZW50cnlQYXRoLCBjb250ZW50KSkgY29udGludWU7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgZmlsZSBjb250ZW50IHVzaW5nIHRoZSBwcm92aWRlZCB1cGRhdGVyIGZ1bmN0aW9uXG4gICAgICBjb25zdCBuZXdDb250ZW50ID0gdXBkYXRlckZ1bmMoZW50cnlQYXRoLCBjb250ZW50KTtcblxuICAgICAgLy8gV3JpdGUgdGhlIHVwZGF0ZWQgY29udGVudCBiYWNrIHRvIHRoZSBmaWxlIG9ubHkgaWYgaXQgaGFzIGNoYW5nZWRcbiAgICAgIGlmIChuZXdDb250ZW50ICE9PSBjb250ZW50KSB0cmVlLndyaXRlKGVudHJ5UGF0aCwgbmV3Q29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBlbnRyeSBpcyBhIGRpcmVjdG9yeSwgcmVjdXJzaXZlbHkgY2FsbCB0aGUgZnVuY3Rpb24gdG8gcHJvY2VzcyBpdHMgY2hpbGRyZW5cbiAgICAgIHByaXptQXN0VXBkYXRlQWxsRmlsZXNXaGVuKHRyZWUsIGVudHJ5UGF0aCwgY2FuVXBkYXRlRnVuYywgdXBkYXRlckZ1bmMpO1xuICAgIH1cbiAgfVxufVxuIl19