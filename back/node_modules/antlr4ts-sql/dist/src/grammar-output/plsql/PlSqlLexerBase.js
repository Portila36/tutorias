"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlSqlLexerBase = void 0;
const antlr4ts_1 = require("antlr4ts");
class PlSqlLexerBase extends antlr4ts_1.Lexer {
    IsNewlineAtPos(pos) {
        const la = this._input.LA(pos);
        return la == -1 || String.fromCharCode(la) == '\n';
    }
}
exports.PlSqlLexerBase = PlSqlLexerBase;
//# sourceMappingURL=PlSqlLexerBase.js.map