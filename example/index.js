const { InputStream, CommonTokenStream } = require("antlr4");
const { HplsqlLexer, HplsqlParser } = require("../lib");
const GetSelectInfo = require('./GetSelectInfo');

const str = `select u.name, u.age from user as user;`;
const chars = new InputStream(str);
const lexer = new HplsqlLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new HplsqlParser(tokens);
parser.buildParseTrees = true;

const tree = parser.program();
const visitor = new GetSelectInfo();

visitor.visit(tree);
