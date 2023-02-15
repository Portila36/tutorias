import { Parser, TokenStream } from 'antlr4ts';
import { SqlMode } from './common';
export declare abstract class MySQLBaseParser extends Parser {
    serverVersion: number;
    sqlMode?: SqlMode;
    constructor(input: TokenStream);
    reset(): void;
    look(position: number, expected: number): boolean;
    containsLinebreak(text: string): boolean;
    isSqlModeActive(mode: number): boolean;
}
