"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLBaseParser = void 0;
const antlr4ts_1 = require("antlr4ts");
// This is a superclass used to customize parser functionality.
class MySQLBaseParser extends antlr4ts_1.Parser {
    constructor(input) {
        super(input);
        this.serverVersion = 80021;
    }
    reset() {
        super.reset(false);
    }
    // Checks the token at the given position relative to the current position, whether it matches the expected value.
    // For positions > 1 this looks ahead, otherwise it looks back.
    // Note: position == 0 is not defined. position == 1 is the current position.
    look(position, expected) {
        // TODO: String.fromCharcode?
        return this.inputStream.LA(position) === expected;
    }
    // TODO:
    // A specialized function to get the text from a given context. This falls back to context->getText() in the general
    // case, but provides special behavior for certain contexts (e.g. the implicit string concatenation used in MySQL).
    // public getText() {}
    // Validation function used to check that a string that is not allowed to contain line breaks really doesn't.
    containsLinebreak(text) {
        return text.includes('\r\n');
    }
    // Returns true if the given mode (one of the enums above) is set.
    isSqlModeActive(mode) {
        if (!this.sqlMode) {
            return false;
        }
        return (this.sqlMode & mode) !== 0;
    }
}
exports.MySQLBaseParser = MySQLBaseParser;
//# sourceMappingURL=MySQLBaseParser.js.map