const { CommonTokenStream, InputStream } = require('antlr4');
const { HplsqlLexer, HplsqlParser } = require('../../../src');

let lastStr, tree;

module.exports = function(str) {
    if (!tree || lastStr !== str) {
        const chars = new InputStream(str);
        const lexer = new HplsqlLexer(chars);
        const tokens = new CommonTokenStream(lexer, 0);
        const parser = new HplsqlParser(tokens);
        
        tree = parser.program();
    }
    
    lastStr = str;
    
    return tree;
};
