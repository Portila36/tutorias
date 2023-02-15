"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLBaseLexer = void 0;
const antlr4ts_1 = require("antlr4ts");
const MySQLLexer_1 = require("./MySQLLexer");
const Lexer_1 = require("antlr4ts/Lexer");
const common_1 = require("./common");
// This is a superclass used to customize lexer functionality.
class MySQLBaseLexer extends Lexer_1.Lexer {
    constructor(input) {
        super(input);
        this.inVersionComment = false;
        this.serverVersion = 50707;
        this.pendingTokens = [];
        this.charsets = [];
    }
    reset() {
        this.inVersionComment = false;
        super.reset();
    }
    setType(type) {
        this.type = type;
    }
    getText() {
        return this.text;
    }
    // Allow a grammar rule to emit as many tokens as it needs.
    nextToken() {
        // First respond with pending tokens to the next token request, if there are any.
        if (this.pendingTokens.length > 0) {
            const pending = this.pendingTokens.shift();
            if (pending) {
                return pending;
            }
        }
        // Let the main lexer class run the next token recognition.
        // This might create additional tokens again.
        const next = super.nextToken();
        if (this.pendingTokens.length > 0) {
            const pending = this.pendingTokens.shift();
            this.pendingTokens.push(next);
            if (pending) {
                return pending;
            }
        }
        return next;
    }
    nextDefaultChannelToken() {
        let token = this.nextToken();
        while (token.channel !== antlr4ts_1.Token.DEFAULT_CHANNEL) {
            token = this.nextToken();
        }
        return token;
    }
    emitDot() {
        const token = this.tokenFactory.create(this._tokenFactorySourcePair, MySQLLexer_1.MySQLLexer.DOT_SYMBOL, '.', this._channel, this._tokenStartCharIndex, this._tokenStartCharIndex, this._tokenStartLine, this._tokenStartCharPositionInLine);
        this.pendingTokens.push(token);
        ++this._tokenStartCharIndex;
    }
    checkVersion(text) {
        // Minimum is: /*!12345
        if (text.length < 8) {
            return false;
        }
        // Skip version comment introducer.
        const version = parseInt(text.substring(3, text.length), 10);
        if (version <= this.serverVersion) {
            this.inVersionComment = true;
            return true;
        }
        return false;
    }
    checkCharset(text) {
        return this.charsets.includes(text) ? MySQLLexer_1.MySQLLexer.UNDERSCORE_CHARSET : MySQLLexer_1.MySQLLexer.IDENTIFIER;
    }
    // Returns true if the given mode (one of the enums above) is set.
    isSqlModeActive(mode) {
        if (!this.sqlMode) {
            return false;
        }
        return (this.sqlMode & mode) !== 0;
    }
    determineFunction(proposed) {
        // Skip any whitespace character if the sql mode says they should be ignored,
        // before actually trying to match the open parenthesis.
        if (this.isSqlModeActive(common_1.SqlMode.IgnoreSpace)) {
            let input = this._input.LA(1);
            let character = String.fromCharCode(input);
            while (character === ' ' || character === '\t' || character === '\r' || character === '\n') {
                this.interpreter.consume(this._input);
                this.channel = Lexer_1.Lexer.HIDDEN;
                this.type = MySQLLexer_1.MySQLLexer.WHITESPACE;
                input = this._input.LA(1);
                character = String.fromCharCode(input);
            }
        }
        const input = this._input.LA(1);
        return String.fromCharCode(input) === '(' ? proposed : MySQLLexer_1.MySQLLexer.IDENTIFIER;
    }
    determineNumericType(text) {
        const long_str = "2147483647";
        const long_len = 10;
        const signed_long_str = "-2147483648";
        const longlong_str = "9223372036854775807";
        const longlong_len = 19;
        const signed_longlong_str = "-9223372036854775808";
        const signed_longlong_len = 19;
        const unsigned_longlong_str = "18446744073709551615";
        const unsigned_longlong_len = 20;
        // The original code checks for leading +/- but actually that can never happen, neither in the
        // server parser (as a digit is used to trigger processing in the lexer) nor in our parser
        // as our rules are defined without signs. But we do it anyway for maximum compatibility.
        let length = text.length - 1;
        let str = text;
        if (length < long_len) {
            return MySQLLexer_1.MySQLLexer.INT_NUMBER;
        }
        let negative = false;
        if (str[0] === '+') {
            str = str.slice(1);
            length--;
        }
        else if (str[0] === '-') {
            str = str.slice(1);
            length--;
            negative = true;
        }
        str = str.replace(/^0+/, '');
        length = str.length;
        if (length < long_len) {
            return MySQLLexer_1.MySQLLexer.INT_NUMBER;
        }
        let smaller = null;
        let bigger = null;
        let cmp = null;
        if (negative) {
            if (length === long_len) {
                cmp = signed_long_str + 1;
                smaller = MySQLLexer_1.MySQLLexer.INT_NUMBER; // If <= signed_long_str
                bigger = MySQLLexer_1.MySQLLexer.LONG_NUMBER; // If >= signed_long_str
            }
            else if (length < signed_longlong_len) {
                return MySQLLexer_1.MySQLLexer.LONG_NUMBER;
            }
            else if (length > signed_longlong_len) {
                return MySQLLexer_1.MySQLLexer.DECIMAL_NUMBER;
            }
            else {
                cmp = signed_longlong_str + 1;
                smaller = MySQLLexer_1.MySQLLexer.LONG_NUMBER; // If <= signed_longlong_str
                bigger = MySQLLexer_1.MySQLLexer.DECIMAL_NUMBER;
            }
        }
        else {
            if (length === long_len) {
                cmp = long_str;
                smaller = MySQLLexer_1.MySQLLexer.INT_NUMBER;
                bigger = MySQLLexer_1.MySQLLexer.LONG_NUMBER;
            }
            else if (length < longlong_len) {
                return MySQLLexer_1.MySQLLexer.LONG_NUMBER;
            }
            else if (length > longlong_len) {
                if (length > unsigned_longlong_len) {
                    return MySQLLexer_1.MySQLLexer.DECIMAL_NUMBER;
                }
                cmp = unsigned_longlong_str;
                smaller = MySQLLexer_1.MySQLLexer.ULONGLONG_NUMBER;
                bigger = MySQLLexer_1.MySQLLexer.DECIMAL_NUMBER;
            }
            else {
                cmp = longlong_str;
                smaller = MySQLLexer_1.MySQLLexer.LONG_NUMBER;
                bigger = MySQLLexer_1.MySQLLexer.ULONGLONG_NUMBER;
            }
        }
        let str_comparison_number = null;
        let cmp_comparison_number = null;
        let comparison_index = 0;
        do {
            str_comparison_number = str[comparison_index];
            cmp_comparison_number = cmp[comparison_index];
            comparison_index++;
        } while (comparison_index < cmp.length
            && str_comparison_number[comparison_index] === cmp_comparison_number[comparison_index]);
        return (parseInt(str_comparison_number) <= parseInt(cmp_comparison_number)) ? smaller : bigger;
    }
}
exports.MySQLBaseLexer = MySQLBaseLexer;
//# sourceMappingURL=MySQLBaseLexer.js.map