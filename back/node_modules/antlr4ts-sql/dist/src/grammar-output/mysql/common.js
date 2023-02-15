"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlMode = void 0;
// SQL modes that control parsing behavior.
var SqlMode;
(function (SqlMode) {
    SqlMode[SqlMode["NoMode"] = 0] = "NoMode";
    SqlMode[SqlMode["AnsiQuotes"] = 1] = "AnsiQuotes";
    SqlMode[SqlMode["HighNotPrecedence"] = 2] = "HighNotPrecedence";
    SqlMode[SqlMode["PipesAsConcat"] = 4] = "PipesAsConcat";
    SqlMode[SqlMode["IgnoreSpace"] = 8] = "IgnoreSpace";
    SqlMode[SqlMode["NoBackslashEscapes"] = 16] = "NoBackslashEscapes";
})(SqlMode = exports.SqlMode || (exports.SqlMode = {}));
//# sourceMappingURL=common.js.map