const { CommonTokenStream, InputStream } = require('antlr4');
const { HplsqlLexer, HplsqlParser } = require('../../src/index');
const { printTree, generateTreeData } = require('./helper');

const str = `use db;
create table table1 (id int, name string);
select t.name from table as t;
`;
const chars = new InputStream(str);
const lexer = new HplsqlLexer(chars);
const tokens = new CommonTokenStream(lexer, 0);
const parser = new HplsqlParser(tokens);

// parser.buildParseTrees = true;
console.log(str.length);

console.log(printTree(parser.program()));
