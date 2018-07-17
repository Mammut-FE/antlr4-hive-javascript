// Generated from src/Hplsql.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by HplsqlParser.
function HplsqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

HplsqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
HplsqlListener.prototype.constructor = HplsqlListener;

// Enter a parse tree produced by HplsqlParser#program.
HplsqlListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#program.
HplsqlListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#block.
HplsqlListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#block.
HplsqlListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#begin_end_block.
HplsqlListener.prototype.enterBegin_end_block = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#begin_end_block.
HplsqlListener.prototype.exitBegin_end_block = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#single_block_stmt.
HplsqlListener.prototype.enterSingle_block_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#single_block_stmt.
HplsqlListener.prototype.exitSingle_block_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#block_end.
HplsqlListener.prototype.enterBlock_end = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#block_end.
HplsqlListener.prototype.exitBlock_end = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#proc_block.
HplsqlListener.prototype.enterProc_block = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#proc_block.
HplsqlListener.prototype.exitProc_block = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#stmt.
HplsqlListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#stmt.
HplsqlListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#semicolon_stmt.
HplsqlListener.prototype.enterSemicolon_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#semicolon_stmt.
HplsqlListener.prototype.exitSemicolon_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#exception_block.
HplsqlListener.prototype.enterException_block = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#exception_block.
HplsqlListener.prototype.exitException_block = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#exception_block_item.
HplsqlListener.prototype.enterException_block_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#exception_block_item.
HplsqlListener.prototype.exitException_block_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#null_stmt.
HplsqlListener.prototype.enterNull_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#null_stmt.
HplsqlListener.prototype.exitNull_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_stmt.
HplsqlListener.prototype.enterExpr_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_stmt.
HplsqlListener.prototype.exitExpr_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#assignment_stmt.
HplsqlListener.prototype.enterAssignment_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#assignment_stmt.
HplsqlListener.prototype.exitAssignment_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#assignment_stmt_item.
HplsqlListener.prototype.enterAssignment_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#assignment_stmt_item.
HplsqlListener.prototype.exitAssignment_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#assignment_stmt_single_item.
HplsqlListener.prototype.enterAssignment_stmt_single_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#assignment_stmt_single_item.
HplsqlListener.prototype.exitAssignment_stmt_single_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#assignment_stmt_multiple_item.
HplsqlListener.prototype.enterAssignment_stmt_multiple_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#assignment_stmt_multiple_item.
HplsqlListener.prototype.exitAssignment_stmt_multiple_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#assignment_stmt_select_item.
HplsqlListener.prototype.enterAssignment_stmt_select_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#assignment_stmt_select_item.
HplsqlListener.prototype.exitAssignment_stmt_select_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#allocate_cursor_stmt.
HplsqlListener.prototype.enterAllocate_cursor_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#allocate_cursor_stmt.
HplsqlListener.prototype.exitAllocate_cursor_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#associate_locator_stmt.
HplsqlListener.prototype.enterAssociate_locator_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#associate_locator_stmt.
HplsqlListener.prototype.exitAssociate_locator_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#begin_transaction_stmt.
HplsqlListener.prototype.enterBegin_transaction_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#begin_transaction_stmt.
HplsqlListener.prototype.exitBegin_transaction_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#break_stmt.
HplsqlListener.prototype.enterBreak_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#break_stmt.
HplsqlListener.prototype.exitBreak_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#call_stmt.
HplsqlListener.prototype.enterCall_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#call_stmt.
HplsqlListener.prototype.exitCall_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_stmt.
HplsqlListener.prototype.enterDeclare_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_stmt.
HplsqlListener.prototype.exitDeclare_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_block.
HplsqlListener.prototype.enterDeclare_block = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_block.
HplsqlListener.prototype.exitDeclare_block = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_block_inplace.
HplsqlListener.prototype.enterDeclare_block_inplace = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_block_inplace.
HplsqlListener.prototype.exitDeclare_block_inplace = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_stmt_item.
HplsqlListener.prototype.enterDeclare_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_stmt_item.
HplsqlListener.prototype.exitDeclare_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_var_item.
HplsqlListener.prototype.enterDeclare_var_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_var_item.
HplsqlListener.prototype.exitDeclare_var_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_condition_item.
HplsqlListener.prototype.enterDeclare_condition_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_condition_item.
HplsqlListener.prototype.exitDeclare_condition_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_cursor_item.
HplsqlListener.prototype.enterDeclare_cursor_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_cursor_item.
HplsqlListener.prototype.exitDeclare_cursor_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#cursor_with_return.
HplsqlListener.prototype.enterCursor_with_return = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#cursor_with_return.
HplsqlListener.prototype.exitCursor_with_return = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#cursor_without_return.
HplsqlListener.prototype.enterCursor_without_return = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#cursor_without_return.
HplsqlListener.prototype.exitCursor_without_return = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_handler_item.
HplsqlListener.prototype.enterDeclare_handler_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_handler_item.
HplsqlListener.prototype.exitDeclare_handler_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#declare_temporary_table_item.
HplsqlListener.prototype.enterDeclare_temporary_table_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#declare_temporary_table_item.
HplsqlListener.prototype.exitDeclare_temporary_table_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_stmt.
HplsqlListener.prototype.enterCreate_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_stmt.
HplsqlListener.prototype.exitCreate_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_local_temp_table_stmt.
HplsqlListener.prototype.enterCreate_local_temp_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_local_temp_table_stmt.
HplsqlListener.prototype.exitCreate_local_temp_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_definition.
HplsqlListener.prototype.enterCreate_table_definition = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_definition.
HplsqlListener.prototype.exitCreate_table_definition = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_columns.
HplsqlListener.prototype.enterCreate_table_columns = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_columns.
HplsqlListener.prototype.exitCreate_table_columns = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_columns_item.
HplsqlListener.prototype.enterCreate_table_columns_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_columns_item.
HplsqlListener.prototype.exitCreate_table_columns_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#column_name.
HplsqlListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#column_name.
HplsqlListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_column_inline_cons.
HplsqlListener.prototype.enterCreate_table_column_inline_cons = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_column_inline_cons.
HplsqlListener.prototype.exitCreate_table_column_inline_cons = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_column_cons.
HplsqlListener.prototype.enterCreate_table_column_cons = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_column_cons.
HplsqlListener.prototype.exitCreate_table_column_cons = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_fk_action.
HplsqlListener.prototype.enterCreate_table_fk_action = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_fk_action.
HplsqlListener.prototype.exitCreate_table_fk_action = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_preoptions.
HplsqlListener.prototype.enterCreate_table_preoptions = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_preoptions.
HplsqlListener.prototype.exitCreate_table_preoptions = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_preoptions_item.
HplsqlListener.prototype.enterCreate_table_preoptions_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_preoptions_item.
HplsqlListener.prototype.exitCreate_table_preoptions_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_preoptions_td_item.
HplsqlListener.prototype.enterCreate_table_preoptions_td_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_preoptions_td_item.
HplsqlListener.prototype.exitCreate_table_preoptions_td_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_options.
HplsqlListener.prototype.enterCreate_table_options = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_options.
HplsqlListener.prototype.exitCreate_table_options = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_options_item.
HplsqlListener.prototype.enterCreate_table_options_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_options_item.
HplsqlListener.prototype.exitCreate_table_options_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_options_ora_item.
HplsqlListener.prototype.enterCreate_table_options_ora_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_options_ora_item.
HplsqlListener.prototype.exitCreate_table_options_ora_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_options_db2_item.
HplsqlListener.prototype.enterCreate_table_options_db2_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_options_db2_item.
HplsqlListener.prototype.exitCreate_table_options_db2_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_options_td_item.
HplsqlListener.prototype.enterCreate_table_options_td_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_options_td_item.
HplsqlListener.prototype.exitCreate_table_options_td_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_options_hive_item.
HplsqlListener.prototype.enterCreate_table_options_hive_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_options_hive_item.
HplsqlListener.prototype.exitCreate_table_options_hive_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_hive_row_format.
HplsqlListener.prototype.enterCreate_table_hive_row_format = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_hive_row_format.
HplsqlListener.prototype.exitCreate_table_hive_row_format = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_hive_row_format_fields.
HplsqlListener.prototype.enterCreate_table_hive_row_format_fields = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_hive_row_format_fields.
HplsqlListener.prototype.exitCreate_table_hive_row_format_fields = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_options_mssql_item.
HplsqlListener.prototype.enterCreate_table_options_mssql_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_options_mssql_item.
HplsqlListener.prototype.exitCreate_table_options_mssql_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_table_options_mysql_item.
HplsqlListener.prototype.enterCreate_table_options_mysql_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_table_options_mysql_item.
HplsqlListener.prototype.exitCreate_table_options_mysql_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#alter_table_stmt.
HplsqlListener.prototype.enterAlter_table_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#alter_table_stmt.
HplsqlListener.prototype.exitAlter_table_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#alter_table_item.
HplsqlListener.prototype.enterAlter_table_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#alter_table_item.
HplsqlListener.prototype.exitAlter_table_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#alter_table_add_constraint.
HplsqlListener.prototype.enterAlter_table_add_constraint = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#alter_table_add_constraint.
HplsqlListener.prototype.exitAlter_table_add_constraint = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#alter_table_add_constraint_item.
HplsqlListener.prototype.enterAlter_table_add_constraint_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#alter_table_add_constraint_item.
HplsqlListener.prototype.exitAlter_table_add_constraint_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#dtype.
HplsqlListener.prototype.enterDtype = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#dtype.
HplsqlListener.prototype.exitDtype = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#dtype_len.
HplsqlListener.prototype.enterDtype_len = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#dtype_len.
HplsqlListener.prototype.exitDtype_len = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#dtype_attr.
HplsqlListener.prototype.enterDtype_attr = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#dtype_attr.
HplsqlListener.prototype.exitDtype_attr = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#dtype_default.
HplsqlListener.prototype.enterDtype_default = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#dtype_default.
HplsqlListener.prototype.exitDtype_default = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_database_stmt.
HplsqlListener.prototype.enterCreate_database_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_database_stmt.
HplsqlListener.prototype.exitCreate_database_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_database_option.
HplsqlListener.prototype.enterCreate_database_option = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_database_option.
HplsqlListener.prototype.exitCreate_database_option = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_function_stmt.
HplsqlListener.prototype.enterCreate_function_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_function_stmt.
HplsqlListener.prototype.exitCreate_function_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_function_return.
HplsqlListener.prototype.enterCreate_function_return = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_function_return.
HplsqlListener.prototype.exitCreate_function_return = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_package_stmt.
HplsqlListener.prototype.enterCreate_package_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_package_stmt.
HplsqlListener.prototype.exitCreate_package_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#package_spec.
HplsqlListener.prototype.enterPackage_spec = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#package_spec.
HplsqlListener.prototype.exitPackage_spec = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#package_spec_item.
HplsqlListener.prototype.enterPackage_spec_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#package_spec_item.
HplsqlListener.prototype.exitPackage_spec_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_package_body_stmt.
HplsqlListener.prototype.enterCreate_package_body_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_package_body_stmt.
HplsqlListener.prototype.exitCreate_package_body_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#package_body.
HplsqlListener.prototype.enterPackage_body = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#package_body.
HplsqlListener.prototype.exitPackage_body = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#package_body_item.
HplsqlListener.prototype.enterPackage_body_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#package_body_item.
HplsqlListener.prototype.exitPackage_body_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_procedure_stmt.
HplsqlListener.prototype.enterCreate_procedure_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_procedure_stmt.
HplsqlListener.prototype.exitCreate_procedure_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_routine_params.
HplsqlListener.prototype.enterCreate_routine_params = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_routine_params.
HplsqlListener.prototype.exitCreate_routine_params = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_routine_param_item.
HplsqlListener.prototype.enterCreate_routine_param_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_routine_param_item.
HplsqlListener.prototype.exitCreate_routine_param_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_routine_options.
HplsqlListener.prototype.enterCreate_routine_options = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_routine_options.
HplsqlListener.prototype.exitCreate_routine_options = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_routine_option.
HplsqlListener.prototype.enterCreate_routine_option = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_routine_option.
HplsqlListener.prototype.exitCreate_routine_option = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#drop_stmt.
HplsqlListener.prototype.enterDrop_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#drop_stmt.
HplsqlListener.prototype.exitDrop_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#end_transaction_stmt.
HplsqlListener.prototype.enterEnd_transaction_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#end_transaction_stmt.
HplsqlListener.prototype.exitEnd_transaction_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#exec_stmt.
HplsqlListener.prototype.enterExec_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#exec_stmt.
HplsqlListener.prototype.exitExec_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#if_stmt.
HplsqlListener.prototype.enterIf_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#if_stmt.
HplsqlListener.prototype.exitIf_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#if_plsql_stmt.
HplsqlListener.prototype.enterIf_plsql_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#if_plsql_stmt.
HplsqlListener.prototype.exitIf_plsql_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#if_tsql_stmt.
HplsqlListener.prototype.enterIf_tsql_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#if_tsql_stmt.
HplsqlListener.prototype.exitIf_tsql_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#if_bteq_stmt.
HplsqlListener.prototype.enterIf_bteq_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#if_bteq_stmt.
HplsqlListener.prototype.exitIf_bteq_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#elseif_block.
HplsqlListener.prototype.enterElseif_block = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#elseif_block.
HplsqlListener.prototype.exitElseif_block = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#else_block.
HplsqlListener.prototype.enterElse_block = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#else_block.
HplsqlListener.prototype.exitElse_block = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#include_stmt.
HplsqlListener.prototype.enterInclude_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#include_stmt.
HplsqlListener.prototype.exitInclude_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#insert_stmt.
HplsqlListener.prototype.enterInsert_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#insert_stmt.
HplsqlListener.prototype.exitInsert_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#insert_stmt_cols.
HplsqlListener.prototype.enterInsert_stmt_cols = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#insert_stmt_cols.
HplsqlListener.prototype.exitInsert_stmt_cols = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#insert_stmt_rows.
HplsqlListener.prototype.enterInsert_stmt_rows = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#insert_stmt_rows.
HplsqlListener.prototype.exitInsert_stmt_rows = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#insert_stmt_row.
HplsqlListener.prototype.enterInsert_stmt_row = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#insert_stmt_row.
HplsqlListener.prototype.exitInsert_stmt_row = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#insert_directory_stmt.
HplsqlListener.prototype.enterInsert_directory_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#insert_directory_stmt.
HplsqlListener.prototype.exitInsert_directory_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#exit_stmt.
HplsqlListener.prototype.enterExit_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#exit_stmt.
HplsqlListener.prototype.exitExit_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#get_diag_stmt.
HplsqlListener.prototype.enterGet_diag_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#get_diag_stmt.
HplsqlListener.prototype.exitGet_diag_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#get_diag_stmt_item.
HplsqlListener.prototype.enterGet_diag_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#get_diag_stmt_item.
HplsqlListener.prototype.exitGet_diag_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#get_diag_stmt_exception_item.
HplsqlListener.prototype.enterGet_diag_stmt_exception_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#get_diag_stmt_exception_item.
HplsqlListener.prototype.exitGet_diag_stmt_exception_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#get_diag_stmt_rowcount_item.
HplsqlListener.prototype.enterGet_diag_stmt_rowcount_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#get_diag_stmt_rowcount_item.
HplsqlListener.prototype.exitGet_diag_stmt_rowcount_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#grant_stmt.
HplsqlListener.prototype.enterGrant_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#grant_stmt.
HplsqlListener.prototype.exitGrant_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#grant_stmt_item.
HplsqlListener.prototype.enterGrant_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#grant_stmt_item.
HplsqlListener.prototype.exitGrant_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#leave_stmt.
HplsqlListener.prototype.enterLeave_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#leave_stmt.
HplsqlListener.prototype.exitLeave_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#map_object_stmt.
HplsqlListener.prototype.enterMap_object_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#map_object_stmt.
HplsqlListener.prototype.exitMap_object_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#open_stmt.
HplsqlListener.prototype.enterOpen_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#open_stmt.
HplsqlListener.prototype.exitOpen_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#fetch_stmt.
HplsqlListener.prototype.enterFetch_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#fetch_stmt.
HplsqlListener.prototype.exitFetch_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#collect_stats_stmt.
HplsqlListener.prototype.enterCollect_stats_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#collect_stats_stmt.
HplsqlListener.prototype.exitCollect_stats_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#collect_stats_clause.
HplsqlListener.prototype.enterCollect_stats_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#collect_stats_clause.
HplsqlListener.prototype.exitCollect_stats_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#close_stmt.
HplsqlListener.prototype.enterClose_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#close_stmt.
HplsqlListener.prototype.exitClose_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#cmp_stmt.
HplsqlListener.prototype.enterCmp_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#cmp_stmt.
HplsqlListener.prototype.exitCmp_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#cmp_source.
HplsqlListener.prototype.enterCmp_source = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#cmp_source.
HplsqlListener.prototype.exitCmp_source = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#copy_from_local_stmt.
HplsqlListener.prototype.enterCopy_from_local_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#copy_from_local_stmt.
HplsqlListener.prototype.exitCopy_from_local_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#copy_stmt.
HplsqlListener.prototype.enterCopy_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#copy_stmt.
HplsqlListener.prototype.exitCopy_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#copy_source.
HplsqlListener.prototype.enterCopy_source = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#copy_source.
HplsqlListener.prototype.exitCopy_source = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#copy_target.
HplsqlListener.prototype.enterCopy_target = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#copy_target.
HplsqlListener.prototype.exitCopy_target = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#copy_option.
HplsqlListener.prototype.enterCopy_option = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#copy_option.
HplsqlListener.prototype.exitCopy_option = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#copy_file_option.
HplsqlListener.prototype.enterCopy_file_option = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#copy_file_option.
HplsqlListener.prototype.exitCopy_file_option = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#commit_stmt.
HplsqlListener.prototype.enterCommit_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#commit_stmt.
HplsqlListener.prototype.exitCommit_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_index_stmt.
HplsqlListener.prototype.enterCreate_index_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_index_stmt.
HplsqlListener.prototype.exitCreate_index_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#create_index_col.
HplsqlListener.prototype.enterCreate_index_col = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#create_index_col.
HplsqlListener.prototype.exitCreate_index_col = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#index_storage_clause.
HplsqlListener.prototype.enterIndex_storage_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#index_storage_clause.
HplsqlListener.prototype.exitIndex_storage_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#index_mssql_storage_clause.
HplsqlListener.prototype.enterIndex_mssql_storage_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#index_mssql_storage_clause.
HplsqlListener.prototype.exitIndex_mssql_storage_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#print_stmt.
HplsqlListener.prototype.enterPrint_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#print_stmt.
HplsqlListener.prototype.exitPrint_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#quit_stmt.
HplsqlListener.prototype.enterQuit_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#quit_stmt.
HplsqlListener.prototype.exitQuit_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#raise_stmt.
HplsqlListener.prototype.enterRaise_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#raise_stmt.
HplsqlListener.prototype.exitRaise_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#resignal_stmt.
HplsqlListener.prototype.enterResignal_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#resignal_stmt.
HplsqlListener.prototype.exitResignal_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#return_stmt.
HplsqlListener.prototype.enterReturn_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#return_stmt.
HplsqlListener.prototype.exitReturn_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#rollback_stmt.
HplsqlListener.prototype.enterRollback_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#rollback_stmt.
HplsqlListener.prototype.exitRollback_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#set_session_option.
HplsqlListener.prototype.enterSet_session_option = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#set_session_option.
HplsqlListener.prototype.exitSet_session_option = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#set_current_schema_option.
HplsqlListener.prototype.enterSet_current_schema_option = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#set_current_schema_option.
HplsqlListener.prototype.exitSet_current_schema_option = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#set_mssql_session_option.
HplsqlListener.prototype.enterSet_mssql_session_option = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#set_mssql_session_option.
HplsqlListener.prototype.exitSet_mssql_session_option = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#set_teradata_session_option.
HplsqlListener.prototype.enterSet_teradata_session_option = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#set_teradata_session_option.
HplsqlListener.prototype.exitSet_teradata_session_option = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#signal_stmt.
HplsqlListener.prototype.enterSignal_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#signal_stmt.
HplsqlListener.prototype.exitSignal_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#summary_stmt.
HplsqlListener.prototype.enterSummary_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#summary_stmt.
HplsqlListener.prototype.exitSummary_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#truncate_stmt.
HplsqlListener.prototype.enterTruncate_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#truncate_stmt.
HplsqlListener.prototype.exitTruncate_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#use_stmt.
HplsqlListener.prototype.enterUse_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#use_stmt.
HplsqlListener.prototype.exitUse_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#values_into_stmt.
HplsqlListener.prototype.enterValues_into_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#values_into_stmt.
HplsqlListener.prototype.exitValues_into_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#while_stmt.
HplsqlListener.prototype.enterWhile_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#while_stmt.
HplsqlListener.prototype.exitWhile_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#for_cursor_stmt.
HplsqlListener.prototype.enterFor_cursor_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#for_cursor_stmt.
HplsqlListener.prototype.exitFor_cursor_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#for_range_stmt.
HplsqlListener.prototype.enterFor_range_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#for_range_stmt.
HplsqlListener.prototype.exitFor_range_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#label.
HplsqlListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#label.
HplsqlListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#using_clause.
HplsqlListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#using_clause.
HplsqlListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_stmt.
HplsqlListener.prototype.enterSelect_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_stmt.
HplsqlListener.prototype.exitSelect_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#cte_select_stmt.
HplsqlListener.prototype.enterCte_select_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#cte_select_stmt.
HplsqlListener.prototype.exitCte_select_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#cte_select_stmt_item.
HplsqlListener.prototype.enterCte_select_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#cte_select_stmt_item.
HplsqlListener.prototype.exitCte_select_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#cte_select_cols.
HplsqlListener.prototype.enterCte_select_cols = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#cte_select_cols.
HplsqlListener.prototype.exitCte_select_cols = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#fullselect_stmt.
HplsqlListener.prototype.enterFullselect_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#fullselect_stmt.
HplsqlListener.prototype.exitFullselect_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#fullselect_stmt_item.
HplsqlListener.prototype.enterFullselect_stmt_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#fullselect_stmt_item.
HplsqlListener.prototype.exitFullselect_stmt_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#fullselect_set_clause.
HplsqlListener.prototype.enterFullselect_set_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#fullselect_set_clause.
HplsqlListener.prototype.exitFullselect_set_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#subselect_stmt.
HplsqlListener.prototype.enterSubselect_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#subselect_stmt.
HplsqlListener.prototype.exitSubselect_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_list.
HplsqlListener.prototype.enterSelect_list = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_list.
HplsqlListener.prototype.exitSelect_list = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_list_set.
HplsqlListener.prototype.enterSelect_list_set = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_list_set.
HplsqlListener.prototype.exitSelect_list_set = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_list_limit.
HplsqlListener.prototype.enterSelect_list_limit = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_list_limit.
HplsqlListener.prototype.exitSelect_list_limit = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_list_item.
HplsqlListener.prototype.enterSelect_list_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_list_item.
HplsqlListener.prototype.exitSelect_list_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_list_alias.
HplsqlListener.prototype.enterSelect_list_alias = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_list_alias.
HplsqlListener.prototype.exitSelect_list_alias = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_list_asterisk.
HplsqlListener.prototype.enterSelect_list_asterisk = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_list_asterisk.
HplsqlListener.prototype.exitSelect_list_asterisk = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#into_clause.
HplsqlListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#into_clause.
HplsqlListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_clause.
HplsqlListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_clause.
HplsqlListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_table_clause.
HplsqlListener.prototype.enterFrom_table_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_table_clause.
HplsqlListener.prototype.exitFrom_table_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_table_name_clause.
HplsqlListener.prototype.enterFrom_table_name_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_table_name_clause.
HplsqlListener.prototype.exitFrom_table_name_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_subselect_clause.
HplsqlListener.prototype.enterFrom_subselect_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_subselect_clause.
HplsqlListener.prototype.exitFrom_subselect_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_join_clause.
HplsqlListener.prototype.enterFrom_join_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_join_clause.
HplsqlListener.prototype.exitFrom_join_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_join_type_clause.
HplsqlListener.prototype.enterFrom_join_type_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_join_type_clause.
HplsqlListener.prototype.exitFrom_join_type_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_table_values_clause.
HplsqlListener.prototype.enterFrom_table_values_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_table_values_clause.
HplsqlListener.prototype.exitFrom_table_values_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_table_values_row.
HplsqlListener.prototype.enterFrom_table_values_row = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_table_values_row.
HplsqlListener.prototype.exitFrom_table_values_row = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#from_alias_clause.
HplsqlListener.prototype.enterFrom_alias_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#from_alias_clause.
HplsqlListener.prototype.exitFrom_alias_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#table_name.
HplsqlListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#table_name.
HplsqlListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#where_clause.
HplsqlListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#where_clause.
HplsqlListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#group_by_clause.
HplsqlListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#group_by_clause.
HplsqlListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#having_clause.
HplsqlListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#having_clause.
HplsqlListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#qualify_clause.
HplsqlListener.prototype.enterQualify_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#qualify_clause.
HplsqlListener.prototype.exitQualify_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#order_by_clause.
HplsqlListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#order_by_clause.
HplsqlListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_options.
HplsqlListener.prototype.enterSelect_options = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_options.
HplsqlListener.prototype.exitSelect_options = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#select_options_item.
HplsqlListener.prototype.enterSelect_options_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#select_options_item.
HplsqlListener.prototype.exitSelect_options_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#update_stmt.
HplsqlListener.prototype.enterUpdate_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#update_stmt.
HplsqlListener.prototype.exitUpdate_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#update_assignment.
HplsqlListener.prototype.enterUpdate_assignment = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#update_assignment.
HplsqlListener.prototype.exitUpdate_assignment = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#update_table.
HplsqlListener.prototype.enterUpdate_table = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#update_table.
HplsqlListener.prototype.exitUpdate_table = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#update_upsert.
HplsqlListener.prototype.enterUpdate_upsert = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#update_upsert.
HplsqlListener.prototype.exitUpdate_upsert = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#merge_stmt.
HplsqlListener.prototype.enterMerge_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#merge_stmt.
HplsqlListener.prototype.exitMerge_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#merge_table.
HplsqlListener.prototype.enterMerge_table = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#merge_table.
HplsqlListener.prototype.exitMerge_table = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#merge_condition.
HplsqlListener.prototype.enterMerge_condition = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#merge_condition.
HplsqlListener.prototype.exitMerge_condition = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#merge_action.
HplsqlListener.prototype.enterMerge_action = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#merge_action.
HplsqlListener.prototype.exitMerge_action = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#delete_stmt.
HplsqlListener.prototype.enterDelete_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#delete_stmt.
HplsqlListener.prototype.exitDelete_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#delete_alias.
HplsqlListener.prototype.enterDelete_alias = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#delete_alias.
HplsqlListener.prototype.exitDelete_alias = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#describe_stmt.
HplsqlListener.prototype.enterDescribe_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#describe_stmt.
HplsqlListener.prototype.exitDescribe_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_expr.
HplsqlListener.prototype.enterBool_expr = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_expr.
HplsqlListener.prototype.exitBool_expr = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_expr_atom.
HplsqlListener.prototype.enterBool_expr_atom = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_expr_atom.
HplsqlListener.prototype.exitBool_expr_atom = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_expr_unary.
HplsqlListener.prototype.enterBool_expr_unary = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_expr_unary.
HplsqlListener.prototype.exitBool_expr_unary = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_expr_single_in.
HplsqlListener.prototype.enterBool_expr_single_in = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_expr_single_in.
HplsqlListener.prototype.exitBool_expr_single_in = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_expr_multi_in.
HplsqlListener.prototype.enterBool_expr_multi_in = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_expr_multi_in.
HplsqlListener.prototype.exitBool_expr_multi_in = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_expr_binary.
HplsqlListener.prototype.enterBool_expr_binary = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_expr_binary.
HplsqlListener.prototype.exitBool_expr_binary = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_expr_logical_operator.
HplsqlListener.prototype.enterBool_expr_logical_operator = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_expr_logical_operator.
HplsqlListener.prototype.exitBool_expr_logical_operator = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_expr_binary_operator.
HplsqlListener.prototype.enterBool_expr_binary_operator = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_expr_binary_operator.
HplsqlListener.prototype.exitBool_expr_binary_operator = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr.
HplsqlListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr.
HplsqlListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_atom.
HplsqlListener.prototype.enterExpr_atom = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_atom.
HplsqlListener.prototype.exitExpr_atom = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_interval.
HplsqlListener.prototype.enterExpr_interval = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_interval.
HplsqlListener.prototype.exitExpr_interval = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#interval_item.
HplsqlListener.prototype.enterInterval_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#interval_item.
HplsqlListener.prototype.exitInterval_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_concat.
HplsqlListener.prototype.enterExpr_concat = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_concat.
HplsqlListener.prototype.exitExpr_concat = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_concat_item.
HplsqlListener.prototype.enterExpr_concat_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_concat_item.
HplsqlListener.prototype.exitExpr_concat_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_case.
HplsqlListener.prototype.enterExpr_case = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_case.
HplsqlListener.prototype.exitExpr_case = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_case_simple.
HplsqlListener.prototype.enterExpr_case_simple = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_case_simple.
HplsqlListener.prototype.exitExpr_case_simple = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_case_searched.
HplsqlListener.prototype.enterExpr_case_searched = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_case_searched.
HplsqlListener.prototype.exitExpr_case_searched = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_cursor_attribute.
HplsqlListener.prototype.enterExpr_cursor_attribute = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_cursor_attribute.
HplsqlListener.prototype.exitExpr_cursor_attribute = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_agg_window_func.
HplsqlListener.prototype.enterExpr_agg_window_func = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_agg_window_func.
HplsqlListener.prototype.exitExpr_agg_window_func = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_func_all_distinct.
HplsqlListener.prototype.enterExpr_func_all_distinct = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_func_all_distinct.
HplsqlListener.prototype.exitExpr_func_all_distinct = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_func_over_clause.
HplsqlListener.prototype.enterExpr_func_over_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_func_over_clause.
HplsqlListener.prototype.exitExpr_func_over_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_func_partition_by_clause.
HplsqlListener.prototype.enterExpr_func_partition_by_clause = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_func_partition_by_clause.
HplsqlListener.prototype.exitExpr_func_partition_by_clause = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_spec_func.
HplsqlListener.prototype.enterExpr_spec_func = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_spec_func.
HplsqlListener.prototype.exitExpr_spec_func = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_func.
HplsqlListener.prototype.enterExpr_func = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_func.
HplsqlListener.prototype.exitExpr_func = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_func_params.
HplsqlListener.prototype.enterExpr_func_params = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_func_params.
HplsqlListener.prototype.exitExpr_func_params = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#func_param.
HplsqlListener.prototype.enterFunc_param = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#func_param.
HplsqlListener.prototype.exitFunc_param = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_select.
HplsqlListener.prototype.enterExpr_select = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_select.
HplsqlListener.prototype.exitExpr_select = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#expr_file.
HplsqlListener.prototype.enterExpr_file = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#expr_file.
HplsqlListener.prototype.exitExpr_file = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#hive.
HplsqlListener.prototype.enterHive = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#hive.
HplsqlListener.prototype.exitHive = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#hive_item.
HplsqlListener.prototype.enterHive_item = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#hive_item.
HplsqlListener.prototype.exitHive_item = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#host.
HplsqlListener.prototype.enterHost = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#host.
HplsqlListener.prototype.exitHost = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#host_cmd.
HplsqlListener.prototype.enterHost_cmd = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#host_cmd.
HplsqlListener.prototype.exitHost_cmd = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#host_stmt.
HplsqlListener.prototype.enterHost_stmt = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#host_stmt.
HplsqlListener.prototype.exitHost_stmt = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#file_name.
HplsqlListener.prototype.enterFile_name = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#file_name.
HplsqlListener.prototype.exitFile_name = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#date_literal.
HplsqlListener.prototype.enterDate_literal = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#date_literal.
HplsqlListener.prototype.exitDate_literal = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#timestamp_literal.
HplsqlListener.prototype.enterTimestamp_literal = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#timestamp_literal.
HplsqlListener.prototype.exitTimestamp_literal = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#ident.
HplsqlListener.prototype.enterIdent = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#ident.
HplsqlListener.prototype.exitIdent = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#single_quotedString.
HplsqlListener.prototype.enterSingle_quotedString = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#single_quotedString.
HplsqlListener.prototype.exitSingle_quotedString = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#double_quotedString.
HplsqlListener.prototype.enterDouble_quotedString = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#double_quotedString.
HplsqlListener.prototype.exitDouble_quotedString = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#int_number.
HplsqlListener.prototype.enterInt_number = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#int_number.
HplsqlListener.prototype.exitInt_number = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#dec_number.
HplsqlListener.prototype.enterDec_number = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#dec_number.
HplsqlListener.prototype.exitDec_number = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#bool_literal.
HplsqlListener.prototype.enterBool_literal = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#bool_literal.
HplsqlListener.prototype.exitBool_literal = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#null_const.
HplsqlListener.prototype.enterNull_const = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#null_const.
HplsqlListener.prototype.exitNull_const = function(ctx) {
};


// Enter a parse tree produced by HplsqlParser#non_reserved_words.
HplsqlListener.prototype.enterNon_reserved_words = function(ctx) {
};

// Exit a parse tree produced by HplsqlParser#non_reserved_words.
HplsqlListener.prototype.exitNon_reserved_words = function(ctx) {
};



exports.HplsqlListener = HplsqlListener;