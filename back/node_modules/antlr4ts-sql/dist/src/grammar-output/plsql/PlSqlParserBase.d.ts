import { Parser, TokenStream } from "antlr4ts";
export declare abstract class PlSqlParserBase extends Parser {
    _isVersion10: boolean;
    _isVersion12: boolean;
    constructor(input: TokenStream);
    isVersion10(): boolean;
    isVersion12(): boolean;
    setVersion10(value: boolean): void;
    setVersion12(value: boolean): void;
}
