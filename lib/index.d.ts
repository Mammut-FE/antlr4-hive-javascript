import { CommonTokenStream, Lexer, Parser, ParserRuleContext } from 'antlr4';
import { ParseTreeListener, ErrorNode, TerminalNode } from 'antlr4/tree/Tree';

export class HplsqlParser extends Parser {
  public buildParseTrees: boolean;
  
  constructor(tokens: CommonTokenStream);
  
  program(): any;
}

export class HplsqlLexer extends Lexer {
  constructor(chars: any);
}

export class HplsqlListener implements ParseTreeListener {
  enterProgram(ctx: any): void;
  
  exitProgram(ctx: any): void;
  
  enterEveryRule(node: ParserRuleContext): void;
  
  exitEveryRule(node: ParserRuleContext): void;
  
  visitErrorNode(node: ErrorNode): void;
  
  visitTerminal(node: TerminalNode): void;
}

export class HplsqlVisitor {}
