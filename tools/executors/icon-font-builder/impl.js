"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var icon_font_buildr_1 = require("icon-font-buildr");
function builderExecutor(options, context) {
    return __awaiter(this, void 0, void 0, function () {
        var sources, icons, dirs, builder, ligatures;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sources = [];
                    icons = [];
                    dirs = fs.readdirSync(path.join(options.inputPath));
                    console.log(context);
                    dirs.forEach(function (dir, dirIndex) {
                        var iconFiles = fs.readdirSync(path.join(options.inputPath, dir));
                        sources.push(path.join(options.inputPath, dir, '[icon].svg'));
                        iconFiles.forEach(function (iconFile, iconIndex) {
                            var iconName = iconFile.replace('.svg', '');
                            icons.push({
                                icon: iconName,
                                ligatures: [iconName + "-icon"]
                            });
                        });
                    });
                    builder = new icon_font_buildr_1["default"]({
                        sources: sources,
                        icons: icons,
                        output: {
                            codepoints: false,
                            ligatures: true,
                            fonts: path.join(options.outputPath),
                            fontName: options.fontFileName,
                            formats: ['ttf', 'woff', 'woff2']
                        }
                    });
                    return [4 /*yield*/, builder.build()];
                case 1:
                    _a.sent();
                    ligatures = builder.getIconsLigatures();
                    generateLessFromLigatures(ligatures, options);
                    return [2 /*return*/, { success: true }];
            }
        });
    });
}
exports["default"] = builderExecutor;
function generateLessFromLigatures(ligatures, options) {
    var fontRules = "@icon-font-family: " + options.fontFileName + ";\n@font-face {\n  font-family: @icon-font-family;\n  src: local('" + options.fontName + "'),url('" + options.fontFileName + ".woff2') format('woff2'),url('" + options.fontFileName + ".woff') format('woff'),url('" + options.fontFileName + ".ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n" + options.iconClassName + " {\n  font-family: @icon-font-family;\n  font-style: normal;\n";
    var iconRules = Object.entries(ligatures)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return "  &." + key + ":before { content: '" + value[0] + "' }";
    })
        .join('\n');
    var filename = path.join(options.outputPath, options.outputStyleFile);
    fs.writeFileSync(filename, fontRules + "\n" + iconRules + "\n}");
}
