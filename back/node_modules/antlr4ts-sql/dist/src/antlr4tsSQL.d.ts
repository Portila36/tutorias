import { CommonTokenStream, Parser, ANTLRErrorListener } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { SQLDialect } from "./models/SQLDialect";
export declare class antlr4tsSQL {
    dialect: SQLDialect;
    constructor(dialect: SQLDialect);
    getTokens(sqlScript: string, errorListeners?: ANTLRErrorListener<any>[]): CommonTokenStream;
    getParser(tokens: CommonTokenStream, errorListeners?: ANTLRErrorListener<any>[]): Parser;
    getParseTree(parser: Parser): ParseTree;
    /*** Convenience Methods ***/
    getParserFromSQL(sqlScript: string): Parser;
    getParseTreeFromSQL(sqlScript: string): ParseTree;
}
