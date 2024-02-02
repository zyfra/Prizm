"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFileWithPrettier = void 0;
const child_process_1 = require("child_process");
function formatFileWithPrettier(filePath) {
    (0, child_process_1.exec)(`npx prettier --loglevel silent --write ${filePath}`, (err, stdout, stderr) => {
        if (err) {
            return;
        }
    });
}
exports.formatFileWithPrettier = formatFileWithPrettier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9zY2hlbWF0aWNzLWhlbHBlcnMvc3JjL3V0aWwvcHJldHRpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQXFDO0FBRXJDLFNBQWdCLHNCQUFzQixDQUFDLFFBQWdCO0lBQ3JELElBQUEsb0JBQUksRUFBQywwQ0FBMEMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ2pGLElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTztTQUNSO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBTkQsd0RBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGaWxlV2l0aFByZXR0aWVyKGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgZXhlYyhgbnB4IHByZXR0aWVyIC0tbG9nbGV2ZWwgc2lsZW50IC0td3JpdGUgJHtmaWxlUGF0aH1gLCAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xufVxuIl19