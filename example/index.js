const { CommonTokenStream, InputStream } = require('antlr4');
const { HplsqlLexer, HplsqlParser } = require('../src');
const {printTree} = require('./helper');

const str = `select * from table1;`;
const chars = new InputStream(str);
const lexer = new HplsqlLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new HplsqlParser(tokens);
parser.buildParseTrees = true;

console.log(printTree(parser.program()));
