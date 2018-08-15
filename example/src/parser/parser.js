const { CommonTokenStream, InputStream } = require('antlr4');
const { HplsqlLexer, HplsqlParser } = require('../../../src');
const Node = require('./node');
const {getTokenRange} = require('./utils');

class Parser {
    constructor () {
        this._tree = null;
        this.lastStr = null;
    }
    
    set tree (tree) {
        this._tree = tree;
        console.log('init tree');
        console.log(this.tree);
    }
    
    get tree () {
        return this._tree;
    }
    
    setSource (str) {
        if (!this.tree || this.lastStr !== str) {
            const chars = new InputStream(str);
            const lexer = new HplsqlLexer(chars);
            const tokens = new CommonTokenStream(lexer, 0);
            const parser = new HplsqlParser(tokens);
            
            this.tree = parser.program();
        }
        
        this.lastStr = str;
    }
    
    _getBlockContext () {
        return this.tree.children[0];
    }
    
    getTokenByOffset (offset) {
        const tree = this.tree;
        
        let children = tree.children;
        let result = [];
        
        while (children) {
            let i = 0;
            let flag = false;
            
            for (; i < children.length; i++) {
                const token = children[i];
                const range = getTokenRange(token);
                
                if (Parser.offsetIsInRange(offset, range)) {
                    result.push(token);
                    children = token.children;
                    flag = tree;
                    break;
                }
            }
            
            if (!flag && i === children.length) {
                children = null;
            }
        }
        
        if (result.length === 0) {
            result.push(this._getBlockContext());
        }
        
        console.log(result);
        const context = result.pop();
        
        return new Node(context, offset);
    }
    
    static offsetIsInRange (offset, range) {
        offset--;
        
        return offset <= range.stop && offset >= range.start;
    }
}

module.exports = Parser;
