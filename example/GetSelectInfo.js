const { HplsqlVisitor } = require('../src/index');

class GetSelectInfo extends HplsqlVisitor {
    constructor () {
        super();
    }
    
    visitSubselect_stmt (ctx) {
        const fromCtx = ctx.from_clause();
        
        const tableClause = fromCtx.from_table_clause();
        const tableNameClause = tableClause.from_table_name_clause();
        
        console.log(tableNameClause.table_name().getText());
        console.log(tableNameClause.from_alias_clause().ident().getText());
    }
}

module.exports = GetSelectInfo;
