const {HplsqlVisitor} = require('../lib');

class GetSelectInfo extends HplsqlVisitor {
    constructor (...args) {
        super(args);
    }
    
    visitFrom_table_clause (ctx) {
        const tableName = ctx.from_table_name_clause().table_name();
        console.log(`select target table: "${tableName.getText()}"`);
    }
}

module.exports = GetSelectInfo;
