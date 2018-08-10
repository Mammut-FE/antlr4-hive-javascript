function getNodeByOffset (offset) {

}

function empty (n) {
    var str = '';
    
    for (var i = 0; i < n; i++) {
        str += '  ';
    }
    
    return str;
}

function printTree (tree) {
    console.log('start visit');
    
    function _visit (node, depth) {
        console.log(empty(depth), node.constructor.name, node.start.start, node.stop.stop);
        
        if (node.children) {
            node.children.forEach(function(_node) {
                if (_node.constructor.name === 'TerminalNodeImpl') return;
                _visit(_node, depth + 1);
            });
        }
    }
    
    _visit(tree, 1);
    
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
    
    return [rootNode];
}

module.exports = {
    generateTreeData,
    printTree
};
