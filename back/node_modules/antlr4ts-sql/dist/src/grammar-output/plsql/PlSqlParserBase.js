"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlSqlParserBase = void 0;
const antlr4ts_1 = require("antlr4ts");
class PlSqlParserBase extends antlr4ts_1.Parser {
    constructor(input) {
        super(input);
        this._isVersion10 = false;
        this._isVersion12 = true;
    }
    isVersion10() {
        return this._isVersion10;
    }
    isVersion12() {
        return this._isVersion12;
    }
    setVersion10(value) {
        this._isVersion10 = value;
    }
    setVersion12(value) {
        this._isVersion12 = value;
    }
}
exports.PlSqlParserBase = PlSqlParserBase;
//# sourceMappingURL=PlSqlParserBase.js.map