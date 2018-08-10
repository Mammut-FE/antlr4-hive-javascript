const { CommonTokenStream, InputStream } = require('antlr4');
const { HplsqlLexer, HplsqlParser } = require('../src');
const {printTree} = require('./helper');

const str = `// 注释
select * from `;
const chars = new InputStream(str);
const lexer = new HplsqlLexer(chars);
const tokens = new CommonTokenStream(lexer, 0);
const parser = new HplsqlParser(tokens);

// parser.buildParseTrees = true;
console.log(`\/\/ 注释
select * from `.length);

console.log(printTree(parser.program()));
