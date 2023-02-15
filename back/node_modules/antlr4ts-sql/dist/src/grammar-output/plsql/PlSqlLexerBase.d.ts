import { Lexer } from "antlr4ts";
export declare abstract class PlSqlLexerBase extends Lexer {
    IsNewlineAtPos(pos: number): boolean;
}
