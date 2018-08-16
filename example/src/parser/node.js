const TerminalNode = require('antlr4/tree/Tree').TerminalNode;

const { ruleType } = require('./emuns');
const { getRightmostNode, getBetweenNode, getTokenRange } = require('./utils');

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
        if (this._text === undefined) {
            if (ctx instanceof TerminalNode) {
                this._text =  ctx.getText();
            } else {
                this._text =  '';
            }
        }
        
        return this._text;
    }
    
    get contextType () {
        let ctx = this.context;
        
        if (!this._contentType) {
            if (ctx instanceof TerminalNode) {
                ctx = ctx.parentCtx;
            }
    
            while (ctx.ruleIndex > 183) {
                ctx = ctx.parentCtx;
            }
    
            this._contentType = ctx.ruleIndex;
        }
        
        return this._contentType;
    }
    
    
    _getLeftToken () {
        const ctx = this.context;
        const range = getTokenRange(ctx);
        
        if (this.offset <= range.start) { // 开头的空白节点
            return {
                type: -1
            };
        } else if (this.offset > range.stop) { // 结尾的空白节点
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
        
        if (!this._token) {
            if (ctx instanceof TerminalNode) {
                this._token = ctx.symbol;
            } else {
                this._token = this._getLeftToken();
            }
        }
        
        return this._token;
    }
}

module.exports = Node;
