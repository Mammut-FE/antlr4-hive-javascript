// Generated from src/Hplsql.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by HplsqlParser.

function HplsqlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

HplsqlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
HplsqlVisitor.prototype.constructor = HplsqlVisitor;

// Visit a parse tree produced by HplsqlParser#program.
HplsqlVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#block.
HplsqlVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#begin_end_block.
HplsqlVisitor.prototype.visitBegin_end_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#single_block_stmt.
HplsqlVisitor.prototype.visitSingle_block_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#block_end.
HplsqlVisitor.prototype.visitBlock_end = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#proc_block.
HplsqlVisitor.prototype.visitProc_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#stmt.
HplsqlVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#semicolon_stmt.
HplsqlVisitor.prototype.visitSemicolon_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#exception_block.
HplsqlVisitor.prototype.visitException_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#exception_block_item.
HplsqlVisitor.prototype.visitException_block_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#null_stmt.
HplsqlVisitor.prototype.visitNull_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_stmt.
HplsqlVisitor.prototype.visitExpr_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#assignment_stmt.
HplsqlVisitor.prototype.visitAssignment_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#assignment_stmt_item.
HplsqlVisitor.prototype.visitAssignment_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#assignment_stmt_single_item.
HplsqlVisitor.prototype.visitAssignment_stmt_single_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#assignment_stmt_multiple_item.
HplsqlVisitor.prototype.visitAssignment_stmt_multiple_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#assignment_stmt_select_item.
HplsqlVisitor.prototype.visitAssignment_stmt_select_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#allocate_cursor_stmt.
HplsqlVisitor.prototype.visitAllocate_cursor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#associate_locator_stmt.
HplsqlVisitor.prototype.visitAssociate_locator_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#begin_transaction_stmt.
HplsqlVisitor.prototype.visitBegin_transaction_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#break_stmt.
HplsqlVisitor.prototype.visitBreak_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#call_stmt.
HplsqlVisitor.prototype.visitCall_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_stmt.
HplsqlVisitor.prototype.visitDeclare_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_block.
HplsqlVisitor.prototype.visitDeclare_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_block_inplace.
HplsqlVisitor.prototype.visitDeclare_block_inplace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_stmt_item.
HplsqlVisitor.prototype.visitDeclare_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_var_item.
HplsqlVisitor.prototype.visitDeclare_var_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_condition_item.
HplsqlVisitor.prototype.visitDeclare_condition_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_cursor_item.
HplsqlVisitor.prototype.visitDeclare_cursor_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#cursor_with_return.
HplsqlVisitor.prototype.visitCursor_with_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#cursor_without_return.
HplsqlVisitor.prototype.visitCursor_without_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_handler_item.
HplsqlVisitor.prototype.visitDeclare_handler_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#declare_temporary_table_item.
HplsqlVisitor.prototype.visitDeclare_temporary_table_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_stmt.
HplsqlVisitor.prototype.visitCreate_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_local_temp_table_stmt.
HplsqlVisitor.prototype.visitCreate_local_temp_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_definition.
HplsqlVisitor.prototype.visitCreate_table_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_columns.
HplsqlVisitor.prototype.visitCreate_table_columns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_columns_item.
HplsqlVisitor.prototype.visitCreate_table_columns_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#column_name.
HplsqlVisitor.prototype.visitColumn_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_column_inline_cons.
HplsqlVisitor.prototype.visitCreate_table_column_inline_cons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_column_cons.
HplsqlVisitor.prototype.visitCreate_table_column_cons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_fk_action.
HplsqlVisitor.prototype.visitCreate_table_fk_action = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_preoptions.
HplsqlVisitor.prototype.visitCreate_table_preoptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_preoptions_item.
HplsqlVisitor.prototype.visitCreate_table_preoptions_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_preoptions_td_item.
HplsqlVisitor.prototype.visitCreate_table_preoptions_td_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_options.
HplsqlVisitor.prototype.visitCreate_table_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_options_item.
HplsqlVisitor.prototype.visitCreate_table_options_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_options_ora_item.
HplsqlVisitor.prototype.visitCreate_table_options_ora_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_options_db2_item.
HplsqlVisitor.prototype.visitCreate_table_options_db2_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_options_td_item.
HplsqlVisitor.prototype.visitCreate_table_options_td_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_options_hive_item.
HplsqlVisitor.prototype.visitCreate_table_options_hive_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_hive_row_format.
HplsqlVisitor.prototype.visitCreate_table_hive_row_format = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_hive_row_format_fields.
HplsqlVisitor.prototype.visitCreate_table_hive_row_format_fields = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_options_mssql_item.
HplsqlVisitor.prototype.visitCreate_table_options_mssql_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_table_options_mysql_item.
HplsqlVisitor.prototype.visitCreate_table_options_mysql_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#alter_table_stmt.
HplsqlVisitor.prototype.visitAlter_table_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#alter_table_item.
HplsqlVisitor.prototype.visitAlter_table_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#alter_table_add_constraint.
HplsqlVisitor.prototype.visitAlter_table_add_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#alter_table_add_constraint_item.
HplsqlVisitor.prototype.visitAlter_table_add_constraint_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#dtype.
HplsqlVisitor.prototype.visitDtype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#dtype_len.
HplsqlVisitor.prototype.visitDtype_len = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#dtype_attr.
HplsqlVisitor.prototype.visitDtype_attr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#dtype_default.
HplsqlVisitor.prototype.visitDtype_default = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_database_stmt.
HplsqlVisitor.prototype.visitCreate_database_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_database_option.
HplsqlVisitor.prototype.visitCreate_database_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_function_stmt.
HplsqlVisitor.prototype.visitCreate_function_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_function_return.
HplsqlVisitor.prototype.visitCreate_function_return = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_package_stmt.
HplsqlVisitor.prototype.visitCreate_package_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#package_spec.
HplsqlVisitor.prototype.visitPackage_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#package_spec_item.
HplsqlVisitor.prototype.visitPackage_spec_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_package_body_stmt.
HplsqlVisitor.prototype.visitCreate_package_body_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#package_body.
HplsqlVisitor.prototype.visitPackage_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#package_body_item.
HplsqlVisitor.prototype.visitPackage_body_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_procedure_stmt.
HplsqlVisitor.prototype.visitCreate_procedure_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_routine_params.
HplsqlVisitor.prototype.visitCreate_routine_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_routine_param_item.
HplsqlVisitor.prototype.visitCreate_routine_param_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_routine_options.
HplsqlVisitor.prototype.visitCreate_routine_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_routine_option.
HplsqlVisitor.prototype.visitCreate_routine_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#drop_stmt.
HplsqlVisitor.prototype.visitDrop_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#end_transaction_stmt.
HplsqlVisitor.prototype.visitEnd_transaction_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#exec_stmt.
HplsqlVisitor.prototype.visitExec_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#if_stmt.
HplsqlVisitor.prototype.visitIf_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#if_plsql_stmt.
HplsqlVisitor.prototype.visitIf_plsql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#if_tsql_stmt.
HplsqlVisitor.prototype.visitIf_tsql_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#if_bteq_stmt.
HplsqlVisitor.prototype.visitIf_bteq_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#elseif_block.
HplsqlVisitor.prototype.visitElseif_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#else_block.
HplsqlVisitor.prototype.visitElse_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#include_stmt.
HplsqlVisitor.prototype.visitInclude_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#insert_stmt.
HplsqlVisitor.prototype.visitInsert_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#insert_stmt_cols.
HplsqlVisitor.prototype.visitInsert_stmt_cols = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#insert_stmt_rows.
HplsqlVisitor.prototype.visitInsert_stmt_rows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#insert_stmt_row.
HplsqlVisitor.prototype.visitInsert_stmt_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#insert_directory_stmt.
HplsqlVisitor.prototype.visitInsert_directory_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#exit_stmt.
HplsqlVisitor.prototype.visitExit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#get_diag_stmt.
HplsqlVisitor.prototype.visitGet_diag_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#get_diag_stmt_item.
HplsqlVisitor.prototype.visitGet_diag_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#get_diag_stmt_exception_item.
HplsqlVisitor.prototype.visitGet_diag_stmt_exception_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#get_diag_stmt_rowcount_item.
HplsqlVisitor.prototype.visitGet_diag_stmt_rowcount_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#grant_stmt.
HplsqlVisitor.prototype.visitGrant_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#grant_stmt_item.
HplsqlVisitor.prototype.visitGrant_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#leave_stmt.
HplsqlVisitor.prototype.visitLeave_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#map_object_stmt.
HplsqlVisitor.prototype.visitMap_object_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#open_stmt.
HplsqlVisitor.prototype.visitOpen_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#fetch_stmt.
HplsqlVisitor.prototype.visitFetch_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#collect_stats_stmt.
HplsqlVisitor.prototype.visitCollect_stats_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#collect_stats_clause.
HplsqlVisitor.prototype.visitCollect_stats_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#close_stmt.
HplsqlVisitor.prototype.visitClose_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#cmp_stmt.
HplsqlVisitor.prototype.visitCmp_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#cmp_source.
HplsqlVisitor.prototype.visitCmp_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#copy_from_local_stmt.
HplsqlVisitor.prototype.visitCopy_from_local_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#copy_stmt.
HplsqlVisitor.prototype.visitCopy_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#copy_source.
HplsqlVisitor.prototype.visitCopy_source = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#copy_target.
HplsqlVisitor.prototype.visitCopy_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#copy_option.
HplsqlVisitor.prototype.visitCopy_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#copy_file_option.
HplsqlVisitor.prototype.visitCopy_file_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#commit_stmt.
HplsqlVisitor.prototype.visitCommit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_index_stmt.
HplsqlVisitor.prototype.visitCreate_index_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#create_index_col.
HplsqlVisitor.prototype.visitCreate_index_col = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#index_storage_clause.
HplsqlVisitor.prototype.visitIndex_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#index_mssql_storage_clause.
HplsqlVisitor.prototype.visitIndex_mssql_storage_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#print_stmt.
HplsqlVisitor.prototype.visitPrint_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#quit_stmt.
HplsqlVisitor.prototype.visitQuit_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#raise_stmt.
HplsqlVisitor.prototype.visitRaise_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#resignal_stmt.
HplsqlVisitor.prototype.visitResignal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#return_stmt.
HplsqlVisitor.prototype.visitReturn_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#rollback_stmt.
HplsqlVisitor.prototype.visitRollback_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#set_session_option.
HplsqlVisitor.prototype.visitSet_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#set_current_schema_option.
HplsqlVisitor.prototype.visitSet_current_schema_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#set_mssql_session_option.
HplsqlVisitor.prototype.visitSet_mssql_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#set_teradata_session_option.
HplsqlVisitor.prototype.visitSet_teradata_session_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#signal_stmt.
HplsqlVisitor.prototype.visitSignal_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#summary_stmt.
HplsqlVisitor.prototype.visitSummary_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#truncate_stmt.
HplsqlVisitor.prototype.visitTruncate_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#use_stmt.
HplsqlVisitor.prototype.visitUse_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#values_into_stmt.
HplsqlVisitor.prototype.visitValues_into_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#while_stmt.
HplsqlVisitor.prototype.visitWhile_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#for_cursor_stmt.
HplsqlVisitor.prototype.visitFor_cursor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#for_range_stmt.
HplsqlVisitor.prototype.visitFor_range_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#label.
HplsqlVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#using_clause.
HplsqlVisitor.prototype.visitUsing_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_stmt.
HplsqlVisitor.prototype.visitSelect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#cte_select_stmt.
HplsqlVisitor.prototype.visitCte_select_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#cte_select_stmt_item.
HplsqlVisitor.prototype.visitCte_select_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#cte_select_cols.
HplsqlVisitor.prototype.visitCte_select_cols = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#fullselect_stmt.
HplsqlVisitor.prototype.visitFullselect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#fullselect_stmt_item.
HplsqlVisitor.prototype.visitFullselect_stmt_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#fullselect_set_clause.
HplsqlVisitor.prototype.visitFullselect_set_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#subselect_stmt.
HplsqlVisitor.prototype.visitSubselect_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_list.
HplsqlVisitor.prototype.visitSelect_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_list_set.
HplsqlVisitor.prototype.visitSelect_list_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_list_limit.
HplsqlVisitor.prototype.visitSelect_list_limit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_list_item.
HplsqlVisitor.prototype.visitSelect_list_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_list_alias.
HplsqlVisitor.prototype.visitSelect_list_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_list_asterisk.
HplsqlVisitor.prototype.visitSelect_list_asterisk = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#into_clause.
HplsqlVisitor.prototype.visitInto_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_clause.
HplsqlVisitor.prototype.visitFrom_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_table_clause.
HplsqlVisitor.prototype.visitFrom_table_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_table_name_clause.
HplsqlVisitor.prototype.visitFrom_table_name_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_subselect_clause.
HplsqlVisitor.prototype.visitFrom_subselect_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_join_clause.
HplsqlVisitor.prototype.visitFrom_join_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_join_type_clause.
HplsqlVisitor.prototype.visitFrom_join_type_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_table_values_clause.
HplsqlVisitor.prototype.visitFrom_table_values_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_table_values_row.
HplsqlVisitor.prototype.visitFrom_table_values_row = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#from_alias_clause.
HplsqlVisitor.prototype.visitFrom_alias_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#table_name.
HplsqlVisitor.prototype.visitTable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#where_clause.
HplsqlVisitor.prototype.visitWhere_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#group_by_clause.
HplsqlVisitor.prototype.visitGroup_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#having_clause.
HplsqlVisitor.prototype.visitHaving_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#qualify_clause.
HplsqlVisitor.prototype.visitQualify_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#order_by_clause.
HplsqlVisitor.prototype.visitOrder_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_options.
HplsqlVisitor.prototype.visitSelect_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#select_options_item.
HplsqlVisitor.prototype.visitSelect_options_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#update_stmt.
HplsqlVisitor.prototype.visitUpdate_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#update_assignment.
HplsqlVisitor.prototype.visitUpdate_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#update_table.
HplsqlVisitor.prototype.visitUpdate_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#update_upsert.
HplsqlVisitor.prototype.visitUpdate_upsert = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#merge_stmt.
HplsqlVisitor.prototype.visitMerge_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#merge_table.
HplsqlVisitor.prototype.visitMerge_table = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#merge_condition.
HplsqlVisitor.prototype.visitMerge_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#merge_action.
HplsqlVisitor.prototype.visitMerge_action = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#delete_stmt.
HplsqlVisitor.prototype.visitDelete_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#delete_alias.
HplsqlVisitor.prototype.visitDelete_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#describe_stmt.
HplsqlVisitor.prototype.visitDescribe_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_expr.
HplsqlVisitor.prototype.visitBool_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_expr_atom.
HplsqlVisitor.prototype.visitBool_expr_atom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_expr_unary.
HplsqlVisitor.prototype.visitBool_expr_unary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_expr_single_in.
HplsqlVisitor.prototype.visitBool_expr_single_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_expr_multi_in.
HplsqlVisitor.prototype.visitBool_expr_multi_in = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_expr_binary.
HplsqlVisitor.prototype.visitBool_expr_binary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_expr_logical_operator.
HplsqlVisitor.prototype.visitBool_expr_logical_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_expr_binary_operator.
HplsqlVisitor.prototype.visitBool_expr_binary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr.
HplsqlVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_atom.
HplsqlVisitor.prototype.visitExpr_atom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_interval.
HplsqlVisitor.prototype.visitExpr_interval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#interval_item.
HplsqlVisitor.prototype.visitInterval_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_concat.
HplsqlVisitor.prototype.visitExpr_concat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_concat_item.
HplsqlVisitor.prototype.visitExpr_concat_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_case.
HplsqlVisitor.prototype.visitExpr_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_case_simple.
HplsqlVisitor.prototype.visitExpr_case_simple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_case_searched.
HplsqlVisitor.prototype.visitExpr_case_searched = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_cursor_attribute.
HplsqlVisitor.prototype.visitExpr_cursor_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_agg_window_func.
HplsqlVisitor.prototype.visitExpr_agg_window_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_func_all_distinct.
HplsqlVisitor.prototype.visitExpr_func_all_distinct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_func_over_clause.
HplsqlVisitor.prototype.visitExpr_func_over_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_func_partition_by_clause.
HplsqlVisitor.prototype.visitExpr_func_partition_by_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_spec_func.
HplsqlVisitor.prototype.visitExpr_spec_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_func.
HplsqlVisitor.prototype.visitExpr_func = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_func_params.
HplsqlVisitor.prototype.visitExpr_func_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#func_param.
HplsqlVisitor.prototype.visitFunc_param = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_select.
HplsqlVisitor.prototype.visitExpr_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#expr_file.
HplsqlVisitor.prototype.visitExpr_file = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#hive.
HplsqlVisitor.prototype.visitHive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#hive_item.
HplsqlVisitor.prototype.visitHive_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#host.
HplsqlVisitor.prototype.visitHost = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#host_cmd.
HplsqlVisitor.prototype.visitHost_cmd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#host_stmt.
HplsqlVisitor.prototype.visitHost_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#file_name.
HplsqlVisitor.prototype.visitFile_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#date_literal.
HplsqlVisitor.prototype.visitDate_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#timestamp_literal.
HplsqlVisitor.prototype.visitTimestamp_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#ident.
HplsqlVisitor.prototype.visitIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#single_quotedString.
HplsqlVisitor.prototype.visitSingle_quotedString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#double_quotedString.
HplsqlVisitor.prototype.visitDouble_quotedString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#int_number.
HplsqlVisitor.prototype.visitInt_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#dec_number.
HplsqlVisitor.prototype.visitDec_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#bool_literal.
HplsqlVisitor.prototype.visitBool_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#null_const.
HplsqlVisitor.prototype.visitNull_const = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HplsqlParser#non_reserved_words.
HplsqlVisitor.prototype.visitNon_reserved_words = function(ctx) {
  return this.visitChildren(ctx);
};



exports.HplsqlVisitor = HplsqlVisitor;