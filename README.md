# Moodle Snippets & File Generator

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-moodle-snippets?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/imgildev.vscode-moodle-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/imgildev.vscode-moodle-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/imgildev.vscode-moodle-snippets?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets&ssr=false#review-details)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/vscode-moodle-snippets?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-moodle-snippets)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-moodle-snippets?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-moodle-snippets/blob/main/LICENSE)

> Snippets and file‑generation commands for PHP, XML, Mustache, and other Moodle development artifacts.

## Overview

Moodle Pack streamlines Moodle plugin and theme development by providing:

- **Code snippets** for `$CFG`, `$DB`, `$OUTPUT`, `$PAGE`, `$USER` and form API calls
- **File templates** to scaffold new Moodle components
- **Mustache**, XML, and PHP boilerplate shortcuts
- **Integrated commands** to generate standard Moodle files (blocks, settings, form classes, etc.)

![demo](https://raw.githubusercontent.com/ManuelGil/vscode-moodle-snippets/main/images/demo.gif)

## Requirements

- VS Code 1.46.0 or later (also works in VSCodium, WindSurf, Cursor, etc.)

## Installation

1. Open **Visual Studio Code**.
2. Open the **Extensions** view (`Ctrl+Shift+X` on Windows/Linux or `⌘+Shift+X` on macOS).
3. Search for **Moodle Pack** or install directly from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-moodle-snippets).
4. Click **Install** and reload the editor if prompted.

## Configuration

Add the following to your workspace’s `.vscode/settings.json` to personalize author metadata:

```jsonc
{
  "moodle.author_fullname": "Your Name",
  "moodle.author_link": "https://your.website/profile"
}
```

No further configuration is required; snippets and commands are ready immediately after installation.

## Usage

### File Generation Commands

Access from the Command Palette (`Ctrl+Shift+P` / ⌘+Shift+P):

- **Moodle: New Mustache File**
- **Moodle: New PHP File**
- **Moodle: New XML File**
- **Moodle: New Table File**
- **Moodle: New Access File**
- **Moodle: New Lib File**
- **Moodle: New Version File**

Follow prompts to enter plugin name, component identifiers, and desired boilerplate.

### Snippet Expansion

![snippets](https://raw.githubusercontent.com/ManuelGil/vscode-moodle-snippets/main/images/snippets.gif)

Type a snippet prefix in a PHP, XML, or Mustache file and press **Tab** to expand. Examples:

### $CFG Snippets

| Snippet           | Purpose             |
| ----------------- | ------------------- |
| cfg_admin         | $CFG->admin         |
| cfg_cachedir      | $CFG->cachedir      |
| cfg_dataroot      | $CFG->dataroot      |
| cfg_dirroot       | $CFG->dirroot       |
| cfg_docroot       | $CFG->docroot       |
| cfg_httpswwwroot  | $CFG->httpswwwroot  |
| cfg_lang          | $CFG->lang          |
| cfg_libdir        | $CFG->libdir        |
| cfg_localcachedir | $CFG->localcachedir |
| cfg_tempdir       | $CFG->tempdir       |
| cfg_wwwroot       | $CFG->wwwroot       |

### $DB Snippets

| Snippet                            | Purpose                              |
| ---------------------------------- | ------------------------------------ |
| db_get_driver_instance             | $DB::get_driver_instance             |
| db_driver_installed                | $DB->driver_installed                |
| db_get_prefix                      | $DB->get_prefix                      |
| db_get_dbvendor                    | $DB->get_dbvendor                    |
| db_get_dbfamily                    | $DB->get_dbfamily                    |
| db_get_name                        | $DB->get_name                        |
| db_get_configuration_help          | $DB->get_configuration_help          |
| db_get_configuration_hints         | $DB->get_configuration_hints         |
| db_export_dbconfig                 | $DB->export_dbconfig                 |
| db_diagnose                        | $DB->diagnose                        |
| db_connect                         | $DB->connect                         |
| db_create_database                 | $DB->create_database                 |
| db_get_transaction_start_backtrace | $DB->get_transaction_start_backtrace |
| db_dispose                         | $DB->dispose                         |
| db_query_log                       | $DB->query_log                       |
| db_get_server_info                 | $DB->get_server_info                 |
| db_get_last_error                  | $DB->get_last_error                  |
| db_get_in_or_equal                 | $DB->get_in_or_equal                 |
| db_fix_sql_params                  | $DB->fix_sql_params                  |
| db_get_tables                      | $DB->get_tables                      |
| db_get_indexes                     | $DB->get_indexes                     |
| db_get_columns                     | $DB->get_columns                     |
| db_reset_caches                    | $DB->reset_caches                    |
| db_get_manager                     | $DB->get_manager                     |
| db_change_db_encoding              | $DB->change_db_encoding              |
| db_setup_is_unicodedb              | $DB->setup_is_unicodedb              |
| db_set_debug                       | $DB->set_debug                       |
| db_get_debug                       | $DB->get_debug                       |
| db_set_logging                     | $DB->set_logging                     |
| db_change_database_structure       | $DB->change_database_structure       |
| db_execute                         | $DB->execute                         |
| db_get_recordset                   | $DB->get_recordset                   |
| db_get_recordset_list              | $DB->get_recordset_list              |
| db_get_recordset_select            | $DB->get_recordset_select            |
| db_get_recordset_sql               | $DB->get_recordset_sql               |
| db_export_table_recordset          | $DB->export_table_recordset          |
| db_get_records                     | $DB->get_records                     |
| db_get_records_list                | $DB->get_records_list                |
| db_get_records_select              | $DB->get_records_select              |
| db_get_records_sql                 | $DB->get_records_sql                 |
| db_get_records_menu                | $DB->get_records_menu                |
| db_get_records_select_menu         | $DB->get_records_select_menu         |
| db_get_records_sql_menu            | $DB->get_records_sql_menu            |
| db_get_record                      | $DB->get_record                      |
| db_get_record_select               | $DB->get_record_select               |
| db_get_record_sql                  | $DB->get_record_sql                  |
| db_get_field                       | $DB->get_field                       |
| db_get_field_select                | $DB->get_field_select                |
| db_get_field_sql                   | $DB->get_field_sql                   |
| db_get_fieldset_select             | $DB->get_fieldset_select             |
| db_get_fieldset_sql                | $DB->get_fieldset_sql                |
| db_insert_record_raw               | $DB->insert_record_raw               |
| db_insert_record                   | $DB->insert_record                   |
| db_insert_records                  | $DB->insert_records                  |
| db_import_record                   | $DB->import_record                   |
| db_update_record_raw               | $DB->update_record_raw               |
| db_update_record                   | $DB->update_record                   |
| db_set_field                       | $DB->set_field                       |
| db_set_field_select                | $DB->set_field_select                |
| db_count_records                   | $DB->count_records                   |
| db_count_records_select            | $DB->count_records_select            |
| db_count_records_sql               | $DB->count_records_sql               |
| db_record_exists                   | $DB->record_exists                   |
| db_record_exists_select            | $DB->record_exists_select            |
| db_record_exists_sql               | $DB->record_exists_sql               |
| db_delete_records                  | $DB->delete_records                  |
| db_delete_records_list             | $DB->delete_records_list             |
| db_delete_records_select           | $DB->delete_records_select           |
| db_sql_null_from_clause            | $DB->sql_null_from_clause            |
| db_sql_bitand                      | $DB->sql_bitand                      |
| db_sql_bitnot                      | $DB->sql_bitnot                      |
| db_sql_bitor                       | $DB->sql_bitor                       |
| db_sql_bitxor                      | $DB->sql_bitxor                      |
| db_sql_modulo                      | $DB->sql_modulo                      |
| db_sql_ceil                        | $DB->sql_ceil                        |
| db_sql_cast_char2int               | $DB->sql_cast_char2int               |
| db_sql_cast_char2real              | $DB->sql_cast_char2real              |
| db_sql_cast_2signed                | $DB->sql_cast_2signed                |
| db_sql_compare_text                | $DB->sql_compare_text                |
| db_sql_equal                       | $DB->sql_equal                       |
| db_sql_like                        | $DB->sql_like                        |
| db_sql_like_escape                 | $DB->sql_like_escape                 |
| db_sql_concat                      | $DB->sql_concat                      |
| db_sql_concat_join                 | $DB->sql_concat_join                 |
| db_sql_fullname                    | $DB->sql_fullname                    |
| db_sql_order_by_text               | $DB->sql_order_by_text               |
| db_sql_length                      | $DB->sql_length                      |
| db_sql_substr                      | $DB->sql_substr                      |
| db_sql_position                    | $DB->sql_position                    |
| db_sql_empty                       | $DB->sql_empty                       |
| db_sql_isempty                     | $DB->sql_isempty                     |
| db_sql_isnotempty                  | $DB->sql_isnotempty                  |
| db_sql_regex_supported             | $DB->sql_regex_supported             |
| db_sql_regex                       | $DB->sql_regex                       |
| db_sql_intersect                   | $DB->sql_intersect                   |
| db_replace_all_text_supported      | $DB->replace_all_text_supported      |
| db_replace_all_text                | $DB->replace_all_text                |
| db_update_temp_table_stats         | $DB->update_temp_table_stats         |
| db_is_transaction_started          | $DB->is_transaction_started          |
| db_transactions_forbidden          | $DB->transactions_forbidden          |
| db_start_delegated_transaction     | $DB->start_delegated_transaction     |
| db_commit_delegated_transaction    | $DB->commit_delegated_transaction    |
| db_rollback_delegated_transaction  | $DB->rollback_delegated_transaction  |
| db_force_transaction_rollback      | $DB->force_transaction_rollback      |
| db_session_lock_supported          | $DB->session_lock_supported          |
| db_get_session_lock                | $DB->get_session_lock                |
| db_release_session_lock            | $DB->release_session_lock            |
| db_perf_get_reads                  | $DB->perf_get_reads                  |
| db_perf_get_writes                 | $DB->perf_get_writes                 |
| db_perf_get_queries                | $DB->perf_get_queries                |
| db_perf_get_queries_time           | $DB->perf_get_queries_time           |

### $OUTPUT Snippets

| Snippet                             | Purpose                               |
| ----------------------------------- | ------------------------------------- |
| output_action_icon                  | $OUTPUT->action_icon                  |
| output_action_link                  | $OUTPUT->action_link                  |
| output_activity_navigation          | $OUTPUT->activity_navigation          |
| output_add_action_handler           | $OUTPUT->add_action_handler           |
| output_block                        | $OUTPUT->block                        |
| output_block_controls               | $OUTPUT->block_controls               |
| output_block_move_target            | $OUTPUT->block_move_target            |
| output_blocks                       | $OUTPUT->blocks                       |
| output_blocks_for_region            | $OUTPUT->blocks_for_region            |
| output_body_attributes              | $OUTPUT->body_attributes              |
| output_body_css_classes             | $OUTPUT->body_css_classes             |
| output_body_id                      | $OUTPUT->body_id                      |
| output_box                          | $OUTPUT->box                          |
| output_box_end                      | $OUTPUT->box_end                      |
| output_box_start                    | $OUTPUT->box_start                    |
| output_close_window_button          | $OUTPUT->close_window_button          |
| output_confirm                      | $OUTPUT->confirm                      |
| output_container                    | $OUTPUT->container                    |
| output_container_end                | $OUTPUT->container_end                |
| output_container_end_all            | $OUTPUT->container_end_all            |
| output_container_start              | $OUTPUT->container_start              |
| output_context_header               | $OUTPUT->context_header               |
| output_continue_button              | $OUTPUT->continue_button              |
| output_course_content_footer        | $OUTPUT->course_content_footer        |
| output_course_content_header        | $OUTPUT->course_content_header        |
| output_course_footer                | $OUTPUT->course_footer                |
| output_course_header                | $OUTPUT->course_header                |
| output_custom_block_region          | $OUTPUT->custom_block_region          |
| output_custom_menu                  | $OUTPUT->custom_menu                  |
| output_darrow                       | $OUTPUT->darrow                       |
| output_doc_link                     | $OUTPUT->doc_link                     |
| output_doctype                      | $OUTPUT->doctype                      |
| output_download_dataformat_selector | $OUTPUT->download_dataformat_selector |
| output_edit_button                  | $OUTPUT->edit_button                  |
| output_error_text                   | $OUTPUT->error_text                   |
| output_fatal_error                  | $OUTPUT->fatal_error                  |
| output_favicon                      | $OUTPUT->favicon                      |
| output_file_picker                  | $OUTPUT->file_picker                  |
| output_footer                       | $OUTPUT->footer                       |
| output_full_header                  | $OUTPUT->full_header                  |
| output_get_compact_logo_url         | $OUTPUT->get_compact_logo_url         |
| output_get_logo_url                 | $OUTPUT->get_logo_url                 |
| output_has_started                  | $OUTPUT->has_started                  |
| output_header                       | $OUTPUT->header                       |
| output_heading                      | $OUTPUT->heading                      |
| output_heading_with_help            | $OUTPUT->heading_with_help            |
| output_help_icon                    | $OUTPUT->help_icon                    |
| output_help_icon_scale              | $OUTPUT->help_icon_scale              |
| output_home_link                    | $OUTPUT->home_link                    |
| output_htmlattributes               | $OUTPUT->htmlattributes               |
| output_htmllize_file_tree           | $OUTPUT->htmllize_file_tree           |
| output_image_icon                   | $OUTPUT->image_icon                   |
| output_image_url                    | $OUTPUT->image_url                    |
| output_initials_bar                 | $OUTPUT->initials_bar                 |
| output_lang_menu                    | $OUTPUT->lang_menu                    |
| output_larrow                       | $OUTPUT->larrow                       |
| output_list_block_contents          | $OUTPUT->list_block_contents          |
| output_login_info                   | $OUTPUT->login_info                   |
| output_main_content                 | $OUTPUT->main_content                 |
| output_maintenance_warning          | $OUTPUT->maintenance_warning          |
| output_mform_element                | $OUTPUT->mform_element                |
| output_navbar                       | $OUTPUT->navbar                       |
| output_navbar_plugin_output         | $OUTPUT->navbar_plugin_output         |
| output_notification                 | $OUTPUT->notification                 |
| output_notify_message               | $OUTPUT->notify_message               |
| output_notify_problem               | $OUTPUT->notify_problem               |
| output_notify_redirect              | $OUTPUT->notify_redirect              |
| output_notify_success               | $OUTPUT->notify_success               |
| output_old_help_icon                | $OUTPUT->old_help_icon                |
| output_page_doc_link                | $OUTPUT->page_doc_link                |
| output_page_heading                 | $OUTPUT->page_heading                 |
| output_page_heading_button          | $OUTPUT->page_heading_button          |
| output_page_heading_menu            | $OUTPUT->page_heading_menu            |
| output_page_title                   | $OUTPUT->page_title                   |
| output_paging_bar                   | $OUTPUT->paging_bar                   |
| output_pix_icon                     | $OUTPUT->pix_icon                     |
| output_pix_url                      | $OUTPUT->pix_url                      |
| output_rarrow                       | $OUTPUT->rarrow                       |
| output_redirect_message             | $OUTPUT->redirect_message             |
| output_render                       | $OUTPUT->render                       |
| output_render_action_menu           | $OUTPUT->render_action_menu           |
| output_render_chart                 | $OUTPUT->render_chart                 |
| output_render_chart_bar             | $OUTPUT->render_chart_bar             |
| output_render_chart_line            | $OUTPUT->render_chart_line            |
| output_render_chart_pie             | $OUTPUT->render_chart_pie             |
| output_render_file_picker           | $OUTPUT->render_file_picker           |
| output_render_from_template         | $OUTPUT->render_from_template         |
| output_render_inplace_editable      | $OUTPUT->render_inplace_editable      |
| output_render_login                 | $OUTPUT->render_login                 |
| output_render_login_signup_form     | $OUTPUT->render_login_signup_form     |
| output_render_preferences_group     | $OUTPUT->render_preferences_group     |
| output_render_preferences_groups    | $OUTPUT->render_preferences_groups    |
| output_render_progress_bar          | $OUTPUT->render_progress_bar          |
| output_render_skip_links            | $OUTPUT->render_skip_links            |
| output_search_box                   | $OUTPUT->search_box                   |
| output_single_button                | $OUTPUT->single_button                |
| output_single_select                | $OUTPUT->single_select                |
| output_skip_link_target             | $OUTPUT->skip_link_target             |
| output_spacer                       | $OUTPUT->spacer                       |
| output_standard_end_of_body_html    | $OUTPUT->standard_end_of_body_html    |
| output_standard_footer_html         | $OUTPUT->standard_footer_html         |
| output_standard_head_html           | $OUTPUT->standard_head_html           |
| output_standard_top_of_body_html    | $OUTPUT->standard_top_of_body_html    |
| output_tag_list                     | $OUTPUT->tag_list                     |
| output_tree_block_contents          | $OUTPUT->tree_block_contents          |
| output_uarrow                       | $OUTPUT->uarrow                       |
| output_update_module_button         | $OUTPUT->update_module_button         |
| output_url_select                   | $OUTPUT->url_select                   |
| output_user_menu                    | $OUTPUT->user_menu                    |
| output_user_picture                 | $OUTPUT->user_picture                 |
| output_label                        | $OUTPUT->label                        |
| output_link                         | $OUTPUT->link                         |
| output_image                        | $OUTPUT->image                        |
| output_form                         | $OUTPUT->form                         |
| output_button                       | $OUTPUT->button                       |
| output_htmllist                     | $OUTPUT->htmllist                     |
| output_select                       | $OUTPUT->select                       |
| output_checkbox                     | $OUTPUT->checkbox                     |
| output_old_icon_url                 | $OUTPUT->old_icon_url                 |

### $PAGE Snippets

| Snippet                                       | Purpose                                          |
| --------------------------------------------- | ------------------------------------------------ |
| page_force_settings_menu                      | $PAGE->force_settings_menu                       |
| page_is_settings_menu_forced                  | $PAGE->is_settings_menu_forced                   |
| page_get_renderer                             | $PAGE->get_renderer                              |
| page_has_navbar                               | $PAGE->has_navbar                                |
| page_start_collecting_javascript_requirements | $PAGE->start_collecting_javascript_requirements  |
| page_end_collecting_javascript_requirements   | $PAGE->end_collecting_javascript_requirements    |
| page_user_is_editing                          | $PAGE->user_is_editing                           |
| page_user_can_edit_blocks                     | $PAGE->user_can_edit_blocks                      |
| page_user_allowed_editing                     | $PAGE->user_allowed_editing                      |
| page_debug_summary                            | $PAGE->debug_summary                             |
| page_set_state                                | $PAGE->set_state                                 |
| page_set_course                               | $PAGE->set_course                                |
| page_set_context                              | $PAGE->set_context                               |
| page_set_cm                                   | $PAGE->set_cm                                    |
| page_set_activity_record                      | $PAGE->set_activity_record                       |
| page_set_pagetype                             | $PAGE->set_pagetype                              |
| page_set_pagelayout                           | $PAGE->set_pagelayout                            |
| page_set_subpage                              | $PAGE->set_subpage                               |
| page_add_body_class                           | $PAGE->add_body_class                            |
| page_add_body_classes                         | $PAGE->add_body_classes                          |
| page_set_title                                | $PAGE->set_title                                 |
| page_set_heading                              | $PAGE->set_heading                               |
| page_set_headingmenu                          | $PAGE->set_headingmenu                           |
| page_set_category_by_id                       | $PAGE->set_category_by_id                        |
| page_set_docs_path                            | $PAGE->set_docs_path                             |
| page_set_url                                  | $PAGE->set_url                                   |
| page_ensure_param_not_in_url                  | $PAGE->ensure_param_not_in_url                   |
| page_add_alternate_version                    | $PAGE->add_alternate_version                     |
| page_set_focuscontrol                         | $PAGE->set_focuscontrol                          |
| page_set_button                               | $PAGE->set_button                                |
| page_set_blocks_editing_capability            | $PAGE->set_blocks_editing_capability             |
| page_set_other_editing_capability             | $PAGE->set_other_editing_capability              |
| page_set_cacheable                            | $PAGE->set_cacheable                             |
| page_set_periodic_refresh_delay               | $PAGE->set_periodic_refresh_delay                |
| page_force_theme                              | $PAGE->force_theme                               |
| page_reload_theme                             | $PAGE->reload_theme                              |
| page_https_required                           | $PAGE->https_required                            |
| page_verify_https_required                    | $PAGE->verify_https_required                     |
| page_initialise_theme_and_output              | $PAGE->initialise_theme_and_output               |
| page_reset_theme_and_output                   | $PAGE->reset_theme_and_output                    |
| page_has_set_url                              | $PAGE->has_set_url                               |
| page_set_block_actions_done                   | $PAGE->set_block_actions_done                    |
| page_get_popup_notification_allowed           | $PAGE->get_popup_notification_allowed            |
| page_set_popup_notification_allowed           | $PAGE->set_popup_notification_allowed            |
| page_apply_theme_region_manipulations         | $PAGE->apply_theme_region_manipulations          |
| page_add_report_nodes                         | $PAGE->add_report_nodes                          |
| page_state                                    | $PAGE->state                                     |
| page_headerprinted                            | $PAGE->headerprinted                             |
| page_course                                   | $PAGE->course                                    |
| page_cm                                       | $PAGE->cm                                        |
| page_activityrecord                           | $PAGE->activityrecord                            |
| page_activityname                             | $PAGE->activityname                              |
| page_category                                 | $PAGE->category                                  |
| page_categories                               | $PAGE->categories                                |
| page_context                                  | $PAGE->context                                   |
| page_pagetype                                 | $PAGE->pagetype                                  |
| page_bodyid                                   | $PAGE->bodyid                                    |
| page_pagelayout                               | $PAGE->pagelayout                                |
| page_layout_options                           | $PAGE->layout_options                            |
| page_subpage                                  | $PAGE->subpage                                   |
| page_bodyclasses                              | $PAGE->bodyclasses                               |
| page_title                                    | $PAGE->title                                     |
| page_heading                                  | $PAGE->heading                                   |
| page_headingmenu                              | $PAGE->headingmenu                               |
| page_docspath                                 | $PAGE->docspath                                  |
| page_url                                      | $PAGE->url                                       |
| page_alternateversions                        | $PAGE->alternateversions                         |
| page_blocks                                   | $PAGE->blocks                                    |
| page_requires_get_config_for_javascript       | $PAGE->requires->get_config_for_javascript       |
| page_requires_js                              | $PAGE->requires->js                              |
| page_requires_jquery_plugin                   | $PAGE->requires->jquery_plugin                   |
| page_requires_jquery_override_plugin          | $PAGE->requires->jquery_override_plugin          |
| page_requires_js_module                       | $PAGE->requires->js_module                       |
| page_requires_css                             | $PAGE->requires->css                             |
| page_requires_css_theme                       | $PAGE->requires->css_theme                       |
| page_requires_skip_link_to                    | $PAGE->requires->skip_link_to                    |
| page_requires_js_amd_inline                   | $PAGE->requires->js_amd_inline                   |
| page_requires_js_call_amd                     | $PAGE->requires->js_call_amd                     |
| page_requires_yui_module                      | $PAGE->requires->yui_module                      |
| page_requires_set_yuicssmodules               | $PAGE->requires->set_yuicssmodules               |
| page_requires_js_init_call                    | $PAGE->requires->js_init_call                    |
| page_requires_js_init_code                    | $PAGE->requires->js_init_code                    |
| page_requires_string_for_js                   | $PAGE->requires->string_for_js                   |
| page_requires_strings_for_js                  | $PAGE->requires->strings_for_js                  |
| page_requires_event_handler                   | $PAGE->requires->event_handler                   |
| page_requires_get_head_code                   | $PAGE->requires->get_head_code                   |
| page_requires_get_top_of_body_code            | $PAGE->requires->get_top_of_body_code            |
| page_requires_get_end_code                    | $PAGE->requires->get_end_code                    |
| page_requires_is_head_done                    | $PAGE->requires->is_head_done                    |
| page_requires_is_top_of_body_done             | $PAGE->requires->is_top_of_body_done             |
| page_requires_should_create_one_time_item_now | $PAGE->requires->should_create_one_time_item_now |
| page_requires_has_one_time_item_been_created  | $PAGE->requires->has_one_time_item_been_created  |
| page_requires_set_one_time_item_created       | $PAGE->requires->set_one_time_item_created       |
| page_cacheable                                | $PAGE->cacheable                                 |
| page_focuscontrol                             | $PAGE->focuscontrol                              |
| page_button                                   | $PAGE->button                                    |
| page_theme                                    | $PAGE->theme                                     |
| page_blockmanipulations                       | $PAGE->blockmanipulations                        |
| page_devicetypeinuse                          | $PAGE->devicetypeinuse                           |
| page_periodicrefreshdelay                     | $PAGE->periodicrefreshdelay                      |
| page_opencontainers                           | $PAGE->opencontainers                            |
| page_navigation                               | $PAGE->navigation                                |
| page_navbar                                   | $PAGE->navbar                                    |
| page_settingsnav                              | $PAGE->settingsnav                               |
| page_flatnav                                  | $PAGE->flatnav                                   |
| page_requestip                                | $PAGE->requestip                                 |
| page_requestorigin                            | $PAGE->requestorigin                             |
| page_navbar_ignore_active                     | $PAGE->navbar->ignore_active                     |
| page_navbar_add                               | $PAGE->navbar->add                               |
| page_settingsnav_add                          | $PAGE->settingsnav->add                          |
| page_navigation_find                          | $PAGE->navigation->find                          |
| page_requires                                 | $PAGE->requires                                  |

### $USER Snippets

| Snippet                | Purpose                  |
| ---------------------- | ------------------------ |
| user_id                | $USER->id                |
| user_auth              | $USER->auth              |
| user_confirmed         | $USER->confirmed         |
| user_policyagreed      | $USER->policyagreed      |
| user_deleted           | $USER->deleted           |
| user_suspended         | $USER->suspended         |
| user_mnethostid        | $USER->mnethostid        |
| user_username          | $USER->username          |
| user_idnumber          | $USER->idnumber          |
| user_firstname         | $USER->firstname         |
| user_lastname          | $USER->lastname          |
| user_email             | $USER->email             |
| user_emailstop         | $USER->emailstop         |
| user_icq               | $USER->icq               |
| user_skype             | $USER->skype             |
| user_yahoo             | $USER->yahoo             |
| user_aim               | $USER->aim               |
| user_msn               | $USER->msn               |
| user_institution       | $USER->institution       |
| user_department        | $USER->department        |
| user_address           | $USER->address           |
| user_city              | $USER->city              |
| user_country           | $USER->country           |
| user_lang              | $USER->lang              |
| user_calendartype      | $USER->calendartype      |
| user_theme             | $USER->theme             |
| user_timezone          | $USER->timezone          |
| user_firstaccess       | $USER->firstaccess       |
| user_lastaccess        | $USER->lastaccess        |
| user_lastlogin         | $USER->lastlogin         |
| user_currentlogin      | $USER->currentlogin      |
| user_lastip            | $USER->lastip            |
| user_secret            | $USER->secret            |
| user_picture           | $USER->picture           |
| user_url               | $USER->url               |
| user_maildigest        | $USER->maildigest        |
| user_autosubscribe     | $USER->autosubscribe     |
| user_trackforums       | $USER->trackforums       |
| user_timecreated       | $USER->timecreated       |
| user_timemodified      | $USER->timemodified      |
| user_trustbitmask      | $USER->trustbitmask      |
| user_imagealt          | $USER->imagealt          |
| user_lastnamephonetic  | $USER->lastnamephonetic  |
| user_firstnamephonetic | $USER->firstnamephonetic |
| user_middlename        | $USER->middlename        |
| user_alternatename     | $USER->alternatename     |
| user_moodlenetprofile  | $USER->moodlenetprofile  |
| user_sesskey           | $USER->sesskey           |

### Form Snippets

| Snippet                        | Purpose                                 |
| ------------------------------ | --------------------------------------- |
| add_element_button             | addElement('button', ... );             |
| add_element_checkbox           | addElement('checkbox', ... );           |
| add_element_advcheckbox        | addElement('advcheckbox', ... );        |
| add_element_choosecoursefile   | addElement('choosecoursefile', ... );   |
| add_element_date_time_selector | addElement('date_time_selector', ... ); |
| add_element_select             | addElement('select', ... );             |
| add_element_password           | addElement('password', ... );           |
| add_element_hidden             | addElement('hidden', ... );             |
| add_element_html               | addElement('html', ... );               |
| add_element_modgrade           | addElement('modgrade', ... );           |
| add_element_static             | addElement('static', ... );             |
| add_element_text               | addElement('text', ... );               |
| add_element_textarea           | addElement('textarea', ... );           |
| add_element_recaptcha          | addElement('recaptcha', ... );          |
| add_element_passwordunmask     | addElement('passwordunmask', ... );     |
| add_element_selectyesno        | addElement('selectyesno', ... );        |
| add_element_selectwithlink     | addElement('selectwithlink', ... );     |
| add_element_date_selector      | addElement('date_selector', ... );      |
| add_element_duration           | addElement('duration', ... );           |
| add_element_editor             | addElement('editor', ... );             |
| add_element_filepicker         | addElement('filepicker', ... );         |
| add_element_filemanager        | addElement('filemanager', ... );        |
| add_element_tags               | addElement('tags', ... );               |
| add_element_modvisible         | addElement('modvisible', ... );         |
| add_element_grading            | addElement('grading', ... );            |
| add_element_questioncategory   | addElement('questioncategory', ... );   |

## Contributing

Contributions to the Moodle Pack are welcome and appreciated. To contribute:

1. Fork the [GitHub repository](https://github.com/ManuelGil/vscode-data-pack).
2. Create a new branch for your feature or fix:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes, commit them, and push to your fork.
4. Submit a Pull Request targeting the `main` branch.

Before contributing, please review the [Contribution Guidelines](https://github.com/ManuelGil/vscode-data-pack/blob/main/CONTRIBUTING.md) for coding standards, testing, and commit message conventions. If you encounter a bug or wish to request a new feature, please open an Issue.

## Changelog

For a complete list of changes, see the [CHANGELOG.md](https://github.com/ManuelGil/vscode-data-pack/blob/main/CHANGELOG.md).

## Authors

- **Manuel Gil** - _Owner_ - [@ManuelGil](https://github.com/ManuelGil)

For a complete list of contributors, please refer to the [contributors](https://github.com/ManuelGil/vscode-data-pack/contributors) page.

## Follow Me

- **GitHub**: [![GitHub followers](https://img.shields.io/github/followers/ManuelGil?style=for-the-badge\&logo=github)](https://github.com/ManuelGil)
- **X (formerly Twitter)**: [![X Follow](https://img.shields.io/twitter/follow/imgildev?style=for-the-badge\&logo=x)](https://twitter.com/imgildev)

## Other Extensions

- **[Auto Barrel](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-auto-barrel)**
  Automatically generates and maintains barrel (`index.ts`) files for your TypeScript projects.

- **[Angular File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator)**
  Generates boilerplate and navigates your Angular (9→20+) project from within the editor, with commands for components, services, directives, modules, pipes, guards, reactive snippets, and JSON2TS transformations.

- **[NestJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator)**
  Simplifies creation of controllers, services, modules, and more for NestJS projects, with custom commands and Swagger snippets.

- **[NestJS Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension)**
  Ready-to-use code patterns for creating controllers, services, modules, DTOs, filters, interceptors, and more in NestJS.

- **[T3 Stack / NextJS / ReactJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)**
  Automates file creation (components, pages, hooks, API routes, etc.) in T3 Stack (Next.js, React) projects and can start your dev server from VSCode.

- **[Drizzle ORM Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-drizzle-snippets)**
  Collection of code snippets to speed up Drizzle ORM usage, defines schemas, migrations, and common database operations in TypeScript/JavaScript.

- **[CodeIgniter 4 Spark](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-spark)**
  Scaffolds controllers, models, migrations, libraries, and CLI commands in CodeIgniter 4 projects using Spark, directly from the editor.

- **[CodeIgniter 4 Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-snippets)**
  Snippets for accelerating development with CodeIgniter 4, including controllers, models, validations, and more.

- **[CodeIgniter 4 Shield Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-snippets)**
  Snippets tailored to CodeIgniter 4 Shield for faster authentication and security-related code.

- **[Mustache Template Engine - Snippets & Autocomplete](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)**
  Snippets and autocomplete support for Mustache templates, making HTML templating faster and more reliable.

## Recommended Browser Extension

For developers who work with `.vsix` files for offline installations or distribution, the complementary [**One-Click VSIX**](https://chromewebstore.google.com/detail/imojppdbcecfpeafjagncfplelddhigc?utm_source=item-share-cb) extension is recommended, available for both Chrome and Firefox.

> **One-Click VSIX** integrates a direct "Download Extension" button into each VSCode Marketplace page, ensuring the file is saved with the `.vsix` extension, even if the server provides a `.zip` archive. This simplifies the process of installing or sharing extensions offline by eliminating the need for manual file renaming.

- [Get One-Click VSIX for Chrome &rarr;](https://chromewebstore.google.com/detail/imojppdbcecfpeafjagncfplelddhigc?utm_source=item-share-cb)
- [Get One-Click VSIX for Firefox &rarr;](https://addons.mozilla.org/es-ES/firefox/addon/one-click-vsix/)

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/ManuelGil/vscode-data-pack/blob/main/LICENSE) file for full details.
