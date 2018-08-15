const TerminalNode = require('antlr4/tree/Tree').TerminalNode;

const { ruleType } = require('./emuns');
const { getRightmostNode, getBetweenNode } = require('./utils');


const EOF = '<EOF>';

class Node {
    
    constructor (ctx, offset) {
        this.context = ctx;
        
        this.length = ctx;
        this.offset = offset;
    }
    
    get type () {
    
    }
    
    get offset () {
        return this._offset;
    }
    
    set offset (offset) {
        const ctx = this.context;
        
        if (ctx instanceof TerminalNode) {
            this._offset = ctx.symbol.start;
        } else {
            this._offset = offset;
        }
    }
    
    set length (ctx) {
        if (ctx instanceof TerminalNode) {
            const symbol = ctx.symbol;
            this._length = symbol.stop - symbol.start + 1;
        } else {
            this._length = 1;
        }
    }
    
    get length () {
        return this._length;
    }
    
    get text () {
        const ctx = this.context;
        if (ctx instanceof TerminalNode) {
            return ctx.getText();
        } else {
            return '';
        }
    }
    
    get contextType () {
        let ctx = this.context;
        
        if (ctx instanceof TerminalNode) {
            ctx = ctx.parentCtx;
        }
        
        while (ctx.ruleIndex > 183) {
            ctx = ctx.parentCtx;
        }
        
        return ruleType[ctx.ruleIndex];
    }
    
    
    _getLeftToken () {
        const ctx = this.context;
        
        if (this.offset < ctx.start.start) { // 开头的空白节点
            return {
                type: -1
            };
        } else if (this.offset > ctx.stop.stop) { // 结尾的空白节点
            const { symbol } = getRightmostNode(ctx);
            return symbol;
        } else { // 文本中间的空白节点
            const { symbol } = getBetweenNode(ctx, this.offset);
            return symbol;
        }
    }
    
    /**
     * 获取当前节点的token, 空白节点获取最近的左侧节点token
     */
    get token () {
        const ctx = this.context;
        
        if (ctx instanceof TerminalNode) {
            return ctx.symbol;
        } else {
            return this._getLeftToken();
        }
    }
}

module.exports = Node;
