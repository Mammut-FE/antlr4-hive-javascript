const { TerminalNode } = require('antlr4/tree/Tree');
const { ParserRuleContext } = require('antlr4');

function empty (n) {
    var str = '';
    
    for (var i = 0; i < n; i++) {
        str += '---';
    }
    
    return str;
}

function printTree (tree) {
    console.log('start visit');
    
    function _visit (node, depth) {
        let info = `${empty(depth)} ${node.constructor.name}`;
        if (node.constructor.name !== 'TerminalNodeImpl') {
            info += ` ${node.start.start} ${node.stop.stop}`;
        } else {
            info += ` ${node.symbol.start} ${node.symbol.stop} ${node.getText()}`;
        }
        console.log(info);
        
        if (node.children) {
            node.children.forEach(function(_node) {
                // if (_node.constructor.name === 'TerminalNodeImpl') return;
                _visit(_node, depth + 1);
            });
        }
    }
    
    _visit(tree, 0);
    
    console.log('end visit');
}

function generateTreeData (tree) {
    const rootNode = {
        name: 'root',
        children: []
    };
    
    function _visit (node, children) {
        if (node.children) {
            node.children.forEach(function(_node) {
                if (_node.constructor.name === 'TerminalNodeImpl') return;
                
                const node = {
                    name: _node.constructor.name,
                    children: []
                };
                
                _visit(_node, node.children);
                
                children.push(node);
            });
        }
    }
    
    _visit(tree, rootNode.children);
    
    return rootNode;
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

function offsetIsInRange (offset, range) {
    offset--;
    
    return offset <= range.stop && offset >= range.start;
}

function getNodeByOffset (tree, offset) {
    let children = tree.children;
    let result = [];
    
    while (children) {
        let i = 0;
        let flag = false;
        
        for (; i < children.length; i++) {
            const token = children[i];
            const range = getTokenRange(token);
            
            if (offsetIsInRange(offset, range)) {
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
    
    console.log(result);
}

function splitStr (text) {
    const result = [];
    
    for (let i = 0, len = text.length; i < len; i++) {
        let key = text[i];
        
        if (key === '\n') {
            key = '\\n';
        }
        
        result.push(key);
        
    }
    
    return result;
}

module.exports = {
    generateTreeData,
    printTree,
    splitStr,
    getNodeByOffset
};
