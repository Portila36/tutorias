import { Token, CharStream } from 'antlr4ts';
import { Lexer } from 'antlr4ts/Lexer';
import { SqlMode } from './common';
export declare abstract class MySQLBaseLexer extends Lexer {
    inVersionComment: boolean;
    pendingTokens: Token[];
    serverVersion: number;
    charsets: string[];
    sqlMode?: SqlMode;
    constructor(input: CharStream);
    reset(): void;
    setType(type: any): void;
    getText(): string;
    nextToken(): Token;
    nextDefaultChannelToken(): Token;
    emitDot(): void;
    checkVersion(text: string): boolean;
    checkCharset(text: string): number;
    isSqlModeActive(mode: number): boolean;
    determineFunction(proposed: number): number;
    determineNumericType(text: string): number;
}
