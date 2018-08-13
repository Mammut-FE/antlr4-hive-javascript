const { TerminalNode } = require('antlr4/tree/Tree');
const { CommonTokenStream, InputStream, ParserRuleContext } = require('antlr4');
const { HplsqlLexer, HplsqlParser } = require('../../../src');

class Parser {
    constructor() {
        this._tree = null;
        this.lastStr = null;
    }

    set tree(tree) {
        this._tree = tree;
        console.log('init tree');
        console.log(this.tree);
    }

    get tree() {
        return this._tree;
    }

    setSource(str) {
        if (!this.tree || this.lastStr !== str) {
            const chars = new InputStream(str);
            const lexer = new HplsqlLexer(chars);
            const tokens = new CommonTokenStream(lexer, 0);
            const parser = new HplsqlParser(tokens);

            this.tree = parser.program();
        }

        this.lastStr = str;
    }
    
    _getLastToken() {
        let children = this.tree.children;
        let token;
        let stack = [];
    
        while (children) {
            token = children[children.length - 1];
            stack.push(token);
            children = token.children;
        }
    
        return stack.pop();
    }

    getTokenByOffset(offset) {
        const tree = this.tree;

        let children = tree.children;
        let result = [];

        while (children) {
            let i = 0;
            let flag = false;

            for (; i < children.length; i++) {
                const token = children[i];
                const range = Parser.getTokenRange(token);

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
            result.push(this._getLastToken());
        }

        return result;
    }
    
    static offsetIsInRange(offset, range) {
        offset--;
    
        return offset <= range.stop && offset >= range.start;
    }
    
    static getTokenRange(token) {
        if (token instanceof TerminalNode) {
            return {
                start: token.symbol.start,
                stop: token.symbol.stop
            };
        }
    
        if (token instanceof ParserRuleContext) {
            return {
                start: token.start.start,
                stop: token.stop.stop
            };
        }
    
        return {
            start: -1,
            stop: -1
        };
    }
}

module.exports = Parser;
