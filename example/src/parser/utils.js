const { TerminalNode } = require('antlr4/tree/Tree');
const { ParserRuleContext } = require('antlr4');

function getRightmostNode (tree) {
    let children = tree.children;
    let node;
    
    while (children) {
        node = children[children.length - 1];
        
        if (node.children) {
            children = node.children;
        } else {
            children = null;
        }
    }
    
    return node;
}

function getBetweenNode (context, offset) {
    let children = context.children;
    let i = 0, len = children.length;
    
    for (i, len; i < len; i++) {
        let node = children[i];
        let range = getTokenRange(node);
        
        if (offset <= range.stop) {
            break;
        }
    }
    
    return children[i - 1];
}

function getTokenRange (token) {
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

module.exports = {
    getRightmostNode,
    getBetweenNode,
    getTokenRange
};
