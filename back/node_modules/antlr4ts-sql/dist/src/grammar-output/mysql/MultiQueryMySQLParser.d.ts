import { ATN } from "antlr4ts/atn/ATN";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { MySQLBaseParser } from "./MySQLBaseParser";
import { MultiQueryMySQLParserListener } from "./MultiQueryMySQLParserListener";
export declare class MultiQueryMySQLParser extends MySQLBaseParser {
    static readonly ACCOUNT_SYMBOL = 1;
    static readonly ASCII_SYMBOL = 2;
    static readonly ALWAYS_SYMBOL = 3;
    static readonly BACKUP_SYMBOL = 4;
    static readonly BEGIN_SYMBOL = 5;
    static readonly BYTE_SYMBOL = 6;
    static readonly CACHE_SYMBOL = 7;
    static readonly CHARSET_SYMBOL = 8;
    static readonly CHECKSUM_SYMBOL = 9;
    static readonly CLOSE_SYMBOL = 10;
    static readonly COMMENT_SYMBOL = 11;
    static readonly COMMIT_SYMBOL = 12;
    static readonly CONTAINS_SYMBOL = 13;
    static readonly DEALLOCATE_SYMBOL = 14;
    static readonly DO_SYMBOL = 15;
    static readonly END_SYMBOL = 16;
    static readonly EXECUTE_SYMBOL = 17;
    static readonly FLUSH_SYMBOL = 18;
    static readonly FOLLOWS_SYMBOL = 19;
    static readonly FORMAT_SYMBOL = 20;
    static readonly GROUP_REPLICATION_SYMBOL = 21;
    static readonly HANDLER_SYMBOL = 22;
    static readonly HELP_SYMBOL = 23;
    static readonly HOST_SYMBOL = 24;
    static readonly INSTALL_SYMBOL = 25;
    static readonly LANGUAGE_SYMBOL = 26;
    static readonly NO_SYMBOL = 27;
    static readonly OPEN_SYMBOL = 28;
    static readonly OPTIONS_SYMBOL = 29;
    static readonly OWNER_SYMBOL = 30;
    static readonly PARSER_SYMBOL = 31;
    static readonly PARTITION_SYMBOL = 32;
    static readonly PORT_SYMBOL = 33;
    static readonly PRECEDES_SYMBOL = 34;
    static readonly PREPARE_SYMBOL = 35;
    static readonly REMOVE_SYMBOL = 36;
    static readonly REPAIR_SYMBOL = 37;
    static readonly RESET_SYMBOL = 38;
    static readonly RESTORE_SYMBOL = 39;
    static readonly ROLLBACK_SYMBOL = 40;
    static readonly SAVEPOINT_SYMBOL = 41;
    static readonly SECURITY_SYMBOL = 42;
    static readonly SERVER_SYMBOL = 43;
    static readonly SIGNED_SYMBOL = 44;
    static readonly SLAVE_SYMBOL = 45;
    static readonly SOCKET_SYMBOL = 46;
    static readonly SONAME_SYMBOL = 47;
    static readonly START_SYMBOL = 48;
    static readonly STOP_SYMBOL = 49;
    static readonly TRUNCATE_SYMBOL = 50;
    static readonly UNICODE_SYMBOL = 51;
    static readonly UNINSTALL_SYMBOL = 52;
    static readonly UPGRADE_SYMBOL = 53;
    static readonly WRAPPER_SYMBOL = 54;
    static readonly XA_SYMBOL = 55;
    static readonly SHUTDOWN_SYMBOL = 56;
    static readonly ACTION_SYMBOL = 57;
    static readonly ADDDATE_SYMBOL = 58;
    static readonly AFTER_SYMBOL = 59;
    static readonly AGAINST_SYMBOL = 60;
    static readonly AGGREGATE_SYMBOL = 61;
    static readonly ALGORITHM_SYMBOL = 62;
    static readonly ANALYZE_SYMBOL = 63;
    static readonly ANY_SYMBOL = 64;
    static readonly AT_SYMBOL = 65;
    static readonly AUTHORS_SYMBOL = 66;
    static readonly AUTO_INCREMENT_SYMBOL = 67;
    static readonly AUTOEXTEND_SIZE_SYMBOL = 68;
    static readonly AVG_ROW_LENGTH_SYMBOL = 69;
    static readonly AVG_SYMBOL = 70;
    static readonly BINLOG_SYMBOL = 71;
    static readonly BIT_SYMBOL = 72;
    static readonly BLOCK_SYMBOL = 73;
    static readonly BOOL_SYMBOL = 74;
    static readonly BOOLEAN_SYMBOL = 75;
    static readonly BTREE_SYMBOL = 76;
    static readonly CASCADED_SYMBOL = 77;
    static readonly CATALOG_NAME_SYMBOL = 78;
    static readonly CHAIN_SYMBOL = 79;
    static readonly CHANGED_SYMBOL = 80;
    static readonly CHANNEL_SYMBOL = 81;
    static readonly CIPHER_SYMBOL = 82;
    static readonly CLIENT_SYMBOL = 83;
    static readonly CLASS_ORIGIN_SYMBOL = 84;
    static readonly COALESCE_SYMBOL = 85;
    static readonly CODE_SYMBOL = 86;
    static readonly COLLATION_SYMBOL = 87;
    static readonly COLUMN_NAME_SYMBOL = 88;
    static readonly COLUMN_FORMAT_SYMBOL = 89;
    static readonly COLUMNS_SYMBOL = 90;
    static readonly COMMITTED_SYMBOL = 91;
    static readonly COMPACT_SYMBOL = 92;
    static readonly COMPLETION_SYMBOL = 93;
    static readonly COMPRESSED_SYMBOL = 94;
    static readonly COMPRESSION_SYMBOL = 95;
    static readonly ENCRYPTION_SYMBOL = 96;
    static readonly CONCURRENT_SYMBOL = 97;
    static readonly CONNECTION_SYMBOL = 98;
    static readonly CONSISTENT_SYMBOL = 99;
    static readonly CONSTRAINT_CATALOG_SYMBOL = 100;
    static readonly CONSTRAINT_SCHEMA_SYMBOL = 101;
    static readonly CONSTRAINT_NAME_SYMBOL = 102;
    static readonly CONTEXT_SYMBOL = 103;
    static readonly CONTRIBUTORS_SYMBOL = 104;
    static readonly CPU_SYMBOL = 105;
    static readonly CUBE_SYMBOL = 106;
    static readonly CURRENT_SYMBOL = 107;
    static readonly CURSOR_NAME_SYMBOL = 108;
    static readonly DATA_SYMBOL = 109;
    static readonly DATAFILE_SYMBOL = 110;
    static readonly DATETIME_SYMBOL = 111;
    static readonly DATE_SYMBOL = 112;
    static readonly DAY_SYMBOL = 113;
    static readonly DEFAULT_AUTH_SYMBOL = 114;
    static readonly DEFINER_SYMBOL = 115;
    static readonly DELAY_KEY_WRITE_SYMBOL = 116;
    static readonly DES_KEY_FILE_SYMBOL = 117;
    static readonly DIAGNOSTICS_SYMBOL = 118;
    static readonly DIRECTORY_SYMBOL = 119;
    static readonly DISABLE_SYMBOL = 120;
    static readonly DISCARD_SYMBOL = 121;
    static readonly DISK_SYMBOL = 122;
    static readonly DUMPFILE_SYMBOL = 123;
    static readonly DUPLICATE_SYMBOL = 124;
    static readonly DYNAMIC_SYMBOL = 125;
    static readonly ENDS_SYMBOL = 126;
    static readonly ENUM_SYMBOL = 127;
    static readonly ENGINE_SYMBOL = 128;
    static readonly ENGINES_SYMBOL = 129;
    static readonly ERROR_SYMBOL = 130;
    static readonly ERRORS_SYMBOL = 131;
    static readonly ESCAPE_SYMBOL = 132;
    static readonly EVENT_SYMBOL = 133;
    static readonly EVENTS_SYMBOL = 134;
    static readonly EVERY_SYMBOL = 135;
    static readonly EXPANSION_SYMBOL = 136;
    static readonly EXPORT_SYMBOL = 137;
    static readonly EXTENDED_SYMBOL = 138;
    static readonly EXTENT_SIZE_SYMBOL = 139;
    static readonly FAULTS_SYMBOL = 140;
    static readonly FAST_SYMBOL = 141;
    static readonly FOUND_SYMBOL = 142;
    static readonly ENABLE_SYMBOL = 143;
    static readonly FULL_SYMBOL = 144;
    static readonly FILE_SYMBOL = 145;
    static readonly FILE_BLOCK_SIZE_SYMBOL = 146;
    static readonly FILTER_SYMBOL = 147;
    static readonly FIRST_SYMBOL = 148;
    static readonly FIXED_SYMBOL = 149;
    static readonly GENERAL_SYMBOL = 150;
    static readonly GEOMETRY_SYMBOL = 151;
    static readonly GEOMETRYCOLLECTION_SYMBOL = 152;
    static readonly GET_FORMAT_SYMBOL = 153;
    static readonly GRANTS_SYMBOL = 154;
    static readonly GLOBAL_SYMBOL = 155;
    static readonly HASH_SYMBOL = 156;
    static readonly HOSTS_SYMBOL = 157;
    static readonly HOUR_SYMBOL = 158;
    static readonly IDENTIFIED_SYMBOL = 159;
    static readonly IGNORE_SERVER_IDS_SYMBOL = 160;
    static readonly INVOKER_SYMBOL = 161;
    static readonly IMPORT_SYMBOL = 162;
    static readonly INDEXES_SYMBOL = 163;
    static readonly INITIAL_SIZE_SYMBOL = 164;
    static readonly INSTANCE_SYMBOL = 165;
    static readonly INNODB_SYMBOL = 166;
    static readonly IO_SYMBOL = 167;
    static readonly IPC_SYMBOL = 168;
    static readonly ISOLATION_SYMBOL = 169;
    static readonly ISSUER_SYMBOL = 170;
    static readonly INSERT_METHOD_SYMBOL = 171;
    static readonly JSON_SYMBOL = 172;
    static readonly KEY_BLOCK_SIZE_SYMBOL = 173;
    static readonly LAST_SYMBOL = 174;
    static readonly LEAVES_SYMBOL = 175;
    static readonly LESS_SYMBOL = 176;
    static readonly LEVEL_SYMBOL = 177;
    static readonly LINESTRING_SYMBOL = 178;
    static readonly LIST_SYMBOL = 179;
    static readonly LOCAL_SYMBOL = 180;
    static readonly LOCKS_SYMBOL = 181;
    static readonly LOGFILE_SYMBOL = 182;
    static readonly LOGS_SYMBOL = 183;
    static readonly MAX_ROWS_SYMBOL = 184;
    static readonly MASTER_SYMBOL = 185;
    static readonly MASTER_HEARTBEAT_PERIOD_SYMBOL = 186;
    static readonly MASTER_HOST_SYMBOL = 187;
    static readonly MASTER_PORT_SYMBOL = 188;
    static readonly MASTER_LOG_FILE_SYMBOL = 189;
    static readonly MASTER_LOG_POS_SYMBOL = 190;
    static readonly MASTER_USER_SYMBOL = 191;
    static readonly MASTER_PASSWORD_SYMBOL = 192;
    static readonly MASTER_SERVER_ID_SYMBOL = 193;
    static readonly MASTER_CONNECT_RETRY_SYMBOL = 194;
    static readonly MASTER_RETRY_COUNT_SYMBOL = 195;
    static readonly MASTER_DELAY_SYMBOL = 196;
    static readonly MASTER_SSL_SYMBOL = 197;
    static readonly MASTER_SSL_CA_SYMBOL = 198;
    static readonly MASTER_SSL_CAPATH_SYMBOL = 199;
    static readonly MASTER_TLS_VERSION_SYMBOL = 200;
    static readonly MASTER_SSL_CERT_SYMBOL = 201;
    static readonly MASTER_SSL_CIPHER_SYMBOL = 202;
    static readonly MASTER_SSL_CRL_SYMBOL = 203;
    static readonly MASTER_SSL_CRLPATH_SYMBOL = 204;
    static readonly MASTER_SSL_KEY_SYMBOL = 205;
    static readonly MASTER_AUTO_POSITION_SYMBOL = 206;
    static readonly MAX_CONNECTIONS_PER_HOUR_SYMBOL = 207;
    static readonly MAX_QUERIES_PER_HOUR_SYMBOL = 208;
    static readonly MAX_STATEMENT_TIME_SYMBOL = 209;
    static readonly MAX_SIZE_SYMBOL = 210;
    static readonly MAX_UPDATES_PER_HOUR_SYMBOL = 211;
    static readonly MAX_USER_CONNECTIONS_SYMBOL = 212;
    static readonly MEDIUM_SYMBOL = 213;
    static readonly MEMORY_SYMBOL = 214;
    static readonly MERGE_SYMBOL = 215;
    static readonly MESSAGE_TEXT_SYMBOL = 216;
    static readonly MICROSECOND_SYMBOL = 217;
    static readonly MIGRATE_SYMBOL = 218;
    static readonly MINUTE_SYMBOL = 219;
    static readonly MIN_ROWS_SYMBOL = 220;
    static readonly MODIFY_SYMBOL = 221;
    static readonly MODE_SYMBOL = 222;
    static readonly MONTH_SYMBOL = 223;
    static readonly MULTILINESTRING_SYMBOL = 224;
    static readonly MULTIPOINT_SYMBOL = 225;
    static readonly MULTIPOLYGON_SYMBOL = 226;
    static readonly MUTEX_SYMBOL = 227;
    static readonly MYSQL_ERRNO_SYMBOL = 228;
    static readonly NAME_SYMBOL = 229;
    static readonly NAMES_SYMBOL = 230;
    static readonly NATIONAL_SYMBOL = 231;
    static readonly NCHAR_SYMBOL = 232;
    static readonly NDBCLUSTER_SYMBOL = 233;
    static readonly NEVER_SYMBOL = 234;
    static readonly NEXT_SYMBOL = 235;
    static readonly NEW_SYMBOL = 236;
    static readonly NO_WAIT_SYMBOL = 237;
    static readonly NODEGROUP_SYMBOL = 238;
    static readonly NONE_SYMBOL = 239;
    static readonly NUMBER_SYMBOL = 240;
    static readonly NVARCHAR_SYMBOL = 241;
    static readonly OFFSET_SYMBOL = 242;
    static readonly OLD_PASSWORD_SYMBOL = 243;
    static readonly ONE_SHOT_SYMBOL = 244;
    static readonly ONE_SYMBOL = 245;
    static readonly PACK_KEYS_SYMBOL = 246;
    static readonly PAGE_SYMBOL = 247;
    static readonly PARTIAL_SYMBOL = 248;
    static readonly PARTITIONING_SYMBOL = 249;
    static readonly PARTITIONS_SYMBOL = 250;
    static readonly PASSWORD_SYMBOL = 251;
    static readonly PHASE_SYMBOL = 252;
    static readonly PLUGIN_DIR_SYMBOL = 253;
    static readonly PLUGIN_SYMBOL = 254;
    static readonly PLUGINS_SYMBOL = 255;
    static readonly POINT_SYMBOL = 256;
    static readonly POLYGON_SYMBOL = 257;
    static readonly PRESERVE_SYMBOL = 258;
    static readonly PREV_SYMBOL = 259;
    static readonly PRIVILEGES_SYMBOL = 260;
    static readonly PROCESS_SYMBOL = 261;
    static readonly PROCESSLIST_SYMBOL = 262;
    static readonly PROFILE_SYMBOL = 263;
    static readonly PROFILES_SYMBOL = 264;
    static readonly PROXY_SYMBOL = 265;
    static readonly QUARTER_SYMBOL = 266;
    static readonly QUERY_SYMBOL = 267;
    static readonly QUICK_SYMBOL = 268;
    static readonly READ_ONLY_SYMBOL = 269;
    static readonly REBUILD_SYMBOL = 270;
    static readonly RECOVER_SYMBOL = 271;
    static readonly REDO_BUFFER_SIZE_SYMBOL = 272;
    static readonly REDOFILE_SYMBOL = 273;
    static readonly REDUNDANT_SYMBOL = 274;
    static readonly RELAY_SYMBOL = 275;
    static readonly RELAYLOG_SYMBOL = 276;
    static readonly RELAY_LOG_FILE_SYMBOL = 277;
    static readonly RELAY_LOG_POS_SYMBOL = 278;
    static readonly RELAY_THREAD_SYMBOL = 279;
    static readonly RELOAD_SYMBOL = 280;
    static readonly REORGANIZE_SYMBOL = 281;
    static readonly REPEATABLE_SYMBOL = 282;
    static readonly REPLICATION_SYMBOL = 283;
    static readonly REPLICATE_DO_DB_SYMBOL = 284;
    static readonly REPLICATE_IGNORE_DB_SYMBOL = 285;
    static readonly REPLICATE_DO_TABLE_SYMBOL = 286;
    static readonly REPLICATE_IGNORE_TABLE_SYMBOL = 287;
    static readonly REPLICATE_WILD_DO_TABLE_SYMBOL = 288;
    static readonly REPLICATE_WILD_IGNORE_TABLE_SYMBOL = 289;
    static readonly REPLICATE_REWRITE_DB_SYMBOL = 290;
    static readonly RESUME_SYMBOL = 291;
    static readonly RETURNED_SQLSTATE_SYMBOL = 292;
    static readonly RETURNS_SYMBOL = 293;
    static readonly REVERSE_SYMBOL = 294;
    static readonly ROLLUP_SYMBOL = 295;
    static readonly ROTATE_SYMBOL = 296;
    static readonly ROUTINE_SYMBOL = 297;
    static readonly ROWS_SYMBOL = 298;
    static readonly ROW_COUNT_SYMBOL = 299;
    static readonly ROW_FORMAT_SYMBOL = 300;
    static readonly ROW_SYMBOL = 301;
    static readonly RTREE_SYMBOL = 302;
    static readonly SCHEDULE_SYMBOL = 303;
    static readonly SCHEMA_NAME_SYMBOL = 304;
    static readonly SECOND_SYMBOL = 305;
    static readonly SERIAL_SYMBOL = 306;
    static readonly SERIALIZABLE_SYMBOL = 307;
    static readonly SESSION_SYMBOL = 308;
    static readonly SIMPLE_SYMBOL = 309;
    static readonly SHARE_SYMBOL = 310;
    static readonly SLOW_SYMBOL = 311;
    static readonly SNAPSHOT_SYMBOL = 312;
    static readonly SOUNDS_SYMBOL = 313;
    static readonly SOURCE_SYMBOL = 314;
    static readonly SQL_AFTER_GTIDS_SYMBOL = 315;
    static readonly SQL_AFTER_MTS_GAPS_SYMBOL = 316;
    static readonly SQL_BEFORE_GTIDS_SYMBOL = 317;
    static readonly SQL_CACHE_SYMBOL = 318;
    static readonly SQL_BUFFER_RESULT_SYMBOL = 319;
    static readonly SQL_NO_CACHE_SYMBOL = 320;
    static readonly SQL_THREAD_SYMBOL = 321;
    static readonly STACKED_SYMBOL = 322;
    static readonly STARTS_SYMBOL = 323;
    static readonly STATS_AUTO_RECALC_SYMBOL = 324;
    static readonly STATS_PERSISTENT_SYMBOL = 325;
    static readonly STATS_SAMPLE_PAGES_SYMBOL = 326;
    static readonly STATUS_SYMBOL = 327;
    static readonly STORAGE_SYMBOL = 328;
    static readonly STRING_SYMBOL = 329;
    static readonly SUBCLASS_ORIGIN_SYMBOL = 330;
    static readonly SUBDATE_SYMBOL = 331;
    static readonly SUBJECT_SYMBOL = 332;
    static readonly SUBPARTITION_SYMBOL = 333;
    static readonly SUBPARTITIONS_SYMBOL = 334;
    static readonly SUPER_SYMBOL = 335;
    static readonly SUSPEND_SYMBOL = 336;
    static readonly SWAPS_SYMBOL = 337;
    static readonly SWITCHES_SYMBOL = 338;
    static readonly TABLE_NAME_SYMBOL = 339;
    static readonly TABLES_SYMBOL = 340;
    static readonly TABLE_CHECKSUM_SYMBOL = 341;
    static readonly TABLESPACE_SYMBOL = 342;
    static readonly TEMPORARY_SYMBOL = 343;
    static readonly TEMPTABLE_SYMBOL = 344;
    static readonly TEXT_SYMBOL = 345;
    static readonly THAN_SYMBOL = 346;
    static readonly TRANSACTION_SYMBOL = 347;
    static readonly TRIGGERS_SYMBOL = 348;
    static readonly TIMESTAMP_SYMBOL = 349;
    static readonly TIMESTAMP_ADD_SYMBOL = 350;
    static readonly TIMESTAMP_DIFF_SYMBOL = 351;
    static readonly TIME_SYMBOL = 352;
    static readonly TYPES_SYMBOL = 353;
    static readonly TYPE_SYMBOL = 354;
    static readonly UDF_RETURNS_SYMBOL = 355;
    static readonly FUNCTION_SYMBOL = 356;
    static readonly UNCOMMITTED_SYMBOL = 357;
    static readonly UNDEFINED_SYMBOL = 358;
    static readonly UNDO_BUFFER_SIZE_SYMBOL = 359;
    static readonly UNDOFILE_SYMBOL = 360;
    static readonly UNKNOWN_SYMBOL = 361;
    static readonly UNTIL_SYMBOL = 362;
    static readonly USER_RESOURCES_SYMBOL = 363;
    static readonly USER_SYMBOL = 364;
    static readonly USE_FRM_SYMBOL = 365;
    static readonly VARIABLES_SYMBOL = 366;
    static readonly VIEW_SYMBOL = 367;
    static readonly VALUE_SYMBOL = 368;
    static readonly WARNINGS_SYMBOL = 369;
    static readonly WAIT_SYMBOL = 370;
    static readonly WEEK_SYMBOL = 371;
    static readonly WORK_SYMBOL = 372;
    static readonly WEIGHT_STRING_SYMBOL = 373;
    static readonly X509_SYMBOL = 374;
    static readonly XID_SYMBOL = 375;
    static readonly XML_SYMBOL = 376;
    static readonly YEAR_SYMBOL = 377;
    static readonly NOT2_SYMBOL = 378;
    static readonly CONCAT_PIPES_SYMBOL = 379;
    static readonly INT_NUMBER = 380;
    static readonly LONG_NUMBER = 381;
    static readonly ULONGLONG_NUMBER = 382;
    static readonly EQUAL_OPERATOR = 383;
    static readonly ASSIGN_OPERATOR = 384;
    static readonly NULL_SAFE_EQUAL_OPERATOR = 385;
    static readonly GREATER_OR_EQUAL_OPERATOR = 386;
    static readonly GREATER_THAN_OPERATOR = 387;
    static readonly LESS_OR_EQUAL_OPERATOR = 388;
    static readonly LESS_THAN_OPERATOR = 389;
    static readonly NOT_EQUAL_OPERATOR = 390;
    static readonly PLUS_OPERATOR = 391;
    static readonly MINUS_OPERATOR = 392;
    static readonly MULT_OPERATOR = 393;
    static readonly DIV_OPERATOR = 394;
    static readonly MOD_OPERATOR = 395;
    static readonly LOGICAL_NOT_OPERATOR = 396;
    static readonly BITWISE_NOT_OPERATOR = 397;
    static readonly SHIFT_LEFT_OPERATOR = 398;
    static readonly SHIFT_RIGHT_OPERATOR = 399;
    static readonly LOGICAL_AND_OPERATOR = 400;
    static readonly BITWISE_AND_OPERATOR = 401;
    static readonly BITWISE_XOR_OPERATOR = 402;
    static readonly LOGICAL_OR_OPERATOR = 403;
    static readonly BITWISE_OR_OPERATOR = 404;
    static readonly DOT_SYMBOL = 405;
    static readonly COMMA_SYMBOL = 406;
    static readonly SEMICOLON_SYMBOL = 407;
    static readonly COLON_SYMBOL = 408;
    static readonly OPEN_PAR_SYMBOL = 409;
    static readonly CLOSE_PAR_SYMBOL = 410;
    static readonly OPEN_CURLY_SYMBOL = 411;
    static readonly CLOSE_CURLY_SYMBOL = 412;
    static readonly UNDERLINE_SYMBOL = 413;
    static readonly JSON_SEPARATOR_SYMBOL = 414;
    static readonly JSON_UNQUOTED_SEPARATOR_SYMBOL = 415;
    static readonly AT_SIGN_SYMBOL = 416;
    static readonly AT_TEXT_SUFFIX = 417;
    static readonly AT_AT_SIGN_SYMBOL = 418;
    static readonly NULL2_SYMBOL = 419;
    static readonly PARAM_MARKER = 420;
    static readonly HEX_NUMBER = 421;
    static readonly BIN_NUMBER = 422;
    static readonly DECIMAL_NUMBER = 423;
    static readonly FLOAT_NUMBER = 424;
    static readonly ACCESSIBLE_SYMBOL = 425;
    static readonly ADD_SYMBOL = 426;
    static readonly ALL_SYMBOL = 427;
    static readonly ALTER_SYMBOL = 428;
    static readonly ANALYSE_SYMBOL = 429;
    static readonly AND_SYMBOL = 430;
    static readonly AS_SYMBOL = 431;
    static readonly ASC_SYMBOL = 432;
    static readonly ASENSITIVE_SYMBOL = 433;
    static readonly BEFORE_SYMBOL = 434;
    static readonly BETWEEN_SYMBOL = 435;
    static readonly BIGINT_SYMBOL = 436;
    static readonly BINARY_SYMBOL = 437;
    static readonly BIN_NUM_SYMBOL = 438;
    static readonly BIT_AND_SYMBOL = 439;
    static readonly BIT_OR_SYMBOL = 440;
    static readonly BIT_XOR_SYMBOL = 441;
    static readonly BLOB_SYMBOL = 442;
    static readonly BOTH_SYMBOL = 443;
    static readonly BY_SYMBOL = 444;
    static readonly CALL_SYMBOL = 445;
    static readonly CASCADE_SYMBOL = 446;
    static readonly CASE_SYMBOL = 447;
    static readonly CAST_SYMBOL = 448;
    static readonly CHANGE_SYMBOL = 449;
    static readonly CHAR_SYMBOL = 450;
    static readonly CHECK_SYMBOL = 451;
    static readonly COLLATE_SYMBOL = 452;
    static readonly COLUMN_SYMBOL = 453;
    static readonly CONDITION_SYMBOL = 454;
    static readonly CONSTRAINT_SYMBOL = 455;
    static readonly CONTINUE_SYMBOL = 456;
    static readonly CONVERT_SYMBOL = 457;
    static readonly COUNT_SYMBOL = 458;
    static readonly CREATE_SYMBOL = 459;
    static readonly CROSS_SYMBOL = 460;
    static readonly CURDATE_SYMBOL = 461;
    static readonly CURRENT_DATE_SYMBOL = 462;
    static readonly CURRENT_TIME_SYMBOL = 463;
    static readonly CURRENT_USER_SYMBOL = 464;
    static readonly CURSOR_SYMBOL = 465;
    static readonly CURTIME_SYMBOL = 466;
    static readonly DATABASE_SYMBOL = 467;
    static readonly DATABASES_SYMBOL = 468;
    static readonly DATE_ADD_SYMBOL = 469;
    static readonly DATE_SUB_SYMBOL = 470;
    static readonly DAY_HOUR_SYMBOL = 471;
    static readonly DAY_MICROSECOND_SYMBOL = 472;
    static readonly DAY_MINUTE_SYMBOL = 473;
    static readonly DAY_SECOND_SYMBOL = 474;
    static readonly DECIMAL_NUM_SYMBOL = 475;
    static readonly DECIMAL_SYMBOL = 476;
    static readonly DECLARE_SYMBOL = 477;
    static readonly DEFAULT_SYMBOL = 478;
    static readonly DELAYED_SYMBOL = 479;
    static readonly DELETE_SYMBOL = 480;
    static readonly DESC_SYMBOL = 481;
    static readonly DESCRIBE_SYMBOL = 482;
    static readonly DETERMINISTIC_SYMBOL = 483;
    static readonly DISTINCT_SYMBOL = 484;
    static readonly DIV_SYMBOL = 485;
    static readonly DOUBLE_SYMBOL = 486;
    static readonly DROP_SYMBOL = 487;
    static readonly DUAL_SYMBOL = 488;
    static readonly EACH_SYMBOL = 489;
    static readonly ELSE_SYMBOL = 490;
    static readonly ELSEIF_SYMBOL = 491;
    static readonly ENCLOSED_SYMBOL = 492;
    static readonly END_OF_INPUT_SYMBOL = 493;
    static readonly ESCAPED_SYMBOL = 494;
    static readonly EXCHANGE_SYMBOL = 495;
    static readonly EXISTS_SYMBOL = 496;
    static readonly EXIT_SYMBOL = 497;
    static readonly EXPIRE_SYMBOL = 498;
    static readonly EXPLAIN_SYMBOL = 499;
    static readonly EXTRACT_SYMBOL = 500;
    static readonly FALSE_SYMBOL = 501;
    static readonly FETCH_SYMBOL = 502;
    static readonly FLOAT_SYMBOL = 503;
    static readonly FORCE_SYMBOL = 504;
    static readonly FOREIGN_SYMBOL = 505;
    static readonly FOR_SYMBOL = 506;
    static readonly FROM_SYMBOL = 507;
    static readonly FULLTEXT_SYMBOL = 508;
    static readonly GET_SYMBOL = 509;
    static readonly GENERATED_SYMBOL = 510;
    static readonly GRANT_SYMBOL = 511;
    static readonly GROUP_SYMBOL = 512;
    static readonly GROUP_CONCAT_SYMBOL = 513;
    static readonly HAVING_SYMBOL = 514;
    static readonly HIGH_PRIORITY_SYMBOL = 515;
    static readonly HOUR_MICROSECOND_SYMBOL = 516;
    static readonly HOUR_MINUTE_SYMBOL = 517;
    static readonly HOUR_SECOND_SYMBOL = 518;
    static readonly IF_SYMBOL = 519;
    static readonly IGNORE_SYMBOL = 520;
    static readonly INDEX_SYMBOL = 521;
    static readonly INFILE_SYMBOL = 522;
    static readonly INNER_SYMBOL = 523;
    static readonly INOUT_SYMBOL = 524;
    static readonly INSENSITIVE_SYMBOL = 525;
    static readonly INSERT_SYMBOL = 526;
    static readonly INTERVAL_SYMBOL = 527;
    static readonly INTO_SYMBOL = 528;
    static readonly INT_SYMBOL = 529;
    static readonly IN_SYMBOL = 530;
    static readonly IO_AFTER_GTIDS_SYMBOL = 531;
    static readonly IO_BEFORE_GTIDS_SYMBOL = 532;
    static readonly IS_SYMBOL = 533;
    static readonly ITERATE_SYMBOL = 534;
    static readonly JOIN_SYMBOL = 535;
    static readonly KEYS_SYMBOL = 536;
    static readonly KEY_SYMBOL = 537;
    static readonly KILL_SYMBOL = 538;
    static readonly LEADING_SYMBOL = 539;
    static readonly LEAVE_SYMBOL = 540;
    static readonly LEFT_SYMBOL = 541;
    static readonly LIKE_SYMBOL = 542;
    static readonly LIMIT_SYMBOL = 543;
    static readonly LINEAR_SYMBOL = 544;
    static readonly LINES_SYMBOL = 545;
    static readonly LOAD_SYMBOL = 546;
    static readonly LOCATOR_SYMBOL = 547;
    static readonly LOCK_SYMBOL = 548;
    static readonly LONGBLOB_SYMBOL = 549;
    static readonly LONGTEXT_SYMBOL = 550;
    static readonly LONG_NUM_SYMBOL = 551;
    static readonly LONG_SYMBOL = 552;
    static readonly LOOP_SYMBOL = 553;
    static readonly LOW_PRIORITY_SYMBOL = 554;
    static readonly MASTER_BIND_SYMBOL = 555;
    static readonly MASTER_SSL_VERIFY_SERVER_CERT_SYMBOL = 556;
    static readonly MATCH_SYMBOL = 557;
    static readonly MAX_SYMBOL = 558;
    static readonly MAXVALUE_SYMBOL = 559;
    static readonly MEDIUMBLOB_SYMBOL = 560;
    static readonly MEDIUMINT_SYMBOL = 561;
    static readonly MEDIUMTEXT_SYMBOL = 562;
    static readonly MID_SYMBOL = 563;
    static readonly MINUTE_MICROSECOND_SYMBOL = 564;
    static readonly MINUTE_SECOND_SYMBOL = 565;
    static readonly MIN_SYMBOL = 566;
    static readonly MODIFIES_SYMBOL = 567;
    static readonly MOD_SYMBOL = 568;
    static readonly NATURAL_SYMBOL = 569;
    static readonly NCHAR_STRING_SYMBOL = 570;
    static readonly NEG_SYMBOL = 571;
    static readonly NONBLOCKING_SYMBOL = 572;
    static readonly NOT_SYMBOL = 573;
    static readonly NOW_SYMBOL = 574;
    static readonly NO_WRITE_TO_BINLOG_SYMBOL = 575;
    static readonly NULL_SYMBOL = 576;
    static readonly NUMERIC_SYMBOL = 577;
    static readonly OFFLINE_SYMBOL = 578;
    static readonly ON_SYMBOL = 579;
    static readonly ONLINE_SYMBOL = 580;
    static readonly ONLY_SYMBOL = 581;
    static readonly OPTIMIZE_SYMBOL = 582;
    static readonly OPTIMIZER_COSTS_SYMBOL = 583;
    static readonly OPTION_SYMBOL = 584;
    static readonly OPTIONALLY_SYMBOL = 585;
    static readonly ORDER_SYMBOL = 586;
    static readonly OR_SYMBOL = 587;
    static readonly OUTER_SYMBOL = 588;
    static readonly OUTFILE_SYMBOL = 589;
    static readonly OUT_SYMBOL = 590;
    static readonly POSITION_SYMBOL = 591;
    static readonly PRECISION_SYMBOL = 592;
    static readonly PRIMARY_SYMBOL = 593;
    static readonly PROCEDURE_SYMBOL = 594;
    static readonly PURGE_SYMBOL = 595;
    static readonly RANGE_SYMBOL = 596;
    static readonly READS_SYMBOL = 597;
    static readonly READ_SYMBOL = 598;
    static readonly READ_WRITE_SYMBOL = 599;
    static readonly REAL_SYMBOL = 600;
    static readonly REFERENCES_SYMBOL = 601;
    static readonly REGEXP_SYMBOL = 602;
    static readonly RELEASE_SYMBOL = 603;
    static readonly RENAME_SYMBOL = 604;
    static readonly REPEAT_SYMBOL = 605;
    static readonly REPLACE_SYMBOL = 606;
    static readonly REQUIRE_SYMBOL = 607;
    static readonly RESIGNAL_SYMBOL = 608;
    static readonly RESTRICT_SYMBOL = 609;
    static readonly RETURN_SYMBOL = 610;
    static readonly REVOKE_SYMBOL = 611;
    static readonly RIGHT_SYMBOL = 612;
    static readonly SECOND_MICROSECOND_SYMBOL = 613;
    static readonly SELECT_SYMBOL = 614;
    static readonly SENSITIVE_SYMBOL = 615;
    static readonly SEPARATOR_SYMBOL = 616;
    static readonly SERVER_OPTIONS_SYMBOL = 617;
    static readonly SESSION_USER_SYMBOL = 618;
    static readonly SET_SYMBOL = 619;
    static readonly SET_VAR_SYMBOL = 620;
    static readonly SHOW_SYMBOL = 621;
    static readonly SIGNAL_SYMBOL = 622;
    static readonly SMALLINT_SYMBOL = 623;
    static readonly SPATIAL_SYMBOL = 624;
    static readonly SPECIFIC_SYMBOL = 625;
    static readonly SQLEXCEPTION_SYMBOL = 626;
    static readonly SQLSTATE_SYMBOL = 627;
    static readonly SQLWARNING_SYMBOL = 628;
    static readonly SQL_BIG_RESULT_SYMBOL = 629;
    static readonly SQL_CALC_FOUND_ROWS_SYMBOL = 630;
    static readonly SQL_SMALL_RESULT_SYMBOL = 631;
    static readonly SQL_SYMBOL = 632;
    static readonly SSL_SYMBOL = 633;
    static readonly STARTING_SYMBOL = 634;
    static readonly STDDEV_SAMP_SYMBOL = 635;
    static readonly STDDEV_SYMBOL = 636;
    static readonly STDDEV_POP_SYMBOL = 637;
    static readonly STD_SYMBOL = 638;
    static readonly STORED_SYMBOL = 639;
    static readonly STRAIGHT_JOIN_SYMBOL = 640;
    static readonly SUBSTR_SYMBOL = 641;
    static readonly SUBSTRING_SYMBOL = 642;
    static readonly SUM_SYMBOL = 643;
    static readonly SYSDATE_SYMBOL = 644;
    static readonly SYSTEM_USER_SYMBOL = 645;
    static readonly TABLE_REF_PRIORITY_SYMBOL = 646;
    static readonly TABLE_SYMBOL = 647;
    static readonly TERMINATED_SYMBOL = 648;
    static readonly THEN_SYMBOL = 649;
    static readonly TINYBLOB_SYMBOL = 650;
    static readonly TINYINT_SYMBOL = 651;
    static readonly TINYTEXT_SYMBOL = 652;
    static readonly TO_SYMBOL = 653;
    static readonly TRAILING_SYMBOL = 654;
    static readonly TRIGGER_SYMBOL = 655;
    static readonly TRIM_SYMBOL = 656;
    static readonly TRUE_SYMBOL = 657;
    static readonly UNDO_SYMBOL = 658;
    static readonly UNION_SYMBOL = 659;
    static readonly UNIQUE_SYMBOL = 660;
    static readonly UNLOCK_SYMBOL = 661;
    static readonly UNSIGNED_SYMBOL = 662;
    static readonly UPDATE_SYMBOL = 663;
    static readonly USAGE_SYMBOL = 664;
    static readonly USE_SYMBOL = 665;
    static readonly USING_SYMBOL = 666;
    static readonly UTC_DATE_SYMBOL = 667;
    static readonly UTC_TIMESTAMP_SYMBOL = 668;
    static readonly UTC_TIME_SYMBOL = 669;
    static readonly VALIDATION_SYMBOL = 670;
    static readonly VALUES_SYMBOL = 671;
    static readonly VARBINARY_SYMBOL = 672;
    static readonly VARCHAR_SYMBOL = 673;
    static readonly VARIANCE_SYMBOL = 674;
    static readonly VARYING_SYMBOL = 675;
    static readonly VAR_POP_SYMBOL = 676;
    static readonly VAR_SAMP_SYMBOL = 677;
    static readonly VIRTUAL_SYMBOL = 678;
    static readonly WHEN_SYMBOL = 679;
    static readonly WHERE_SYMBOL = 680;
    static readonly WHILE_SYMBOL = 681;
    static readonly WITH_SYMBOL = 682;
    static readonly WITHOUT_SYMBOL = 683;
    static readonly WRITE_SYMBOL = 684;
    static readonly XOR_SYMBOL = 685;
    static readonly YEAR_MONTH_SYMBOL = 686;
    static readonly ZEROFILL_SYMBOL = 687;
    static readonly PERSIST_SYMBOL = 688;
    static readonly ROLE_SYMBOL = 689;
    static readonly ADMIN_SYMBOL = 690;
    static readonly INVISIBLE_SYMBOL = 691;
    static readonly VISIBLE_SYMBOL = 692;
    static readonly EXCEPT_SYMBOL = 693;
    static readonly COMPONENT_SYMBOL = 694;
    static readonly RECURSIVE_SYMBOL = 695;
    static readonly JSON_OBJECTAGG_SYMBOL = 696;
    static readonly JSON_ARRAYAGG_SYMBOL = 697;
    static readonly OF_SYMBOL = 698;
    static readonly SKIP_SYMBOL = 699;
    static readonly LOCKED_SYMBOL = 700;
    static readonly NOWAIT_SYMBOL = 701;
    static readonly GROUPING_SYMBOL = 702;
    static readonly PERSIST_ONLY_SYMBOL = 703;
    static readonly HISTOGRAM_SYMBOL = 704;
    static readonly BUCKETS_SYMBOL = 705;
    static readonly REMOTE_SYMBOL = 706;
    static readonly CLONE_SYMBOL = 707;
    static readonly CUME_DIST_SYMBOL = 708;
    static readonly DENSE_RANK_SYMBOL = 709;
    static readonly EXCLUDE_SYMBOL = 710;
    static readonly FIRST_VALUE_SYMBOL = 711;
    static readonly FOLLOWING_SYMBOL = 712;
    static readonly GROUPS_SYMBOL = 713;
    static readonly LAG_SYMBOL = 714;
    static readonly LAST_VALUE_SYMBOL = 715;
    static readonly LEAD_SYMBOL = 716;
    static readonly NTH_VALUE_SYMBOL = 717;
    static readonly NTILE_SYMBOL = 718;
    static readonly NULLS_SYMBOL = 719;
    static readonly OTHERS_SYMBOL = 720;
    static readonly OVER_SYMBOL = 721;
    static readonly PERCENT_RANK_SYMBOL = 722;
    static readonly PRECEDING_SYMBOL = 723;
    static readonly RANK_SYMBOL = 724;
    static readonly RESPECT_SYMBOL = 725;
    static readonly ROW_NUMBER_SYMBOL = 726;
    static readonly TIES_SYMBOL = 727;
    static readonly UNBOUNDED_SYMBOL = 728;
    static readonly WINDOW_SYMBOL = 729;
    static readonly EMPTY_SYMBOL = 730;
    static readonly JSON_TABLE_SYMBOL = 731;
    static readonly NESTED_SYMBOL = 732;
    static readonly ORDINALITY_SYMBOL = 733;
    static readonly PATH_SYMBOL = 734;
    static readonly HISTORY_SYMBOL = 735;
    static readonly REUSE_SYMBOL = 736;
    static readonly SRID_SYMBOL = 737;
    static readonly THREAD_PRIORITY_SYMBOL = 738;
    static readonly RESOURCE_SYMBOL = 739;
    static readonly SYSTEM_SYMBOL = 740;
    static readonly VCPU_SYMBOL = 741;
    static readonly MASTER_PUBLIC_KEY_PATH_SYMBOL = 742;
    static readonly GET_MASTER_PUBLIC_KEY_SYMBOL = 743;
    static readonly RESTART_SYMBOL = 744;
    static readonly DEFINITION_SYMBOL = 745;
    static readonly DESCRIPTION_SYMBOL = 746;
    static readonly ORGANIZATION_SYMBOL = 747;
    static readonly REFERENCE_SYMBOL = 748;
    static readonly OPTIONAL_SYMBOL = 749;
    static readonly SECONDARY_SYMBOL = 750;
    static readonly SECONDARY_ENGINE_SYMBOL = 751;
    static readonly SECONDARY_LOAD_SYMBOL = 752;
    static readonly SECONDARY_UNLOAD_SYMBOL = 753;
    static readonly ACTIVE_SYMBOL = 754;
    static readonly INACTIVE_SYMBOL = 755;
    static readonly LATERAL_SYMBOL = 756;
    static readonly RETAIN_SYMBOL = 757;
    static readonly OLD_SYMBOL = 758;
    static readonly NETWORK_NAMESPACE_SYMBOL = 759;
    static readonly ENFORCED_SYMBOL = 760;
    static readonly ARRAY_SYMBOL = 761;
    static readonly OJ_SYMBOL = 762;
    static readonly MEMBER_SYMBOL = 763;
    static readonly RANDOM_SYMBOL = 764;
    static readonly MASTER_COMPRESSION_ALGORITHM_SYMBOL = 765;
    static readonly MASTER_ZSTD_COMPRESSION_LEVEL_SYMBOL = 766;
    static readonly PRIVILEGE_CHECKS_USER_SYMBOL = 767;
    static readonly MASTER_TLS_CIPHERSUITES_SYMBOL = 768;
    static readonly WHITESPACE = 769;
    static readonly INVALID_INPUT = 770;
    static readonly UNDERSCORE_CHARSET = 771;
    static readonly IDENTIFIER = 772;
    static readonly NCHAR_TEXT = 773;
    static readonly BACK_TICK_QUOTED_ID = 774;
    static readonly DOUBLE_QUOTED_TEXT = 775;
    static readonly SINGLE_QUOTED_TEXT = 776;
    static readonly VERSION_COMMENT_START = 777;
    static readonly MYSQL_COMMENT_START = 778;
    static readonly VERSION_COMMENT_END = 779;
    static readonly BLOCK_COMMENT = 780;
    static readonly POUND_COMMENT = 781;
    static readonly DASHDASH_COMMENT = 782;
    static readonly NOT_EQUAL2_OPERATOR = 783;
    static readonly RULE_sql_script = 0;
    static readonly RULE_query = 1;
    static readonly RULE_simpleStatement = 2;
    static readonly RULE_alterStatement = 3;
    static readonly RULE_alterDatabase = 4;
    static readonly RULE_alterEvent = 5;
    static readonly RULE_alterLogfileGroup = 6;
    static readonly RULE_alterLogfileGroupOptions = 7;
    static readonly RULE_alterLogfileGroupOption = 8;
    static readonly RULE_alterServer = 9;
    static readonly RULE_alterTable = 10;
    static readonly RULE_alterTableActions = 11;
    static readonly RULE_alterCommandList = 12;
    static readonly RULE_alterCommandsModifierList = 13;
    static readonly RULE_standaloneAlterCommands = 14;
    static readonly RULE_alterPartition = 15;
    static readonly RULE_alterList = 16;
    static readonly RULE_alterCommandsModifier = 17;
    static readonly RULE_alterListItem = 18;
    static readonly RULE_place = 19;
    static readonly RULE_restrict = 20;
    static readonly RULE_alterOrderList = 21;
    static readonly RULE_alterAlgorithmOption = 22;
    static readonly RULE_alterLockOption = 23;
    static readonly RULE_indexLockAndAlgorithm = 24;
    static readonly RULE_withValidation = 25;
    static readonly RULE_removePartitioning = 26;
    static readonly RULE_allOrPartitionNameList = 27;
    static readonly RULE_reorgPartitionRule = 28;
    static readonly RULE_alterTablespace = 29;
    static readonly RULE_alterUndoTablespace = 30;
    static readonly RULE_undoTableSpaceOptions = 31;
    static readonly RULE_undoTableSpaceOption = 32;
    static readonly RULE_alterTablespaceOptions = 33;
    static readonly RULE_alterTablespaceOption = 34;
    static readonly RULE_changeTablespaceOption = 35;
    static readonly RULE_alterView = 36;
    static readonly RULE_viewTail = 37;
    static readonly RULE_viewSelect = 38;
    static readonly RULE_viewCheckOption = 39;
    static readonly RULE_createStatement = 40;
    static readonly RULE_createDatabase = 41;
    static readonly RULE_createDatabaseOption = 42;
    static readonly RULE_createTable = 43;
    static readonly RULE_tableElementList = 44;
    static readonly RULE_tableElement = 45;
    static readonly RULE_duplicateAsQueryExpression = 46;
    static readonly RULE_queryExpressionOrParens = 47;
    static readonly RULE_createRoutine = 48;
    static readonly RULE_createProcedure = 49;
    static readonly RULE_createFunction = 50;
    static readonly RULE_createUdf = 51;
    static readonly RULE_routineCreateOption = 52;
    static readonly RULE_routineAlterOptions = 53;
    static readonly RULE_routineOption = 54;
    static readonly RULE_createIndex = 55;
    static readonly RULE_indexNameAndType = 56;
    static readonly RULE_createIndexTarget = 57;
    static readonly RULE_createLogfileGroup = 58;
    static readonly RULE_logfileGroupOptions = 59;
    static readonly RULE_logfileGroupOption = 60;
    static readonly RULE_createServer = 61;
    static readonly RULE_serverOptions = 62;
    static readonly RULE_serverOption = 63;
    static readonly RULE_createTablespace = 64;
    static readonly RULE_createUndoTablespace = 65;
    static readonly RULE_tsDataFileName = 66;
    static readonly RULE_tsDataFile = 67;
    static readonly RULE_tablespaceOptions = 68;
    static readonly RULE_tablespaceOption = 69;
    static readonly RULE_tsOptionInitialSize = 70;
    static readonly RULE_tsOptionUndoRedoBufferSize = 71;
    static readonly RULE_tsOptionAutoextendSize = 72;
    static readonly RULE_tsOptionMaxSize = 73;
    static readonly RULE_tsOptionExtentSize = 74;
    static readonly RULE_tsOptionNodegroup = 75;
    static readonly RULE_tsOptionEngine = 76;
    static readonly RULE_tsOptionWait = 77;
    static readonly RULE_tsOptionComment = 78;
    static readonly RULE_tsOptionFileblockSize = 79;
    static readonly RULE_tsOptionEncryption = 80;
    static readonly RULE_createView = 81;
    static readonly RULE_viewReplaceOrAlgorithm = 82;
    static readonly RULE_viewAlgorithm = 83;
    static readonly RULE_viewSuid = 84;
    static readonly RULE_createTrigger = 85;
    static readonly RULE_triggerFollowsPrecedesClause = 86;
    static readonly RULE_createEvent = 87;
    static readonly RULE_createRole = 88;
    static readonly RULE_createSpatialReference = 89;
    static readonly RULE_srsAttribute = 90;
    static readonly RULE_dropStatement = 91;
    static readonly RULE_dropDatabase = 92;
    static readonly RULE_dropEvent = 93;
    static readonly RULE_dropFunction = 94;
    static readonly RULE_dropProcedure = 95;
    static readonly RULE_dropIndex = 96;
    static readonly RULE_dropLogfileGroup = 97;
    static readonly RULE_dropLogfileGroupOption = 98;
    static readonly RULE_dropServer = 99;
    static readonly RULE_dropTable = 100;
    static readonly RULE_dropTableSpace = 101;
    static readonly RULE_dropTrigger = 102;
    static readonly RULE_dropView = 103;
    static readonly RULE_dropRole = 104;
    static readonly RULE_dropSpatialReference = 105;
    static readonly RULE_dropUndoTablespace = 106;
    static readonly RULE_renameTableStatement = 107;
    static readonly RULE_renamePair = 108;
    static readonly RULE_truncateTableStatement = 109;
    static readonly RULE_importStatement = 110;
    static readonly RULE_callStatement = 111;
    static readonly RULE_deleteStatement = 112;
    static readonly RULE_partitionDelete = 113;
    static readonly RULE_deleteStatementOption = 114;
    static readonly RULE_doStatement = 115;
    static readonly RULE_handlerStatement = 116;
    static readonly RULE_handlerReadOrScan = 117;
    static readonly RULE_insertStatement = 118;
    static readonly RULE_insertLockOption = 119;
    static readonly RULE_insertFromConstructor = 120;
    static readonly RULE_fields = 121;
    static readonly RULE_insertValues = 122;
    static readonly RULE_insertQueryExpression = 123;
    static readonly RULE_valueList = 124;
    static readonly RULE_values = 125;
    static readonly RULE_valuesReference = 126;
    static readonly RULE_insertUpdateList = 127;
    static readonly RULE_loadStatement = 128;
    static readonly RULE_dataOrXml = 129;
    static readonly RULE_xmlRowsIdentifiedBy = 130;
    static readonly RULE_loadDataFileTail = 131;
    static readonly RULE_loadDataFileTargetList = 132;
    static readonly RULE_fieldOrVariableList = 133;
    static readonly RULE_replaceStatement = 134;
    static readonly RULE_selectStatement = 135;
    static readonly RULE_selectStatementWithInto = 136;
    static readonly RULE_queryExpression = 137;
    static readonly RULE_queryExpressionBody = 138;
    static readonly RULE_queryExpressionParens = 139;
    static readonly RULE_querySpecification = 140;
    static readonly RULE_subquery = 141;
    static readonly RULE_querySpecOption = 142;
    static readonly RULE_limitClause = 143;
    static readonly RULE_simpleLimitClause = 144;
    static readonly RULE_limitOptions = 145;
    static readonly RULE_limitOption = 146;
    static readonly RULE_intoClause = 147;
    static readonly RULE_procedureAnalyseClause = 148;
    static readonly RULE_havingClause = 149;
    static readonly RULE_windowClause = 150;
    static readonly RULE_windowDefinition = 151;
    static readonly RULE_windowSpec = 152;
    static readonly RULE_windowSpecDetails = 153;
    static readonly RULE_windowFrameClause = 154;
    static readonly RULE_windowFrameUnits = 155;
    static readonly RULE_windowFrameExtent = 156;
    static readonly RULE_windowFrameStart = 157;
    static readonly RULE_windowFrameBetween = 158;
    static readonly RULE_windowFrameBound = 159;
    static readonly RULE_windowFrameExclusion = 160;
    static readonly RULE_withClause = 161;
    static readonly RULE_commonTableExpression = 162;
    static readonly RULE_groupByClause = 163;
    static readonly RULE_olapOption = 164;
    static readonly RULE_orderClause = 165;
    static readonly RULE_direction = 166;
    static readonly RULE_fromClause = 167;
    static readonly RULE_tableReferenceList = 168;
    static readonly RULE_selectOption = 169;
    static readonly RULE_lockingClause = 170;
    static readonly RULE_lockStrengh = 171;
    static readonly RULE_lockedRowAction = 172;
    static readonly RULE_selectItemList = 173;
    static readonly RULE_selectItem = 174;
    static readonly RULE_selectAlias = 175;
    static readonly RULE_whereClause = 176;
    static readonly RULE_tableReference = 177;
    static readonly RULE_escapedTableReference = 178;
    static readonly RULE_joinedTable = 179;
    static readonly RULE_naturalJoinType = 180;
    static readonly RULE_innerJoinType = 181;
    static readonly RULE_outerJoinType = 182;
    static readonly RULE_tableFactor = 183;
    static readonly RULE_singleTable = 184;
    static readonly RULE_singleTableParens = 185;
    static readonly RULE_derivedTable = 186;
    static readonly RULE_tableReferenceListParens = 187;
    static readonly RULE_tableFunction = 188;
    static readonly RULE_columnsClause = 189;
    static readonly RULE_jtColumn = 190;
    static readonly RULE_onEmptyOrError = 191;
    static readonly RULE_onEmpty = 192;
    static readonly RULE_onError = 193;
    static readonly RULE_jtOnResponse = 194;
    static readonly RULE_unionOption = 195;
    static readonly RULE_tableAlias = 196;
    static readonly RULE_indexHintList = 197;
    static readonly RULE_indexHint = 198;
    static readonly RULE_indexHintType = 199;
    static readonly RULE_keyOrIndex = 200;
    static readonly RULE_constraintKeyType = 201;
    static readonly RULE_indexHintClause = 202;
    static readonly RULE_indexList = 203;
    static readonly RULE_indexListElement = 204;
    static readonly RULE_updateStatement = 205;
    static readonly RULE_transactionOrLockingStatement = 206;
    static readonly RULE_transactionStatement = 207;
    static readonly RULE_beginWork = 208;
    static readonly RULE_transactionCharacteristic = 209;
    static readonly RULE_savepointStatement = 210;
    static readonly RULE_lockStatement = 211;
    static readonly RULE_lockItem = 212;
    static readonly RULE_lockOption = 213;
    static readonly RULE_xaStatement = 214;
    static readonly RULE_xaConvert = 215;
    static readonly RULE_xid = 216;
    static readonly RULE_replicationStatement = 217;
    static readonly RULE_resetOption = 218;
    static readonly RULE_masterResetOptions = 219;
    static readonly RULE_replicationLoad = 220;
    static readonly RULE_changeMaster = 221;
    static readonly RULE_changeMasterOptions = 222;
    static readonly RULE_masterOption = 223;
    static readonly RULE_privilegeCheckDef = 224;
    static readonly RULE_masterTlsCiphersuitesDef = 225;
    static readonly RULE_masterFileDef = 226;
    static readonly RULE_serverIdList = 227;
    static readonly RULE_changeReplication = 228;
    static readonly RULE_filterDefinition = 229;
    static readonly RULE_filterDbList = 230;
    static readonly RULE_filterTableList = 231;
    static readonly RULE_filterStringList = 232;
    static readonly RULE_filterWildDbTableString = 233;
    static readonly RULE_filterDbPairList = 234;
    static readonly RULE_slave = 235;
    static readonly RULE_slaveUntilOptions = 236;
    static readonly RULE_slaveConnectionOptions = 237;
    static readonly RULE_slaveThreadOptions = 238;
    static readonly RULE_slaveThreadOption = 239;
    static readonly RULE_groupReplication = 240;
    static readonly RULE_preparedStatement = 241;
    static readonly RULE_executeStatement = 242;
    static readonly RULE_executeVarList = 243;
    static readonly RULE_cloneStatement = 244;
    static readonly RULE_dataDirSSL = 245;
    static readonly RULE_ssl = 246;
    static readonly RULE_accountManagementStatement = 247;
    static readonly RULE_alterUser = 248;
    static readonly RULE_alterUserTail = 249;
    static readonly RULE_userFunction = 250;
    static readonly RULE_createUser = 251;
    static readonly RULE_createUserTail = 252;
    static readonly RULE_defaultRoleClause = 253;
    static readonly RULE_requireClause = 254;
    static readonly RULE_connectOptions = 255;
    static readonly RULE_accountLockPasswordExpireOptions = 256;
    static readonly RULE_dropUser = 257;
    static readonly RULE_grant = 258;
    static readonly RULE_grantTargetList = 259;
    static readonly RULE_grantOptions = 260;
    static readonly RULE_exceptRoleList = 261;
    static readonly RULE_withRoles = 262;
    static readonly RULE_grantAs = 263;
    static readonly RULE_versionedRequireClause = 264;
    static readonly RULE_renameUser = 265;
    static readonly RULE_revoke = 266;
    static readonly RULE_onTypeTo = 267;
    static readonly RULE_aclType = 268;
    static readonly RULE_roleOrPrivilegesList = 269;
    static readonly RULE_roleOrPrivilege = 270;
    static readonly RULE_grantIdentifier = 271;
    static readonly RULE_requireList = 272;
    static readonly RULE_requireListElement = 273;
    static readonly RULE_grantOption = 274;
    static readonly RULE_setRole = 275;
    static readonly RULE_roleList = 276;
    static readonly RULE_role = 277;
    static readonly RULE_tableAdministrationStatement = 278;
    static readonly RULE_histogram = 279;
    static readonly RULE_checkOption = 280;
    static readonly RULE_repairType = 281;
    static readonly RULE_installUninstallStatment = 282;
    static readonly RULE_setStatement = 283;
    static readonly RULE_startOptionValueList = 284;
    static readonly RULE_transactionCharacteristics = 285;
    static readonly RULE_transactionAccessMode = 286;
    static readonly RULE_isolationLevel = 287;
    static readonly RULE_optionValueListContinued = 288;
    static readonly RULE_optionValueNoOptionType = 289;
    static readonly RULE_optionValue = 290;
    static readonly RULE_setSystemVariable = 291;
    static readonly RULE_startOptionValueListFollowingOptionType = 292;
    static readonly RULE_optionValueFollowingOptionType = 293;
    static readonly RULE_setExprOrDefault = 294;
    static readonly RULE_showStatement = 295;
    static readonly RULE_showCommandType = 296;
    static readonly RULE_nonBlocking = 297;
    static readonly RULE_fromOrIn = 298;
    static readonly RULE_inDb = 299;
    static readonly RULE_profileType = 300;
    static readonly RULE_otherAdministrativeStatement = 301;
    static readonly RULE_keyCacheListOrParts = 302;
    static readonly RULE_keyCacheList = 303;
    static readonly RULE_assignToKeycache = 304;
    static readonly RULE_assignToKeycachePartition = 305;
    static readonly RULE_cacheKeyList = 306;
    static readonly RULE_keyUsageElement = 307;
    static readonly RULE_keyUsageList = 308;
    static readonly RULE_flushOption = 309;
    static readonly RULE_logType = 310;
    static readonly RULE_flushTables = 311;
    static readonly RULE_flushTablesOptions = 312;
    static readonly RULE_preloadTail = 313;
    static readonly RULE_preloadList = 314;
    static readonly RULE_preloadKeys = 315;
    static readonly RULE_adminPartition = 316;
    static readonly RULE_resourceGroupManagement = 317;
    static readonly RULE_createResourceGroup = 318;
    static readonly RULE_resourceGroupVcpuList = 319;
    static readonly RULE_vcpuNumOrRange = 320;
    static readonly RULE_resourceGroupPriority = 321;
    static readonly RULE_resourceGroupEnableDisable = 322;
    static readonly RULE_alterResourceGroup = 323;
    static readonly RULE_setResourceGroup = 324;
    static readonly RULE_threadIdList = 325;
    static readonly RULE_dropResourceGroup = 326;
    static readonly RULE_utilityStatement = 327;
    static readonly RULE_describeCommand = 328;
    static readonly RULE_explainCommand = 329;
    static readonly RULE_explainableStatement = 330;
    static readonly RULE_helpCommand = 331;
    static readonly RULE_useCommand = 332;
    static readonly RULE_restartServer = 333;
    static readonly RULE_expr = 334;
    static readonly RULE_boolPri = 335;
    static readonly RULE_compOp = 336;
    static readonly RULE_predicate = 337;
    static readonly RULE_predicateOperations = 338;
    static readonly RULE_bitExpr = 339;
    static readonly RULE_simpleExpr = 340;
    static readonly RULE_arrayCast = 341;
    static readonly RULE_jsonOperator = 342;
    static readonly RULE_sumExpr = 343;
    static readonly RULE_groupingOperation = 344;
    static readonly RULE_windowFunctionCall = 345;
    static readonly RULE_windowingClause = 346;
    static readonly RULE_leadLagInfo = 347;
    static readonly RULE_nullTreatment = 348;
    static readonly RULE_jsonFunction = 349;
    static readonly RULE_inSumExpr = 350;
    static readonly RULE_identListArg = 351;
    static readonly RULE_identList = 352;
    static readonly RULE_fulltextOptions = 353;
    static readonly RULE_runtimeFunctionCall = 354;
    static readonly RULE_geometryFunction = 355;
    static readonly RULE_timeFunctionParameters = 356;
    static readonly RULE_fractionalPrecision = 357;
    static readonly RULE_weightStringLevels = 358;
    static readonly RULE_weightStringLevelListItem = 359;
    static readonly RULE_dateTimeTtype = 360;
    static readonly RULE_trimFunction = 361;
    static readonly RULE_substringFunction = 362;
    static readonly RULE_functionCall = 363;
    static readonly RULE_udfExprList = 364;
    static readonly RULE_udfExpr = 365;
    static readonly RULE_variable = 366;
    static readonly RULE_userVariable = 367;
    static readonly RULE_systemVariable = 368;
    static readonly RULE_internalVariableName = 369;
    static readonly RULE_whenExpression = 370;
    static readonly RULE_thenExpression = 371;
    static readonly RULE_elseExpression = 372;
    static readonly RULE_castType = 373;
    static readonly RULE_exprList = 374;
    static readonly RULE_charset = 375;
    static readonly RULE_notRule = 376;
    static readonly RULE_not2Rule = 377;
    static readonly RULE_interval = 378;
    static readonly RULE_intervalTimeStamp = 379;
    static readonly RULE_exprListWithParentheses = 380;
    static readonly RULE_exprWithParentheses = 381;
    static readonly RULE_simpleExprWithParentheses = 382;
    static readonly RULE_orderList = 383;
    static readonly RULE_orderExpression = 384;
    static readonly RULE_groupList = 385;
    static readonly RULE_groupingExpression = 386;
    static readonly RULE_channel = 387;
    static readonly RULE_compoundStatement = 388;
    static readonly RULE_returnStatement = 389;
    static readonly RULE_ifStatement = 390;
    static readonly RULE_ifBody = 391;
    static readonly RULE_thenStatement = 392;
    static readonly RULE_compoundStatementList = 393;
    static readonly RULE_caseStatement = 394;
    static readonly RULE_elseStatement = 395;
    static readonly RULE_labeledBlock = 396;
    static readonly RULE_unlabeledBlock = 397;
    static readonly RULE_label = 398;
    static readonly RULE_beginEndBlock = 399;
    static readonly RULE_labeledControl = 400;
    static readonly RULE_unlabeledControl = 401;
    static readonly RULE_loopBlock = 402;
    static readonly RULE_whileDoBlock = 403;
    static readonly RULE_repeatUntilBlock = 404;
    static readonly RULE_spDeclarations = 405;
    static readonly RULE_spDeclaration = 406;
    static readonly RULE_variableDeclaration = 407;
    static readonly RULE_conditionDeclaration = 408;
    static readonly RULE_spCondition = 409;
    static readonly RULE_sqlstate = 410;
    static readonly RULE_handlerDeclaration = 411;
    static readonly RULE_handlerCondition = 412;
    static readonly RULE_cursorDeclaration = 413;
    static readonly RULE_iterateStatement = 414;
    static readonly RULE_leaveStatement = 415;
    static readonly RULE_getDiagnostics = 416;
    static readonly RULE_signalAllowedExpr = 417;
    static readonly RULE_statementInformationItem = 418;
    static readonly RULE_conditionInformationItem = 419;
    static readonly RULE_signalInformationItemName = 420;
    static readonly RULE_signalStatement = 421;
    static readonly RULE_resignalStatement = 422;
    static readonly RULE_signalInformationItem = 423;
    static readonly RULE_cursorOpen = 424;
    static readonly RULE_cursorClose = 425;
    static readonly RULE_cursorFetch = 426;
    static readonly RULE_schedule = 427;
    static readonly RULE_columnDefinition = 428;
    static readonly RULE_checkOrReferences = 429;
    static readonly RULE_checkConstraint = 430;
    static readonly RULE_constraintEnforcement = 431;
    static readonly RULE_tableConstraintDef = 432;
    static readonly RULE_constraintName = 433;
    static readonly RULE_fieldDefinition = 434;
    static readonly RULE_columnAttribute = 435;
    static readonly RULE_columnFormat = 436;
    static readonly RULE_storageMedia = 437;
    static readonly RULE_gcolAttribute = 438;
    static readonly RULE_references = 439;
    static readonly RULE_deleteOption = 440;
    static readonly RULE_keyList = 441;
    static readonly RULE_keyPart = 442;
    static readonly RULE_keyListWithExpression = 443;
    static readonly RULE_keyPartOrExpression = 444;
    static readonly RULE_keyListVariants = 445;
    static readonly RULE_indexType = 446;
    static readonly RULE_indexOption = 447;
    static readonly RULE_commonIndexOption = 448;
    static readonly RULE_visibility = 449;
    static readonly RULE_indexTypeClause = 450;
    static readonly RULE_fulltextIndexOption = 451;
    static readonly RULE_spatialIndexOption = 452;
    static readonly RULE_dataTypeDefinition = 453;
    static readonly RULE_dataType = 454;
    static readonly RULE_nchar = 455;
    static readonly RULE_realType = 456;
    static readonly RULE_fieldLength = 457;
    static readonly RULE_fieldOptions = 458;
    static readonly RULE_charsetWithOptBinary = 459;
    static readonly RULE_ascii = 460;
    static readonly RULE_unicode = 461;
    static readonly RULE_wsNumCodepoints = 462;
    static readonly RULE_typeDatetimePrecision = 463;
    static readonly RULE_charsetName = 464;
    static readonly RULE_collationName = 465;
    static readonly RULE_createTableOptions = 466;
    static readonly RULE_createTableOptionsSpaceSeparated = 467;
    static readonly RULE_createTableOption = 468;
    static readonly RULE_ternaryOption = 469;
    static readonly RULE_defaultCollation = 470;
    static readonly RULE_defaultEncryption = 471;
    static readonly RULE_defaultCharset = 472;
    static readonly RULE_partitionClause = 473;
    static readonly RULE_partitionTypeDef = 474;
    static readonly RULE_subPartitions = 475;
    static readonly RULE_partitionKeyAlgorithm = 476;
    static readonly RULE_partitionDefinitions = 477;
    static readonly RULE_partitionDefinition = 478;
    static readonly RULE_partitionValuesIn = 479;
    static readonly RULE_partitionOption = 480;
    static readonly RULE_subpartitionDefinition = 481;
    static readonly RULE_partitionValueItemListParen = 482;
    static readonly RULE_partitionValueItem = 483;
    static readonly RULE_definerClause = 484;
    static readonly RULE_ifExists = 485;
    static readonly RULE_ifNotExists = 486;
    static readonly RULE_procedureParameter = 487;
    static readonly RULE_functionParameter = 488;
    static readonly RULE_collate = 489;
    static readonly RULE_typeWithOptCollate = 490;
    static readonly RULE_schemaIdentifierPair = 491;
    static readonly RULE_viewRefList = 492;
    static readonly RULE_updateList = 493;
    static readonly RULE_updateElement = 494;
    static readonly RULE_charsetClause = 495;
    static readonly RULE_fieldsClause = 496;
    static readonly RULE_fieldTerm = 497;
    static readonly RULE_linesClause = 498;
    static readonly RULE_lineTerm = 499;
    static readonly RULE_userList = 500;
    static readonly RULE_createUserList = 501;
    static readonly RULE_alterUserList = 502;
    static readonly RULE_createUserEntry = 503;
    static readonly RULE_alterUserEntry = 504;
    static readonly RULE_retainCurrentPassword = 505;
    static readonly RULE_discardOldPassword = 506;
    static readonly RULE_replacePassword = 507;
    static readonly RULE_userIdentifierOrText = 508;
    static readonly RULE_user = 509;
    static readonly RULE_likeClause = 510;
    static readonly RULE_likeOrWhere = 511;
    static readonly RULE_onlineOption = 512;
    static readonly RULE_noWriteToBinLog = 513;
    static readonly RULE_usePartition = 514;
    static readonly RULE_fieldIdentifier = 515;
    static readonly RULE_columnName = 516;
    static readonly RULE_columnInternalRef = 517;
    static readonly RULE_columnInternalRefList = 518;
    static readonly RULE_columnRef = 519;
    static readonly RULE_insertIdentifier = 520;
    static readonly RULE_indexName = 521;
    static readonly RULE_indexRef = 522;
    static readonly RULE_tableWild = 523;
    static readonly RULE_schemaName = 524;
    static readonly RULE_schemaRef = 525;
    static readonly RULE_procedureName = 526;
    static readonly RULE_procedureRef = 527;
    static readonly RULE_functionName = 528;
    static readonly RULE_functionRef = 529;
    static readonly RULE_triggerName = 530;
    static readonly RULE_triggerRef = 531;
    static readonly RULE_viewName = 532;
    static readonly RULE_viewRef = 533;
    static readonly RULE_tablespaceName = 534;
    static readonly RULE_tablespaceRef = 535;
    static readonly RULE_logfileGroupName = 536;
    static readonly RULE_logfileGroupRef = 537;
    static readonly RULE_eventName = 538;
    static readonly RULE_eventRef = 539;
    static readonly RULE_udfName = 540;
    static readonly RULE_serverName = 541;
    static readonly RULE_serverRef = 542;
    static readonly RULE_engineRef = 543;
    static readonly RULE_tableName = 544;
    static readonly RULE_filterTableRef = 545;
    static readonly RULE_tableRefWithWildcard = 546;
    static readonly RULE_tableRef = 547;
    static readonly RULE_tableRefList = 548;
    static readonly RULE_tableAliasRefList = 549;
    static readonly RULE_parameterName = 550;
    static readonly RULE_labelIdentifier = 551;
    static readonly RULE_labelRef = 552;
    static readonly RULE_roleIdentifier = 553;
    static readonly RULE_roleRef = 554;
    static readonly RULE_pluginRef = 555;
    static readonly RULE_componentRef = 556;
    static readonly RULE_resourceGroupRef = 557;
    static readonly RULE_windowName = 558;
    static readonly RULE_pureIdentifier = 559;
    static readonly RULE_identifier = 560;
    static readonly RULE_identifierList = 561;
    static readonly RULE_identifierListWithParentheses = 562;
    static readonly RULE_qualifiedIdentifier = 563;
    static readonly RULE_simpleIdentifier = 564;
    static readonly RULE_dotIdentifier = 565;
    static readonly RULE_ulong_number = 566;
    static readonly RULE_real_ulong_number = 567;
    static readonly RULE_ulonglong_number = 568;
    static readonly RULE_real_ulonglong_number = 569;
    static readonly RULE_literal = 570;
    static readonly RULE_signedLiteral = 571;
    static readonly RULE_stringList = 572;
    static readonly RULE_textStringLiteral = 573;
    static readonly RULE_textString = 574;
    static readonly RULE_textStringHash = 575;
    static readonly RULE_textLiteral = 576;
    static readonly RULE_textStringNoLinebreak = 577;
    static readonly RULE_textStringLiteralList = 578;
    static readonly RULE_numLiteral = 579;
    static readonly RULE_boolLiteral = 580;
    static readonly RULE_nullLiteral = 581;
    static readonly RULE_temporalLiteral = 582;
    static readonly RULE_floatOptions = 583;
    static readonly RULE_standardFloatOptions = 584;
    static readonly RULE_precision = 585;
    static readonly RULE_textOrIdentifier = 586;
    static readonly RULE_lValueIdentifier = 587;
    static readonly RULE_roleIdentifierOrText = 588;
    static readonly RULE_sizeNumber = 589;
    static readonly RULE_parentheses = 590;
    static readonly RULE_equal = 591;
    static readonly RULE_optionType = 592;
    static readonly RULE_varIdentType = 593;
    static readonly RULE_setVarIdentType = 594;
    static readonly RULE_identifierKeyword = 595;
    static readonly RULE_identifierKeywordsAmbiguous1RolesAndLabels = 596;
    static readonly RULE_identifierKeywordsAmbiguous2Labels = 597;
    static readonly RULE_labelKeyword = 598;
    static readonly RULE_identifierKeywordsAmbiguous3Roles = 599;
    static readonly RULE_identifierKeywordsUnambiguous = 600;
    static readonly RULE_roleKeyword = 601;
    static readonly RULE_lValueKeyword = 602;
    static readonly RULE_identifierKeywordsAmbiguous4SystemVariables = 603;
    static readonly RULE_roleOrIdentifierKeyword = 604;
    static readonly RULE_roleOrLabelKeyword = 605;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    constructor(input: TokenStream);
    sql_script(): Sql_scriptContext;
    query(): QueryContext;
    simpleStatement(): SimpleStatementContext;
    alterStatement(): AlterStatementContext;
    alterDatabase(): AlterDatabaseContext;
    alterEvent(): AlterEventContext;
    alterLogfileGroup(): AlterLogfileGroupContext;
    alterLogfileGroupOptions(): AlterLogfileGroupOptionsContext;
    alterLogfileGroupOption(): AlterLogfileGroupOptionContext;
    alterServer(): AlterServerContext;
    alterTable(): AlterTableContext;
    alterTableActions(): AlterTableActionsContext;
    alterCommandList(): AlterCommandListContext;
    alterCommandsModifierList(): AlterCommandsModifierListContext;
    standaloneAlterCommands(): StandaloneAlterCommandsContext;
    alterPartition(): AlterPartitionContext;
    alterList(): AlterListContext;
    alterCommandsModifier(): AlterCommandsModifierContext;
    alterListItem(): AlterListItemContext;
    place(): PlaceContext;
    restrict(): RestrictContext;
    alterOrderList(): AlterOrderListContext;
    alterAlgorithmOption(): AlterAlgorithmOptionContext;
    alterLockOption(): AlterLockOptionContext;
    indexLockAndAlgorithm(): IndexLockAndAlgorithmContext;
    withValidation(): WithValidationContext;
    removePartitioning(): RemovePartitioningContext;
    allOrPartitionNameList(): AllOrPartitionNameListContext;
    reorgPartitionRule(): ReorgPartitionRuleContext;
    alterTablespace(): AlterTablespaceContext;
    alterUndoTablespace(): AlterUndoTablespaceContext;
    undoTableSpaceOptions(): UndoTableSpaceOptionsContext;
    undoTableSpaceOption(): UndoTableSpaceOptionContext;
    alterTablespaceOptions(): AlterTablespaceOptionsContext;
    alterTablespaceOption(): AlterTablespaceOptionContext;
    changeTablespaceOption(): ChangeTablespaceOptionContext;
    alterView(): AlterViewContext;
    viewTail(): ViewTailContext;
    viewSelect(): ViewSelectContext;
    viewCheckOption(): ViewCheckOptionContext;
    createStatement(): CreateStatementContext;
    createDatabase(): CreateDatabaseContext;
    createDatabaseOption(): CreateDatabaseOptionContext;
    createTable(): CreateTableContext;
    tableElementList(): TableElementListContext;
    tableElement(): TableElementContext;
    duplicateAsQueryExpression(): DuplicateAsQueryExpressionContext;
    queryExpressionOrParens(): QueryExpressionOrParensContext;
    createRoutine(): CreateRoutineContext;
    createProcedure(): CreateProcedureContext;
    createFunction(): CreateFunctionContext;
    createUdf(): CreateUdfContext;
    routineCreateOption(): RoutineCreateOptionContext;
    routineAlterOptions(): RoutineAlterOptionsContext;
    routineOption(): RoutineOptionContext;
    createIndex(): CreateIndexContext;
    indexNameAndType(): IndexNameAndTypeContext;
    createIndexTarget(): CreateIndexTargetContext;
    createLogfileGroup(): CreateLogfileGroupContext;
    logfileGroupOptions(): LogfileGroupOptionsContext;
    logfileGroupOption(): LogfileGroupOptionContext;
    createServer(): CreateServerContext;
    serverOptions(): ServerOptionsContext;
    serverOption(): ServerOptionContext;
    createTablespace(): CreateTablespaceContext;
    createUndoTablespace(): CreateUndoTablespaceContext;
    tsDataFileName(): TsDataFileNameContext;
    tsDataFile(): TsDataFileContext;
    tablespaceOptions(): TablespaceOptionsContext;
    tablespaceOption(): TablespaceOptionContext;
    tsOptionInitialSize(): TsOptionInitialSizeContext;
    tsOptionUndoRedoBufferSize(): TsOptionUndoRedoBufferSizeContext;
    tsOptionAutoextendSize(): TsOptionAutoextendSizeContext;
    tsOptionMaxSize(): TsOptionMaxSizeContext;
    tsOptionExtentSize(): TsOptionExtentSizeContext;
    tsOptionNodegroup(): TsOptionNodegroupContext;
    tsOptionEngine(): TsOptionEngineContext;
    tsOptionWait(): TsOptionWaitContext;
    tsOptionComment(): TsOptionCommentContext;
    tsOptionFileblockSize(): TsOptionFileblockSizeContext;
    tsOptionEncryption(): TsOptionEncryptionContext;
    createView(): CreateViewContext;
    viewReplaceOrAlgorithm(): ViewReplaceOrAlgorithmContext;
    viewAlgorithm(): ViewAlgorithmContext;
    viewSuid(): ViewSuidContext;
    createTrigger(): CreateTriggerContext;
    triggerFollowsPrecedesClause(): TriggerFollowsPrecedesClauseContext;
    createEvent(): CreateEventContext;
    createRole(): CreateRoleContext;
    createSpatialReference(): CreateSpatialReferenceContext;
    srsAttribute(): SrsAttributeContext;
    dropStatement(): DropStatementContext;
    dropDatabase(): DropDatabaseContext;
    dropEvent(): DropEventContext;
    dropFunction(): DropFunctionContext;
    dropProcedure(): DropProcedureContext;
    dropIndex(): DropIndexContext;
    dropLogfileGroup(): DropLogfileGroupContext;
    dropLogfileGroupOption(): DropLogfileGroupOptionContext;
    dropServer(): DropServerContext;
    dropTable(): DropTableContext;
    dropTableSpace(): DropTableSpaceContext;
    dropTrigger(): DropTriggerContext;
    dropView(): DropViewContext;
    dropRole(): DropRoleContext;
    dropSpatialReference(): DropSpatialReferenceContext;
    dropUndoTablespace(): DropUndoTablespaceContext;
    renameTableStatement(): RenameTableStatementContext;
    renamePair(): RenamePairContext;
    truncateTableStatement(): TruncateTableStatementContext;
    importStatement(): ImportStatementContext;
    callStatement(): CallStatementContext;
    deleteStatement(): DeleteStatementContext;
    partitionDelete(): PartitionDeleteContext;
    deleteStatementOption(): DeleteStatementOptionContext;
    doStatement(): DoStatementContext;
    handlerStatement(): HandlerStatementContext;
    handlerReadOrScan(): HandlerReadOrScanContext;
    insertStatement(): InsertStatementContext;
    insertLockOption(): InsertLockOptionContext;
    insertFromConstructor(): InsertFromConstructorContext;
    fields(): FieldsContext;
    insertValues(): InsertValuesContext;
    insertQueryExpression(): InsertQueryExpressionContext;
    valueList(): ValueListContext;
    values(): ValuesContext;
    valuesReference(): ValuesReferenceContext;
    insertUpdateList(): InsertUpdateListContext;
    loadStatement(): LoadStatementContext;
    dataOrXml(): DataOrXmlContext;
    xmlRowsIdentifiedBy(): XmlRowsIdentifiedByContext;
    loadDataFileTail(): LoadDataFileTailContext;
    loadDataFileTargetList(): LoadDataFileTargetListContext;
    fieldOrVariableList(): FieldOrVariableListContext;
    replaceStatement(): ReplaceStatementContext;
    selectStatement(): SelectStatementContext;
    selectStatementWithInto(): SelectStatementWithIntoContext;
    queryExpression(): QueryExpressionContext;
    queryExpressionBody(): QueryExpressionBodyContext;
    queryExpressionBody(_p: number): QueryExpressionBodyContext;
    queryExpressionParens(): QueryExpressionParensContext;
    querySpecification(): QuerySpecificationContext;
    subquery(): SubqueryContext;
    querySpecOption(): QuerySpecOptionContext;
    limitClause(): LimitClauseContext;
    simpleLimitClause(): SimpleLimitClauseContext;
    limitOptions(): LimitOptionsContext;
    limitOption(): LimitOptionContext;
    intoClause(): IntoClauseContext;
    procedureAnalyseClause(): ProcedureAnalyseClauseContext;
    havingClause(): HavingClauseContext;
    windowClause(): WindowClauseContext;
    windowDefinition(): WindowDefinitionContext;
    windowSpec(): WindowSpecContext;
    windowSpecDetails(): WindowSpecDetailsContext;
    windowFrameClause(): WindowFrameClauseContext;
    windowFrameUnits(): WindowFrameUnitsContext;
    windowFrameExtent(): WindowFrameExtentContext;
    windowFrameStart(): WindowFrameStartContext;
    windowFrameBetween(): WindowFrameBetweenContext;
    windowFrameBound(): WindowFrameBoundContext;
    windowFrameExclusion(): WindowFrameExclusionContext;
    withClause(): WithClauseContext;
    commonTableExpression(): CommonTableExpressionContext;
    groupByClause(): GroupByClauseContext;
    olapOption(): OlapOptionContext;
    orderClause(): OrderClauseContext;
    direction(): DirectionContext;
    fromClause(): FromClauseContext;
    tableReferenceList(): TableReferenceListContext;
    selectOption(): SelectOptionContext;
    lockingClause(): LockingClauseContext;
    lockStrengh(): LockStrenghContext;
    lockedRowAction(): LockedRowActionContext;
    selectItemList(): SelectItemListContext;
    selectItem(): SelectItemContext;
    selectAlias(): SelectAliasContext;
    whereClause(): WhereClauseContext;
    tableReference(): TableReferenceContext;
    escapedTableReference(): EscapedTableReferenceContext;
    joinedTable(): JoinedTableContext;
    naturalJoinType(): NaturalJoinTypeContext;
    innerJoinType(): InnerJoinTypeContext;
    outerJoinType(): OuterJoinTypeContext;
    tableFactor(): TableFactorContext;
    singleTable(): SingleTableContext;
    singleTableParens(): SingleTableParensContext;
    derivedTable(): DerivedTableContext;
    tableReferenceListParens(): TableReferenceListParensContext;
    tableFunction(): TableFunctionContext;
    columnsClause(): ColumnsClauseContext;
    jtColumn(): JtColumnContext;
    onEmptyOrError(): OnEmptyOrErrorContext;
    onEmpty(): OnEmptyContext;
    onError(): OnErrorContext;
    jtOnResponse(): JtOnResponseContext;
    unionOption(): UnionOptionContext;
    tableAlias(): TableAliasContext;
    indexHintList(): IndexHintListContext;
    indexHint(): IndexHintContext;
    indexHintType(): IndexHintTypeContext;
    keyOrIndex(): KeyOrIndexContext;
    constraintKeyType(): ConstraintKeyTypeContext;
    indexHintClause(): IndexHintClauseContext;
    indexList(): IndexListContext;
    indexListElement(): IndexListElementContext;
    updateStatement(): UpdateStatementContext;
    transactionOrLockingStatement(): TransactionOrLockingStatementContext;
    transactionStatement(): TransactionStatementContext;
    beginWork(): BeginWorkContext;
    transactionCharacteristic(): TransactionCharacteristicContext;
    savepointStatement(): SavepointStatementContext;
    lockStatement(): LockStatementContext;
    lockItem(): LockItemContext;
    lockOption(): LockOptionContext;
    xaStatement(): XaStatementContext;
    xaConvert(): XaConvertContext;
    xid(): XidContext;
    replicationStatement(): ReplicationStatementContext;
    resetOption(): ResetOptionContext;
    masterResetOptions(): MasterResetOptionsContext;
    replicationLoad(): ReplicationLoadContext;
    changeMaster(): ChangeMasterContext;
    changeMasterOptions(): ChangeMasterOptionsContext;
    masterOption(): MasterOptionContext;
    privilegeCheckDef(): PrivilegeCheckDefContext;
    masterTlsCiphersuitesDef(): MasterTlsCiphersuitesDefContext;
    masterFileDef(): MasterFileDefContext;
    serverIdList(): ServerIdListContext;
    changeReplication(): ChangeReplicationContext;
    filterDefinition(): FilterDefinitionContext;
    filterDbList(): FilterDbListContext;
    filterTableList(): FilterTableListContext;
    filterStringList(): FilterStringListContext;
    filterWildDbTableString(): FilterWildDbTableStringContext;
    filterDbPairList(): FilterDbPairListContext;
    slave(): SlaveContext;
    slaveUntilOptions(): SlaveUntilOptionsContext;
    slaveConnectionOptions(): SlaveConnectionOptionsContext;
    slaveThreadOptions(): SlaveThreadOptionsContext;
    slaveThreadOption(): SlaveThreadOptionContext;
    groupReplication(): GroupReplicationContext;
    preparedStatement(): PreparedStatementContext;
    executeStatement(): ExecuteStatementContext;
    executeVarList(): ExecuteVarListContext;
    cloneStatement(): CloneStatementContext;
    dataDirSSL(): DataDirSSLContext;
    ssl(): SslContext;
    accountManagementStatement(): AccountManagementStatementContext;
    alterUser(): AlterUserContext;
    alterUserTail(): AlterUserTailContext;
    userFunction(): UserFunctionContext;
    createUser(): CreateUserContext;
    createUserTail(): CreateUserTailContext;
    defaultRoleClause(): DefaultRoleClauseContext;
    requireClause(): RequireClauseContext;
    connectOptions(): ConnectOptionsContext;
    accountLockPasswordExpireOptions(): AccountLockPasswordExpireOptionsContext;
    dropUser(): DropUserContext;
    grant(): GrantContext;
    grantTargetList(): GrantTargetListContext;
    grantOptions(): GrantOptionsContext;
    exceptRoleList(): ExceptRoleListContext;
    withRoles(): WithRolesContext;
    grantAs(): GrantAsContext;
    versionedRequireClause(): VersionedRequireClauseContext;
    renameUser(): RenameUserContext;
    revoke(): RevokeContext;
    onTypeTo(): OnTypeToContext;
    aclType(): AclTypeContext;
    roleOrPrivilegesList(): RoleOrPrivilegesListContext;
    roleOrPrivilege(): RoleOrPrivilegeContext;
    grantIdentifier(): GrantIdentifierContext;
    requireList(): RequireListContext;
    requireListElement(): RequireListElementContext;
    grantOption(): GrantOptionContext;
    setRole(): SetRoleContext;
    roleList(): RoleListContext;
    role(): RoleContext;
    tableAdministrationStatement(): TableAdministrationStatementContext;
    histogram(): HistogramContext;
    checkOption(): CheckOptionContext;
    repairType(): RepairTypeContext;
    installUninstallStatment(): InstallUninstallStatmentContext;
    setStatement(): SetStatementContext;
    startOptionValueList(): StartOptionValueListContext;
    transactionCharacteristics(): TransactionCharacteristicsContext;
    transactionAccessMode(): TransactionAccessModeContext;
    isolationLevel(): IsolationLevelContext;
    optionValueListContinued(): OptionValueListContinuedContext;
    optionValueNoOptionType(): OptionValueNoOptionTypeContext;
    optionValue(): OptionValueContext;
    setSystemVariable(): SetSystemVariableContext;
    startOptionValueListFollowingOptionType(): StartOptionValueListFollowingOptionTypeContext;
    optionValueFollowingOptionType(): OptionValueFollowingOptionTypeContext;
    setExprOrDefault(): SetExprOrDefaultContext;
    showStatement(): ShowStatementContext;
    showCommandType(): ShowCommandTypeContext;
    nonBlocking(): NonBlockingContext;
    fromOrIn(): FromOrInContext;
    inDb(): InDbContext;
    profileType(): ProfileTypeContext;
    otherAdministrativeStatement(): OtherAdministrativeStatementContext;
    keyCacheListOrParts(): KeyCacheListOrPartsContext;
    keyCacheList(): KeyCacheListContext;
    assignToKeycache(): AssignToKeycacheContext;
    assignToKeycachePartition(): AssignToKeycachePartitionContext;
    cacheKeyList(): CacheKeyListContext;
    keyUsageElement(): KeyUsageElementContext;
    keyUsageList(): KeyUsageListContext;
    flushOption(): FlushOptionContext;
    logType(): LogTypeContext;
    flushTables(): FlushTablesContext;
    flushTablesOptions(): FlushTablesOptionsContext;
    preloadTail(): PreloadTailContext;
    preloadList(): PreloadListContext;
    preloadKeys(): PreloadKeysContext;
    adminPartition(): AdminPartitionContext;
    resourceGroupManagement(): ResourceGroupManagementContext;
    createResourceGroup(): CreateResourceGroupContext;
    resourceGroupVcpuList(): ResourceGroupVcpuListContext;
    vcpuNumOrRange(): VcpuNumOrRangeContext;
    resourceGroupPriority(): ResourceGroupPriorityContext;
    resourceGroupEnableDisable(): ResourceGroupEnableDisableContext;
    alterResourceGroup(): AlterResourceGroupContext;
    setResourceGroup(): SetResourceGroupContext;
    threadIdList(): ThreadIdListContext;
    dropResourceGroup(): DropResourceGroupContext;
    utilityStatement(): UtilityStatementContext;
    describeCommand(): DescribeCommandContext;
    explainCommand(): ExplainCommandContext;
    explainableStatement(): ExplainableStatementContext;
    helpCommand(): HelpCommandContext;
    useCommand(): UseCommandContext;
    restartServer(): RestartServerContext;
    expr(): ExprContext;
    expr(_p: number): ExprContext;
    boolPri(): BoolPriContext;
    boolPri(_p: number): BoolPriContext;
    compOp(): CompOpContext;
    predicate(): PredicateContext;
    predicateOperations(): PredicateOperationsContext;
    bitExpr(): BitExprContext;
    bitExpr(_p: number): BitExprContext;
    simpleExpr(): SimpleExprContext;
    simpleExpr(_p: number): SimpleExprContext;
    arrayCast(): ArrayCastContext;
    jsonOperator(): JsonOperatorContext;
    sumExpr(): SumExprContext;
    groupingOperation(): GroupingOperationContext;
    windowFunctionCall(): WindowFunctionCallContext;
    windowingClause(): WindowingClauseContext;
    leadLagInfo(): LeadLagInfoContext;
    nullTreatment(): NullTreatmentContext;
    jsonFunction(): JsonFunctionContext;
    inSumExpr(): InSumExprContext;
    identListArg(): IdentListArgContext;
    identList(): IdentListContext;
    fulltextOptions(): FulltextOptionsContext;
    runtimeFunctionCall(): RuntimeFunctionCallContext;
    geometryFunction(): GeometryFunctionContext;
    timeFunctionParameters(): TimeFunctionParametersContext;
    fractionalPrecision(): FractionalPrecisionContext;
    weightStringLevels(): WeightStringLevelsContext;
    weightStringLevelListItem(): WeightStringLevelListItemContext;
    dateTimeTtype(): DateTimeTtypeContext;
    trimFunction(): TrimFunctionContext;
    substringFunction(): SubstringFunctionContext;
    functionCall(): FunctionCallContext;
    udfExprList(): UdfExprListContext;
    udfExpr(): UdfExprContext;
    variable(): VariableContext;
    userVariable(): UserVariableContext;
    systemVariable(): SystemVariableContext;
    internalVariableName(): InternalVariableNameContext;
    whenExpression(): WhenExpressionContext;
    thenExpression(): ThenExpressionContext;
    elseExpression(): ElseExpressionContext;
    castType(): CastTypeContext;
    exprList(): ExprListContext;
    charset(): CharsetContext;
    notRule(): NotRuleContext;
    not2Rule(): Not2RuleContext;
    interval(): IntervalContext;
    intervalTimeStamp(): IntervalTimeStampContext;
    exprListWithParentheses(): ExprListWithParenthesesContext;
    exprWithParentheses(): ExprWithParenthesesContext;
    simpleExprWithParentheses(): SimpleExprWithParenthesesContext;
    orderList(): OrderListContext;
    orderExpression(): OrderExpressionContext;
    groupList(): GroupListContext;
    groupingExpression(): GroupingExpressionContext;
    channel(): ChannelContext;
    compoundStatement(): CompoundStatementContext;
    returnStatement(): ReturnStatementContext;
    ifStatement(): IfStatementContext;
    ifBody(): IfBodyContext;
    thenStatement(): ThenStatementContext;
    compoundStatementList(): CompoundStatementListContext;
    caseStatement(): CaseStatementContext;
    elseStatement(): ElseStatementContext;
    labeledBlock(): LabeledBlockContext;
    unlabeledBlock(): UnlabeledBlockContext;
    label(): LabelContext;
    beginEndBlock(): BeginEndBlockContext;
    labeledControl(): LabeledControlContext;
    unlabeledControl(): UnlabeledControlContext;
    loopBlock(): LoopBlockContext;
    whileDoBlock(): WhileDoBlockContext;
    repeatUntilBlock(): RepeatUntilBlockContext;
    spDeclarations(): SpDeclarationsContext;
    spDeclaration(): SpDeclarationContext;
    variableDeclaration(): VariableDeclarationContext;
    conditionDeclaration(): ConditionDeclarationContext;
    spCondition(): SpConditionContext;
    sqlstate(): SqlstateContext;
    handlerDeclaration(): HandlerDeclarationContext;
    handlerCondition(): HandlerConditionContext;
    cursorDeclaration(): CursorDeclarationContext;
    iterateStatement(): IterateStatementContext;
    leaveStatement(): LeaveStatementContext;
    getDiagnostics(): GetDiagnosticsContext;
    signalAllowedExpr(): SignalAllowedExprContext;
    statementInformationItem(): StatementInformationItemContext;
    conditionInformationItem(): ConditionInformationItemContext;
    signalInformationItemName(): SignalInformationItemNameContext;
    signalStatement(): SignalStatementContext;
    resignalStatement(): ResignalStatementContext;
    signalInformationItem(): SignalInformationItemContext;
    cursorOpen(): CursorOpenContext;
    cursorClose(): CursorCloseContext;
    cursorFetch(): CursorFetchContext;
    schedule(): ScheduleContext;
    columnDefinition(): ColumnDefinitionContext;
    checkOrReferences(): CheckOrReferencesContext;
    checkConstraint(): CheckConstraintContext;
    constraintEnforcement(): ConstraintEnforcementContext;
    tableConstraintDef(): TableConstraintDefContext;
    constraintName(): ConstraintNameContext;
    fieldDefinition(): FieldDefinitionContext;
    columnAttribute(): ColumnAttributeContext;
    columnFormat(): ColumnFormatContext;
    storageMedia(): StorageMediaContext;
    gcolAttribute(): GcolAttributeContext;
    references(): ReferencesContext;
    deleteOption(): DeleteOptionContext;
    keyList(): KeyListContext;
    keyPart(): KeyPartContext;
    keyListWithExpression(): KeyListWithExpressionContext;
    keyPartOrExpression(): KeyPartOrExpressionContext;
    keyListVariants(): KeyListVariantsContext;
    indexType(): IndexTypeContext;
    indexOption(): IndexOptionContext;
    commonIndexOption(): CommonIndexOptionContext;
    visibility(): VisibilityContext;
    indexTypeClause(): IndexTypeClauseContext;
    fulltextIndexOption(): FulltextIndexOptionContext;
    spatialIndexOption(): SpatialIndexOptionContext;
    dataTypeDefinition(): DataTypeDefinitionContext;
    dataType(): DataTypeContext;
    nchar(): NcharContext;
    realType(): RealTypeContext;
    fieldLength(): FieldLengthContext;
    fieldOptions(): FieldOptionsContext;
    charsetWithOptBinary(): CharsetWithOptBinaryContext;
    ascii(): AsciiContext;
    unicode(): UnicodeContext;
    wsNumCodepoints(): WsNumCodepointsContext;
    typeDatetimePrecision(): TypeDatetimePrecisionContext;
    charsetName(): CharsetNameContext;
    collationName(): CollationNameContext;
    createTableOptions(): CreateTableOptionsContext;
    createTableOptionsSpaceSeparated(): CreateTableOptionsSpaceSeparatedContext;
    createTableOption(): CreateTableOptionContext;
    ternaryOption(): TernaryOptionContext;
    defaultCollation(): DefaultCollationContext;
    defaultEncryption(): DefaultEncryptionContext;
    defaultCharset(): DefaultCharsetContext;
    partitionClause(): PartitionClauseContext;
    partitionTypeDef(): PartitionTypeDefContext;
    subPartitions(): SubPartitionsContext;
    partitionKeyAlgorithm(): PartitionKeyAlgorithmContext;
    partitionDefinitions(): PartitionDefinitionsContext;
    partitionDefinition(): PartitionDefinitionContext;
    partitionValuesIn(): PartitionValuesInContext;
    partitionOption(): PartitionOptionContext;
    subpartitionDefinition(): SubpartitionDefinitionContext;
    partitionValueItemListParen(): PartitionValueItemListParenContext;
    partitionValueItem(): PartitionValueItemContext;
    definerClause(): DefinerClauseContext;
    ifExists(): IfExistsContext;
    ifNotExists(): IfNotExistsContext;
    procedureParameter(): ProcedureParameterContext;
    functionParameter(): FunctionParameterContext;
    collate(): CollateContext;
    typeWithOptCollate(): TypeWithOptCollateContext;
    schemaIdentifierPair(): SchemaIdentifierPairContext;
    viewRefList(): ViewRefListContext;
    updateList(): UpdateListContext;
    updateElement(): UpdateElementContext;
    charsetClause(): CharsetClauseContext;
    fieldsClause(): FieldsClauseContext;
    fieldTerm(): FieldTermContext;
    linesClause(): LinesClauseContext;
    lineTerm(): LineTermContext;
    userList(): UserListContext;
    createUserList(): CreateUserListContext;
    alterUserList(): AlterUserListContext;
    createUserEntry(): CreateUserEntryContext;
    alterUserEntry(): AlterUserEntryContext;
    retainCurrentPassword(): RetainCurrentPasswordContext;
    discardOldPassword(): DiscardOldPasswordContext;
    replacePassword(): ReplacePasswordContext;
    userIdentifierOrText(): UserIdentifierOrTextContext;
    user(): UserContext;
    likeClause(): LikeClauseContext;
    likeOrWhere(): LikeOrWhereContext;
    onlineOption(): OnlineOptionContext;
    noWriteToBinLog(): NoWriteToBinLogContext;
    usePartition(): UsePartitionContext;
    fieldIdentifier(): FieldIdentifierContext;
    columnName(): ColumnNameContext;
    columnInternalRef(): ColumnInternalRefContext;
    columnInternalRefList(): ColumnInternalRefListContext;
    columnRef(): ColumnRefContext;
    insertIdentifier(): InsertIdentifierContext;
    indexName(): IndexNameContext;
    indexRef(): IndexRefContext;
    tableWild(): TableWildContext;
    schemaName(): SchemaNameContext;
    schemaRef(): SchemaRefContext;
    procedureName(): ProcedureNameContext;
    procedureRef(): ProcedureRefContext;
    functionName(): FunctionNameContext;
    functionRef(): FunctionRefContext;
    triggerName(): TriggerNameContext;
    triggerRef(): TriggerRefContext;
    viewName(): ViewNameContext;
    viewRef(): ViewRefContext;
    tablespaceName(): TablespaceNameContext;
    tablespaceRef(): TablespaceRefContext;
    logfileGroupName(): LogfileGroupNameContext;
    logfileGroupRef(): LogfileGroupRefContext;
    eventName(): EventNameContext;
    eventRef(): EventRefContext;
    udfName(): UdfNameContext;
    serverName(): ServerNameContext;
    serverRef(): ServerRefContext;
    engineRef(): EngineRefContext;
    tableName(): TableNameContext;
    filterTableRef(): FilterTableRefContext;
    tableRefWithWildcard(): TableRefWithWildcardContext;
    tableRef(): TableRefContext;
    tableRefList(): TableRefListContext;
    tableAliasRefList(): TableAliasRefListContext;
    parameterName(): ParameterNameContext;
    labelIdentifier(): LabelIdentifierContext;
    labelRef(): LabelRefContext;
    roleIdentifier(): RoleIdentifierContext;
    roleRef(): RoleRefContext;
    pluginRef(): PluginRefContext;
    componentRef(): ComponentRefContext;
    resourceGroupRef(): ResourceGroupRefContext;
    windowName(): WindowNameContext;
    pureIdentifier(): PureIdentifierContext;
    identifier(): IdentifierContext;
    identifierList(): IdentifierListContext;
    identifierListWithParentheses(): IdentifierListWithParenthesesContext;
    qualifiedIdentifier(): QualifiedIdentifierContext;
    simpleIdentifier(): SimpleIdentifierContext;
    dotIdentifier(): DotIdentifierContext;
    ulong_number(): Ulong_numberContext;
    real_ulong_number(): Real_ulong_numberContext;
    ulonglong_number(): Ulonglong_numberContext;
    real_ulonglong_number(): Real_ulonglong_numberContext;
    literal(): LiteralContext;
    signedLiteral(): SignedLiteralContext;
    stringList(): StringListContext;
    textStringLiteral(): TextStringLiteralContext;
    textString(): TextStringContext;
    textStringHash(): TextStringHashContext;
    textLiteral(): TextLiteralContext;
    textStringNoLinebreak(): TextStringNoLinebreakContext;
    textStringLiteralList(): TextStringLiteralListContext;
    numLiteral(): NumLiteralContext;
    boolLiteral(): BoolLiteralContext;
    nullLiteral(): NullLiteralContext;
    temporalLiteral(): TemporalLiteralContext;
    floatOptions(): FloatOptionsContext;
    standardFloatOptions(): StandardFloatOptionsContext;
    precision(): PrecisionContext;
    textOrIdentifier(): TextOrIdentifierContext;
    lValueIdentifier(): LValueIdentifierContext;
    roleIdentifierOrText(): RoleIdentifierOrTextContext;
    sizeNumber(): SizeNumberContext;
    parentheses(): ParenthesesContext;
    equal(): EqualContext;
    optionType(): OptionTypeContext;
    varIdentType(): VarIdentTypeContext;
    setVarIdentType(): SetVarIdentTypeContext;
    identifierKeyword(): IdentifierKeywordContext;
    identifierKeywordsAmbiguous1RolesAndLabels(): IdentifierKeywordsAmbiguous1RolesAndLabelsContext;
    identifierKeywordsAmbiguous2Labels(): IdentifierKeywordsAmbiguous2LabelsContext;
    labelKeyword(): LabelKeywordContext;
    identifierKeywordsAmbiguous3Roles(): IdentifierKeywordsAmbiguous3RolesContext;
    identifierKeywordsUnambiguous(): IdentifierKeywordsUnambiguousContext;
    roleKeyword(): RoleKeywordContext;
    lValueKeyword(): LValueKeywordContext;
    identifierKeywordsAmbiguous4SystemVariables(): IdentifierKeywordsAmbiguous4SystemVariablesContext;
    roleOrIdentifierKeyword(): RoleOrIdentifierKeywordContext;
    roleOrLabelKeyword(): RoleOrLabelKeywordContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private simpleStatement_sempred;
    private alterStatement_sempred;
    private alterDatabase_sempred;
    private alterTable_sempred;
    private standaloneAlterCommands_sempred;
    private alterPartition_sempred;
    private alterListItem_sempred;
    private withValidation_sempred;
    private alterTablespace_sempred;
    private createStatement_sempred;
    private createDatabaseOption_sempred;
    private createIndex_sempred;
    private tsDataFileName_sempred;
    private tablespaceOption_sempred;
    private triggerFollowsPrecedesClause_sempred;
    private dropStatement_sempred;
    private deleteStatement_sempred;
    private partitionDelete_sempred;
    private doStatement_sempred;
    private insertStatement_sempred;
    private queryExpression_sempred;
    private queryExpressionBody_sempred;
    private querySpecification_sempred;
    private olapOption_sempred;
    private selectOption_sempred;
    private lockingClause_sempred;
    private lockStrengh_sempred;
    private tableReference_sempred;
    private tableFactor_sempred;
    private derivedTable_sempred;
    private jtColumn_sempred;
    private tableAlias_sempred;
    private updateStatement_sempred;
    private transactionCharacteristic_sempred;
    private lockStatement_sempred;
    private xaConvert_sempred;
    private replicationStatement_sempred;
    private resetOption_sempred;
    private masterResetOptions_sempred;
    private changeReplication_sempred;
    private slaveUntilOptions_sempred;
    private slaveConnectionOptions_sempred;
    private cloneStatement_sempred;
    private accountManagementStatement_sempred;
    private alterUser_sempred;
    private alterUserTail_sempred;
    private createUser_sempred;
    private createUserTail_sempred;
    private defaultRoleClause_sempred;
    private accountLockPasswordExpireOptions_sempred;
    private dropUser_sempred;
    private grant_sempred;
    private grantTargetList_sempred;
    private grantOptions_sempred;
    private versionedRequireClause_sempred;
    private revoke_sempred;
    private onTypeTo_sempred;
    private roleOrPrivilege_sempred;
    private grantIdentifier_sempred;
    private tableAdministrationStatement_sempred;
    private startOptionValueList_sempred;
    private optionValueNoOptionType_sempred;
    private setExprOrDefault_sempred;
    private showStatement_sempred;
    private showCommandType_sempred;
    private nonBlocking_sempred;
    private otherAdministrativeStatement_sempred;
    private flushOption_sempred;
    private flushTablesOptions_sempred;
    private utilityStatement_sempred;
    private explainCommand_sempred;
    private explainableStatement_sempred;
    private expr_sempred;
    private boolPri_sempred;
    private predicate_sempred;
    private bitExpr_sempred;
    private simpleExpr_sempred;
    private arrayCast_sempred;
    private jsonOperator_sempred;
    private sumExpr_sempred;
    private runtimeFunctionCall_sempred;
    private geometryFunction_sempred;
    private fractionalPrecision_sempred;
    private internalVariableName_sempred;
    private castType_sempred;
    private channel_sempred;
    private getDiagnostics_sempred;
    private checkOrReferences_sempred;
    private tableConstraintDef_sempred;
    private fieldDefinition_sempred;
    private columnAttribute_sempred;
    private keyListVariants_sempred;
    private commonIndexOption_sempred;
    private dataType_sempred;
    private charsetName_sempred;
    private collationName_sempred;
    private createTableOption_sempred;
    private partitionKeyAlgorithm_sempred;
    private createUserEntry_sempred;
    private usePartition_sempred;
    private columnName_sempred;
    private pureIdentifier_sempred;
    private simpleIdentifier_sempred;
    private real_ulonglong_number_sempred;
    private textStringLiteral_sempred;
    private textStringHash_sempred;
    private identifierKeyword_sempred;
    private labelKeyword_sempred;
    private roleKeyword_sempred;
    private roleOrIdentifierKeyword_sempred;
    private roleOrLabelKeyword_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    private static readonly _serializedATNSegment3;
    private static readonly _serializedATNSegment4;
    private static readonly _serializedATNSegment5;
    private static readonly _serializedATNSegment6;
    private static readonly _serializedATNSegment7;
    private static readonly _serializedATNSegment8;
    private static readonly _serializedATNSegment9;
    private static readonly _serializedATNSegment10;
    private static readonly _serializedATNSegment11;
    private static readonly _serializedATNSegment12;
    private static readonly _serializedATNSegment13;
    private static readonly _serializedATNSegment14;
    private static readonly _serializedATNSegment15;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class Sql_scriptContext extends ParserRuleContext {
    EOF(): TerminalNode;
    query(): QueryContext[];
    query(i: number): QueryContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class QueryContext extends ParserRuleContext {
    simpleStatement(): SimpleStatementContext | undefined;
    beginWork(): BeginWorkContext | undefined;
    SEMICOLON_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleStatementContext extends ParserRuleContext {
    alterStatement(): AlterStatementContext | undefined;
    createStatement(): CreateStatementContext | undefined;
    dropStatement(): DropStatementContext | undefined;
    renameTableStatement(): RenameTableStatementContext | undefined;
    truncateTableStatement(): TruncateTableStatementContext | undefined;
    importStatement(): ImportStatementContext | undefined;
    callStatement(): CallStatementContext | undefined;
    deleteStatement(): DeleteStatementContext | undefined;
    doStatement(): DoStatementContext | undefined;
    handlerStatement(): HandlerStatementContext | undefined;
    insertStatement(): InsertStatementContext | undefined;
    loadStatement(): LoadStatementContext | undefined;
    replaceStatement(): ReplaceStatementContext | undefined;
    selectStatement(): SelectStatementContext | undefined;
    updateStatement(): UpdateStatementContext | undefined;
    transactionOrLockingStatement(): TransactionOrLockingStatementContext | undefined;
    replicationStatement(): ReplicationStatementContext | undefined;
    preparedStatement(): PreparedStatementContext | undefined;
    cloneStatement(): CloneStatementContext | undefined;
    accountManagementStatement(): AccountManagementStatementContext | undefined;
    tableAdministrationStatement(): TableAdministrationStatementContext | undefined;
    installUninstallStatment(): InstallUninstallStatmentContext | undefined;
    setStatement(): SetStatementContext | undefined;
    showStatement(): ShowStatementContext | undefined;
    resourceGroupManagement(): ResourceGroupManagementContext | undefined;
    otherAdministrativeStatement(): OtherAdministrativeStatementContext | undefined;
    utilityStatement(): UtilityStatementContext | undefined;
    getDiagnostics(): GetDiagnosticsContext | undefined;
    signalStatement(): SignalStatementContext | undefined;
    resignalStatement(): ResignalStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterStatementContext extends ParserRuleContext {
    ALTER_SYMBOL(): TerminalNode;
    alterTable(): AlterTableContext | undefined;
    alterDatabase(): AlterDatabaseContext | undefined;
    PROCEDURE_SYMBOL(): TerminalNode | undefined;
    procedureRef(): ProcedureRefContext | undefined;
    FUNCTION_SYMBOL(): TerminalNode | undefined;
    functionRef(): FunctionRefContext | undefined;
    alterView(): AlterViewContext | undefined;
    alterEvent(): AlterEventContext | undefined;
    alterTablespace(): AlterTablespaceContext | undefined;
    alterUndoTablespace(): AlterUndoTablespaceContext | undefined;
    alterLogfileGroup(): AlterLogfileGroupContext | undefined;
    alterServer(): AlterServerContext | undefined;
    INSTANCE_SYMBOL(): TerminalNode | undefined;
    ROTATE_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    MASTER_SYMBOL(): TerminalNode | undefined;
    KEY_SYMBOL(): TerminalNode | undefined;
    routineAlterOptions(): RoutineAlterOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterDatabaseContext extends ParserRuleContext {
    DATABASE_SYMBOL(): TerminalNode;
    schemaRef(): SchemaRefContext;
    UPGRADE_SYMBOL(): TerminalNode | undefined;
    DATA_SYMBOL(): TerminalNode | undefined;
    DIRECTORY_SYMBOL(): TerminalNode | undefined;
    NAME_SYMBOL(): TerminalNode | undefined;
    createDatabaseOption(): CreateDatabaseOptionContext[];
    createDatabaseOption(i: number): CreateDatabaseOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterEventContext extends ParserRuleContext {
    EVENT_SYMBOL(): TerminalNode;
    eventRef(): EventRefContext;
    definerClause(): DefinerClauseContext | undefined;
    ON_SYMBOL(): TerminalNode[];
    ON_SYMBOL(i: number): TerminalNode;
    SCHEDULE_SYMBOL(): TerminalNode | undefined;
    schedule(): ScheduleContext | undefined;
    COMPLETION_SYMBOL(): TerminalNode | undefined;
    PRESERVE_SYMBOL(): TerminalNode | undefined;
    RENAME_SYMBOL(): TerminalNode | undefined;
    TO_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    ENABLE_SYMBOL(): TerminalNode | undefined;
    DISABLE_SYMBOL(): TerminalNode | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    DO_SYMBOL(): TerminalNode | undefined;
    compoundStatement(): CompoundStatementContext | undefined;
    NOT_SYMBOL(): TerminalNode | undefined;
    SLAVE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterLogfileGroupContext extends ParserRuleContext {
    LOGFILE_SYMBOL(): TerminalNode;
    GROUP_SYMBOL(): TerminalNode;
    logfileGroupRef(): LogfileGroupRefContext;
    ADD_SYMBOL(): TerminalNode;
    UNDOFILE_SYMBOL(): TerminalNode;
    textLiteral(): TextLiteralContext;
    alterLogfileGroupOptions(): AlterLogfileGroupOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterLogfileGroupOptionsContext extends ParserRuleContext {
    alterLogfileGroupOption(): AlterLogfileGroupOptionContext[];
    alterLogfileGroupOption(i: number): AlterLogfileGroupOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterLogfileGroupOptionContext extends ParserRuleContext {
    tsOptionInitialSize(): TsOptionInitialSizeContext | undefined;
    tsOptionEngine(): TsOptionEngineContext | undefined;
    tsOptionWait(): TsOptionWaitContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterServerContext extends ParserRuleContext {
    SERVER_SYMBOL(): TerminalNode;
    serverRef(): ServerRefContext;
    serverOptions(): ServerOptionsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterTableContext extends ParserRuleContext {
    TABLE_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    onlineOption(): OnlineOptionContext | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    alterTableActions(): AlterTableActionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterTableActionsContext extends ParserRuleContext {
    alterCommandList(): AlterCommandListContext | undefined;
    partitionClause(): PartitionClauseContext | undefined;
    removePartitioning(): RemovePartitioningContext | undefined;
    standaloneAlterCommands(): StandaloneAlterCommandsContext | undefined;
    alterCommandsModifierList(): AlterCommandsModifierListContext | undefined;
    COMMA_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterCommandListContext extends ParserRuleContext {
    alterCommandsModifierList(): AlterCommandsModifierListContext | undefined;
    alterList(): AlterListContext | undefined;
    COMMA_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterCommandsModifierListContext extends ParserRuleContext {
    alterCommandsModifier(): AlterCommandsModifierContext[];
    alterCommandsModifier(i: number): AlterCommandsModifierContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class StandaloneAlterCommandsContext extends ParserRuleContext {
    DISCARD_SYMBOL(): TerminalNode | undefined;
    TABLESPACE_SYMBOL(): TerminalNode | undefined;
    IMPORT_SYMBOL(): TerminalNode | undefined;
    alterPartition(): AlterPartitionContext | undefined;
    SECONDARY_LOAD_SYMBOL(): TerminalNode | undefined;
    SECONDARY_UNLOAD_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterPartitionContext extends ParserRuleContext {
    ADD_SYMBOL(): TerminalNode | undefined;
    PARTITION_SYMBOL(): TerminalNode | undefined;
    partitionDefinitions(): PartitionDefinitionsContext | undefined;
    PARTITIONS_SYMBOL(): TerminalNode | undefined;
    real_ulong_number(): Real_ulong_numberContext | undefined;
    noWriteToBinLog(): NoWriteToBinLogContext[];
    noWriteToBinLog(i: number): NoWriteToBinLogContext;
    DROP_SYMBOL(): TerminalNode | undefined;
    identifierList(): IdentifierListContext | undefined;
    REBUILD_SYMBOL(): TerminalNode | undefined;
    allOrPartitionNameList(): AllOrPartitionNameListContext | undefined;
    OPTIMIZE_SYMBOL(): TerminalNode | undefined;
    ANALYZE_SYMBOL(): TerminalNode | undefined;
    CHECK_SYMBOL(): TerminalNode | undefined;
    checkOption(): CheckOptionContext[];
    checkOption(i: number): CheckOptionContext;
    REPAIR_SYMBOL(): TerminalNode | undefined;
    repairType(): RepairTypeContext[];
    repairType(i: number): RepairTypeContext;
    COALESCE_SYMBOL(): TerminalNode | undefined;
    TRUNCATE_SYMBOL(): TerminalNode | undefined;
    reorgPartitionRule(): ReorgPartitionRuleContext | undefined;
    REORGANIZE_SYMBOL(): TerminalNode | undefined;
    INTO_SYMBOL(): TerminalNode | undefined;
    EXCHANGE_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    WITH_SYMBOL(): TerminalNode | undefined;
    TABLE_SYMBOL(): TerminalNode | undefined;
    tableRef(): TableRefContext | undefined;
    withValidation(): WithValidationContext | undefined;
    DISCARD_SYMBOL(): TerminalNode | undefined;
    TABLESPACE_SYMBOL(): TerminalNode | undefined;
    IMPORT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterListContext extends ParserRuleContext {
    alterListItem(): AlterListItemContext[];
    alterListItem(i: number): AlterListItemContext;
    createTableOptionsSpaceSeparated(): CreateTableOptionsSpaceSeparatedContext[];
    createTableOptionsSpaceSeparated(i: number): CreateTableOptionsSpaceSeparatedContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    alterCommandsModifier(): AlterCommandsModifierContext[];
    alterCommandsModifier(i: number): AlterCommandsModifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterCommandsModifierContext extends ParserRuleContext {
    alterAlgorithmOption(): AlterAlgorithmOptionContext | undefined;
    alterLockOption(): AlterLockOptionContext | undefined;
    withValidation(): WithValidationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterListItemContext extends ParserRuleContext {
    ADD_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    fieldDefinition(): FieldDefinitionContext | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    tableElementList(): TableElementListContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    COLUMN_SYMBOL(): TerminalNode | undefined;
    checkOrReferences(): CheckOrReferencesContext | undefined;
    place(): PlaceContext | undefined;
    tableConstraintDef(): TableConstraintDefContext | undefined;
    CHANGE_SYMBOL(): TerminalNode | undefined;
    columnInternalRef(): ColumnInternalRefContext | undefined;
    MODIFY_SYMBOL(): TerminalNode | undefined;
    DROP_SYMBOL(): TerminalNode | undefined;
    FOREIGN_SYMBOL(): TerminalNode | undefined;
    KEY_SYMBOL(): TerminalNode | undefined;
    PRIMARY_SYMBOL(): TerminalNode | undefined;
    keyOrIndex(): KeyOrIndexContext | undefined;
    indexRef(): IndexRefContext | undefined;
    restrict(): RestrictContext | undefined;
    DISABLE_SYMBOL(): TerminalNode | undefined;
    KEYS_SYMBOL(): TerminalNode | undefined;
    ENABLE_SYMBOL(): TerminalNode | undefined;
    ALTER_SYMBOL(): TerminalNode | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    exprWithParentheses(): ExprWithParenthesesContext | undefined;
    signedLiteral(): SignedLiteralContext | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    visibility(): VisibilityContext | undefined;
    CHECK_SYMBOL(): TerminalNode | undefined;
    constraintEnforcement(): ConstraintEnforcementContext | undefined;
    RENAME_SYMBOL(): TerminalNode | undefined;
    TO_SYMBOL(): TerminalNode | undefined;
    tableName(): TableNameContext | undefined;
    AS_SYMBOL(): TerminalNode | undefined;
    indexName(): IndexNameContext | undefined;
    CONVERT_SYMBOL(): TerminalNode | undefined;
    charset(): CharsetContext | undefined;
    charsetName(): CharsetNameContext | undefined;
    collate(): CollateContext | undefined;
    FORCE_SYMBOL(): TerminalNode | undefined;
    ORDER_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode | undefined;
    alterOrderList(): AlterOrderListContext | undefined;
    UPGRADE_SYMBOL(): TerminalNode | undefined;
    PARTITIONING_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PlaceContext extends ParserRuleContext {
    AFTER_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    FIRST_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RestrictContext extends ParserRuleContext {
    RESTRICT_SYMBOL(): TerminalNode | undefined;
    CASCADE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterOrderListContext extends ParserRuleContext {
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext;
    direction(): DirectionContext[];
    direction(i: number): DirectionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterAlgorithmOptionContext extends ParserRuleContext {
    ALGORITHM_SYMBOL(): TerminalNode;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterLockOptionContext extends ParserRuleContext {
    LOCK_SYMBOL(): TerminalNode;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexLockAndAlgorithmContext extends ParserRuleContext {
    alterAlgorithmOption(): AlterAlgorithmOptionContext | undefined;
    alterLockOption(): AlterLockOptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WithValidationContext extends ParserRuleContext {
    VALIDATION_SYMBOL(): TerminalNode;
    WITH_SYMBOL(): TerminalNode | undefined;
    WITHOUT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RemovePartitioningContext extends ParserRuleContext {
    REMOVE_SYMBOL(): TerminalNode;
    PARTITIONING_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AllOrPartitionNameListContext extends ParserRuleContext {
    ALL_SYMBOL(): TerminalNode | undefined;
    identifierList(): IdentifierListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ReorgPartitionRuleContext extends ParserRuleContext {
    REORGANIZE_SYMBOL(): TerminalNode;
    PARTITION_SYMBOL(): TerminalNode;
    noWriteToBinLog(): NoWriteToBinLogContext | undefined;
    identifierList(): IdentifierListContext | undefined;
    INTO_SYMBOL(): TerminalNode | undefined;
    partitionDefinitions(): PartitionDefinitionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterTablespaceContext extends ParserRuleContext {
    TABLESPACE_SYMBOL(): TerminalNode;
    tablespaceRef(): TablespaceRefContext;
    DATAFILE_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    RENAME_SYMBOL(): TerminalNode | undefined;
    TO_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    alterTablespaceOptions(): AlterTablespaceOptionsContext | undefined;
    ADD_SYMBOL(): TerminalNode | undefined;
    DROP_SYMBOL(): TerminalNode | undefined;
    CHANGE_SYMBOL(): TerminalNode | undefined;
    NOT_SYMBOL(): TerminalNode | undefined;
    ACCESSIBLE_SYMBOL(): TerminalNode | undefined;
    READ_ONLY_SYMBOL(): TerminalNode | undefined;
    READ_WRITE_SYMBOL(): TerminalNode | undefined;
    changeTablespaceOption(): ChangeTablespaceOptionContext[];
    changeTablespaceOption(i: number): ChangeTablespaceOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterUndoTablespaceContext extends ParserRuleContext {
    UNDO_SYMBOL(): TerminalNode;
    TABLESPACE_SYMBOL(): TerminalNode;
    tablespaceRef(): TablespaceRefContext;
    SET_SYMBOL(): TerminalNode;
    ACTIVE_SYMBOL(): TerminalNode | undefined;
    INACTIVE_SYMBOL(): TerminalNode | undefined;
    undoTableSpaceOptions(): UndoTableSpaceOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UndoTableSpaceOptionsContext extends ParserRuleContext {
    undoTableSpaceOption(): UndoTableSpaceOptionContext[];
    undoTableSpaceOption(i: number): UndoTableSpaceOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UndoTableSpaceOptionContext extends ParserRuleContext {
    tsOptionEngine(): TsOptionEngineContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterTablespaceOptionsContext extends ParserRuleContext {
    alterTablespaceOption(): AlterTablespaceOptionContext[];
    alterTablespaceOption(i: number): AlterTablespaceOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterTablespaceOptionContext extends ParserRuleContext {
    INITIAL_SIZE_SYMBOL(): TerminalNode | undefined;
    sizeNumber(): SizeNumberContext | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    tsOptionAutoextendSize(): TsOptionAutoextendSizeContext | undefined;
    tsOptionMaxSize(): TsOptionMaxSizeContext | undefined;
    tsOptionEngine(): TsOptionEngineContext | undefined;
    tsOptionWait(): TsOptionWaitContext | undefined;
    tsOptionEncryption(): TsOptionEncryptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ChangeTablespaceOptionContext extends ParserRuleContext {
    INITIAL_SIZE_SYMBOL(): TerminalNode | undefined;
    sizeNumber(): SizeNumberContext | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    tsOptionAutoextendSize(): TsOptionAutoextendSizeContext | undefined;
    tsOptionMaxSize(): TsOptionMaxSizeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterViewContext extends ParserRuleContext {
    VIEW_SYMBOL(): TerminalNode;
    viewRef(): ViewRefContext;
    viewTail(): ViewTailContext;
    viewAlgorithm(): ViewAlgorithmContext | undefined;
    definerClause(): DefinerClauseContext | undefined;
    viewSuid(): ViewSuidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewTailContext extends ParserRuleContext {
    AS_SYMBOL(): TerminalNode;
    viewSelect(): ViewSelectContext;
    columnInternalRefList(): ColumnInternalRefListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewSelectContext extends ParserRuleContext {
    queryExpressionOrParens(): QueryExpressionOrParensContext;
    viewCheckOption(): ViewCheckOptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewCheckOptionContext extends ParserRuleContext {
    WITH_SYMBOL(): TerminalNode;
    CHECK_SYMBOL(): TerminalNode;
    OPTION_SYMBOL(): TerminalNode;
    CASCADED_SYMBOL(): TerminalNode | undefined;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateStatementContext extends ParserRuleContext {
    CREATE_SYMBOL(): TerminalNode;
    createDatabase(): CreateDatabaseContext | undefined;
    createTable(): CreateTableContext | undefined;
    createFunction(): CreateFunctionContext | undefined;
    createProcedure(): CreateProcedureContext | undefined;
    createUdf(): CreateUdfContext | undefined;
    createLogfileGroup(): CreateLogfileGroupContext | undefined;
    createView(): CreateViewContext | undefined;
    createTrigger(): CreateTriggerContext | undefined;
    createIndex(): CreateIndexContext | undefined;
    createServer(): CreateServerContext | undefined;
    createTablespace(): CreateTablespaceContext | undefined;
    createEvent(): CreateEventContext | undefined;
    createRole(): CreateRoleContext | undefined;
    createSpatialReference(): CreateSpatialReferenceContext | undefined;
    createUndoTablespace(): CreateUndoTablespaceContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateDatabaseContext extends ParserRuleContext {
    DATABASE_SYMBOL(): TerminalNode;
    schemaName(): SchemaNameContext;
    ifNotExists(): IfNotExistsContext | undefined;
    createDatabaseOption(): CreateDatabaseOptionContext[];
    createDatabaseOption(i: number): CreateDatabaseOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateDatabaseOptionContext extends ParserRuleContext {
    defaultCharset(): DefaultCharsetContext | undefined;
    defaultCollation(): DefaultCollationContext | undefined;
    defaultEncryption(): DefaultEncryptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateTableContext extends ParserRuleContext {
    TABLE_SYMBOL(): TerminalNode;
    tableName(): TableNameContext;
    LIKE_SYMBOL(): TerminalNode | undefined;
    tableRef(): TableRefContext | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    TEMPORARY_SYMBOL(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    tableElementList(): TableElementListContext | undefined;
    createTableOptions(): CreateTableOptionsContext | undefined;
    partitionClause(): PartitionClauseContext | undefined;
    duplicateAsQueryExpression(): DuplicateAsQueryExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableElementListContext extends ParserRuleContext {
    tableElement(): TableElementContext[];
    tableElement(i: number): TableElementContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableElementContext extends ParserRuleContext {
    columnDefinition(): ColumnDefinitionContext | undefined;
    tableConstraintDef(): TableConstraintDefContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DuplicateAsQueryExpressionContext extends ParserRuleContext {
    queryExpressionOrParens(): QueryExpressionOrParensContext;
    AS_SYMBOL(): TerminalNode | undefined;
    REPLACE_SYMBOL(): TerminalNode | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class QueryExpressionOrParensContext extends ParserRuleContext {
    queryExpression(): QueryExpressionContext | undefined;
    queryExpressionParens(): QueryExpressionParensContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateRoutineContext extends ParserRuleContext {
    CREATE_SYMBOL(): TerminalNode;
    EOF(): TerminalNode;
    createProcedure(): CreateProcedureContext | undefined;
    createFunction(): CreateFunctionContext | undefined;
    createUdf(): CreateUdfContext | undefined;
    SEMICOLON_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateProcedureContext extends ParserRuleContext {
    PROCEDURE_SYMBOL(): TerminalNode;
    procedureName(): ProcedureNameContext;
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    compoundStatement(): CompoundStatementContext;
    definerClause(): DefinerClauseContext | undefined;
    procedureParameter(): ProcedureParameterContext[];
    procedureParameter(i: number): ProcedureParameterContext;
    routineCreateOption(): RoutineCreateOptionContext[];
    routineCreateOption(i: number): RoutineCreateOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateFunctionContext extends ParserRuleContext {
    FUNCTION_SYMBOL(): TerminalNode;
    functionName(): FunctionNameContext;
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    RETURNS_SYMBOL(): TerminalNode;
    typeWithOptCollate(): TypeWithOptCollateContext;
    compoundStatement(): CompoundStatementContext;
    definerClause(): DefinerClauseContext | undefined;
    functionParameter(): FunctionParameterContext[];
    functionParameter(i: number): FunctionParameterContext;
    routineCreateOption(): RoutineCreateOptionContext[];
    routineCreateOption(i: number): RoutineCreateOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateUdfContext extends ParserRuleContext {
    _type: Token;
    FUNCTION_SYMBOL(): TerminalNode;
    udfName(): UdfNameContext;
    RETURNS_SYMBOL(): TerminalNode;
    SONAME_SYMBOL(): TerminalNode;
    textLiteral(): TextLiteralContext;
    STRING_SYMBOL(): TerminalNode | undefined;
    INT_SYMBOL(): TerminalNode | undefined;
    REAL_SYMBOL(): TerminalNode | undefined;
    DECIMAL_SYMBOL(): TerminalNode | undefined;
    AGGREGATE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoutineCreateOptionContext extends ParserRuleContext {
    routineOption(): RoutineOptionContext | undefined;
    DETERMINISTIC_SYMBOL(): TerminalNode | undefined;
    NOT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoutineAlterOptionsContext extends ParserRuleContext {
    routineCreateOption(): RoutineCreateOptionContext[];
    routineCreateOption(i: number): RoutineCreateOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoutineOptionContext extends ParserRuleContext {
    _option: Token;
    _security: Token;
    textLiteral(): TextLiteralContext | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    SQL_SYMBOL(): TerminalNode | undefined;
    LANGUAGE_SYMBOL(): TerminalNode | undefined;
    NO_SYMBOL(): TerminalNode | undefined;
    CONTAINS_SYMBOL(): TerminalNode | undefined;
    DATA_SYMBOL(): TerminalNode | undefined;
    READS_SYMBOL(): TerminalNode | undefined;
    MODIFIES_SYMBOL(): TerminalNode | undefined;
    SECURITY_SYMBOL(): TerminalNode | undefined;
    DEFINER_SYMBOL(): TerminalNode | undefined;
    INVOKER_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateIndexContext extends ParserRuleContext {
    _type: Token;
    createIndexTarget(): CreateIndexTargetContext | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    indexName(): IndexNameContext | undefined;
    onlineOption(): OnlineOptionContext | undefined;
    FULLTEXT_SYMBOL(): TerminalNode | undefined;
    SPATIAL_SYMBOL(): TerminalNode | undefined;
    indexLockAndAlgorithm(): IndexLockAndAlgorithmContext | undefined;
    UNIQUE_SYMBOL(): TerminalNode | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    fulltextIndexOption(): FulltextIndexOptionContext[];
    fulltextIndexOption(i: number): FulltextIndexOptionContext;
    spatialIndexOption(): SpatialIndexOptionContext[];
    spatialIndexOption(i: number): SpatialIndexOptionContext;
    indexTypeClause(): IndexTypeClauseContext | undefined;
    indexNameAndType(): IndexNameAndTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexNameAndTypeContext extends ParserRuleContext {
    indexName(): IndexNameContext;
    USING_SYMBOL(): TerminalNode | undefined;
    indexType(): IndexTypeContext | undefined;
    TYPE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateIndexTargetContext extends ParserRuleContext {
    ON_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    keyListVariants(): KeyListVariantsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateLogfileGroupContext extends ParserRuleContext {
    LOGFILE_SYMBOL(): TerminalNode;
    GROUP_SYMBOL(): TerminalNode;
    logfileGroupName(): LogfileGroupNameContext;
    ADD_SYMBOL(): TerminalNode;
    textLiteral(): TextLiteralContext;
    UNDOFILE_SYMBOL(): TerminalNode | undefined;
    REDOFILE_SYMBOL(): TerminalNode | undefined;
    logfileGroupOptions(): LogfileGroupOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LogfileGroupOptionsContext extends ParserRuleContext {
    logfileGroupOption(): LogfileGroupOptionContext[];
    logfileGroupOption(i: number): LogfileGroupOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LogfileGroupOptionContext extends ParserRuleContext {
    tsOptionInitialSize(): TsOptionInitialSizeContext | undefined;
    tsOptionUndoRedoBufferSize(): TsOptionUndoRedoBufferSizeContext | undefined;
    tsOptionNodegroup(): TsOptionNodegroupContext | undefined;
    tsOptionEngine(): TsOptionEngineContext | undefined;
    tsOptionWait(): TsOptionWaitContext | undefined;
    tsOptionComment(): TsOptionCommentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateServerContext extends ParserRuleContext {
    SERVER_SYMBOL(): TerminalNode;
    serverName(): ServerNameContext;
    FOREIGN_SYMBOL(): TerminalNode;
    DATA_SYMBOL(): TerminalNode;
    WRAPPER_SYMBOL(): TerminalNode;
    textOrIdentifier(): TextOrIdentifierContext;
    serverOptions(): ServerOptionsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ServerOptionsContext extends ParserRuleContext {
    OPTIONS_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    serverOption(): ServerOptionContext[];
    serverOption(i: number): ServerOptionContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ServerOptionContext extends ParserRuleContext {
    _option: Token;
    textLiteral(): TextLiteralContext | undefined;
    HOST_SYMBOL(): TerminalNode | undefined;
    DATABASE_SYMBOL(): TerminalNode | undefined;
    USER_SYMBOL(): TerminalNode | undefined;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    SOCKET_SYMBOL(): TerminalNode | undefined;
    OWNER_SYMBOL(): TerminalNode | undefined;
    ulong_number(): Ulong_numberContext | undefined;
    PORT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateTablespaceContext extends ParserRuleContext {
    TABLESPACE_SYMBOL(): TerminalNode;
    tablespaceName(): TablespaceNameContext;
    tsDataFileName(): TsDataFileNameContext;
    USE_SYMBOL(): TerminalNode | undefined;
    LOGFILE_SYMBOL(): TerminalNode | undefined;
    GROUP_SYMBOL(): TerminalNode | undefined;
    logfileGroupRef(): LogfileGroupRefContext | undefined;
    tablespaceOptions(): TablespaceOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateUndoTablespaceContext extends ParserRuleContext {
    UNDO_SYMBOL(): TerminalNode;
    TABLESPACE_SYMBOL(): TerminalNode;
    tablespaceName(): TablespaceNameContext;
    ADD_SYMBOL(): TerminalNode;
    tsDataFile(): TsDataFileContext;
    undoTableSpaceOptions(): UndoTableSpaceOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsDataFileNameContext extends ParserRuleContext {
    ADD_SYMBOL(): TerminalNode | undefined;
    tsDataFile(): TsDataFileContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsDataFileContext extends ParserRuleContext {
    DATAFILE_SYMBOL(): TerminalNode;
    textLiteral(): TextLiteralContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TablespaceOptionsContext extends ParserRuleContext {
    tablespaceOption(): TablespaceOptionContext[];
    tablespaceOption(i: number): TablespaceOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TablespaceOptionContext extends ParserRuleContext {
    tsOptionInitialSize(): TsOptionInitialSizeContext | undefined;
    tsOptionAutoextendSize(): TsOptionAutoextendSizeContext | undefined;
    tsOptionMaxSize(): TsOptionMaxSizeContext | undefined;
    tsOptionExtentSize(): TsOptionExtentSizeContext | undefined;
    tsOptionNodegroup(): TsOptionNodegroupContext | undefined;
    tsOptionEngine(): TsOptionEngineContext | undefined;
    tsOptionWait(): TsOptionWaitContext | undefined;
    tsOptionComment(): TsOptionCommentContext | undefined;
    tsOptionFileblockSize(): TsOptionFileblockSizeContext | undefined;
    tsOptionEncryption(): TsOptionEncryptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionInitialSizeContext extends ParserRuleContext {
    INITIAL_SIZE_SYMBOL(): TerminalNode;
    sizeNumber(): SizeNumberContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionUndoRedoBufferSizeContext extends ParserRuleContext {
    sizeNumber(): SizeNumberContext;
    UNDO_BUFFER_SIZE_SYMBOL(): TerminalNode | undefined;
    REDO_BUFFER_SIZE_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionAutoextendSizeContext extends ParserRuleContext {
    AUTOEXTEND_SIZE_SYMBOL(): TerminalNode;
    sizeNumber(): SizeNumberContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionMaxSizeContext extends ParserRuleContext {
    MAX_SIZE_SYMBOL(): TerminalNode;
    sizeNumber(): SizeNumberContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionExtentSizeContext extends ParserRuleContext {
    EXTENT_SIZE_SYMBOL(): TerminalNode;
    sizeNumber(): SizeNumberContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionNodegroupContext extends ParserRuleContext {
    NODEGROUP_SYMBOL(): TerminalNode;
    real_ulong_number(): Real_ulong_numberContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionEngineContext extends ParserRuleContext {
    ENGINE_SYMBOL(): TerminalNode;
    engineRef(): EngineRefContext;
    STORAGE_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionWaitContext extends ParserRuleContext {
    WAIT_SYMBOL(): TerminalNode | undefined;
    NO_WAIT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionCommentContext extends ParserRuleContext {
    COMMENT_SYMBOL(): TerminalNode;
    textLiteral(): TextLiteralContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionFileblockSizeContext extends ParserRuleContext {
    FILE_BLOCK_SIZE_SYMBOL(): TerminalNode;
    sizeNumber(): SizeNumberContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TsOptionEncryptionContext extends ParserRuleContext {
    ENCRYPTION_SYMBOL(): TerminalNode;
    textStringLiteral(): TextStringLiteralContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateViewContext extends ParserRuleContext {
    VIEW_SYMBOL(): TerminalNode;
    viewName(): ViewNameContext;
    viewTail(): ViewTailContext;
    viewReplaceOrAlgorithm(): ViewReplaceOrAlgorithmContext | undefined;
    definerClause(): DefinerClauseContext | undefined;
    viewSuid(): ViewSuidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewReplaceOrAlgorithmContext extends ParserRuleContext {
    OR_SYMBOL(): TerminalNode | undefined;
    REPLACE_SYMBOL(): TerminalNode | undefined;
    viewAlgorithm(): ViewAlgorithmContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewAlgorithmContext extends ParserRuleContext {
    _algorithm: Token;
    ALGORITHM_SYMBOL(): TerminalNode;
    EQUAL_OPERATOR(): TerminalNode;
    UNDEFINED_SYMBOL(): TerminalNode | undefined;
    MERGE_SYMBOL(): TerminalNode | undefined;
    TEMPTABLE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewSuidContext extends ParserRuleContext {
    SQL_SYMBOL(): TerminalNode;
    SECURITY_SYMBOL(): TerminalNode;
    DEFINER_SYMBOL(): TerminalNode | undefined;
    INVOKER_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateTriggerContext extends ParserRuleContext {
    _timing: Token;
    _event: Token;
    TRIGGER_SYMBOL(): TerminalNode;
    triggerName(): TriggerNameContext;
    ON_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    FOR_SYMBOL(): TerminalNode;
    EACH_SYMBOL(): TerminalNode;
    ROW_SYMBOL(): TerminalNode;
    compoundStatement(): CompoundStatementContext;
    BEFORE_SYMBOL(): TerminalNode | undefined;
    AFTER_SYMBOL(): TerminalNode | undefined;
    INSERT_SYMBOL(): TerminalNode | undefined;
    UPDATE_SYMBOL(): TerminalNode | undefined;
    DELETE_SYMBOL(): TerminalNode | undefined;
    definerClause(): DefinerClauseContext | undefined;
    triggerFollowsPrecedesClause(): TriggerFollowsPrecedesClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TriggerFollowsPrecedesClauseContext extends ParserRuleContext {
    _ordering: Token;
    textOrIdentifier(): TextOrIdentifierContext;
    FOLLOWS_SYMBOL(): TerminalNode | undefined;
    PRECEDES_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateEventContext extends ParserRuleContext {
    EVENT_SYMBOL(): TerminalNode;
    eventName(): EventNameContext;
    ON_SYMBOL(): TerminalNode[];
    ON_SYMBOL(i: number): TerminalNode;
    SCHEDULE_SYMBOL(): TerminalNode;
    schedule(): ScheduleContext;
    DO_SYMBOL(): TerminalNode;
    compoundStatement(): CompoundStatementContext;
    definerClause(): DefinerClauseContext | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    COMPLETION_SYMBOL(): TerminalNode | undefined;
    PRESERVE_SYMBOL(): TerminalNode | undefined;
    ENABLE_SYMBOL(): TerminalNode | undefined;
    DISABLE_SYMBOL(): TerminalNode | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    NOT_SYMBOL(): TerminalNode | undefined;
    SLAVE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateRoleContext extends ParserRuleContext {
    ROLE_SYMBOL(): TerminalNode;
    roleList(): RoleListContext;
    ifNotExists(): IfNotExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateSpatialReferenceContext extends ParserRuleContext {
    OR_SYMBOL(): TerminalNode | undefined;
    REPLACE_SYMBOL(): TerminalNode | undefined;
    SPATIAL_SYMBOL(): TerminalNode;
    REFERENCE_SYMBOL(): TerminalNode;
    SYSTEM_SYMBOL(): TerminalNode;
    real_ulonglong_number(): Real_ulonglong_numberContext;
    srsAttribute(): SrsAttributeContext[];
    srsAttribute(i: number): SrsAttributeContext;
    ifNotExists(): IfNotExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SrsAttributeContext extends ParserRuleContext {
    NAME_SYMBOL(): TerminalNode | undefined;
    TEXT_SYMBOL(): TerminalNode | undefined;
    textStringNoLinebreak(): TextStringNoLinebreakContext;
    DEFINITION_SYMBOL(): TerminalNode | undefined;
    ORGANIZATION_SYMBOL(): TerminalNode | undefined;
    IDENTIFIED_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode | undefined;
    real_ulonglong_number(): Real_ulonglong_numberContext | undefined;
    DESCRIPTION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropStatementContext extends ParserRuleContext {
    DROP_SYMBOL(): TerminalNode;
    dropDatabase(): DropDatabaseContext | undefined;
    dropEvent(): DropEventContext | undefined;
    dropFunction(): DropFunctionContext | undefined;
    dropProcedure(): DropProcedureContext | undefined;
    dropIndex(): DropIndexContext | undefined;
    dropLogfileGroup(): DropLogfileGroupContext | undefined;
    dropServer(): DropServerContext | undefined;
    dropTable(): DropTableContext | undefined;
    dropTableSpace(): DropTableSpaceContext | undefined;
    dropTrigger(): DropTriggerContext | undefined;
    dropView(): DropViewContext | undefined;
    dropRole(): DropRoleContext | undefined;
    dropSpatialReference(): DropSpatialReferenceContext | undefined;
    dropUndoTablespace(): DropUndoTablespaceContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropDatabaseContext extends ParserRuleContext {
    DATABASE_SYMBOL(): TerminalNode;
    schemaRef(): SchemaRefContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropEventContext extends ParserRuleContext {
    EVENT_SYMBOL(): TerminalNode;
    eventRef(): EventRefContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropFunctionContext extends ParserRuleContext {
    FUNCTION_SYMBOL(): TerminalNode;
    functionRef(): FunctionRefContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropProcedureContext extends ParserRuleContext {
    PROCEDURE_SYMBOL(): TerminalNode;
    procedureRef(): ProcedureRefContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropIndexContext extends ParserRuleContext {
    _type: Token;
    indexRef(): IndexRefContext;
    ON_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    INDEX_SYMBOL(): TerminalNode;
    onlineOption(): OnlineOptionContext | undefined;
    indexLockAndAlgorithm(): IndexLockAndAlgorithmContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropLogfileGroupContext extends ParserRuleContext {
    LOGFILE_SYMBOL(): TerminalNode;
    GROUP_SYMBOL(): TerminalNode;
    logfileGroupRef(): LogfileGroupRefContext;
    dropLogfileGroupOption(): DropLogfileGroupOptionContext[];
    dropLogfileGroupOption(i: number): DropLogfileGroupOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropLogfileGroupOptionContext extends ParserRuleContext {
    tsOptionWait(): TsOptionWaitContext | undefined;
    tsOptionEngine(): TsOptionEngineContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropServerContext extends ParserRuleContext {
    SERVER_SYMBOL(): TerminalNode;
    serverRef(): ServerRefContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropTableContext extends ParserRuleContext {
    _type: Token;
    tableRefList(): TableRefListContext;
    TABLE_SYMBOL(): TerminalNode | undefined;
    TABLES_SYMBOL(): TerminalNode | undefined;
    TEMPORARY_SYMBOL(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    RESTRICT_SYMBOL(): TerminalNode | undefined;
    CASCADE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropTableSpaceContext extends ParserRuleContext {
    TABLESPACE_SYMBOL(): TerminalNode;
    tablespaceRef(): TablespaceRefContext;
    dropLogfileGroupOption(): DropLogfileGroupOptionContext[];
    dropLogfileGroupOption(i: number): DropLogfileGroupOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropTriggerContext extends ParserRuleContext {
    TRIGGER_SYMBOL(): TerminalNode;
    triggerRef(): TriggerRefContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropViewContext extends ParserRuleContext {
    VIEW_SYMBOL(): TerminalNode;
    viewRefList(): ViewRefListContext;
    ifExists(): IfExistsContext | undefined;
    RESTRICT_SYMBOL(): TerminalNode | undefined;
    CASCADE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropRoleContext extends ParserRuleContext {
    ROLE_SYMBOL(): TerminalNode;
    roleList(): RoleListContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropSpatialReferenceContext extends ParserRuleContext {
    SPATIAL_SYMBOL(): TerminalNode;
    REFERENCE_SYMBOL(): TerminalNode;
    SYSTEM_SYMBOL(): TerminalNode;
    real_ulonglong_number(): Real_ulonglong_numberContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropUndoTablespaceContext extends ParserRuleContext {
    UNDO_SYMBOL(): TerminalNode;
    TABLESPACE_SYMBOL(): TerminalNode;
    tablespaceRef(): TablespaceRefContext;
    undoTableSpaceOptions(): UndoTableSpaceOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RenameTableStatementContext extends ParserRuleContext {
    RENAME_SYMBOL(): TerminalNode;
    renamePair(): RenamePairContext[];
    renamePair(i: number): RenamePairContext;
    TABLE_SYMBOL(): TerminalNode | undefined;
    TABLES_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RenamePairContext extends ParserRuleContext {
    tableRef(): TableRefContext;
    TO_SYMBOL(): TerminalNode;
    tableName(): TableNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TruncateTableStatementContext extends ParserRuleContext {
    TRUNCATE_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    TABLE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ImportStatementContext extends ParserRuleContext {
    IMPORT_SYMBOL(): TerminalNode;
    TABLE_SYMBOL(): TerminalNode;
    FROM_SYMBOL(): TerminalNode;
    textStringLiteralList(): TextStringLiteralListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CallStatementContext extends ParserRuleContext {
    CALL_SYMBOL(): TerminalNode;
    procedureRef(): ProcedureRefContext;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    exprList(): ExprListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DeleteStatementContext extends ParserRuleContext {
    DELETE_SYMBOL(): TerminalNode;
    FROM_SYMBOL(): TerminalNode | undefined;
    tableAliasRefList(): TableAliasRefListContext | undefined;
    tableReferenceList(): TableReferenceListContext | undefined;
    withClause(): WithClauseContext | undefined;
    deleteStatementOption(): DeleteStatementOptionContext[];
    deleteStatementOption(i: number): DeleteStatementOptionContext;
    USING_SYMBOL(): TerminalNode | undefined;
    tableRef(): TableRefContext | undefined;
    whereClause(): WhereClauseContext | undefined;
    tableAlias(): TableAliasContext | undefined;
    partitionDelete(): PartitionDeleteContext | undefined;
    orderClause(): OrderClauseContext | undefined;
    simpleLimitClause(): SimpleLimitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionDeleteContext extends ParserRuleContext {
    PARTITION_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    identifierList(): IdentifierListContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DeleteStatementOptionContext extends ParserRuleContext {
    QUICK_SYMBOL(): TerminalNode | undefined;
    LOW_PRIORITY_SYMBOL(): TerminalNode | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DoStatementContext extends ParserRuleContext {
    DO_SYMBOL(): TerminalNode;
    exprList(): ExprListContext | undefined;
    selectItemList(): SelectItemListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class HandlerStatementContext extends ParserRuleContext {
    HANDLER_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext | undefined;
    OPEN_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    CLOSE_SYMBOL(): TerminalNode | undefined;
    READ_SYMBOL(): TerminalNode | undefined;
    handlerReadOrScan(): HandlerReadOrScanContext | undefined;
    tableAlias(): TableAliasContext | undefined;
    whereClause(): WhereClauseContext | undefined;
    limitClause(): LimitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class HandlerReadOrScanContext extends ParserRuleContext {
    FIRST_SYMBOL(): TerminalNode | undefined;
    NEXT_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    values(): ValuesContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    PREV_SYMBOL(): TerminalNode | undefined;
    LAST_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    LESS_THAN_OPERATOR(): TerminalNode | undefined;
    GREATER_THAN_OPERATOR(): TerminalNode | undefined;
    LESS_OR_EQUAL_OPERATOR(): TerminalNode | undefined;
    GREATER_OR_EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InsertStatementContext extends ParserRuleContext {
    INSERT_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    insertFromConstructor(): InsertFromConstructorContext | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    updateList(): UpdateListContext | undefined;
    insertQueryExpression(): InsertQueryExpressionContext | undefined;
    insertLockOption(): InsertLockOptionContext | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    INTO_SYMBOL(): TerminalNode | undefined;
    usePartition(): UsePartitionContext | undefined;
    insertUpdateList(): InsertUpdateListContext | undefined;
    valuesReference(): ValuesReferenceContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InsertLockOptionContext extends ParserRuleContext {
    LOW_PRIORITY_SYMBOL(): TerminalNode | undefined;
    DELAYED_SYMBOL(): TerminalNode | undefined;
    HIGH_PRIORITY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InsertFromConstructorContext extends ParserRuleContext {
    insertValues(): InsertValuesContext;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    fields(): FieldsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FieldsContext extends ParserRuleContext {
    insertIdentifier(): InsertIdentifierContext[];
    insertIdentifier(i: number): InsertIdentifierContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InsertValuesContext extends ParserRuleContext {
    valueList(): ValueListContext;
    VALUES_SYMBOL(): TerminalNode | undefined;
    VALUE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InsertQueryExpressionContext extends ParserRuleContext {
    queryExpressionOrParens(): QueryExpressionOrParensContext;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    fields(): FieldsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ValueListContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode[];
    OPEN_PAR_SYMBOL(i: number): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode[];
    CLOSE_PAR_SYMBOL(i: number): TerminalNode;
    values(): ValuesContext[];
    values(i: number): ValuesContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ValuesContext extends ParserRuleContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    DEFAULT_SYMBOL(): TerminalNode[];
    DEFAULT_SYMBOL(i: number): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ValuesReferenceContext extends ParserRuleContext {
    AS_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    columnInternalRefList(): ColumnInternalRefListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InsertUpdateListContext extends ParserRuleContext {
    ON_SYMBOL(): TerminalNode;
    DUPLICATE_SYMBOL(): TerminalNode;
    KEY_SYMBOL(): TerminalNode;
    UPDATE_SYMBOL(): TerminalNode;
    updateList(): UpdateListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LoadStatementContext extends ParserRuleContext {
    LOAD_SYMBOL(): TerminalNode;
    dataOrXml(): DataOrXmlContext;
    INFILE_SYMBOL(): TerminalNode;
    textLiteral(): TextLiteralContext;
    INTO_SYMBOL(): TerminalNode;
    TABLE_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    loadDataFileTail(): LoadDataFileTailContext;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    usePartition(): UsePartitionContext | undefined;
    charsetClause(): CharsetClauseContext | undefined;
    xmlRowsIdentifiedBy(): XmlRowsIdentifiedByContext | undefined;
    fieldsClause(): FieldsClauseContext | undefined;
    linesClause(): LinesClauseContext | undefined;
    LOW_PRIORITY_SYMBOL(): TerminalNode | undefined;
    CONCURRENT_SYMBOL(): TerminalNode | undefined;
    REPLACE_SYMBOL(): TerminalNode | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DataOrXmlContext extends ParserRuleContext {
    DATA_SYMBOL(): TerminalNode | undefined;
    XML_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class XmlRowsIdentifiedByContext extends ParserRuleContext {
    ROWS_SYMBOL(): TerminalNode;
    IDENTIFIED_SYMBOL(): TerminalNode;
    BY_SYMBOL(): TerminalNode;
    textString(): TextStringContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LoadDataFileTailContext extends ParserRuleContext {
    IGNORE_SYMBOL(): TerminalNode | undefined;
    INT_NUMBER(): TerminalNode | undefined;
    loadDataFileTargetList(): LoadDataFileTargetListContext | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    updateList(): UpdateListContext | undefined;
    LINES_SYMBOL(): TerminalNode | undefined;
    ROWS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LoadDataFileTargetListContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    fieldOrVariableList(): FieldOrVariableListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FieldOrVariableListContext extends ParserRuleContext {
    columnRef(): ColumnRefContext[];
    columnRef(i: number): ColumnRefContext;
    userVariable(): UserVariableContext[];
    userVariable(i: number): UserVariableContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ReplaceStatementContext extends ParserRuleContext {
    REPLACE_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    insertFromConstructor(): InsertFromConstructorContext | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    updateList(): UpdateListContext | undefined;
    insertQueryExpression(): InsertQueryExpressionContext | undefined;
    INTO_SYMBOL(): TerminalNode | undefined;
    usePartition(): UsePartitionContext | undefined;
    LOW_PRIORITY_SYMBOL(): TerminalNode | undefined;
    DELAYED_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SelectStatementContext extends ParserRuleContext {
    queryExpression(): QueryExpressionContext | undefined;
    queryExpressionParens(): QueryExpressionParensContext | undefined;
    selectStatementWithInto(): SelectStatementWithIntoContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SelectStatementWithIntoContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    selectStatementWithInto(): SelectStatementWithIntoContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    queryExpression(): QueryExpressionContext | undefined;
    intoClause(): IntoClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class QueryExpressionContext extends ParserRuleContext {
    queryExpressionBody(): QueryExpressionBodyContext | undefined;
    queryExpressionParens(): QueryExpressionParensContext | undefined;
    withClause(): WithClauseContext | undefined;
    procedureAnalyseClause(): ProcedureAnalyseClauseContext | undefined;
    lockingClause(): LockingClauseContext | undefined;
    orderClause(): OrderClauseContext | undefined;
    limitClause(): LimitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class QueryExpressionBodyContext extends ParserRuleContext {
    querySpecification(): QuerySpecificationContext | undefined;
    queryExpressionBody(): QueryExpressionBodyContext | undefined;
    UNION_SYMBOL(): TerminalNode | undefined;
    queryExpressionParens(): QueryExpressionParensContext[];
    queryExpressionParens(i: number): QueryExpressionParensContext;
    unionOption(): UnionOptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class QueryExpressionParensContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    queryExpressionParens(): QueryExpressionParensContext | undefined;
    queryExpression(): QueryExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class QuerySpecificationContext extends ParserRuleContext {
    SELECT_SYMBOL(): TerminalNode;
    selectItemList(): SelectItemListContext;
    selectOption(): SelectOptionContext[];
    selectOption(i: number): SelectOptionContext;
    intoClause(): IntoClauseContext | undefined;
    fromClause(): FromClauseContext | undefined;
    whereClause(): WhereClauseContext | undefined;
    groupByClause(): GroupByClauseContext | undefined;
    havingClause(): HavingClauseContext | undefined;
    windowClause(): WindowClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SubqueryContext extends ParserRuleContext {
    queryExpressionParens(): QueryExpressionParensContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class QuerySpecOptionContext extends ParserRuleContext {
    ALL_SYMBOL(): TerminalNode | undefined;
    DISTINCT_SYMBOL(): TerminalNode | undefined;
    STRAIGHT_JOIN_SYMBOL(): TerminalNode | undefined;
    HIGH_PRIORITY_SYMBOL(): TerminalNode | undefined;
    SQL_SMALL_RESULT_SYMBOL(): TerminalNode | undefined;
    SQL_BIG_RESULT_SYMBOL(): TerminalNode | undefined;
    SQL_BUFFER_RESULT_SYMBOL(): TerminalNode | undefined;
    SQL_CALC_FOUND_ROWS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LimitClauseContext extends ParserRuleContext {
    LIMIT_SYMBOL(): TerminalNode;
    limitOptions(): LimitOptionsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleLimitClauseContext extends ParserRuleContext {
    LIMIT_SYMBOL(): TerminalNode;
    limitOption(): LimitOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LimitOptionsContext extends ParserRuleContext {
    limitOption(): LimitOptionContext[];
    limitOption(i: number): LimitOptionContext;
    COMMA_SYMBOL(): TerminalNode | undefined;
    OFFSET_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LimitOptionContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    PARAM_MARKER(): TerminalNode | undefined;
    ULONGLONG_NUMBER(): TerminalNode | undefined;
    LONG_NUMBER(): TerminalNode | undefined;
    INT_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IntoClauseContext extends ParserRuleContext {
    INTO_SYMBOL(): TerminalNode;
    OUTFILE_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    DUMPFILE_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext[];
    textOrIdentifier(i: number): TextOrIdentifierContext;
    userVariable(): UserVariableContext[];
    userVariable(i: number): UserVariableContext;
    charsetClause(): CharsetClauseContext | undefined;
    fieldsClause(): FieldsClauseContext | undefined;
    linesClause(): LinesClauseContext | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ProcedureAnalyseClauseContext extends ParserRuleContext {
    PROCEDURE_SYMBOL(): TerminalNode;
    ANALYSE_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    INT_NUMBER(): TerminalNode[];
    INT_NUMBER(i: number): TerminalNode;
    COMMA_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class HavingClauseContext extends ParserRuleContext {
    HAVING_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowClauseContext extends ParserRuleContext {
    WINDOW_SYMBOL(): TerminalNode;
    windowDefinition(): WindowDefinitionContext[];
    windowDefinition(i: number): WindowDefinitionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowDefinitionContext extends ParserRuleContext {
    windowName(): WindowNameContext;
    AS_SYMBOL(): TerminalNode;
    windowSpec(): WindowSpecContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowSpecContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    windowSpecDetails(): WindowSpecDetailsContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowSpecDetailsContext extends ParserRuleContext {
    windowName(): WindowNameContext | undefined;
    PARTITION_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode | undefined;
    orderList(): OrderListContext | undefined;
    orderClause(): OrderClauseContext | undefined;
    windowFrameClause(): WindowFrameClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowFrameClauseContext extends ParserRuleContext {
    windowFrameUnits(): WindowFrameUnitsContext;
    windowFrameExtent(): WindowFrameExtentContext;
    windowFrameExclusion(): WindowFrameExclusionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowFrameUnitsContext extends ParserRuleContext {
    ROWS_SYMBOL(): TerminalNode | undefined;
    RANGE_SYMBOL(): TerminalNode | undefined;
    GROUPS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowFrameExtentContext extends ParserRuleContext {
    windowFrameStart(): WindowFrameStartContext | undefined;
    windowFrameBetween(): WindowFrameBetweenContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowFrameStartContext extends ParserRuleContext {
    UNBOUNDED_SYMBOL(): TerminalNode | undefined;
    PRECEDING_SYMBOL(): TerminalNode | undefined;
    ulonglong_number(): Ulonglong_numberContext | undefined;
    PARAM_MARKER(): TerminalNode | undefined;
    INTERVAL_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    interval(): IntervalContext | undefined;
    CURRENT_SYMBOL(): TerminalNode | undefined;
    ROW_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowFrameBetweenContext extends ParserRuleContext {
    BETWEEN_SYMBOL(): TerminalNode;
    windowFrameBound(): WindowFrameBoundContext[];
    windowFrameBound(i: number): WindowFrameBoundContext;
    AND_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowFrameBoundContext extends ParserRuleContext {
    windowFrameStart(): WindowFrameStartContext | undefined;
    UNBOUNDED_SYMBOL(): TerminalNode | undefined;
    FOLLOWING_SYMBOL(): TerminalNode | undefined;
    ulonglong_number(): Ulonglong_numberContext | undefined;
    PARAM_MARKER(): TerminalNode | undefined;
    INTERVAL_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    interval(): IntervalContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowFrameExclusionContext extends ParserRuleContext {
    EXCLUDE_SYMBOL(): TerminalNode;
    CURRENT_SYMBOL(): TerminalNode | undefined;
    ROW_SYMBOL(): TerminalNode | undefined;
    GROUP_SYMBOL(): TerminalNode | undefined;
    TIES_SYMBOL(): TerminalNode | undefined;
    NO_SYMBOL(): TerminalNode | undefined;
    OTHERS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WithClauseContext extends ParserRuleContext {
    WITH_SYMBOL(): TerminalNode;
    commonTableExpression(): CommonTableExpressionContext[];
    commonTableExpression(i: number): CommonTableExpressionContext;
    RECURSIVE_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CommonTableExpressionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    AS_SYMBOL(): TerminalNode;
    subquery(): SubqueryContext;
    columnInternalRefList(): ColumnInternalRefListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GroupByClauseContext extends ParserRuleContext {
    GROUP_SYMBOL(): TerminalNode;
    BY_SYMBOL(): TerminalNode;
    orderList(): OrderListContext;
    olapOption(): OlapOptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OlapOptionContext extends ParserRuleContext {
    WITH_SYMBOL(): TerminalNode;
    ROLLUP_SYMBOL(): TerminalNode | undefined;
    CUBE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OrderClauseContext extends ParserRuleContext {
    ORDER_SYMBOL(): TerminalNode;
    BY_SYMBOL(): TerminalNode;
    orderList(): OrderListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DirectionContext extends ParserRuleContext {
    ASC_SYMBOL(): TerminalNode | undefined;
    DESC_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FromClauseContext extends ParserRuleContext {
    FROM_SYMBOL(): TerminalNode;
    DUAL_SYMBOL(): TerminalNode | undefined;
    tableReferenceList(): TableReferenceListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableReferenceListContext extends ParserRuleContext {
    tableReference(): TableReferenceContext[];
    tableReference(i: number): TableReferenceContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SelectOptionContext extends ParserRuleContext {
    querySpecOption(): QuerySpecOptionContext | undefined;
    SQL_NO_CACHE_SYMBOL(): TerminalNode | undefined;
    SQL_CACHE_SYMBOL(): TerminalNode | undefined;
    MAX_STATEMENT_TIME_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    real_ulong_number(): Real_ulong_numberContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LockingClauseContext extends ParserRuleContext {
    FOR_SYMBOL(): TerminalNode | undefined;
    lockStrengh(): LockStrenghContext | undefined;
    OF_SYMBOL(): TerminalNode | undefined;
    tableAliasRefList(): TableAliasRefListContext | undefined;
    lockedRowAction(): LockedRowActionContext | undefined;
    LOCK_SYMBOL(): TerminalNode | undefined;
    IN_SYMBOL(): TerminalNode | undefined;
    SHARE_SYMBOL(): TerminalNode | undefined;
    MODE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LockStrenghContext extends ParserRuleContext {
    UPDATE_SYMBOL(): TerminalNode | undefined;
    SHARE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LockedRowActionContext extends ParserRuleContext {
    SKIP_SYMBOL(): TerminalNode | undefined;
    LOCKED_SYMBOL(): TerminalNode | undefined;
    NOWAIT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SelectItemListContext extends ParserRuleContext {
    selectItem(): SelectItemContext[];
    selectItem(i: number): SelectItemContext;
    MULT_OPERATOR(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SelectItemContext extends ParserRuleContext {
    tableWild(): TableWildContext | undefined;
    expr(): ExprContext | undefined;
    selectAlias(): SelectAliasContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SelectAliasContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    AS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WhereClauseContext extends ParserRuleContext {
    WHERE_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableReferenceContext extends ParserRuleContext {
    tableFactor(): TableFactorContext | undefined;
    OPEN_CURLY_SYMBOL(): TerminalNode | undefined;
    escapedTableReference(): EscapedTableReferenceContext | undefined;
    CLOSE_CURLY_SYMBOL(): TerminalNode | undefined;
    joinedTable(): JoinedTableContext[];
    joinedTable(i: number): JoinedTableContext;
    identifier(): IdentifierContext | undefined;
    OJ_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class EscapedTableReferenceContext extends ParserRuleContext {
    tableFactor(): TableFactorContext;
    joinedTable(): JoinedTableContext[];
    joinedTable(i: number): JoinedTableContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class JoinedTableContext extends ParserRuleContext {
    innerJoinType(): InnerJoinTypeContext | undefined;
    tableReference(): TableReferenceContext | undefined;
    ON_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    USING_SYMBOL(): TerminalNode | undefined;
    identifierListWithParentheses(): IdentifierListWithParenthesesContext | undefined;
    outerJoinType(): OuterJoinTypeContext | undefined;
    naturalJoinType(): NaturalJoinTypeContext | undefined;
    tableFactor(): TableFactorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class NaturalJoinTypeContext extends ParserRuleContext {
    NATURAL_SYMBOL(): TerminalNode;
    JOIN_SYMBOL(): TerminalNode;
    INNER_SYMBOL(): TerminalNode | undefined;
    LEFT_SYMBOL(): TerminalNode | undefined;
    RIGHT_SYMBOL(): TerminalNode | undefined;
    OUTER_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InnerJoinTypeContext extends ParserRuleContext {
    _type: Token;
    JOIN_SYMBOL(): TerminalNode | undefined;
    INNER_SYMBOL(): TerminalNode | undefined;
    CROSS_SYMBOL(): TerminalNode | undefined;
    STRAIGHT_JOIN_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OuterJoinTypeContext extends ParserRuleContext {
    _type: Token;
    JOIN_SYMBOL(): TerminalNode;
    LEFT_SYMBOL(): TerminalNode | undefined;
    RIGHT_SYMBOL(): TerminalNode | undefined;
    OUTER_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableFactorContext extends ParserRuleContext {
    singleTable(): SingleTableContext | undefined;
    singleTableParens(): SingleTableParensContext | undefined;
    derivedTable(): DerivedTableContext | undefined;
    tableReferenceListParens(): TableReferenceListParensContext | undefined;
    tableFunction(): TableFunctionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SingleTableContext extends ParserRuleContext {
    tableRef(): TableRefContext;
    usePartition(): UsePartitionContext | undefined;
    tableAlias(): TableAliasContext | undefined;
    indexHintList(): IndexHintListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SingleTableParensContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    singleTable(): SingleTableContext | undefined;
    singleTableParens(): SingleTableParensContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DerivedTableContext extends ParserRuleContext {
    subquery(): SubqueryContext;
    tableAlias(): TableAliasContext | undefined;
    columnInternalRefList(): ColumnInternalRefListContext | undefined;
    LATERAL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableReferenceListParensContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    tableReferenceList(): TableReferenceListContext | undefined;
    tableReferenceListParens(): TableReferenceListParensContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableFunctionContext extends ParserRuleContext {
    JSON_TABLE_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    COMMA_SYMBOL(): TerminalNode;
    textStringLiteral(): TextStringLiteralContext;
    columnsClause(): ColumnsClauseContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    tableAlias(): TableAliasContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ColumnsClauseContext extends ParserRuleContext {
    COLUMNS_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    jtColumn(): JtColumnContext[];
    jtColumn(i: number): JtColumnContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class JtColumnContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    FOR_SYMBOL(): TerminalNode | undefined;
    ORDINALITY_SYMBOL(): TerminalNode | undefined;
    dataType(): DataTypeContext | undefined;
    PATH_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    collate(): CollateContext | undefined;
    EXISTS_SYMBOL(): TerminalNode | undefined;
    onEmptyOrError(): OnEmptyOrErrorContext | undefined;
    NESTED_SYMBOL(): TerminalNode | undefined;
    columnsClause(): ColumnsClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OnEmptyOrErrorContext extends ParserRuleContext {
    onEmpty(): OnEmptyContext | undefined;
    onError(): OnErrorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OnEmptyContext extends ParserRuleContext {
    jtOnResponse(): JtOnResponseContext;
    ON_SYMBOL(): TerminalNode;
    EMPTY_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OnErrorContext extends ParserRuleContext {
    jtOnResponse(): JtOnResponseContext;
    ON_SYMBOL(): TerminalNode;
    ERROR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class JtOnResponseContext extends ParserRuleContext {
    ERROR_SYMBOL(): TerminalNode | undefined;
    NULL_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UnionOptionContext extends ParserRuleContext {
    DISTINCT_SYMBOL(): TerminalNode | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableAliasContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    AS_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexHintListContext extends ParserRuleContext {
    indexHint(): IndexHintContext[];
    indexHint(i: number): IndexHintContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexHintContext extends ParserRuleContext {
    indexHintType(): IndexHintTypeContext | undefined;
    keyOrIndex(): KeyOrIndexContext;
    OPEN_PAR_SYMBOL(): TerminalNode;
    indexList(): IndexListContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    indexHintClause(): IndexHintClauseContext | undefined;
    USE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexHintTypeContext extends ParserRuleContext {
    FORCE_SYMBOL(): TerminalNode | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyOrIndexContext extends ParserRuleContext {
    KEY_SYMBOL(): TerminalNode | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ConstraintKeyTypeContext extends ParserRuleContext {
    PRIMARY_SYMBOL(): TerminalNode | undefined;
    KEY_SYMBOL(): TerminalNode | undefined;
    UNIQUE_SYMBOL(): TerminalNode | undefined;
    keyOrIndex(): KeyOrIndexContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexHintClauseContext extends ParserRuleContext {
    FOR_SYMBOL(): TerminalNode;
    JOIN_SYMBOL(): TerminalNode | undefined;
    ORDER_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode | undefined;
    GROUP_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexListContext extends ParserRuleContext {
    indexListElement(): IndexListElementContext[];
    indexListElement(i: number): IndexListElementContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexListElementContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    PRIMARY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UpdateStatementContext extends ParserRuleContext {
    UPDATE_SYMBOL(): TerminalNode;
    tableReferenceList(): TableReferenceListContext;
    SET_SYMBOL(): TerminalNode;
    updateList(): UpdateListContext;
    withClause(): WithClauseContext | undefined;
    LOW_PRIORITY_SYMBOL(): TerminalNode | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    whereClause(): WhereClauseContext | undefined;
    orderClause(): OrderClauseContext | undefined;
    simpleLimitClause(): SimpleLimitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TransactionOrLockingStatementContext extends ParserRuleContext {
    transactionStatement(): TransactionStatementContext | undefined;
    savepointStatement(): SavepointStatementContext | undefined;
    lockStatement(): LockStatementContext | undefined;
    xaStatement(): XaStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TransactionStatementContext extends ParserRuleContext {
    START_SYMBOL(): TerminalNode | undefined;
    TRANSACTION_SYMBOL(): TerminalNode | undefined;
    transactionCharacteristic(): TransactionCharacteristicContext[];
    transactionCharacteristic(i: number): TransactionCharacteristicContext;
    COMMIT_SYMBOL(): TerminalNode | undefined;
    WORK_SYMBOL(): TerminalNode | undefined;
    AND_SYMBOL(): TerminalNode | undefined;
    CHAIN_SYMBOL(): TerminalNode | undefined;
    RELEASE_SYMBOL(): TerminalNode | undefined;
    NO_SYMBOL(): TerminalNode[];
    NO_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class BeginWorkContext extends ParserRuleContext {
    BEGIN_SYMBOL(): TerminalNode;
    WORK_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TransactionCharacteristicContext extends ParserRuleContext {
    WITH_SYMBOL(): TerminalNode | undefined;
    CONSISTENT_SYMBOL(): TerminalNode | undefined;
    SNAPSHOT_SYMBOL(): TerminalNode | undefined;
    READ_SYMBOL(): TerminalNode | undefined;
    WRITE_SYMBOL(): TerminalNode | undefined;
    ONLY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SavepointStatementContext extends ParserRuleContext {
    SAVEPOINT_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    ROLLBACK_SYMBOL(): TerminalNode | undefined;
    TO_SYMBOL(): TerminalNode | undefined;
    WORK_SYMBOL(): TerminalNode | undefined;
    AND_SYMBOL(): TerminalNode | undefined;
    CHAIN_SYMBOL(): TerminalNode | undefined;
    RELEASE_SYMBOL(): TerminalNode | undefined;
    NO_SYMBOL(): TerminalNode[];
    NO_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LockStatementContext extends ParserRuleContext {
    LOCK_SYMBOL(): TerminalNode | undefined;
    lockItem(): LockItemContext[];
    lockItem(i: number): LockItemContext;
    TABLES_SYMBOL(): TerminalNode | undefined;
    TABLE_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    INSTANCE_SYMBOL(): TerminalNode | undefined;
    FOR_SYMBOL(): TerminalNode | undefined;
    BACKUP_SYMBOL(): TerminalNode | undefined;
    UNLOCK_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LockItemContext extends ParserRuleContext {
    tableRef(): TableRefContext;
    lockOption(): LockOptionContext;
    tableAlias(): TableAliasContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LockOptionContext extends ParserRuleContext {
    READ_SYMBOL(): TerminalNode | undefined;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    WRITE_SYMBOL(): TerminalNode | undefined;
    LOW_PRIORITY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class XaStatementContext extends ParserRuleContext {
    XA_SYMBOL(): TerminalNode;
    xid(): XidContext | undefined;
    END_SYMBOL(): TerminalNode | undefined;
    PREPARE_SYMBOL(): TerminalNode | undefined;
    COMMIT_SYMBOL(): TerminalNode | undefined;
    ROLLBACK_SYMBOL(): TerminalNode | undefined;
    RECOVER_SYMBOL(): TerminalNode | undefined;
    xaConvert(): XaConvertContext | undefined;
    START_SYMBOL(): TerminalNode | undefined;
    BEGIN_SYMBOL(): TerminalNode | undefined;
    SUSPEND_SYMBOL(): TerminalNode | undefined;
    ONE_SYMBOL(): TerminalNode | undefined;
    PHASE_SYMBOL(): TerminalNode | undefined;
    JOIN_SYMBOL(): TerminalNode | undefined;
    RESUME_SYMBOL(): TerminalNode | undefined;
    FOR_SYMBOL(): TerminalNode | undefined;
    MIGRATE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class XaConvertContext extends ParserRuleContext {
    CONVERT_SYMBOL(): TerminalNode | undefined;
    XID_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class XidContext extends ParserRuleContext {
    textString(): TextStringContext[];
    textString(i: number): TextStringContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    ulong_number(): Ulong_numberContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ReplicationStatementContext extends ParserRuleContext {
    PURGE_SYMBOL(): TerminalNode | undefined;
    LOGS_SYMBOL(): TerminalNode | undefined;
    BINARY_SYMBOL(): TerminalNode | undefined;
    MASTER_SYMBOL(): TerminalNode | undefined;
    TO_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    BEFORE_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    changeMaster(): ChangeMasterContext | undefined;
    RESET_SYMBOL(): TerminalNode | undefined;
    resetOption(): ResetOptionContext[];
    resetOption(i: number): ResetOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    PERSIST_SYMBOL(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    identifier(): IdentifierContext | undefined;
    slave(): SlaveContext | undefined;
    changeReplication(): ChangeReplicationContext | undefined;
    replicationLoad(): ReplicationLoadContext | undefined;
    groupReplication(): GroupReplicationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ResetOptionContext extends ParserRuleContext {
    _option: Token;
    MASTER_SYMBOL(): TerminalNode | undefined;
    masterResetOptions(): MasterResetOptionsContext | undefined;
    CACHE_SYMBOL(): TerminalNode | undefined;
    QUERY_SYMBOL(): TerminalNode | undefined;
    SLAVE_SYMBOL(): TerminalNode | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    channel(): ChannelContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class MasterResetOptionsContext extends ParserRuleContext {
    TO_SYMBOL(): TerminalNode;
    real_ulong_number(): Real_ulong_numberContext | undefined;
    real_ulonglong_number(): Real_ulonglong_numberContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ReplicationLoadContext extends ParserRuleContext {
    LOAD_SYMBOL(): TerminalNode;
    FROM_SYMBOL(): TerminalNode;
    MASTER_SYMBOL(): TerminalNode;
    DATA_SYMBOL(): TerminalNode | undefined;
    TABLE_SYMBOL(): TerminalNode | undefined;
    tableRef(): TableRefContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ChangeMasterContext extends ParserRuleContext {
    CHANGE_SYMBOL(): TerminalNode;
    MASTER_SYMBOL(): TerminalNode;
    TO_SYMBOL(): TerminalNode;
    changeMasterOptions(): ChangeMasterOptionsContext;
    channel(): ChannelContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ChangeMasterOptionsContext extends ParserRuleContext {
    masterOption(): MasterOptionContext[];
    masterOption(i: number): MasterOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class MasterOptionContext extends ParserRuleContext {
    MASTER_HOST_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    textStringNoLinebreak(): TextStringNoLinebreakContext | undefined;
    NETWORK_NAMESPACE_SYMBOL(): TerminalNode | undefined;
    MASTER_BIND_SYMBOL(): TerminalNode | undefined;
    MASTER_USER_SYMBOL(): TerminalNode | undefined;
    MASTER_PASSWORD_SYMBOL(): TerminalNode | undefined;
    MASTER_PORT_SYMBOL(): TerminalNode | undefined;
    ulong_number(): Ulong_numberContext | undefined;
    MASTER_CONNECT_RETRY_SYMBOL(): TerminalNode | undefined;
    MASTER_RETRY_COUNT_SYMBOL(): TerminalNode | undefined;
    MASTER_DELAY_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CA_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CAPATH_SYMBOL(): TerminalNode | undefined;
    MASTER_TLS_VERSION_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CERT_SYMBOL(): TerminalNode | undefined;
    MASTER_TLS_CIPHERSUITES_SYMBOL(): TerminalNode | undefined;
    masterTlsCiphersuitesDef(): MasterTlsCiphersuitesDefContext | undefined;
    MASTER_SSL_CIPHER_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_KEY_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_VERIFY_SERVER_CERT_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CRL_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    MASTER_SSL_CRLPATH_SYMBOL(): TerminalNode | undefined;
    MASTER_PUBLIC_KEY_PATH_SYMBOL(): TerminalNode | undefined;
    GET_MASTER_PUBLIC_KEY_SYMBOL(): TerminalNode | undefined;
    MASTER_HEARTBEAT_PERIOD_SYMBOL(): TerminalNode | undefined;
    IGNORE_SERVER_IDS_SYMBOL(): TerminalNode | undefined;
    serverIdList(): ServerIdListContext | undefined;
    MASTER_COMPRESSION_ALGORITHM_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    MASTER_ZSTD_COMPRESSION_LEVEL_SYMBOL(): TerminalNode | undefined;
    MASTER_AUTO_POSITION_SYMBOL(): TerminalNode | undefined;
    PRIVILEGE_CHECKS_USER_SYMBOL(): TerminalNode | undefined;
    privilegeCheckDef(): PrivilegeCheckDefContext | undefined;
    masterFileDef(): MasterFileDefContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PrivilegeCheckDefContext extends ParserRuleContext {
    userIdentifierOrText(): UserIdentifierOrTextContext | undefined;
    NULL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class MasterTlsCiphersuitesDefContext extends ParserRuleContext {
    textStringNoLinebreak(): TextStringNoLinebreakContext | undefined;
    NULL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class MasterFileDefContext extends ParserRuleContext {
    MASTER_LOG_FILE_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode;
    textStringNoLinebreak(): TextStringNoLinebreakContext | undefined;
    MASTER_LOG_POS_SYMBOL(): TerminalNode | undefined;
    ulonglong_number(): Ulonglong_numberContext | undefined;
    RELAY_LOG_FILE_SYMBOL(): TerminalNode | undefined;
    RELAY_LOG_POS_SYMBOL(): TerminalNode | undefined;
    ulong_number(): Ulong_numberContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ServerIdListContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    ulong_number(): Ulong_numberContext[];
    ulong_number(i: number): Ulong_numberContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ChangeReplicationContext extends ParserRuleContext {
    CHANGE_SYMBOL(): TerminalNode;
    REPLICATION_SYMBOL(): TerminalNode;
    FILTER_SYMBOL(): TerminalNode;
    filterDefinition(): FilterDefinitionContext[];
    filterDefinition(i: number): FilterDefinitionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    channel(): ChannelContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FilterDefinitionContext extends ParserRuleContext {
    REPLICATE_DO_DB_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    filterDbList(): FilterDbListContext | undefined;
    REPLICATE_IGNORE_DB_SYMBOL(): TerminalNode | undefined;
    REPLICATE_DO_TABLE_SYMBOL(): TerminalNode | undefined;
    filterTableList(): FilterTableListContext | undefined;
    REPLICATE_IGNORE_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_WILD_DO_TABLE_SYMBOL(): TerminalNode | undefined;
    filterStringList(): FilterStringListContext | undefined;
    REPLICATE_WILD_IGNORE_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_REWRITE_DB_SYMBOL(): TerminalNode | undefined;
    filterDbPairList(): FilterDbPairListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FilterDbListContext extends ParserRuleContext {
    schemaRef(): SchemaRefContext[];
    schemaRef(i: number): SchemaRefContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FilterTableListContext extends ParserRuleContext {
    filterTableRef(): FilterTableRefContext[];
    filterTableRef(i: number): FilterTableRefContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FilterStringListContext extends ParserRuleContext {
    filterWildDbTableString(): FilterWildDbTableStringContext[];
    filterWildDbTableString(i: number): FilterWildDbTableStringContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FilterWildDbTableStringContext extends ParserRuleContext {
    textStringNoLinebreak(): TextStringNoLinebreakContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FilterDbPairListContext extends ParserRuleContext {
    schemaIdentifierPair(): SchemaIdentifierPairContext[];
    schemaIdentifierPair(i: number): SchemaIdentifierPairContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SlaveContext extends ParserRuleContext {
    START_SYMBOL(): TerminalNode | undefined;
    SLAVE_SYMBOL(): TerminalNode;
    slaveConnectionOptions(): SlaveConnectionOptionsContext | undefined;
    slaveThreadOptions(): SlaveThreadOptionsContext | undefined;
    UNTIL_SYMBOL(): TerminalNode | undefined;
    slaveUntilOptions(): SlaveUntilOptionsContext | undefined;
    channel(): ChannelContext | undefined;
    STOP_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SlaveUntilOptionsContext extends ParserRuleContext {
    masterFileDef(): MasterFileDefContext[];
    masterFileDef(i: number): MasterFileDefContext;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    textString(): TextStringContext | undefined;
    SQL_AFTER_MTS_GAPS_SYMBOL(): TerminalNode | undefined;
    SQL_BEFORE_GTIDS_SYMBOL(): TerminalNode | undefined;
    SQL_AFTER_GTIDS_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SlaveConnectionOptionsContext extends ParserRuleContext {
    USER_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode[];
    EQUAL_OPERATOR(i: number): TerminalNode;
    textString(): TextStringContext[];
    textString(i: number): TextStringContext;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    DEFAULT_AUTH_SYMBOL(): TerminalNode | undefined;
    PLUGIN_DIR_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SlaveThreadOptionsContext extends ParserRuleContext {
    slaveThreadOption(): SlaveThreadOptionContext[];
    slaveThreadOption(i: number): SlaveThreadOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SlaveThreadOptionContext extends ParserRuleContext {
    RELAY_THREAD_SYMBOL(): TerminalNode | undefined;
    SQL_THREAD_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GroupReplicationContext extends ParserRuleContext {
    GROUP_REPLICATION_SYMBOL(): TerminalNode;
    START_SYMBOL(): TerminalNode | undefined;
    STOP_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PreparedStatementContext extends ParserRuleContext {
    _type: Token;
    identifier(): IdentifierContext | undefined;
    FROM_SYMBOL(): TerminalNode | undefined;
    PREPARE_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    userVariable(): UserVariableContext | undefined;
    executeStatement(): ExecuteStatementContext | undefined;
    DEALLOCATE_SYMBOL(): TerminalNode | undefined;
    DROP_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExecuteStatementContext extends ParserRuleContext {
    EXECUTE_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    USING_SYMBOL(): TerminalNode | undefined;
    executeVarList(): ExecuteVarListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExecuteVarListContext extends ParserRuleContext {
    userVariable(): UserVariableContext[];
    userVariable(i: number): UserVariableContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CloneStatementContext extends ParserRuleContext {
    CLONE_SYMBOL(): TerminalNode;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    DATA_SYMBOL(): TerminalNode | undefined;
    DIRECTORY_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    REMOTE_SYMBOL(): TerminalNode | undefined;
    INSTANCE_SYMBOL(): TerminalNode | undefined;
    FROM_SYMBOL(): TerminalNode | undefined;
    user(): UserContext | undefined;
    COLON_SYMBOL(): TerminalNode | undefined;
    ulong_number(): Ulong_numberContext | undefined;
    IDENTIFIED_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode | undefined;
    equal(): EqualContext | undefined;
    FOR_SYMBOL(): TerminalNode | undefined;
    REPLICATION_SYMBOL(): TerminalNode | undefined;
    dataDirSSL(): DataDirSSLContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DataDirSSLContext extends ParserRuleContext {
    ssl(): SslContext | undefined;
    DATA_SYMBOL(): TerminalNode | undefined;
    DIRECTORY_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    equal(): EqualContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SslContext extends ParserRuleContext {
    REQUIRE_SYMBOL(): TerminalNode;
    SSL_SYMBOL(): TerminalNode;
    NO_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AccountManagementStatementContext extends ParserRuleContext {
    alterUser(): AlterUserContext | undefined;
    createUser(): CreateUserContext | undefined;
    dropUser(): DropUserContext | undefined;
    grant(): GrantContext | undefined;
    renameUser(): RenameUserContext | undefined;
    revoke(): RevokeContext | undefined;
    setRole(): SetRoleContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterUserContext extends ParserRuleContext {
    ALTER_SYMBOL(): TerminalNode;
    USER_SYMBOL(): TerminalNode;
    alterUserTail(): AlterUserTailContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterUserTailContext extends ParserRuleContext {
    createUserTail(): CreateUserTailContext | undefined;
    createUserList(): CreateUserListContext | undefined;
    alterUserList(): AlterUserListContext | undefined;
    user(): UserContext | undefined;
    IDENTIFIED_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode | undefined;
    textString(): TextStringContext | undefined;
    replacePassword(): ReplacePasswordContext | undefined;
    retainCurrentPassword(): RetainCurrentPasswordContext | undefined;
    discardOldPassword(): DiscardOldPasswordContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    ROLE_SYMBOL(): TerminalNode | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    NONE_SYMBOL(): TerminalNode | undefined;
    roleList(): RoleListContext | undefined;
    RANDOM_SYMBOL(): TerminalNode | undefined;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    WITH_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UserFunctionContext extends ParserRuleContext {
    USER_SYMBOL(): TerminalNode;
    parentheses(): ParenthesesContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateUserContext extends ParserRuleContext {
    CREATE_SYMBOL(): TerminalNode;
    USER_SYMBOL(): TerminalNode;
    createUserList(): CreateUserListContext;
    defaultRoleClause(): DefaultRoleClauseContext;
    createUserTail(): CreateUserTailContext;
    ifNotExists(): IfNotExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateUserTailContext extends ParserRuleContext {
    requireClause(): RequireClauseContext | undefined;
    connectOptions(): ConnectOptionsContext | undefined;
    accountLockPasswordExpireOptions(): AccountLockPasswordExpireOptionsContext[];
    accountLockPasswordExpireOptions(i: number): AccountLockPasswordExpireOptionsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DefaultRoleClauseContext extends ParserRuleContext {
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    ROLE_SYMBOL(): TerminalNode | undefined;
    roleList(): RoleListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RequireClauseContext extends ParserRuleContext {
    _option: Token;
    REQUIRE_SYMBOL(): TerminalNode;
    requireList(): RequireListContext | undefined;
    SSL_SYMBOL(): TerminalNode | undefined;
    X509_SYMBOL(): TerminalNode | undefined;
    NONE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ConnectOptionsContext extends ParserRuleContext {
    WITH_SYMBOL(): TerminalNode;
    MAX_QUERIES_PER_HOUR_SYMBOL(): TerminalNode[];
    MAX_QUERIES_PER_HOUR_SYMBOL(i: number): TerminalNode;
    ulong_number(): Ulong_numberContext[];
    ulong_number(i: number): Ulong_numberContext;
    MAX_UPDATES_PER_HOUR_SYMBOL(): TerminalNode[];
    MAX_UPDATES_PER_HOUR_SYMBOL(i: number): TerminalNode;
    MAX_CONNECTIONS_PER_HOUR_SYMBOL(): TerminalNode[];
    MAX_CONNECTIONS_PER_HOUR_SYMBOL(i: number): TerminalNode;
    MAX_USER_CONNECTIONS_SYMBOL(): TerminalNode[];
    MAX_USER_CONNECTIONS_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AccountLockPasswordExpireOptionsContext extends ParserRuleContext {
    ACCOUNT_SYMBOL(): TerminalNode | undefined;
    LOCK_SYMBOL(): TerminalNode | undefined;
    UNLOCK_SYMBOL(): TerminalNode | undefined;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    EXPIRE_SYMBOL(): TerminalNode | undefined;
    HISTORY_SYMBOL(): TerminalNode | undefined;
    REUSE_SYMBOL(): TerminalNode | undefined;
    INTERVAL_SYMBOL(): TerminalNode | undefined;
    REQUIRE_SYMBOL(): TerminalNode | undefined;
    CURRENT_SYMBOL(): TerminalNode | undefined;
    real_ulong_number(): Real_ulong_numberContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    DAY_SYMBOL(): TerminalNode | undefined;
    NEVER_SYMBOL(): TerminalNode | undefined;
    OPTIONAL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropUserContext extends ParserRuleContext {
    DROP_SYMBOL(): TerminalNode;
    USER_SYMBOL(): TerminalNode;
    userList(): UserListContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GrantContext extends ParserRuleContext {
    GRANT_SYMBOL(): TerminalNode[];
    GRANT_SYMBOL(i: number): TerminalNode;
    roleOrPrivilegesList(): RoleOrPrivilegesListContext | undefined;
    TO_SYMBOL(): TerminalNode | undefined;
    userList(): UserListContext | undefined;
    ON_SYMBOL(): TerminalNode | undefined;
    grantIdentifier(): GrantIdentifierContext | undefined;
    grantTargetList(): GrantTargetListContext | undefined;
    PROXY_SYMBOL(): TerminalNode | undefined;
    user(): UserContext | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    WITH_SYMBOL(): TerminalNode | undefined;
    ADMIN_SYMBOL(): TerminalNode | undefined;
    OPTION_SYMBOL(): TerminalNode | undefined;
    aclType(): AclTypeContext | undefined;
    versionedRequireClause(): VersionedRequireClauseContext | undefined;
    grantOptions(): GrantOptionsContext | undefined;
    grantAs(): GrantAsContext | undefined;
    PRIVILEGES_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GrantTargetListContext extends ParserRuleContext {
    createUserList(): CreateUserListContext | undefined;
    userList(): UserListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GrantOptionsContext extends ParserRuleContext {
    WITH_SYMBOL(): TerminalNode;
    grantOption(): GrantOptionContext[];
    grantOption(i: number): GrantOptionContext;
    GRANT_SYMBOL(): TerminalNode | undefined;
    OPTION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExceptRoleListContext extends ParserRuleContext {
    EXCEPT_SYMBOL(): TerminalNode;
    roleList(): RoleListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WithRolesContext extends ParserRuleContext {
    WITH_SYMBOL(): TerminalNode;
    ROLE_SYMBOL(): TerminalNode;
    roleList(): RoleListContext | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    NONE_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    exceptRoleList(): ExceptRoleListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GrantAsContext extends ParserRuleContext {
    AS_SYMBOL(): TerminalNode;
    USER_SYMBOL(): TerminalNode;
    withRoles(): WithRolesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class VersionedRequireClauseContext extends ParserRuleContext {
    requireClause(): RequireClauseContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RenameUserContext extends ParserRuleContext {
    RENAME_SYMBOL(): TerminalNode;
    USER_SYMBOL(): TerminalNode;
    user(): UserContext[];
    user(i: number): UserContext;
    TO_SYMBOL(): TerminalNode[];
    TO_SYMBOL(i: number): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RevokeContext extends ParserRuleContext {
    REVOKE_SYMBOL(): TerminalNode;
    roleOrPrivilegesList(): RoleOrPrivilegesListContext | undefined;
    FROM_SYMBOL(): TerminalNode | undefined;
    userList(): UserListContext | undefined;
    onTypeTo(): OnTypeToContext | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    PROXY_SYMBOL(): TerminalNode | undefined;
    ON_SYMBOL(): TerminalNode | undefined;
    user(): UserContext | undefined;
    grantIdentifier(): GrantIdentifierContext | undefined;
    COMMA_SYMBOL(): TerminalNode | undefined;
    GRANT_SYMBOL(): TerminalNode | undefined;
    OPTION_SYMBOL(): TerminalNode | undefined;
    PRIVILEGES_SYMBOL(): TerminalNode | undefined;
    aclType(): AclTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OnTypeToContext extends ParserRuleContext {
    ON_SYMBOL(): TerminalNode | undefined;
    grantIdentifier(): GrantIdentifierContext | undefined;
    aclType(): AclTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AclTypeContext extends ParserRuleContext {
    TABLE_SYMBOL(): TerminalNode | undefined;
    FUNCTION_SYMBOL(): TerminalNode | undefined;
    PROCEDURE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleOrPrivilegesListContext extends ParserRuleContext {
    roleOrPrivilege(): RoleOrPrivilegeContext[];
    roleOrPrivilege(i: number): RoleOrPrivilegeContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleOrPrivilegeContext extends ParserRuleContext {
    _object: Token;
    roleIdentifierOrText(): RoleIdentifierOrTextContext | undefined;
    AT_TEXT_SUFFIX(): TerminalNode | undefined;
    AT_SIGN_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    columnInternalRefList(): ColumnInternalRefListContext | undefined;
    SELECT_SYMBOL(): TerminalNode | undefined;
    INSERT_SYMBOL(): TerminalNode | undefined;
    UPDATE_SYMBOL(): TerminalNode | undefined;
    REFERENCES_SYMBOL(): TerminalNode | undefined;
    DELETE_SYMBOL(): TerminalNode | undefined;
    USAGE_SYMBOL(): TerminalNode | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    DROP_SYMBOL(): TerminalNode | undefined;
    EXECUTE_SYMBOL(): TerminalNode | undefined;
    RELOAD_SYMBOL(): TerminalNode | undefined;
    SHUTDOWN_SYMBOL(): TerminalNode | undefined;
    PROCESS_SYMBOL(): TerminalNode | undefined;
    FILE_SYMBOL(): TerminalNode | undefined;
    PROXY_SYMBOL(): TerminalNode | undefined;
    SUPER_SYMBOL(): TerminalNode | undefined;
    EVENT_SYMBOL(): TerminalNode | undefined;
    TRIGGER_SYMBOL(): TerminalNode | undefined;
    GRANT_SYMBOL(): TerminalNode | undefined;
    OPTION_SYMBOL(): TerminalNode | undefined;
    SHOW_SYMBOL(): TerminalNode | undefined;
    DATABASES_SYMBOL(): TerminalNode | undefined;
    CREATE_SYMBOL(): TerminalNode | undefined;
    TEMPORARY_SYMBOL(): TerminalNode | undefined;
    TABLES_SYMBOL(): TerminalNode | undefined;
    ROUTINE_SYMBOL(): TerminalNode | undefined;
    TABLESPACE_SYMBOL(): TerminalNode | undefined;
    USER_SYMBOL(): TerminalNode | undefined;
    VIEW_SYMBOL(): TerminalNode | undefined;
    LOCK_SYMBOL(): TerminalNode | undefined;
    REPLICATION_SYMBOL(): TerminalNode | undefined;
    CLIENT_SYMBOL(): TerminalNode | undefined;
    SLAVE_SYMBOL(): TerminalNode | undefined;
    ALTER_SYMBOL(): TerminalNode | undefined;
    ROLE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GrantIdentifierContext extends ParserRuleContext {
    MULT_OPERATOR(): TerminalNode[];
    MULT_OPERATOR(i: number): TerminalNode;
    DOT_SYMBOL(): TerminalNode | undefined;
    schemaRef(): SchemaRefContext | undefined;
    tableRef(): TableRefContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RequireListContext extends ParserRuleContext {
    requireListElement(): RequireListElementContext[];
    requireListElement(i: number): RequireListElementContext;
    AND_SYMBOL(): TerminalNode[];
    AND_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RequireListElementContext extends ParserRuleContext {
    _element: Token;
    textString(): TextStringContext;
    CIPHER_SYMBOL(): TerminalNode | undefined;
    ISSUER_SYMBOL(): TerminalNode | undefined;
    SUBJECT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GrantOptionContext extends ParserRuleContext {
    _option: Token;
    OPTION_SYMBOL(): TerminalNode | undefined;
    GRANT_SYMBOL(): TerminalNode | undefined;
    ulong_number(): Ulong_numberContext | undefined;
    MAX_QUERIES_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_UPDATES_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_CONNECTIONS_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_USER_CONNECTIONS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SetRoleContext extends ParserRuleContext {
    SET_SYMBOL(): TerminalNode;
    ROLE_SYMBOL(): TerminalNode;
    roleList(): RoleListContext[];
    roleList(i: number): RoleListContext;
    NONE_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    TO_SYMBOL(): TerminalNode | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    EXCEPT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleListContext extends ParserRuleContext {
    role(): RoleContext[];
    role(i: number): RoleContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleContext extends ParserRuleContext {
    roleIdentifierOrText(): RoleIdentifierOrTextContext;
    AT_SIGN_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    AT_TEXT_SUFFIX(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableAdministrationStatementContext extends ParserRuleContext {
    _type: Token;
    TABLE_SYMBOL(): TerminalNode;
    tableRefList(): TableRefListContext;
    ANALYZE_SYMBOL(): TerminalNode | undefined;
    noWriteToBinLog(): NoWriteToBinLogContext | undefined;
    histogram(): HistogramContext | undefined;
    CHECK_SYMBOL(): TerminalNode | undefined;
    checkOption(): CheckOptionContext[];
    checkOption(i: number): CheckOptionContext;
    CHECKSUM_SYMBOL(): TerminalNode | undefined;
    QUICK_SYMBOL(): TerminalNode | undefined;
    EXTENDED_SYMBOL(): TerminalNode | undefined;
    OPTIMIZE_SYMBOL(): TerminalNode | undefined;
    REPAIR_SYMBOL(): TerminalNode | undefined;
    repairType(): RepairTypeContext[];
    repairType(i: number): RepairTypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class HistogramContext extends ParserRuleContext {
    UPDATE_SYMBOL(): TerminalNode | undefined;
    HISTOGRAM_SYMBOL(): TerminalNode;
    ON_SYMBOL(): TerminalNode;
    identifierList(): IdentifierListContext;
    WITH_SYMBOL(): TerminalNode | undefined;
    INT_NUMBER(): TerminalNode | undefined;
    BUCKETS_SYMBOL(): TerminalNode | undefined;
    DROP_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CheckOptionContext extends ParserRuleContext {
    FOR_SYMBOL(): TerminalNode | undefined;
    UPGRADE_SYMBOL(): TerminalNode | undefined;
    QUICK_SYMBOL(): TerminalNode | undefined;
    FAST_SYMBOL(): TerminalNode | undefined;
    MEDIUM_SYMBOL(): TerminalNode | undefined;
    EXTENDED_SYMBOL(): TerminalNode | undefined;
    CHANGED_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RepairTypeContext extends ParserRuleContext {
    QUICK_SYMBOL(): TerminalNode | undefined;
    EXTENDED_SYMBOL(): TerminalNode | undefined;
    USE_FRM_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InstallUninstallStatmentContext extends ParserRuleContext {
    _action: Token;
    _type: Token;
    identifier(): IdentifierContext | undefined;
    SONAME_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    INSTALL_SYMBOL(): TerminalNode | undefined;
    PLUGIN_SYMBOL(): TerminalNode | undefined;
    textStringLiteralList(): TextStringLiteralListContext | undefined;
    COMPONENT_SYMBOL(): TerminalNode | undefined;
    pluginRef(): PluginRefContext | undefined;
    UNINSTALL_SYMBOL(): TerminalNode | undefined;
    componentRef(): ComponentRefContext[];
    componentRef(i: number): ComponentRefContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SetStatementContext extends ParserRuleContext {
    SET_SYMBOL(): TerminalNode;
    startOptionValueList(): StartOptionValueListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class StartOptionValueListContext extends ParserRuleContext {
    optionValueNoOptionType(): OptionValueNoOptionTypeContext | undefined;
    optionValueListContinued(): OptionValueListContinuedContext | undefined;
    TRANSACTION_SYMBOL(): TerminalNode | undefined;
    transactionCharacteristics(): TransactionCharacteristicsContext | undefined;
    optionType(): OptionTypeContext | undefined;
    startOptionValueListFollowingOptionType(): StartOptionValueListFollowingOptionTypeContext | undefined;
    PASSWORD_SYMBOL(): TerminalNode[];
    PASSWORD_SYMBOL(i: number): TerminalNode;
    equal(): EqualContext | undefined;
    textString(): TextStringContext | undefined;
    OLD_PASSWORD_SYMBOL(): TerminalNode | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    FOR_SYMBOL(): TerminalNode | undefined;
    user(): UserContext | undefined;
    replacePassword(): ReplacePasswordContext | undefined;
    retainCurrentPassword(): RetainCurrentPasswordContext | undefined;
    TO_SYMBOL(): TerminalNode | undefined;
    RANDOM_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TransactionCharacteristicsContext extends ParserRuleContext {
    transactionAccessMode(): TransactionAccessModeContext | undefined;
    isolationLevel(): IsolationLevelContext | undefined;
    COMMA_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TransactionAccessModeContext extends ParserRuleContext {
    READ_SYMBOL(): TerminalNode;
    WRITE_SYMBOL(): TerminalNode | undefined;
    ONLY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IsolationLevelContext extends ParserRuleContext {
    ISOLATION_SYMBOL(): TerminalNode;
    LEVEL_SYMBOL(): TerminalNode;
    REPEATABLE_SYMBOL(): TerminalNode | undefined;
    READ_SYMBOL(): TerminalNode | undefined;
    SERIALIZABLE_SYMBOL(): TerminalNode | undefined;
    COMMITTED_SYMBOL(): TerminalNode | undefined;
    UNCOMMITTED_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OptionValueListContinuedContext extends ParserRuleContext {
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    optionValue(): OptionValueContext[];
    optionValue(i: number): OptionValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OptionValueNoOptionTypeContext extends ParserRuleContext {
    internalVariableName(): InternalVariableNameContext | undefined;
    equal(): EqualContext | undefined;
    setExprOrDefault(): SetExprOrDefaultContext | undefined;
    charsetClause(): CharsetClauseContext | undefined;
    userVariable(): UserVariableContext | undefined;
    expr(): ExprContext | undefined;
    setSystemVariable(): SetSystemVariableContext | undefined;
    NAMES_SYMBOL(): TerminalNode | undefined;
    charsetName(): CharsetNameContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    collate(): CollateContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OptionValueContext extends ParserRuleContext {
    optionType(): OptionTypeContext | undefined;
    internalVariableName(): InternalVariableNameContext | undefined;
    equal(): EqualContext | undefined;
    setExprOrDefault(): SetExprOrDefaultContext | undefined;
    optionValueNoOptionType(): OptionValueNoOptionTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SetSystemVariableContext extends ParserRuleContext {
    AT_AT_SIGN_SYMBOL(): TerminalNode;
    internalVariableName(): InternalVariableNameContext;
    setVarIdentType(): SetVarIdentTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class StartOptionValueListFollowingOptionTypeContext extends ParserRuleContext {
    optionValueFollowingOptionType(): OptionValueFollowingOptionTypeContext | undefined;
    optionValueListContinued(): OptionValueListContinuedContext | undefined;
    TRANSACTION_SYMBOL(): TerminalNode | undefined;
    transactionCharacteristics(): TransactionCharacteristicsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OptionValueFollowingOptionTypeContext extends ParserRuleContext {
    internalVariableName(): InternalVariableNameContext;
    equal(): EqualContext;
    setExprOrDefault(): SetExprOrDefaultContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SetExprOrDefaultContext extends ParserRuleContext {
    expr(): ExprContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    ON_SYMBOL(): TerminalNode | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    BINARY_SYMBOL(): TerminalNode | undefined;
    ROW_SYMBOL(): TerminalNode | undefined;
    SYSTEM_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ShowStatementContext extends ParserRuleContext {
    _value: Token;
    _object: Token;
    SHOW_SYMBOL(): TerminalNode;
    STATUS_SYMBOL(): TerminalNode | undefined;
    TABLES_SYMBOL(): TerminalNode | undefined;
    tableRef(): TableRefContext | undefined;
    EVENTS_SYMBOL(): TerminalNode | undefined;
    fromOrIn(): FromOrInContext | undefined;
    COUNT_SYMBOL(): TerminalNode | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    MULT_OPERATOR(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    charset(): CharsetContext | undefined;
    FOR_SYMBOL(): TerminalNode | undefined;
    user(): UserContext | undefined;
    USING_SYMBOL(): TerminalNode | undefined;
    userList(): UserListContext | undefined;
    CODE_SYMBOL(): TerminalNode | undefined;
    procedureRef(): ProcedureRefContext | undefined;
    functionRef(): FunctionRefContext | undefined;
    AUTHORS_SYMBOL(): TerminalNode | undefined;
    DATABASES_SYMBOL(): TerminalNode | undefined;
    TRIGGERS_SYMBOL(): TerminalNode | undefined;
    TABLE_SYMBOL(): TerminalNode | undefined;
    OPEN_SYMBOL(): TerminalNode | undefined;
    PLUGINS_SYMBOL(): TerminalNode | undefined;
    ENGINE_SYMBOL(): TerminalNode | undefined;
    MUTEX_SYMBOL(): TerminalNode | undefined;
    LOGS_SYMBOL(): TerminalNode | undefined;
    COLUMNS_SYMBOL(): TerminalNode | undefined;
    FROM_SYMBOL(): TerminalNode | undefined;
    IN_SYMBOL(): TerminalNode | undefined;
    BINARY_SYMBOL(): TerminalNode | undefined;
    MASTER_SYMBOL(): TerminalNode | undefined;
    SLAVE_SYMBOL(): TerminalNode | undefined;
    ENGINES_SYMBOL(): TerminalNode | undefined;
    WARNINGS_SYMBOL(): TerminalNode | undefined;
    ERRORS_SYMBOL(): TerminalNode | undefined;
    PROFILES_SYMBOL(): TerminalNode | undefined;
    PROFILE_SYMBOL(): TerminalNode | undefined;
    PROCESSLIST_SYMBOL(): TerminalNode | undefined;
    COLLATION_SYMBOL(): TerminalNode | undefined;
    CONTRIBUTORS_SYMBOL(): TerminalNode | undefined;
    PRIVILEGES_SYMBOL(): TerminalNode | undefined;
    GRANTS_SYMBOL(): TerminalNode | undefined;
    CREATE_SYMBOL(): TerminalNode | undefined;
    PROCEDURE_SYMBOL(): TerminalNode | undefined;
    FUNCTION_SYMBOL(): TerminalNode | undefined;
    engineRef(): EngineRefContext | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    HOSTS_SYMBOL(): TerminalNode | undefined;
    nonBlocking(): NonBlockingContext | undefined;
    BINLOG_SYMBOL(): TerminalNode | undefined;
    RELAYLOG_SYMBOL(): TerminalNode | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    INDEXES_SYMBOL(): TerminalNode | undefined;
    KEYS_SYMBOL(): TerminalNode | undefined;
    VARIABLES_SYMBOL(): TerminalNode | undefined;
    schemaRef(): SchemaRefContext | undefined;
    eventRef(): EventRefContext | undefined;
    triggerRef(): TriggerRefContext | undefined;
    viewRef(): ViewRefContext | undefined;
    likeOrWhere(): LikeOrWhereContext | undefined;
    showCommandType(): ShowCommandTypeContext | undefined;
    inDb(): InDbContext | undefined;
    FULL_SYMBOL(): TerminalNode | undefined;
    textString(): TextStringContext | undefined;
    ulonglong_number(): Ulonglong_numberContext | undefined;
    limitClause(): LimitClauseContext | undefined;
    channel(): ChannelContext | undefined;
    EXTENDED_SYMBOL(): TerminalNode | undefined;
    whereClause(): WhereClauseContext | undefined;
    STORAGE_SYMBOL(): TerminalNode | undefined;
    profileType(): ProfileTypeContext[];
    profileType(i: number): ProfileTypeContext;
    QUERY_SYMBOL(): TerminalNode | undefined;
    INT_NUMBER(): TerminalNode | undefined;
    optionType(): OptionTypeContext | undefined;
    DATABASE_SYMBOL(): TerminalNode | undefined;
    EVENT_SYMBOL(): TerminalNode | undefined;
    TRIGGER_SYMBOL(): TerminalNode | undefined;
    VIEW_SYMBOL(): TerminalNode | undefined;
    USER_SYMBOL(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ShowCommandTypeContext extends ParserRuleContext {
    FULL_SYMBOL(): TerminalNode | undefined;
    EXTENDED_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class NonBlockingContext extends ParserRuleContext {
    NONBLOCKING_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FromOrInContext extends ParserRuleContext {
    FROM_SYMBOL(): TerminalNode | undefined;
    IN_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InDbContext extends ParserRuleContext {
    fromOrIn(): FromOrInContext;
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ProfileTypeContext extends ParserRuleContext {
    BLOCK_SYMBOL(): TerminalNode | undefined;
    IO_SYMBOL(): TerminalNode | undefined;
    CONTEXT_SYMBOL(): TerminalNode | undefined;
    SWITCHES_SYMBOL(): TerminalNode | undefined;
    PAGE_SYMBOL(): TerminalNode | undefined;
    FAULTS_SYMBOL(): TerminalNode | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    CPU_SYMBOL(): TerminalNode | undefined;
    IPC_SYMBOL(): TerminalNode | undefined;
    MEMORY_SYMBOL(): TerminalNode | undefined;
    SOURCE_SYMBOL(): TerminalNode | undefined;
    SWAPS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OtherAdministrativeStatementContext extends ParserRuleContext {
    _type: Token;
    textLiteral(): TextLiteralContext | undefined;
    BINLOG_SYMBOL(): TerminalNode | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    keyCacheListOrParts(): KeyCacheListOrPartsContext | undefined;
    IN_SYMBOL(): TerminalNode | undefined;
    CACHE_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    FLUSH_SYMBOL(): TerminalNode | undefined;
    flushTables(): FlushTablesContext | undefined;
    flushOption(): FlushOptionContext[];
    flushOption(i: number): FlushOptionContext;
    noWriteToBinLog(): NoWriteToBinLogContext | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    expr(): ExprContext | undefined;
    KILL_SYMBOL(): TerminalNode | undefined;
    CONNECTION_SYMBOL(): TerminalNode | undefined;
    QUERY_SYMBOL(): TerminalNode | undefined;
    INTO_SYMBOL(): TerminalNode | undefined;
    preloadTail(): PreloadTailContext | undefined;
    LOAD_SYMBOL(): TerminalNode | undefined;
    SHUTDOWN_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyCacheListOrPartsContext extends ParserRuleContext {
    keyCacheList(): KeyCacheListContext | undefined;
    assignToKeycachePartition(): AssignToKeycachePartitionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyCacheListContext extends ParserRuleContext {
    assignToKeycache(): AssignToKeycacheContext[];
    assignToKeycache(i: number): AssignToKeycacheContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AssignToKeycacheContext extends ParserRuleContext {
    tableRef(): TableRefContext;
    cacheKeyList(): CacheKeyListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AssignToKeycachePartitionContext extends ParserRuleContext {
    tableRef(): TableRefContext;
    PARTITION_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    allOrPartitionNameList(): AllOrPartitionNameListContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    cacheKeyList(): CacheKeyListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CacheKeyListContext extends ParserRuleContext {
    keyOrIndex(): KeyOrIndexContext;
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    keyUsageList(): KeyUsageListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyUsageElementContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    PRIMARY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyUsageListContext extends ParserRuleContext {
    keyUsageElement(): KeyUsageElementContext[];
    keyUsageElement(i: number): KeyUsageElementContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FlushOptionContext extends ParserRuleContext {
    _option: Token;
    DES_KEY_FILE_SYMBOL(): TerminalNode | undefined;
    HOSTS_SYMBOL(): TerminalNode | undefined;
    PRIVILEGES_SYMBOL(): TerminalNode | undefined;
    STATUS_SYMBOL(): TerminalNode | undefined;
    USER_RESOURCES_SYMBOL(): TerminalNode | undefined;
    LOGS_SYMBOL(): TerminalNode | undefined;
    logType(): LogTypeContext | undefined;
    RELAY_SYMBOL(): TerminalNode | undefined;
    channel(): ChannelContext | undefined;
    CACHE_SYMBOL(): TerminalNode | undefined;
    QUERY_SYMBOL(): TerminalNode | undefined;
    OPTIMIZER_COSTS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LogTypeContext extends ParserRuleContext {
    BINARY_SYMBOL(): TerminalNode | undefined;
    ENGINE_SYMBOL(): TerminalNode | undefined;
    ERROR_SYMBOL(): TerminalNode | undefined;
    GENERAL_SYMBOL(): TerminalNode | undefined;
    SLOW_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FlushTablesContext extends ParserRuleContext {
    TABLES_SYMBOL(): TerminalNode | undefined;
    TABLE_SYMBOL(): TerminalNode | undefined;
    WITH_SYMBOL(): TerminalNode | undefined;
    READ_SYMBOL(): TerminalNode | undefined;
    LOCK_SYMBOL(): TerminalNode | undefined;
    identifierList(): IdentifierListContext | undefined;
    flushTablesOptions(): FlushTablesOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FlushTablesOptionsContext extends ParserRuleContext {
    FOR_SYMBOL(): TerminalNode | undefined;
    EXPORT_SYMBOL(): TerminalNode | undefined;
    WITH_SYMBOL(): TerminalNode | undefined;
    READ_SYMBOL(): TerminalNode | undefined;
    LOCK_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PreloadTailContext extends ParserRuleContext {
    tableRef(): TableRefContext | undefined;
    adminPartition(): AdminPartitionContext | undefined;
    cacheKeyList(): CacheKeyListContext | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    LEAVES_SYMBOL(): TerminalNode | undefined;
    preloadList(): PreloadListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PreloadListContext extends ParserRuleContext {
    preloadKeys(): PreloadKeysContext[];
    preloadKeys(i: number): PreloadKeysContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PreloadKeysContext extends ParserRuleContext {
    tableRef(): TableRefContext;
    cacheKeyList(): CacheKeyListContext | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    LEAVES_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AdminPartitionContext extends ParserRuleContext {
    PARTITION_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    allOrPartitionNameList(): AllOrPartitionNameListContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ResourceGroupManagementContext extends ParserRuleContext {
    createResourceGroup(): CreateResourceGroupContext | undefined;
    alterResourceGroup(): AlterResourceGroupContext | undefined;
    setResourceGroup(): SetResourceGroupContext | undefined;
    dropResourceGroup(): DropResourceGroupContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateResourceGroupContext extends ParserRuleContext {
    CREATE_SYMBOL(): TerminalNode;
    RESOURCE_SYMBOL(): TerminalNode;
    GROUP_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    TYPE_SYMBOL(): TerminalNode;
    USER_SYMBOL(): TerminalNode | undefined;
    SYSTEM_SYMBOL(): TerminalNode | undefined;
    equal(): EqualContext | undefined;
    resourceGroupVcpuList(): ResourceGroupVcpuListContext | undefined;
    resourceGroupPriority(): ResourceGroupPriorityContext | undefined;
    resourceGroupEnableDisable(): ResourceGroupEnableDisableContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ResourceGroupVcpuListContext extends ParserRuleContext {
    VCPU_SYMBOL(): TerminalNode;
    vcpuNumOrRange(): VcpuNumOrRangeContext[];
    vcpuNumOrRange(i: number): VcpuNumOrRangeContext;
    equal(): EqualContext | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class VcpuNumOrRangeContext extends ParserRuleContext {
    INT_NUMBER(): TerminalNode[];
    INT_NUMBER(i: number): TerminalNode;
    MINUS_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ResourceGroupPriorityContext extends ParserRuleContext {
    THREAD_PRIORITY_SYMBOL(): TerminalNode;
    INT_NUMBER(): TerminalNode;
    equal(): EqualContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ResourceGroupEnableDisableContext extends ParserRuleContext {
    ENABLE_SYMBOL(): TerminalNode | undefined;
    DISABLE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterResourceGroupContext extends ParserRuleContext {
    ALTER_SYMBOL(): TerminalNode;
    RESOURCE_SYMBOL(): TerminalNode;
    GROUP_SYMBOL(): TerminalNode;
    resourceGroupRef(): ResourceGroupRefContext;
    resourceGroupVcpuList(): ResourceGroupVcpuListContext | undefined;
    resourceGroupPriority(): ResourceGroupPriorityContext | undefined;
    resourceGroupEnableDisable(): ResourceGroupEnableDisableContext | undefined;
    FORCE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SetResourceGroupContext extends ParserRuleContext {
    SET_SYMBOL(): TerminalNode;
    RESOURCE_SYMBOL(): TerminalNode;
    GROUP_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    FOR_SYMBOL(): TerminalNode | undefined;
    threadIdList(): ThreadIdListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ThreadIdListContext extends ParserRuleContext {
    real_ulong_number(): Real_ulong_numberContext[];
    real_ulong_number(i: number): Real_ulong_numberContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DropResourceGroupContext extends ParserRuleContext {
    DROP_SYMBOL(): TerminalNode;
    RESOURCE_SYMBOL(): TerminalNode;
    GROUP_SYMBOL(): TerminalNode;
    resourceGroupRef(): ResourceGroupRefContext;
    FORCE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UtilityStatementContext extends ParserRuleContext {
    describeCommand(): DescribeCommandContext | undefined;
    explainCommand(): ExplainCommandContext | undefined;
    helpCommand(): HelpCommandContext | undefined;
    useCommand(): UseCommandContext | undefined;
    restartServer(): RestartServerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DescribeCommandContext extends ParserRuleContext {
    tableRef(): TableRefContext;
    EXPLAIN_SYMBOL(): TerminalNode | undefined;
    DESCRIBE_SYMBOL(): TerminalNode | undefined;
    DESC_SYMBOL(): TerminalNode | undefined;
    textString(): TextStringContext | undefined;
    columnRef(): ColumnRefContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExplainCommandContext extends ParserRuleContext {
    explainableStatement(): ExplainableStatementContext;
    EXPLAIN_SYMBOL(): TerminalNode | undefined;
    DESCRIBE_SYMBOL(): TerminalNode | undefined;
    DESC_SYMBOL(): TerminalNode | undefined;
    EXTENDED_SYMBOL(): TerminalNode | undefined;
    PARTITIONS_SYMBOL(): TerminalNode | undefined;
    FORMAT_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    ANALYZE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExplainableStatementContext extends ParserRuleContext {
    selectStatement(): SelectStatementContext | undefined;
    deleteStatement(): DeleteStatementContext | undefined;
    insertStatement(): InsertStatementContext | undefined;
    replaceStatement(): ReplaceStatementContext | undefined;
    updateStatement(): UpdateStatementContext | undefined;
    FOR_SYMBOL(): TerminalNode | undefined;
    CONNECTION_SYMBOL(): TerminalNode | undefined;
    real_ulong_number(): Real_ulong_numberContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class HelpCommandContext extends ParserRuleContext {
    HELP_SYMBOL(): TerminalNode;
    textOrIdentifier(): TextOrIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UseCommandContext extends ParserRuleContext {
    USE_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RestartServerContext extends ParserRuleContext {
    RESTART_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExprContext): void;
}
export declare class ExprIsContext extends ExprContext {
    _type: Token;
    boolPri(): BoolPriContext;
    IS_SYMBOL(): TerminalNode | undefined;
    TRUE_SYMBOL(): TerminalNode | undefined;
    FALSE_SYMBOL(): TerminalNode | undefined;
    UNKNOWN_SYMBOL(): TerminalNode | undefined;
    notRule(): NotRuleContext | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExprNotContext extends ExprContext {
    NOT_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExprAndContext extends ExprContext {
    _op: Token;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    AND_SYMBOL(): TerminalNode | undefined;
    LOGICAL_AND_OPERATOR(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExprXorContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    XOR_SYMBOL(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExprOrContext extends ExprContext {
    _op: Token;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    OR_SYMBOL(): TerminalNode | undefined;
    LOGICAL_OR_OPERATOR(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class BoolPriContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: BoolPriContext): void;
}
export declare class PrimaryExprPredicateContext extends BoolPriContext {
    predicate(): PredicateContext;
    constructor(ctx: BoolPriContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PrimaryExprIsNullContext extends BoolPriContext {
    boolPri(): BoolPriContext;
    IS_SYMBOL(): TerminalNode;
    NULL_SYMBOL(): TerminalNode;
    notRule(): NotRuleContext | undefined;
    constructor(ctx: BoolPriContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PrimaryExprCompareContext extends BoolPriContext {
    boolPri(): BoolPriContext;
    compOp(): CompOpContext;
    predicate(): PredicateContext;
    constructor(ctx: BoolPriContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PrimaryExprAllAnyContext extends BoolPriContext {
    boolPri(): BoolPriContext;
    compOp(): CompOpContext;
    subquery(): SubqueryContext;
    ALL_SYMBOL(): TerminalNode | undefined;
    ANY_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: BoolPriContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CompOpContext extends ParserRuleContext {
    EQUAL_OPERATOR(): TerminalNode | undefined;
    NULL_SAFE_EQUAL_OPERATOR(): TerminalNode | undefined;
    GREATER_OR_EQUAL_OPERATOR(): TerminalNode | undefined;
    GREATER_THAN_OPERATOR(): TerminalNode | undefined;
    LESS_OR_EQUAL_OPERATOR(): TerminalNode | undefined;
    LESS_THAN_OPERATOR(): TerminalNode | undefined;
    NOT_EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PredicateContext extends ParserRuleContext {
    bitExpr(): BitExprContext[];
    bitExpr(i: number): BitExprContext;
    predicateOperations(): PredicateOperationsContext | undefined;
    MEMBER_SYMBOL(): TerminalNode | undefined;
    simpleExprWithParentheses(): SimpleExprWithParenthesesContext | undefined;
    SOUNDS_SYMBOL(): TerminalNode | undefined;
    LIKE_SYMBOL(): TerminalNode | undefined;
    notRule(): NotRuleContext | undefined;
    OF_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PredicateOperationsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PredicateOperationsContext): void;
}
export declare class PredicateExprInContext extends PredicateOperationsContext {
    IN_SYMBOL(): TerminalNode;
    subquery(): SubqueryContext | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    exprList(): ExprListContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PredicateOperationsContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PredicateExprBetweenContext extends PredicateOperationsContext {
    BETWEEN_SYMBOL(): TerminalNode;
    bitExpr(): BitExprContext;
    AND_SYMBOL(): TerminalNode;
    predicate(): PredicateContext;
    constructor(ctx: PredicateOperationsContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PredicateExprLikeContext extends PredicateOperationsContext {
    LIKE_SYMBOL(): TerminalNode;
    simpleExpr(): SimpleExprContext[];
    simpleExpr(i: number): SimpleExprContext;
    ESCAPE_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PredicateOperationsContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PredicateExprRegexContext extends PredicateOperationsContext {
    REGEXP_SYMBOL(): TerminalNode;
    bitExpr(): BitExprContext;
    constructor(ctx: PredicateOperationsContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class BitExprContext extends ParserRuleContext {
    _op: Token;
    simpleExpr(): SimpleExprContext | undefined;
    bitExpr(): BitExprContext[];
    bitExpr(i: number): BitExprContext;
    BITWISE_XOR_OPERATOR(): TerminalNode | undefined;
    MULT_OPERATOR(): TerminalNode | undefined;
    DIV_OPERATOR(): TerminalNode | undefined;
    MOD_OPERATOR(): TerminalNode | undefined;
    DIV_SYMBOL(): TerminalNode | undefined;
    MOD_SYMBOL(): TerminalNode | undefined;
    PLUS_OPERATOR(): TerminalNode | undefined;
    MINUS_OPERATOR(): TerminalNode | undefined;
    INTERVAL_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    interval(): IntervalContext | undefined;
    SHIFT_LEFT_OPERATOR(): TerminalNode | undefined;
    SHIFT_RIGHT_OPERATOR(): TerminalNode | undefined;
    BITWISE_AND_OPERATOR(): TerminalNode | undefined;
    BITWISE_OR_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SimpleExprContext): void;
}
export declare class SimpleExprVariableContext extends SimpleExprContext {
    variable(): VariableContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprColumnRefContext extends SimpleExprContext {
    columnRef(): ColumnRefContext;
    jsonOperator(): JsonOperatorContext | undefined;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprRuntimeFunctionContext extends SimpleExprContext {
    runtimeFunctionCall(): RuntimeFunctionCallContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprFunctionContext extends SimpleExprContext {
    functionCall(): FunctionCallContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprCollateContext extends SimpleExprContext {
    simpleExpr(): SimpleExprContext;
    COLLATE_SYMBOL(): TerminalNode;
    textOrIdentifier(): TextOrIdentifierContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprLiteralContext extends SimpleExprContext {
    literal(): LiteralContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprParamMarkerContext extends SimpleExprContext {
    PARAM_MARKER(): TerminalNode;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprSumContext extends SimpleExprContext {
    sumExpr(): SumExprContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprGroupingOperationContext extends SimpleExprContext {
    groupingOperation(): GroupingOperationContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprWindowingFunctionContext extends SimpleExprContext {
    windowFunctionCall(): WindowFunctionCallContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprConcatContext extends SimpleExprContext {
    simpleExpr(): SimpleExprContext[];
    simpleExpr(i: number): SimpleExprContext;
    CONCAT_PIPES_SYMBOL(): TerminalNode;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprUnaryContext extends SimpleExprContext {
    _op: Token;
    simpleExpr(): SimpleExprContext;
    PLUS_OPERATOR(): TerminalNode | undefined;
    MINUS_OPERATOR(): TerminalNode | undefined;
    BITWISE_NOT_OPERATOR(): TerminalNode | undefined;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprNotContext extends SimpleExprContext {
    not2Rule(): Not2RuleContext;
    simpleExpr(): SimpleExprContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprListContext extends SimpleExprContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    exprList(): ExprListContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    ROW_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprSubQueryContext extends SimpleExprContext {
    subquery(): SubqueryContext;
    EXISTS_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprOdbcContext extends SimpleExprContext {
    OPEN_CURLY_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    expr(): ExprContext;
    CLOSE_CURLY_SYMBOL(): TerminalNode;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprMatchContext extends SimpleExprContext {
    MATCH_SYMBOL(): TerminalNode;
    identListArg(): IdentListArgContext;
    AGAINST_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    bitExpr(): BitExprContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    fulltextOptions(): FulltextOptionsContext | undefined;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprBinaryContext extends SimpleExprContext {
    BINARY_SYMBOL(): TerminalNode;
    simpleExpr(): SimpleExprContext;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprCastContext extends SimpleExprContext {
    CAST_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    AS_SYMBOL(): TerminalNode;
    castType(): CastTypeContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    arrayCast(): ArrayCastContext | undefined;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprCaseContext extends SimpleExprContext {
    CASE_SYMBOL(): TerminalNode;
    END_SYMBOL(): TerminalNode;
    expr(): ExprContext | undefined;
    whenExpression(): WhenExpressionContext[];
    whenExpression(i: number): WhenExpressionContext;
    thenExpression(): ThenExpressionContext[];
    thenExpression(i: number): ThenExpressionContext;
    elseExpression(): ElseExpressionContext | undefined;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprConvertContext extends SimpleExprContext {
    CONVERT_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    COMMA_SYMBOL(): TerminalNode;
    castType(): CastTypeContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprConvertUsingContext extends SimpleExprContext {
    CONVERT_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    USING_SYMBOL(): TerminalNode;
    charsetName(): CharsetNameContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprDefaultContext extends SimpleExprContext {
    DEFAULT_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    simpleIdentifier(): SimpleIdentifierContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprValuesContext extends SimpleExprContext {
    VALUES_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    simpleIdentifier(): SimpleIdentifierContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprIntervalContext extends SimpleExprContext {
    INTERVAL_SYMBOL(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    interval(): IntervalContext;
    PLUS_OPERATOR(): TerminalNode;
    constructor(ctx: SimpleExprContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ArrayCastContext extends ParserRuleContext {
    ARRAY_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class JsonOperatorContext extends ParserRuleContext {
    JSON_SEPARATOR_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext;
    JSON_UNQUOTED_SEPARATOR_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SumExprContext extends ParserRuleContext {
    _name: Token;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    inSumExpr(): InSumExprContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    AVG_SYMBOL(): TerminalNode | undefined;
    DISTINCT_SYMBOL(): TerminalNode | undefined;
    windowingClause(): WindowingClauseContext | undefined;
    BIT_AND_SYMBOL(): TerminalNode | undefined;
    BIT_OR_SYMBOL(): TerminalNode | undefined;
    BIT_XOR_SYMBOL(): TerminalNode | undefined;
    jsonFunction(): JsonFunctionContext | undefined;
    MULT_OPERATOR(): TerminalNode | undefined;
    COUNT_SYMBOL(): TerminalNode | undefined;
    ALL_SYMBOL(): TerminalNode | undefined;
    exprList(): ExprListContext | undefined;
    MIN_SYMBOL(): TerminalNode | undefined;
    MAX_SYMBOL(): TerminalNode | undefined;
    STD_SYMBOL(): TerminalNode | undefined;
    VARIANCE_SYMBOL(): TerminalNode | undefined;
    STDDEV_SAMP_SYMBOL(): TerminalNode | undefined;
    VAR_SAMP_SYMBOL(): TerminalNode | undefined;
    SUM_SYMBOL(): TerminalNode | undefined;
    GROUP_CONCAT_SYMBOL(): TerminalNode | undefined;
    orderClause(): OrderClauseContext | undefined;
    SEPARATOR_SYMBOL(): TerminalNode | undefined;
    textString(): TextStringContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GroupingOperationContext extends ParserRuleContext {
    GROUPING_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    exprList(): ExprListContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowFunctionCallContext extends ParserRuleContext {
    parentheses(): ParenthesesContext | undefined;
    windowingClause(): WindowingClauseContext;
    ROW_NUMBER_SYMBOL(): TerminalNode | undefined;
    RANK_SYMBOL(): TerminalNode | undefined;
    DENSE_RANK_SYMBOL(): TerminalNode | undefined;
    CUME_DIST_SYMBOL(): TerminalNode | undefined;
    PERCENT_RANK_SYMBOL(): TerminalNode | undefined;
    NTILE_SYMBOL(): TerminalNode | undefined;
    simpleExprWithParentheses(): SimpleExprWithParenthesesContext | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    LEAD_SYMBOL(): TerminalNode | undefined;
    LAG_SYMBOL(): TerminalNode | undefined;
    leadLagInfo(): LeadLagInfoContext | undefined;
    nullTreatment(): NullTreatmentContext | undefined;
    exprWithParentheses(): ExprWithParenthesesContext | undefined;
    FIRST_VALUE_SYMBOL(): TerminalNode | undefined;
    LAST_VALUE_SYMBOL(): TerminalNode | undefined;
    NTH_VALUE_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode | undefined;
    simpleExpr(): SimpleExprContext | undefined;
    FROM_SYMBOL(): TerminalNode | undefined;
    FIRST_SYMBOL(): TerminalNode | undefined;
    LAST_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowingClauseContext extends ParserRuleContext {
    OVER_SYMBOL(): TerminalNode;
    windowName(): WindowNameContext | undefined;
    windowSpec(): WindowSpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LeadLagInfoContext extends ParserRuleContext {
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    ulonglong_number(): Ulonglong_numberContext | undefined;
    PARAM_MARKER(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class NullTreatmentContext extends ParserRuleContext {
    NULLS_SYMBOL(): TerminalNode;
    RESPECT_SYMBOL(): TerminalNode | undefined;
    IGNORE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class JsonFunctionContext extends ParserRuleContext {
    JSON_ARRAYAGG_SYMBOL(): TerminalNode | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode;
    inSumExpr(): InSumExprContext[];
    inSumExpr(i: number): InSumExprContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    windowingClause(): WindowingClauseContext | undefined;
    JSON_OBJECTAGG_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InSumExprContext extends ParserRuleContext {
    expr(): ExprContext;
    ALL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentListArgContext extends ParserRuleContext {
    identList(): IdentListContext;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentListContext extends ParserRuleContext {
    simpleIdentifier(): SimpleIdentifierContext[];
    simpleIdentifier(i: number): SimpleIdentifierContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FulltextOptionsContext extends ParserRuleContext {
    IN_SYMBOL(): TerminalNode | undefined;
    BOOLEAN_SYMBOL(): TerminalNode | undefined;
    MODE_SYMBOL(): TerminalNode | undefined;
    NATURAL_SYMBOL(): TerminalNode | undefined;
    LANGUAGE_SYMBOL(): TerminalNode | undefined;
    WITH_SYMBOL(): TerminalNode | undefined;
    QUERY_SYMBOL(): TerminalNode | undefined;
    EXPANSION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RuntimeFunctionCallContext extends ParserRuleContext {
    _name: Token;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    exprList(): ExprListContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    CHAR_SYMBOL(): TerminalNode | undefined;
    USING_SYMBOL(): TerminalNode | undefined;
    charsetName(): CharsetNameContext | undefined;
    CURRENT_USER_SYMBOL(): TerminalNode | undefined;
    parentheses(): ParenthesesContext | undefined;
    exprWithParentheses(): ExprWithParenthesesContext | undefined;
    DATE_SYMBOL(): TerminalNode | undefined;
    DAY_SYMBOL(): TerminalNode | undefined;
    HOUR_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    INSERT_SYMBOL(): TerminalNode | undefined;
    INTERVAL_SYMBOL(): TerminalNode | undefined;
    LEFT_SYMBOL(): TerminalNode | undefined;
    MINUTE_SYMBOL(): TerminalNode | undefined;
    MONTH_SYMBOL(): TerminalNode | undefined;
    RIGHT_SYMBOL(): TerminalNode | undefined;
    SECOND_SYMBOL(): TerminalNode | undefined;
    TIME_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_SYMBOL(): TerminalNode | undefined;
    trimFunction(): TrimFunctionContext | undefined;
    USER_SYMBOL(): TerminalNode | undefined;
    VALUES_SYMBOL(): TerminalNode | undefined;
    YEAR_SYMBOL(): TerminalNode | undefined;
    ADDDATE_SYMBOL(): TerminalNode | undefined;
    SUBDATE_SYMBOL(): TerminalNode | undefined;
    interval(): IntervalContext | undefined;
    CURDATE_SYMBOL(): TerminalNode | undefined;
    CURTIME_SYMBOL(): TerminalNode | undefined;
    timeFunctionParameters(): TimeFunctionParametersContext | undefined;
    DATE_ADD_SYMBOL(): TerminalNode | undefined;
    DATE_SUB_SYMBOL(): TerminalNode | undefined;
    FROM_SYMBOL(): TerminalNode | undefined;
    EXTRACT_SYMBOL(): TerminalNode | undefined;
    dateTimeTtype(): DateTimeTtypeContext | undefined;
    GET_FORMAT_SYMBOL(): TerminalNode | undefined;
    NOW_SYMBOL(): TerminalNode | undefined;
    bitExpr(): BitExprContext | undefined;
    IN_SYMBOL(): TerminalNode | undefined;
    POSITION_SYMBOL(): TerminalNode | undefined;
    substringFunction(): SubstringFunctionContext | undefined;
    SYSDATE_SYMBOL(): TerminalNode | undefined;
    intervalTimeStamp(): IntervalTimeStampContext | undefined;
    TIMESTAMP_ADD_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_DIFF_SYMBOL(): TerminalNode | undefined;
    UTC_DATE_SYMBOL(): TerminalNode | undefined;
    UTC_TIME_SYMBOL(): TerminalNode | undefined;
    UTC_TIMESTAMP_SYMBOL(): TerminalNode | undefined;
    ASCII_SYMBOL(): TerminalNode | undefined;
    CHARSET_SYMBOL(): TerminalNode | undefined;
    exprListWithParentheses(): ExprListWithParenthesesContext | undefined;
    COALESCE_SYMBOL(): TerminalNode | undefined;
    COLLATION_SYMBOL(): TerminalNode | undefined;
    DATABASE_SYMBOL(): TerminalNode | undefined;
    IF_SYMBOL(): TerminalNode | undefined;
    FORMAT_SYMBOL(): TerminalNode | undefined;
    MICROSECOND_SYMBOL(): TerminalNode | undefined;
    MOD_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    OLD_PASSWORD_SYMBOL(): TerminalNode | undefined;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    QUARTER_SYMBOL(): TerminalNode | undefined;
    REPEAT_SYMBOL(): TerminalNode | undefined;
    REPLACE_SYMBOL(): TerminalNode | undefined;
    REVERSE_SYMBOL(): TerminalNode | undefined;
    ROW_COUNT_SYMBOL(): TerminalNode | undefined;
    TRUNCATE_SYMBOL(): TerminalNode | undefined;
    WEEK_SYMBOL(): TerminalNode | undefined;
    WEIGHT_STRING_SYMBOL(): TerminalNode | undefined;
    AS_SYMBOL(): TerminalNode | undefined;
    BINARY_SYMBOL(): TerminalNode | undefined;
    wsNumCodepoints(): WsNumCodepointsContext | undefined;
    ulong_number(): Ulong_numberContext[];
    ulong_number(i: number): Ulong_numberContext;
    weightStringLevels(): WeightStringLevelsContext | undefined;
    geometryFunction(): GeometryFunctionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GeometryFunctionContext extends ParserRuleContext {
    _name: Token;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA_SYMBOL(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    CONTAINS_SYMBOL(): TerminalNode | undefined;
    GEOMETRYCOLLECTION_SYMBOL(): TerminalNode | undefined;
    exprList(): ExprListContext | undefined;
    exprListWithParentheses(): ExprListWithParenthesesContext | undefined;
    LINESTRING_SYMBOL(): TerminalNode | undefined;
    MULTILINESTRING_SYMBOL(): TerminalNode | undefined;
    MULTIPOINT_SYMBOL(): TerminalNode | undefined;
    MULTIPOLYGON_SYMBOL(): TerminalNode | undefined;
    POINT_SYMBOL(): TerminalNode | undefined;
    POLYGON_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TimeFunctionParametersContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    fractionalPrecision(): FractionalPrecisionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FractionalPrecisionContext extends ParserRuleContext {
    INT_NUMBER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WeightStringLevelsContext extends ParserRuleContext {
    LEVEL_SYMBOL(): TerminalNode;
    real_ulong_number(): Real_ulong_numberContext[];
    real_ulong_number(i: number): Real_ulong_numberContext;
    MINUS_OPERATOR(): TerminalNode | undefined;
    weightStringLevelListItem(): WeightStringLevelListItemContext[];
    weightStringLevelListItem(i: number): WeightStringLevelListItemContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WeightStringLevelListItemContext extends ParserRuleContext {
    real_ulong_number(): Real_ulong_numberContext;
    REVERSE_SYMBOL(): TerminalNode | undefined;
    ASC_SYMBOL(): TerminalNode | undefined;
    DESC_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DateTimeTtypeContext extends ParserRuleContext {
    DATE_SYMBOL(): TerminalNode | undefined;
    TIME_SYMBOL(): TerminalNode | undefined;
    DATETIME_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TrimFunctionContext extends ParserRuleContext {
    TRIM_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    LEADING_SYMBOL(): TerminalNode | undefined;
    FROM_SYMBOL(): TerminalNode | undefined;
    TRAILING_SYMBOL(): TerminalNode | undefined;
    BOTH_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SubstringFunctionContext extends ParserRuleContext {
    SUBSTRING_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    FROM_SYMBOL(): TerminalNode | undefined;
    FOR_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FunctionCallContext extends ParserRuleContext {
    pureIdentifier(): PureIdentifierContext | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    udfExprList(): UdfExprListContext | undefined;
    qualifiedIdentifier(): QualifiedIdentifierContext | undefined;
    exprList(): ExprListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UdfExprListContext extends ParserRuleContext {
    udfExpr(): UdfExprContext[];
    udfExpr(i: number): UdfExprContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UdfExprContext extends ParserRuleContext {
    expr(): ExprContext;
    selectAlias(): SelectAliasContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class VariableContext extends ParserRuleContext {
    userVariable(): UserVariableContext | undefined;
    ASSIGN_OPERATOR(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    systemVariable(): SystemVariableContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UserVariableContext extends ParserRuleContext {
    AT_SIGN_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    AT_TEXT_SUFFIX(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SystemVariableContext extends ParserRuleContext {
    AT_AT_SIGN_SYMBOL(): TerminalNode;
    textOrIdentifier(): TextOrIdentifierContext;
    varIdentType(): VarIdentTypeContext | undefined;
    dotIdentifier(): DotIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InternalVariableNameContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    lValueIdentifier(): LValueIdentifierContext | undefined;
    dotIdentifier(): DotIdentifierContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WhenExpressionContext extends ParserRuleContext {
    WHEN_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ThenExpressionContext extends ParserRuleContext {
    THEN_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ElseExpressionContext extends ParserRuleContext {
    ELSE_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CastTypeContext extends ParserRuleContext {
    BINARY_SYMBOL(): TerminalNode | undefined;
    fieldLength(): FieldLengthContext | undefined;
    CHAR_SYMBOL(): TerminalNode | undefined;
    charsetWithOptBinary(): CharsetWithOptBinaryContext | undefined;
    nchar(): NcharContext | undefined;
    SIGNED_SYMBOL(): TerminalNode | undefined;
    INT_SYMBOL(): TerminalNode | undefined;
    UNSIGNED_SYMBOL(): TerminalNode | undefined;
    DATE_SYMBOL(): TerminalNode | undefined;
    TIME_SYMBOL(): TerminalNode | undefined;
    typeDatetimePrecision(): TypeDatetimePrecisionContext | undefined;
    DATETIME_SYMBOL(): TerminalNode | undefined;
    DECIMAL_SYMBOL(): TerminalNode | undefined;
    floatOptions(): FloatOptionsContext | undefined;
    JSON_SYMBOL(): TerminalNode | undefined;
    realType(): RealTypeContext | undefined;
    FLOAT_SYMBOL(): TerminalNode | undefined;
    standardFloatOptions(): StandardFloatOptionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExprListContext extends ParserRuleContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CharsetContext extends ParserRuleContext {
    CHAR_SYMBOL(): TerminalNode | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    CHARSET_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class NotRuleContext extends ParserRuleContext {
    NOT_SYMBOL(): TerminalNode | undefined;
    NOT2_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class Not2RuleContext extends ParserRuleContext {
    LOGICAL_NOT_OPERATOR(): TerminalNode | undefined;
    NOT2_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IntervalContext extends ParserRuleContext {
    intervalTimeStamp(): IntervalTimeStampContext | undefined;
    SECOND_MICROSECOND_SYMBOL(): TerminalNode | undefined;
    MINUTE_MICROSECOND_SYMBOL(): TerminalNode | undefined;
    MINUTE_SECOND_SYMBOL(): TerminalNode | undefined;
    HOUR_MICROSECOND_SYMBOL(): TerminalNode | undefined;
    HOUR_SECOND_SYMBOL(): TerminalNode | undefined;
    HOUR_MINUTE_SYMBOL(): TerminalNode | undefined;
    DAY_MICROSECOND_SYMBOL(): TerminalNode | undefined;
    DAY_SECOND_SYMBOL(): TerminalNode | undefined;
    DAY_MINUTE_SYMBOL(): TerminalNode | undefined;
    DAY_HOUR_SYMBOL(): TerminalNode | undefined;
    YEAR_MONTH_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IntervalTimeStampContext extends ParserRuleContext {
    MICROSECOND_SYMBOL(): TerminalNode | undefined;
    SECOND_SYMBOL(): TerminalNode | undefined;
    MINUTE_SYMBOL(): TerminalNode | undefined;
    HOUR_SYMBOL(): TerminalNode | undefined;
    DAY_SYMBOL(): TerminalNode | undefined;
    WEEK_SYMBOL(): TerminalNode | undefined;
    MONTH_SYMBOL(): TerminalNode | undefined;
    QUARTER_SYMBOL(): TerminalNode | undefined;
    YEAR_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExprListWithParenthesesContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    exprList(): ExprListContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ExprWithParenthesesContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleExprWithParenthesesContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    simpleExpr(): SimpleExprContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OrderListContext extends ParserRuleContext {
    orderExpression(): OrderExpressionContext[];
    orderExpression(i: number): OrderExpressionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OrderExpressionContext extends ParserRuleContext {
    expr(): ExprContext;
    direction(): DirectionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GroupListContext extends ParserRuleContext {
    groupingExpression(): GroupingExpressionContext[];
    groupingExpression(i: number): GroupingExpressionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GroupingExpressionContext extends ParserRuleContext {
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ChannelContext extends ParserRuleContext {
    FOR_SYMBOL(): TerminalNode;
    CHANNEL_SYMBOL(): TerminalNode;
    textStringNoLinebreak(): TextStringNoLinebreakContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CompoundStatementContext extends ParserRuleContext {
    simpleStatement(): SimpleStatementContext | undefined;
    returnStatement(): ReturnStatementContext | undefined;
    ifStatement(): IfStatementContext | undefined;
    caseStatement(): CaseStatementContext | undefined;
    labeledBlock(): LabeledBlockContext | undefined;
    unlabeledBlock(): UnlabeledBlockContext | undefined;
    labeledControl(): LabeledControlContext | undefined;
    unlabeledControl(): UnlabeledControlContext | undefined;
    leaveStatement(): LeaveStatementContext | undefined;
    iterateStatement(): IterateStatementContext | undefined;
    cursorOpen(): CursorOpenContext | undefined;
    cursorFetch(): CursorFetchContext | undefined;
    cursorClose(): CursorCloseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ReturnStatementContext extends ParserRuleContext {
    RETURN_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IfStatementContext extends ParserRuleContext {
    IF_SYMBOL(): TerminalNode[];
    IF_SYMBOL(i: number): TerminalNode;
    ifBody(): IfBodyContext;
    END_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IfBodyContext extends ParserRuleContext {
    expr(): ExprContext;
    thenStatement(): ThenStatementContext;
    ELSEIF_SYMBOL(): TerminalNode | undefined;
    ifBody(): IfBodyContext | undefined;
    ELSE_SYMBOL(): TerminalNode | undefined;
    compoundStatementList(): CompoundStatementListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ThenStatementContext extends ParserRuleContext {
    THEN_SYMBOL(): TerminalNode;
    compoundStatementList(): CompoundStatementListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CompoundStatementListContext extends ParserRuleContext {
    compoundStatement(): CompoundStatementContext[];
    compoundStatement(i: number): CompoundStatementContext;
    SEMICOLON_SYMBOL(): TerminalNode[];
    SEMICOLON_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CaseStatementContext extends ParserRuleContext {
    CASE_SYMBOL(): TerminalNode[];
    CASE_SYMBOL(i: number): TerminalNode;
    END_SYMBOL(): TerminalNode;
    expr(): ExprContext | undefined;
    whenExpression(): WhenExpressionContext[];
    whenExpression(i: number): WhenExpressionContext;
    thenStatement(): ThenStatementContext[];
    thenStatement(i: number): ThenStatementContext;
    elseStatement(): ElseStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ElseStatementContext extends ParserRuleContext {
    ELSE_SYMBOL(): TerminalNode;
    compoundStatementList(): CompoundStatementListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LabeledBlockContext extends ParserRuleContext {
    label(): LabelContext;
    beginEndBlock(): BeginEndBlockContext;
    labelRef(): LabelRefContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UnlabeledBlockContext extends ParserRuleContext {
    beginEndBlock(): BeginEndBlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LabelContext extends ParserRuleContext {
    labelIdentifier(): LabelIdentifierContext;
    COLON_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class BeginEndBlockContext extends ParserRuleContext {
    BEGIN_SYMBOL(): TerminalNode;
    END_SYMBOL(): TerminalNode;
    spDeclarations(): SpDeclarationsContext | undefined;
    compoundStatementList(): CompoundStatementListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LabeledControlContext extends ParserRuleContext {
    label(): LabelContext;
    unlabeledControl(): UnlabeledControlContext;
    labelRef(): LabelRefContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UnlabeledControlContext extends ParserRuleContext {
    loopBlock(): LoopBlockContext | undefined;
    whileDoBlock(): WhileDoBlockContext | undefined;
    repeatUntilBlock(): RepeatUntilBlockContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LoopBlockContext extends ParserRuleContext {
    LOOP_SYMBOL(): TerminalNode[];
    LOOP_SYMBOL(i: number): TerminalNode;
    compoundStatementList(): CompoundStatementListContext;
    END_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WhileDoBlockContext extends ParserRuleContext {
    WHILE_SYMBOL(): TerminalNode[];
    WHILE_SYMBOL(i: number): TerminalNode;
    expr(): ExprContext;
    DO_SYMBOL(): TerminalNode;
    compoundStatementList(): CompoundStatementListContext;
    END_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RepeatUntilBlockContext extends ParserRuleContext {
    REPEAT_SYMBOL(): TerminalNode[];
    REPEAT_SYMBOL(i: number): TerminalNode;
    compoundStatementList(): CompoundStatementListContext;
    UNTIL_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    END_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SpDeclarationsContext extends ParserRuleContext {
    spDeclaration(): SpDeclarationContext[];
    spDeclaration(i: number): SpDeclarationContext;
    SEMICOLON_SYMBOL(): TerminalNode[];
    SEMICOLON_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SpDeclarationContext extends ParserRuleContext {
    variableDeclaration(): VariableDeclarationContext | undefined;
    conditionDeclaration(): ConditionDeclarationContext | undefined;
    handlerDeclaration(): HandlerDeclarationContext | undefined;
    cursorDeclaration(): CursorDeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class VariableDeclarationContext extends ParserRuleContext {
    DECLARE_SYMBOL(): TerminalNode;
    identifierList(): IdentifierListContext;
    dataType(): DataTypeContext;
    collate(): CollateContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ConditionDeclarationContext extends ParserRuleContext {
    DECLARE_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    CONDITION_SYMBOL(): TerminalNode;
    FOR_SYMBOL(): TerminalNode;
    spCondition(): SpConditionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SpConditionContext extends ParserRuleContext {
    ulong_number(): Ulong_numberContext | undefined;
    sqlstate(): SqlstateContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SqlstateContext extends ParserRuleContext {
    SQLSTATE_SYMBOL(): TerminalNode;
    textLiteral(): TextLiteralContext;
    VALUE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class HandlerDeclarationContext extends ParserRuleContext {
    DECLARE_SYMBOL(): TerminalNode;
    HANDLER_SYMBOL(): TerminalNode;
    FOR_SYMBOL(): TerminalNode;
    handlerCondition(): HandlerConditionContext[];
    handlerCondition(i: number): HandlerConditionContext;
    compoundStatement(): CompoundStatementContext;
    CONTINUE_SYMBOL(): TerminalNode | undefined;
    EXIT_SYMBOL(): TerminalNode | undefined;
    UNDO_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class HandlerConditionContext extends ParserRuleContext {
    spCondition(): SpConditionContext | undefined;
    identifier(): IdentifierContext | undefined;
    SQLWARNING_SYMBOL(): TerminalNode | undefined;
    notRule(): NotRuleContext | undefined;
    FOUND_SYMBOL(): TerminalNode | undefined;
    SQLEXCEPTION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CursorDeclarationContext extends ParserRuleContext {
    DECLARE_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    CURSOR_SYMBOL(): TerminalNode;
    FOR_SYMBOL(): TerminalNode;
    selectStatement(): SelectStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IterateStatementContext extends ParserRuleContext {
    ITERATE_SYMBOL(): TerminalNode;
    labelRef(): LabelRefContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LeaveStatementContext extends ParserRuleContext {
    LEAVE_SYMBOL(): TerminalNode;
    labelRef(): LabelRefContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GetDiagnosticsContext extends ParserRuleContext {
    GET_SYMBOL(): TerminalNode;
    DIAGNOSTICS_SYMBOL(): TerminalNode;
    statementInformationItem(): StatementInformationItemContext[];
    statementInformationItem(i: number): StatementInformationItemContext;
    CONDITION_SYMBOL(): TerminalNode | undefined;
    signalAllowedExpr(): SignalAllowedExprContext | undefined;
    conditionInformationItem(): ConditionInformationItemContext[];
    conditionInformationItem(i: number): ConditionInformationItemContext;
    CURRENT_SYMBOL(): TerminalNode | undefined;
    STACKED_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SignalAllowedExprContext extends ParserRuleContext {
    literal(): LiteralContext | undefined;
    variable(): VariableContext | undefined;
    qualifiedIdentifier(): QualifiedIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class StatementInformationItemContext extends ParserRuleContext {
    EQUAL_OPERATOR(): TerminalNode;
    NUMBER_SYMBOL(): TerminalNode | undefined;
    ROW_COUNT_SYMBOL(): TerminalNode | undefined;
    variable(): VariableContext | undefined;
    identifier(): IdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ConditionInformationItemContext extends ParserRuleContext {
    EQUAL_OPERATOR(): TerminalNode;
    variable(): VariableContext | undefined;
    identifier(): IdentifierContext | undefined;
    signalInformationItemName(): SignalInformationItemNameContext | undefined;
    RETURNED_SQLSTATE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SignalInformationItemNameContext extends ParserRuleContext {
    CLASS_ORIGIN_SYMBOL(): TerminalNode | undefined;
    SUBCLASS_ORIGIN_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_CATALOG_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_SCHEMA_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_NAME_SYMBOL(): TerminalNode | undefined;
    CATALOG_NAME_SYMBOL(): TerminalNode | undefined;
    SCHEMA_NAME_SYMBOL(): TerminalNode | undefined;
    TABLE_NAME_SYMBOL(): TerminalNode | undefined;
    COLUMN_NAME_SYMBOL(): TerminalNode | undefined;
    CURSOR_NAME_SYMBOL(): TerminalNode | undefined;
    MESSAGE_TEXT_SYMBOL(): TerminalNode | undefined;
    MYSQL_ERRNO_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SignalStatementContext extends ParserRuleContext {
    SIGNAL_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext | undefined;
    sqlstate(): SqlstateContext | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    signalInformationItem(): SignalInformationItemContext[];
    signalInformationItem(i: number): SignalInformationItemContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ResignalStatementContext extends ParserRuleContext {
    RESIGNAL_SYMBOL(): TerminalNode;
    SQLSTATE_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    signalInformationItem(): SignalInformationItemContext[];
    signalInformationItem(i: number): SignalInformationItemContext;
    VALUE_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SignalInformationItemContext extends ParserRuleContext {
    signalInformationItemName(): SignalInformationItemNameContext;
    EQUAL_OPERATOR(): TerminalNode;
    signalAllowedExpr(): SignalAllowedExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CursorOpenContext extends ParserRuleContext {
    OPEN_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CursorCloseContext extends ParserRuleContext {
    CLOSE_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CursorFetchContext extends ParserRuleContext {
    FETCH_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    INTO_SYMBOL(): TerminalNode;
    identifierList(): IdentifierListContext;
    FROM_SYMBOL(): TerminalNode | undefined;
    NEXT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ScheduleContext extends ParserRuleContext {
    AT_SYMBOL(): TerminalNode | undefined;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    EVERY_SYMBOL(): TerminalNode | undefined;
    interval(): IntervalContext | undefined;
    STARTS_SYMBOL(): TerminalNode | undefined;
    ENDS_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ColumnDefinitionContext extends ParserRuleContext {
    columnName(): ColumnNameContext;
    fieldDefinition(): FieldDefinitionContext;
    checkOrReferences(): CheckOrReferencesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CheckOrReferencesContext extends ParserRuleContext {
    checkConstraint(): CheckConstraintContext | undefined;
    references(): ReferencesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CheckConstraintContext extends ParserRuleContext {
    CHECK_SYMBOL(): TerminalNode;
    exprWithParentheses(): ExprWithParenthesesContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ConstraintEnforcementContext extends ParserRuleContext {
    ENFORCED_SYMBOL(): TerminalNode;
    NOT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableConstraintDefContext extends ParserRuleContext {
    _type: Token;
    keyListVariants(): KeyListVariantsContext | undefined;
    KEY_SYMBOL(): TerminalNode | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    indexNameAndType(): IndexNameAndTypeContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    FULLTEXT_SYMBOL(): TerminalNode | undefined;
    keyOrIndex(): KeyOrIndexContext | undefined;
    indexName(): IndexNameContext | undefined;
    fulltextIndexOption(): FulltextIndexOptionContext[];
    fulltextIndexOption(i: number): FulltextIndexOptionContext;
    SPATIAL_SYMBOL(): TerminalNode | undefined;
    spatialIndexOption(): SpatialIndexOptionContext[];
    spatialIndexOption(i: number): SpatialIndexOptionContext;
    keyList(): KeyListContext | undefined;
    references(): ReferencesContext | undefined;
    checkConstraint(): CheckConstraintContext | undefined;
    constraintName(): ConstraintNameContext | undefined;
    FOREIGN_SYMBOL(): TerminalNode | undefined;
    PRIMARY_SYMBOL(): TerminalNode | undefined;
    UNIQUE_SYMBOL(): TerminalNode | undefined;
    constraintEnforcement(): ConstraintEnforcementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ConstraintNameContext extends ParserRuleContext {
    CONSTRAINT_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FieldDefinitionContext extends ParserRuleContext {
    dataType(): DataTypeContext;
    AS_SYMBOL(): TerminalNode | undefined;
    exprWithParentheses(): ExprWithParenthesesContext | undefined;
    columnAttribute(): ColumnAttributeContext[];
    columnAttribute(i: number): ColumnAttributeContext;
    collate(): CollateContext | undefined;
    GENERATED_SYMBOL(): TerminalNode | undefined;
    ALWAYS_SYMBOL(): TerminalNode | undefined;
    VIRTUAL_SYMBOL(): TerminalNode | undefined;
    STORED_SYMBOL(): TerminalNode | undefined;
    gcolAttribute(): GcolAttributeContext[];
    gcolAttribute(i: number): GcolAttributeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ColumnAttributeContext extends ParserRuleContext {
    _value: Token;
    nullLiteral(): NullLiteralContext | undefined;
    NOT_SYMBOL(): TerminalNode | undefined;
    SECONDARY_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    signedLiteral(): SignedLiteralContext | undefined;
    NOW_SYMBOL(): TerminalNode | undefined;
    exprWithParentheses(): ExprWithParenthesesContext | undefined;
    timeFunctionParameters(): TimeFunctionParametersContext | undefined;
    UPDATE_SYMBOL(): TerminalNode | undefined;
    ON_SYMBOL(): TerminalNode | undefined;
    AUTO_INCREMENT_SYMBOL(): TerminalNode | undefined;
    VALUE_SYMBOL(): TerminalNode | undefined;
    SERIAL_SYMBOL(): TerminalNode | undefined;
    KEY_SYMBOL(): TerminalNode | undefined;
    PRIMARY_SYMBOL(): TerminalNode | undefined;
    UNIQUE_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    collate(): CollateContext | undefined;
    columnFormat(): ColumnFormatContext | undefined;
    COLUMN_FORMAT_SYMBOL(): TerminalNode | undefined;
    storageMedia(): StorageMediaContext | undefined;
    STORAGE_SYMBOL(): TerminalNode | undefined;
    real_ulonglong_number(): Real_ulonglong_numberContext | undefined;
    SRID_SYMBOL(): TerminalNode | undefined;
    checkConstraint(): CheckConstraintContext | undefined;
    constraintName(): ConstraintNameContext | undefined;
    constraintEnforcement(): ConstraintEnforcementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ColumnFormatContext extends ParserRuleContext {
    FIXED_SYMBOL(): TerminalNode | undefined;
    DYNAMIC_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class StorageMediaContext extends ParserRuleContext {
    DISK_SYMBOL(): TerminalNode | undefined;
    MEMORY_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class GcolAttributeContext extends ParserRuleContext {
    UNIQUE_SYMBOL(): TerminalNode | undefined;
    KEY_SYMBOL(): TerminalNode | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    textString(): TextStringContext | undefined;
    NULL_SYMBOL(): TerminalNode | undefined;
    notRule(): NotRuleContext | undefined;
    PRIMARY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ReferencesContext extends ParserRuleContext {
    _match: Token;
    _option: Token;
    REFERENCES_SYMBOL(): TerminalNode;
    tableRef(): TableRefContext;
    identifierListWithParentheses(): IdentifierListWithParenthesesContext | undefined;
    MATCH_SYMBOL(): TerminalNode | undefined;
    ON_SYMBOL(): TerminalNode[];
    ON_SYMBOL(i: number): TerminalNode;
    deleteOption(): DeleteOptionContext[];
    deleteOption(i: number): DeleteOptionContext;
    UPDATE_SYMBOL(): TerminalNode | undefined;
    DELETE_SYMBOL(): TerminalNode | undefined;
    FULL_SYMBOL(): TerminalNode | undefined;
    PARTIAL_SYMBOL(): TerminalNode | undefined;
    SIMPLE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DeleteOptionContext extends ParserRuleContext {
    RESTRICT_SYMBOL(): TerminalNode | undefined;
    CASCADE_SYMBOL(): TerminalNode | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    nullLiteral(): NullLiteralContext | undefined;
    NO_SYMBOL(): TerminalNode | undefined;
    ACTION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyListContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    keyPart(): KeyPartContext[];
    keyPart(i: number): KeyPartContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyPartContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    fieldLength(): FieldLengthContext | undefined;
    direction(): DirectionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyListWithExpressionContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    keyPartOrExpression(): KeyPartOrExpressionContext[];
    keyPartOrExpression(i: number): KeyPartOrExpressionContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyPartOrExpressionContext extends ParserRuleContext {
    keyPart(): KeyPartContext | undefined;
    exprWithParentheses(): ExprWithParenthesesContext | undefined;
    direction(): DirectionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class KeyListVariantsContext extends ParserRuleContext {
    keyListWithExpression(): KeyListWithExpressionContext | undefined;
    keyList(): KeyListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexTypeContext extends ParserRuleContext {
    _algorithm: Token;
    BTREE_SYMBOL(): TerminalNode | undefined;
    RTREE_SYMBOL(): TerminalNode | undefined;
    HASH_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexOptionContext extends ParserRuleContext {
    commonIndexOption(): CommonIndexOptionContext | undefined;
    indexTypeClause(): IndexTypeClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CommonIndexOptionContext extends ParserRuleContext {
    KEY_BLOCK_SIZE_SYMBOL(): TerminalNode | undefined;
    ulong_number(): Ulong_numberContext | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    visibility(): VisibilityContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class VisibilityContext extends ParserRuleContext {
    VISIBLE_SYMBOL(): TerminalNode | undefined;
    INVISIBLE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexTypeClauseContext extends ParserRuleContext {
    indexType(): IndexTypeContext;
    USING_SYMBOL(): TerminalNode | undefined;
    TYPE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FulltextIndexOptionContext extends ParserRuleContext {
    commonIndexOption(): CommonIndexOptionContext | undefined;
    WITH_SYMBOL(): TerminalNode | undefined;
    PARSER_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SpatialIndexOptionContext extends ParserRuleContext {
    commonIndexOption(): CommonIndexOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DataTypeDefinitionContext extends ParserRuleContext {
    dataType(): DataTypeContext;
    EOF(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DataTypeContext extends ParserRuleContext {
    _type: Token;
    INT_SYMBOL(): TerminalNode | undefined;
    TINYINT_SYMBOL(): TerminalNode | undefined;
    SMALLINT_SYMBOL(): TerminalNode | undefined;
    MEDIUMINT_SYMBOL(): TerminalNode | undefined;
    BIGINT_SYMBOL(): TerminalNode | undefined;
    fieldLength(): FieldLengthContext | undefined;
    fieldOptions(): FieldOptionsContext | undefined;
    REAL_SYMBOL(): TerminalNode | undefined;
    DOUBLE_SYMBOL(): TerminalNode | undefined;
    precision(): PrecisionContext | undefined;
    PRECISION_SYMBOL(): TerminalNode | undefined;
    FLOAT_SYMBOL(): TerminalNode | undefined;
    DECIMAL_SYMBOL(): TerminalNode | undefined;
    NUMERIC_SYMBOL(): TerminalNode | undefined;
    FIXED_SYMBOL(): TerminalNode | undefined;
    floatOptions(): FloatOptionsContext | undefined;
    BIT_SYMBOL(): TerminalNode | undefined;
    BOOL_SYMBOL(): TerminalNode | undefined;
    BOOLEAN_SYMBOL(): TerminalNode | undefined;
    CHAR_SYMBOL(): TerminalNode | undefined;
    charsetWithOptBinary(): CharsetWithOptBinaryContext | undefined;
    nchar(): NcharContext | undefined;
    BINARY_SYMBOL(): TerminalNode | undefined;
    VARYING_SYMBOL(): TerminalNode | undefined;
    VARCHAR_SYMBOL(): TerminalNode | undefined;
    NATIONAL_SYMBOL(): TerminalNode | undefined;
    NVARCHAR_SYMBOL(): TerminalNode | undefined;
    NCHAR_SYMBOL(): TerminalNode | undefined;
    VARBINARY_SYMBOL(): TerminalNode | undefined;
    YEAR_SYMBOL(): TerminalNode | undefined;
    DATE_SYMBOL(): TerminalNode | undefined;
    TIME_SYMBOL(): TerminalNode | undefined;
    typeDatetimePrecision(): TypeDatetimePrecisionContext | undefined;
    TIMESTAMP_SYMBOL(): TerminalNode | undefined;
    DATETIME_SYMBOL(): TerminalNode | undefined;
    TINYBLOB_SYMBOL(): TerminalNode | undefined;
    BLOB_SYMBOL(): TerminalNode | undefined;
    MEDIUMBLOB_SYMBOL(): TerminalNode | undefined;
    LONGBLOB_SYMBOL(): TerminalNode | undefined;
    LONG_SYMBOL(): TerminalNode | undefined;
    TINYTEXT_SYMBOL(): TerminalNode | undefined;
    TEXT_SYMBOL(): TerminalNode | undefined;
    MEDIUMTEXT_SYMBOL(): TerminalNode | undefined;
    LONGTEXT_SYMBOL(): TerminalNode | undefined;
    stringList(): StringListContext | undefined;
    ENUM_SYMBOL(): TerminalNode | undefined;
    SET_SYMBOL(): TerminalNode | undefined;
    SERIAL_SYMBOL(): TerminalNode | undefined;
    JSON_SYMBOL(): TerminalNode | undefined;
    GEOMETRY_SYMBOL(): TerminalNode | undefined;
    GEOMETRYCOLLECTION_SYMBOL(): TerminalNode | undefined;
    POINT_SYMBOL(): TerminalNode | undefined;
    MULTIPOINT_SYMBOL(): TerminalNode | undefined;
    LINESTRING_SYMBOL(): TerminalNode | undefined;
    MULTILINESTRING_SYMBOL(): TerminalNode | undefined;
    POLYGON_SYMBOL(): TerminalNode | undefined;
    MULTIPOLYGON_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class NcharContext extends ParserRuleContext {
    _type: Token;
    NCHAR_SYMBOL(): TerminalNode | undefined;
    CHAR_SYMBOL(): TerminalNode | undefined;
    NATIONAL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RealTypeContext extends ParserRuleContext {
    _type: Token;
    REAL_SYMBOL(): TerminalNode | undefined;
    DOUBLE_SYMBOL(): TerminalNode | undefined;
    PRECISION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FieldLengthContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    real_ulonglong_number(): Real_ulonglong_numberContext | undefined;
    DECIMAL_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FieldOptionsContext extends ParserRuleContext {
    SIGNED_SYMBOL(): TerminalNode[];
    SIGNED_SYMBOL(i: number): TerminalNode;
    UNSIGNED_SYMBOL(): TerminalNode[];
    UNSIGNED_SYMBOL(i: number): TerminalNode;
    ZEROFILL_SYMBOL(): TerminalNode[];
    ZEROFILL_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CharsetWithOptBinaryContext extends ParserRuleContext {
    ascii(): AsciiContext | undefined;
    unicode(): UnicodeContext | undefined;
    BYTE_SYMBOL(): TerminalNode | undefined;
    charset(): CharsetContext | undefined;
    charsetName(): CharsetNameContext | undefined;
    BINARY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AsciiContext extends ParserRuleContext {
    ASCII_SYMBOL(): TerminalNode;
    BINARY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UnicodeContext extends ParserRuleContext {
    UNICODE_SYMBOL(): TerminalNode;
    BINARY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WsNumCodepointsContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    real_ulong_number(): Real_ulong_numberContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TypeDatetimePrecisionContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    INT_NUMBER(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CharsetNameContext extends ParserRuleContext {
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    BINARY_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CollationNameContext extends ParserRuleContext {
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    BINARY_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateTableOptionsContext extends ParserRuleContext {
    createTableOption(): CreateTableOptionContext[];
    createTableOption(i: number): CreateTableOptionContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateTableOptionsSpaceSeparatedContext extends ParserRuleContext {
    createTableOption(): CreateTableOptionContext[];
    createTableOption(i: number): CreateTableOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateTableOptionContext extends ParserRuleContext {
    _option: Token;
    _format: Token;
    _method: Token;
    engineRef(): EngineRefContext | undefined;
    ENGINE_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    SECONDARY_ENGINE_SYMBOL(): TerminalNode | undefined;
    NULL_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    equal(): EqualContext | undefined;
    ulonglong_number(): Ulonglong_numberContext | undefined;
    MAX_ROWS_SYMBOL(): TerminalNode | undefined;
    MIN_ROWS_SYMBOL(): TerminalNode | undefined;
    ulong_number(): Ulong_numberContext | undefined;
    AVG_ROW_LENGTH_SYMBOL(): TerminalNode | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    textString(): TextStringContext | undefined;
    COMPRESSION_SYMBOL(): TerminalNode | undefined;
    ENCRYPTION_SYMBOL(): TerminalNode | undefined;
    AUTO_INCREMENT_SYMBOL(): TerminalNode | undefined;
    ternaryOption(): TernaryOptionContext | undefined;
    PACK_KEYS_SYMBOL(): TerminalNode | undefined;
    STATS_AUTO_RECALC_SYMBOL(): TerminalNode | undefined;
    STATS_PERSISTENT_SYMBOL(): TerminalNode | undefined;
    STATS_SAMPLE_PAGES_SYMBOL(): TerminalNode | undefined;
    CHECKSUM_SYMBOL(): TerminalNode | undefined;
    TABLE_CHECKSUM_SYMBOL(): TerminalNode | undefined;
    DELAY_KEY_WRITE_SYMBOL(): TerminalNode | undefined;
    ROW_FORMAT_SYMBOL(): TerminalNode | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    DYNAMIC_SYMBOL(): TerminalNode | undefined;
    FIXED_SYMBOL(): TerminalNode | undefined;
    COMPRESSED_SYMBOL(): TerminalNode | undefined;
    REDUNDANT_SYMBOL(): TerminalNode | undefined;
    COMPACT_SYMBOL(): TerminalNode | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    tableRefList(): TableRefListContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    UNION_SYMBOL(): TerminalNode | undefined;
    defaultCharset(): DefaultCharsetContext | undefined;
    defaultCollation(): DefaultCollationContext | undefined;
    INSERT_METHOD_SYMBOL(): TerminalNode | undefined;
    NO_SYMBOL(): TerminalNode | undefined;
    FIRST_SYMBOL(): TerminalNode | undefined;
    LAST_SYMBOL(): TerminalNode | undefined;
    DIRECTORY_SYMBOL(): TerminalNode | undefined;
    DATA_SYMBOL(): TerminalNode | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    TABLESPACE_SYMBOL(): TerminalNode | undefined;
    STORAGE_SYMBOL(): TerminalNode | undefined;
    DISK_SYMBOL(): TerminalNode | undefined;
    MEMORY_SYMBOL(): TerminalNode | undefined;
    CONNECTION_SYMBOL(): TerminalNode | undefined;
    KEY_BLOCK_SIZE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TernaryOptionContext extends ParserRuleContext {
    ulong_number(): Ulong_numberContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DefaultCollationContext extends ParserRuleContext {
    COLLATE_SYMBOL(): TerminalNode;
    collationName(): CollationNameContext;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DefaultEncryptionContext extends ParserRuleContext {
    ENCRYPTION_SYMBOL(): TerminalNode;
    textStringLiteral(): TextStringLiteralContext;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DefaultCharsetContext extends ParserRuleContext {
    charset(): CharsetContext;
    charsetName(): CharsetNameContext;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionClauseContext extends ParserRuleContext {
    PARTITION_SYMBOL(): TerminalNode;
    BY_SYMBOL(): TerminalNode;
    partitionTypeDef(): PartitionTypeDefContext;
    PARTITIONS_SYMBOL(): TerminalNode | undefined;
    real_ulong_number(): Real_ulong_numberContext | undefined;
    subPartitions(): SubPartitionsContext | undefined;
    partitionDefinitions(): PartitionDefinitionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionTypeDefContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PartitionTypeDefContext): void;
}
export declare class PartitionDefKeyContext extends PartitionTypeDefContext {
    KEY_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    LINEAR_SYMBOL(): TerminalNode | undefined;
    partitionKeyAlgorithm(): PartitionKeyAlgorithmContext | undefined;
    identifierList(): IdentifierListContext | undefined;
    constructor(ctx: PartitionTypeDefContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionDefHashContext extends PartitionTypeDefContext {
    HASH_SYMBOL(): TerminalNode;
    OPEN_PAR_SYMBOL(): TerminalNode;
    bitExpr(): BitExprContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    LINEAR_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionTypeDefContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionDefRangeListContext extends PartitionTypeDefContext {
    RANGE_SYMBOL(): TerminalNode | undefined;
    LIST_SYMBOL(): TerminalNode | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    bitExpr(): BitExprContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    COLUMNS_SYMBOL(): TerminalNode | undefined;
    identifierList(): IdentifierListContext | undefined;
    constructor(ctx: PartitionTypeDefContext);
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SubPartitionsContext extends ParserRuleContext {
    SUBPARTITION_SYMBOL(): TerminalNode;
    BY_SYMBOL(): TerminalNode;
    HASH_SYMBOL(): TerminalNode | undefined;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    bitExpr(): BitExprContext | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    KEY_SYMBOL(): TerminalNode | undefined;
    identifierListWithParentheses(): IdentifierListWithParenthesesContext | undefined;
    LINEAR_SYMBOL(): TerminalNode | undefined;
    SUBPARTITIONS_SYMBOL(): TerminalNode | undefined;
    real_ulong_number(): Real_ulong_numberContext | undefined;
    partitionKeyAlgorithm(): PartitionKeyAlgorithmContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionKeyAlgorithmContext extends ParserRuleContext {
    ALGORITHM_SYMBOL(): TerminalNode;
    EQUAL_OPERATOR(): TerminalNode;
    real_ulong_number(): Real_ulong_numberContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionDefinitionsContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    partitionDefinition(): PartitionDefinitionContext[];
    partitionDefinition(i: number): PartitionDefinitionContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionDefinitionContext extends ParserRuleContext {
    PARTITION_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    VALUES_SYMBOL(): TerminalNode | undefined;
    LESS_SYMBOL(): TerminalNode | undefined;
    THAN_SYMBOL(): TerminalNode | undefined;
    IN_SYMBOL(): TerminalNode | undefined;
    partitionValuesIn(): PartitionValuesInContext | undefined;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    partitionValueItemListParen(): PartitionValueItemListParenContext | undefined;
    MAXVALUE_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionValuesInContext extends ParserRuleContext {
    partitionValueItemListParen(): PartitionValueItemListParenContext[];
    partitionValueItemListParen(i: number): PartitionValueItemListParenContext;
    OPEN_PAR_SYMBOL(): TerminalNode | undefined;
    CLOSE_PAR_SYMBOL(): TerminalNode | undefined;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionOptionContext extends ParserRuleContext {
    _option: Token;
    identifier(): IdentifierContext | undefined;
    TABLESPACE_SYMBOL(): TerminalNode | undefined;
    EQUAL_OPERATOR(): TerminalNode | undefined;
    engineRef(): EngineRefContext | undefined;
    ENGINE_SYMBOL(): TerminalNode | undefined;
    STORAGE_SYMBOL(): TerminalNode | undefined;
    real_ulong_number(): Real_ulong_numberContext | undefined;
    NODEGROUP_SYMBOL(): TerminalNode | undefined;
    MAX_ROWS_SYMBOL(): TerminalNode | undefined;
    MIN_ROWS_SYMBOL(): TerminalNode | undefined;
    DIRECTORY_SYMBOL(): TerminalNode | undefined;
    textLiteral(): TextLiteralContext | undefined;
    DATA_SYMBOL(): TerminalNode | undefined;
    INDEX_SYMBOL(): TerminalNode | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SubpartitionDefinitionContext extends ParserRuleContext {
    SUBPARTITION_SYMBOL(): TerminalNode;
    textOrIdentifier(): TextOrIdentifierContext;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionValueItemListParenContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    partitionValueItem(): PartitionValueItemContext[];
    partitionValueItem(i: number): PartitionValueItemContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PartitionValueItemContext extends ParserRuleContext {
    bitExpr(): BitExprContext | undefined;
    MAXVALUE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DefinerClauseContext extends ParserRuleContext {
    DEFINER_SYMBOL(): TerminalNode;
    EQUAL_OPERATOR(): TerminalNode;
    user(): UserContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IfExistsContext extends ParserRuleContext {
    IF_SYMBOL(): TerminalNode;
    EXISTS_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IfNotExistsContext extends ParserRuleContext {
    IF_SYMBOL(): TerminalNode;
    notRule(): NotRuleContext;
    EXISTS_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ProcedureParameterContext extends ParserRuleContext {
    _type: Token;
    functionParameter(): FunctionParameterContext;
    IN_SYMBOL(): TerminalNode | undefined;
    OUT_SYMBOL(): TerminalNode | undefined;
    INOUT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FunctionParameterContext extends ParserRuleContext {
    parameterName(): ParameterNameContext;
    typeWithOptCollate(): TypeWithOptCollateContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CollateContext extends ParserRuleContext {
    COLLATE_SYMBOL(): TerminalNode;
    collationName(): CollationNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TypeWithOptCollateContext extends ParserRuleContext {
    dataType(): DataTypeContext;
    collate(): CollateContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SchemaIdentifierPairContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    schemaRef(): SchemaRefContext[];
    schemaRef(i: number): SchemaRefContext;
    COMMA_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewRefListContext extends ParserRuleContext {
    viewRef(): ViewRefContext[];
    viewRef(i: number): ViewRefContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UpdateListContext extends ParserRuleContext {
    updateElement(): UpdateElementContext[];
    updateElement(i: number): UpdateElementContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UpdateElementContext extends ParserRuleContext {
    columnRef(): ColumnRefContext;
    EQUAL_OPERATOR(): TerminalNode;
    expr(): ExprContext | undefined;
    DEFAULT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CharsetClauseContext extends ParserRuleContext {
    charset(): CharsetContext;
    charsetName(): CharsetNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FieldsClauseContext extends ParserRuleContext {
    COLUMNS_SYMBOL(): TerminalNode;
    fieldTerm(): FieldTermContext[];
    fieldTerm(i: number): FieldTermContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FieldTermContext extends ParserRuleContext {
    TERMINATED_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode;
    textString(): TextStringContext;
    ENCLOSED_SYMBOL(): TerminalNode | undefined;
    OPTIONALLY_SYMBOL(): TerminalNode | undefined;
    ESCAPED_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LinesClauseContext extends ParserRuleContext {
    LINES_SYMBOL(): TerminalNode;
    lineTerm(): LineTermContext[];
    lineTerm(i: number): LineTermContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LineTermContext extends ParserRuleContext {
    BY_SYMBOL(): TerminalNode;
    textString(): TextStringContext;
    TERMINATED_SYMBOL(): TerminalNode | undefined;
    STARTING_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UserListContext extends ParserRuleContext {
    user(): UserContext[];
    user(i: number): UserContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateUserListContext extends ParserRuleContext {
    createUserEntry(): CreateUserEntryContext[];
    createUserEntry(i: number): CreateUserEntryContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterUserListContext extends ParserRuleContext {
    alterUserEntry(): AlterUserEntryContext[];
    alterUserEntry(i: number): AlterUserEntryContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class CreateUserEntryContext extends ParserRuleContext {
    user(): UserContext;
    IDENTIFIED_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode | undefined;
    textString(): TextStringContext | undefined;
    WITH_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    RANDOM_SYMBOL(): TerminalNode | undefined;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    AS_SYMBOL(): TerminalNode | undefined;
    textStringHash(): TextStringHashContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class AlterUserEntryContext extends ParserRuleContext {
    user(): UserContext;
    IDENTIFIED_SYMBOL(): TerminalNode | undefined;
    BY_SYMBOL(): TerminalNode | undefined;
    textString(): TextStringContext[];
    textString(i: number): TextStringContext;
    WITH_SYMBOL(): TerminalNode | undefined;
    textOrIdentifier(): TextOrIdentifierContext | undefined;
    discardOldPassword(): DiscardOldPasswordContext | undefined;
    REPLACE_SYMBOL(): TerminalNode | undefined;
    retainCurrentPassword(): RetainCurrentPasswordContext | undefined;
    AS_SYMBOL(): TerminalNode | undefined;
    textStringHash(): TextStringHashContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RetainCurrentPasswordContext extends ParserRuleContext {
    RETAIN_SYMBOL(): TerminalNode;
    CURRENT_SYMBOL(): TerminalNode;
    PASSWORD_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DiscardOldPasswordContext extends ParserRuleContext {
    DISCARD_SYMBOL(): TerminalNode;
    OLD_SYMBOL(): TerminalNode;
    PASSWORD_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ReplacePasswordContext extends ParserRuleContext {
    REPLACE_SYMBOL(): TerminalNode;
    textString(): TextStringContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UserIdentifierOrTextContext extends ParserRuleContext {
    textOrIdentifier(): TextOrIdentifierContext[];
    textOrIdentifier(i: number): TextOrIdentifierContext;
    AT_SIGN_SYMBOL(): TerminalNode | undefined;
    AT_TEXT_SUFFIX(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UserContext extends ParserRuleContext {
    userIdentifierOrText(): UserIdentifierOrTextContext | undefined;
    CURRENT_USER_SYMBOL(): TerminalNode | undefined;
    parentheses(): ParenthesesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LikeClauseContext extends ParserRuleContext {
    LIKE_SYMBOL(): TerminalNode;
    textStringLiteral(): TextStringLiteralContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LikeOrWhereContext extends ParserRuleContext {
    likeClause(): LikeClauseContext | undefined;
    whereClause(): WhereClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OnlineOptionContext extends ParserRuleContext {
    ONLINE_SYMBOL(): TerminalNode | undefined;
    OFFLINE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class NoWriteToBinLogContext extends ParserRuleContext {
    LOCAL_SYMBOL(): TerminalNode | undefined;
    NO_WRITE_TO_BINLOG_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UsePartitionContext extends ParserRuleContext {
    PARTITION_SYMBOL(): TerminalNode;
    identifierListWithParentheses(): IdentifierListWithParenthesesContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FieldIdentifierContext extends ParserRuleContext {
    dotIdentifier(): DotIdentifierContext | undefined;
    qualifiedIdentifier(): QualifiedIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ColumnNameContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    fieldIdentifier(): FieldIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ColumnInternalRefContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ColumnInternalRefListContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    columnInternalRef(): ColumnInternalRefContext[];
    columnInternalRef(i: number): ColumnInternalRefContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ColumnRefContext extends ParserRuleContext {
    fieldIdentifier(): FieldIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class InsertIdentifierContext extends ParserRuleContext {
    columnRef(): ColumnRefContext | undefined;
    tableWild(): TableWildContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexNameContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IndexRefContext extends ParserRuleContext {
    fieldIdentifier(): FieldIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableWildContext extends ParserRuleContext {
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext;
    DOT_SYMBOL(): TerminalNode[];
    DOT_SYMBOL(i: number): TerminalNode;
    MULT_OPERATOR(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SchemaNameContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SchemaRefContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ProcedureNameContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ProcedureRefContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FunctionNameContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FunctionRefContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TriggerNameContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TriggerRefContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewNameContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext | undefined;
    dotIdentifier(): DotIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ViewRefContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext | undefined;
    dotIdentifier(): DotIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TablespaceNameContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TablespaceRefContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LogfileGroupNameContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LogfileGroupRefContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class EventNameContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class EventRefContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class UdfNameContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ServerNameContext extends ParserRuleContext {
    textOrIdentifier(): TextOrIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ServerRefContext extends ParserRuleContext {
    textOrIdentifier(): TextOrIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class EngineRefContext extends ParserRuleContext {
    textOrIdentifier(): TextOrIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableNameContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext | undefined;
    dotIdentifier(): DotIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FilterTableRefContext extends ParserRuleContext {
    schemaRef(): SchemaRefContext;
    dotIdentifier(): DotIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableRefWithWildcardContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    DOT_SYMBOL(): TerminalNode | undefined;
    MULT_OPERATOR(): TerminalNode | undefined;
    dotIdentifier(): DotIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableRefContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext | undefined;
    dotIdentifier(): DotIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableRefListContext extends ParserRuleContext {
    tableRef(): TableRefContext[];
    tableRef(i: number): TableRefContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TableAliasRefListContext extends ParserRuleContext {
    tableRefWithWildcard(): TableRefWithWildcardContext[];
    tableRefWithWildcard(i: number): TableRefWithWildcardContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ParameterNameContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LabelIdentifierContext extends ParserRuleContext {
    pureIdentifier(): PureIdentifierContext | undefined;
    labelKeyword(): LabelKeywordContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LabelRefContext extends ParserRuleContext {
    labelIdentifier(): LabelIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleIdentifierContext extends ParserRuleContext {
    pureIdentifier(): PureIdentifierContext | undefined;
    roleKeyword(): RoleKeywordContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleRefContext extends ParserRuleContext {
    roleIdentifier(): RoleIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PluginRefContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ComponentRefContext extends ParserRuleContext {
    textStringLiteral(): TextStringLiteralContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ResourceGroupRefContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class WindowNameContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PureIdentifierContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    BACK_TICK_QUOTED_ID(): TerminalNode | undefined;
    DOUBLE_QUOTED_TEXT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierContext extends ParserRuleContext {
    pureIdentifier(): PureIdentifierContext | undefined;
    identifierKeyword(): IdentifierKeywordContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierListContext extends ParserRuleContext {
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierListWithParenthesesContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    identifierList(): IdentifierListContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class QualifiedIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    dotIdentifier(): DotIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SimpleIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    dotIdentifier(): DotIdentifierContext[];
    dotIdentifier(i: number): DotIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class DotIdentifierContext extends ParserRuleContext {
    DOT_SYMBOL(): TerminalNode;
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class Ulong_numberContext extends ParserRuleContext {
    INT_NUMBER(): TerminalNode | undefined;
    HEX_NUMBER(): TerminalNode | undefined;
    LONG_NUMBER(): TerminalNode | undefined;
    ULONGLONG_NUMBER(): TerminalNode | undefined;
    DECIMAL_NUMBER(): TerminalNode | undefined;
    FLOAT_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class Real_ulong_numberContext extends ParserRuleContext {
    INT_NUMBER(): TerminalNode | undefined;
    HEX_NUMBER(): TerminalNode | undefined;
    LONG_NUMBER(): TerminalNode | undefined;
    ULONGLONG_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class Ulonglong_numberContext extends ParserRuleContext {
    INT_NUMBER(): TerminalNode | undefined;
    LONG_NUMBER(): TerminalNode | undefined;
    ULONGLONG_NUMBER(): TerminalNode | undefined;
    DECIMAL_NUMBER(): TerminalNode | undefined;
    FLOAT_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class Real_ulonglong_numberContext extends ParserRuleContext {
    INT_NUMBER(): TerminalNode | undefined;
    HEX_NUMBER(): TerminalNode | undefined;
    ULONGLONG_NUMBER(): TerminalNode | undefined;
    LONG_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LiteralContext extends ParserRuleContext {
    textLiteral(): TextLiteralContext | undefined;
    numLiteral(): NumLiteralContext | undefined;
    temporalLiteral(): TemporalLiteralContext | undefined;
    nullLiteral(): NullLiteralContext | undefined;
    boolLiteral(): BoolLiteralContext | undefined;
    HEX_NUMBER(): TerminalNode | undefined;
    BIN_NUMBER(): TerminalNode | undefined;
    UNDERSCORE_CHARSET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SignedLiteralContext extends ParserRuleContext {
    literal(): LiteralContext | undefined;
    PLUS_OPERATOR(): TerminalNode | undefined;
    ulong_number(): Ulong_numberContext | undefined;
    MINUS_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class StringListContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    textString(): TextStringContext[];
    textString(i: number): TextStringContext;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TextStringLiteralContext extends ParserRuleContext {
    _value: Token;
    SINGLE_QUOTED_TEXT(): TerminalNode | undefined;
    DOUBLE_QUOTED_TEXT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TextStringContext extends ParserRuleContext {
    textStringLiteral(): TextStringLiteralContext | undefined;
    HEX_NUMBER(): TerminalNode | undefined;
    BIN_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TextStringHashContext extends ParserRuleContext {
    textStringLiteral(): TextStringLiteralContext | undefined;
    HEX_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TextLiteralContext extends ParserRuleContext {
    textStringLiteral(): TextStringLiteralContext[];
    textStringLiteral(i: number): TextStringLiteralContext;
    NCHAR_TEXT(): TerminalNode | undefined;
    UNDERSCORE_CHARSET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TextStringNoLinebreakContext extends ParserRuleContext {
    textStringLiteral(): TextStringLiteralContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TextStringLiteralListContext extends ParserRuleContext {
    textStringLiteral(): TextStringLiteralContext[];
    textStringLiteral(i: number): TextStringLiteralContext;
    COMMA_SYMBOL(): TerminalNode[];
    COMMA_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class NumLiteralContext extends ParserRuleContext {
    INT_NUMBER(): TerminalNode | undefined;
    LONG_NUMBER(): TerminalNode | undefined;
    ULONGLONG_NUMBER(): TerminalNode | undefined;
    DECIMAL_NUMBER(): TerminalNode | undefined;
    FLOAT_NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class BoolLiteralContext extends ParserRuleContext {
    TRUE_SYMBOL(): TerminalNode | undefined;
    FALSE_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class NullLiteralContext extends ParserRuleContext {
    NULL_SYMBOL(): TerminalNode | undefined;
    NULL2_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TemporalLiteralContext extends ParserRuleContext {
    DATE_SYMBOL(): TerminalNode | undefined;
    SINGLE_QUOTED_TEXT(): TerminalNode;
    TIME_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class FloatOptionsContext extends ParserRuleContext {
    fieldLength(): FieldLengthContext | undefined;
    precision(): PrecisionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class StandardFloatOptionsContext extends ParserRuleContext {
    precision(): PrecisionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class PrecisionContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    INT_NUMBER(): TerminalNode[];
    INT_NUMBER(i: number): TerminalNode;
    COMMA_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class TextOrIdentifierContext extends ParserRuleContext {
    SINGLE_QUOTED_TEXT(): TerminalNode | undefined;
    identifier(): IdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LValueIdentifierContext extends ParserRuleContext {
    pureIdentifier(): PureIdentifierContext | undefined;
    lValueKeyword(): LValueKeywordContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleIdentifierOrTextContext extends ParserRuleContext {
    roleIdentifier(): RoleIdentifierContext | undefined;
    textStringLiteral(): TextStringLiteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SizeNumberContext extends ParserRuleContext {
    real_ulonglong_number(): Real_ulonglong_numberContext | undefined;
    pureIdentifier(): PureIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class ParenthesesContext extends ParserRuleContext {
    OPEN_PAR_SYMBOL(): TerminalNode;
    CLOSE_PAR_SYMBOL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class EqualContext extends ParserRuleContext {
    EQUAL_OPERATOR(): TerminalNode | undefined;
    ASSIGN_OPERATOR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class OptionTypeContext extends ParserRuleContext {
    PERSIST_SYMBOL(): TerminalNode | undefined;
    PERSIST_ONLY_SYMBOL(): TerminalNode | undefined;
    GLOBAL_SYMBOL(): TerminalNode | undefined;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    SESSION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class VarIdentTypeContext extends ParserRuleContext {
    GLOBAL_SYMBOL(): TerminalNode | undefined;
    DOT_SYMBOL(): TerminalNode;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    SESSION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class SetVarIdentTypeContext extends ParserRuleContext {
    PERSIST_SYMBOL(): TerminalNode | undefined;
    DOT_SYMBOL(): TerminalNode;
    PERSIST_ONLY_SYMBOL(): TerminalNode | undefined;
    GLOBAL_SYMBOL(): TerminalNode | undefined;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    SESSION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierKeywordContext extends ParserRuleContext {
    labelKeyword(): LabelKeywordContext | undefined;
    roleOrIdentifierKeyword(): RoleOrIdentifierKeywordContext | undefined;
    EXECUTE_SYMBOL(): TerminalNode | undefined;
    SHUTDOWN_SYMBOL(): TerminalNode | undefined;
    RESTART_SYMBOL(): TerminalNode | undefined;
    identifierKeywordsUnambiguous(): IdentifierKeywordsUnambiguousContext | undefined;
    identifierKeywordsAmbiguous1RolesAndLabels(): IdentifierKeywordsAmbiguous1RolesAndLabelsContext | undefined;
    identifierKeywordsAmbiguous2Labels(): IdentifierKeywordsAmbiguous2LabelsContext | undefined;
    identifierKeywordsAmbiguous3Roles(): IdentifierKeywordsAmbiguous3RolesContext | undefined;
    identifierKeywordsAmbiguous4SystemVariables(): IdentifierKeywordsAmbiguous4SystemVariablesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierKeywordsAmbiguous1RolesAndLabelsContext extends ParserRuleContext {
    EXECUTE_SYMBOL(): TerminalNode | undefined;
    RESTART_SYMBOL(): TerminalNode | undefined;
    SHUTDOWN_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierKeywordsAmbiguous2LabelsContext extends ParserRuleContext {
    ASCII_SYMBOL(): TerminalNode | undefined;
    BEGIN_SYMBOL(): TerminalNode | undefined;
    BYTE_SYMBOL(): TerminalNode | undefined;
    CACHE_SYMBOL(): TerminalNode | undefined;
    CHARSET_SYMBOL(): TerminalNode | undefined;
    CHECKSUM_SYMBOL(): TerminalNode | undefined;
    CLONE_SYMBOL(): TerminalNode | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    COMMIT_SYMBOL(): TerminalNode | undefined;
    CONTAINS_SYMBOL(): TerminalNode | undefined;
    DEALLOCATE_SYMBOL(): TerminalNode | undefined;
    DO_SYMBOL(): TerminalNode | undefined;
    END_SYMBOL(): TerminalNode | undefined;
    FLUSH_SYMBOL(): TerminalNode | undefined;
    FOLLOWS_SYMBOL(): TerminalNode | undefined;
    HANDLER_SYMBOL(): TerminalNode | undefined;
    HELP_SYMBOL(): TerminalNode | undefined;
    IMPORT_SYMBOL(): TerminalNode | undefined;
    INSTALL_SYMBOL(): TerminalNode | undefined;
    LANGUAGE_SYMBOL(): TerminalNode | undefined;
    NO_SYMBOL(): TerminalNode | undefined;
    PRECEDES_SYMBOL(): TerminalNode | undefined;
    PREPARE_SYMBOL(): TerminalNode | undefined;
    REPAIR_SYMBOL(): TerminalNode | undefined;
    RESET_SYMBOL(): TerminalNode | undefined;
    ROLLBACK_SYMBOL(): TerminalNode | undefined;
    SAVEPOINT_SYMBOL(): TerminalNode | undefined;
    SIGNED_SYMBOL(): TerminalNode | undefined;
    SLAVE_SYMBOL(): TerminalNode | undefined;
    START_SYMBOL(): TerminalNode | undefined;
    STOP_SYMBOL(): TerminalNode | undefined;
    TRUNCATE_SYMBOL(): TerminalNode | undefined;
    UNICODE_SYMBOL(): TerminalNode | undefined;
    UNINSTALL_SYMBOL(): TerminalNode | undefined;
    XA_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LabelKeywordContext extends ParserRuleContext {
    roleOrLabelKeyword(): RoleOrLabelKeywordContext | undefined;
    EVENT_SYMBOL(): TerminalNode | undefined;
    FILE_SYMBOL(): TerminalNode | undefined;
    NONE_SYMBOL(): TerminalNode | undefined;
    PROCESS_SYMBOL(): TerminalNode | undefined;
    PROXY_SYMBOL(): TerminalNode | undefined;
    RELOAD_SYMBOL(): TerminalNode | undefined;
    REPLICATION_SYMBOL(): TerminalNode | undefined;
    RESOURCE_SYMBOL(): TerminalNode | undefined;
    SUPER_SYMBOL(): TerminalNode | undefined;
    identifierKeywordsUnambiguous(): IdentifierKeywordsUnambiguousContext | undefined;
    identifierKeywordsAmbiguous3Roles(): IdentifierKeywordsAmbiguous3RolesContext | undefined;
    identifierKeywordsAmbiguous4SystemVariables(): IdentifierKeywordsAmbiguous4SystemVariablesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierKeywordsAmbiguous3RolesContext extends ParserRuleContext {
    EVENT_SYMBOL(): TerminalNode | undefined;
    FILE_SYMBOL(): TerminalNode | undefined;
    NONE_SYMBOL(): TerminalNode | undefined;
    PROCESS_SYMBOL(): TerminalNode | undefined;
    PROXY_SYMBOL(): TerminalNode | undefined;
    RELOAD_SYMBOL(): TerminalNode | undefined;
    REPLICATION_SYMBOL(): TerminalNode | undefined;
    RESOURCE_SYMBOL(): TerminalNode | undefined;
    SUPER_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierKeywordsUnambiguousContext extends ParserRuleContext {
    ACTION_SYMBOL(): TerminalNode | undefined;
    ACCOUNT_SYMBOL(): TerminalNode | undefined;
    ACTIVE_SYMBOL(): TerminalNode | undefined;
    ADDDATE_SYMBOL(): TerminalNode | undefined;
    ADMIN_SYMBOL(): TerminalNode | undefined;
    AFTER_SYMBOL(): TerminalNode | undefined;
    AGAINST_SYMBOL(): TerminalNode | undefined;
    AGGREGATE_SYMBOL(): TerminalNode | undefined;
    ALGORITHM_SYMBOL(): TerminalNode | undefined;
    ALWAYS_SYMBOL(): TerminalNode | undefined;
    ANY_SYMBOL(): TerminalNode | undefined;
    AT_SYMBOL(): TerminalNode | undefined;
    AUTOEXTEND_SIZE_SYMBOL(): TerminalNode | undefined;
    AUTO_INCREMENT_SYMBOL(): TerminalNode | undefined;
    AVG_ROW_LENGTH_SYMBOL(): TerminalNode | undefined;
    AVG_SYMBOL(): TerminalNode | undefined;
    BACKUP_SYMBOL(): TerminalNode | undefined;
    BINLOG_SYMBOL(): TerminalNode | undefined;
    BIT_SYMBOL(): TerminalNode | undefined;
    BLOCK_SYMBOL(): TerminalNode | undefined;
    BOOLEAN_SYMBOL(): TerminalNode | undefined;
    BOOL_SYMBOL(): TerminalNode | undefined;
    BTREE_SYMBOL(): TerminalNode | undefined;
    BUCKETS_SYMBOL(): TerminalNode | undefined;
    CASCADED_SYMBOL(): TerminalNode | undefined;
    CATALOG_NAME_SYMBOL(): TerminalNode | undefined;
    CHAIN_SYMBOL(): TerminalNode | undefined;
    CHANGED_SYMBOL(): TerminalNode | undefined;
    CHANNEL_SYMBOL(): TerminalNode | undefined;
    CIPHER_SYMBOL(): TerminalNode | undefined;
    CLASS_ORIGIN_SYMBOL(): TerminalNode | undefined;
    CLIENT_SYMBOL(): TerminalNode | undefined;
    CLOSE_SYMBOL(): TerminalNode | undefined;
    COALESCE_SYMBOL(): TerminalNode | undefined;
    CODE_SYMBOL(): TerminalNode | undefined;
    COLLATION_SYMBOL(): TerminalNode | undefined;
    COLUMNS_SYMBOL(): TerminalNode | undefined;
    COLUMN_FORMAT_SYMBOL(): TerminalNode | undefined;
    COLUMN_NAME_SYMBOL(): TerminalNode | undefined;
    COMMITTED_SYMBOL(): TerminalNode | undefined;
    COMPACT_SYMBOL(): TerminalNode | undefined;
    COMPLETION_SYMBOL(): TerminalNode | undefined;
    COMPONENT_SYMBOL(): TerminalNode | undefined;
    COMPRESSED_SYMBOL(): TerminalNode | undefined;
    COMPRESSION_SYMBOL(): TerminalNode | undefined;
    CONCURRENT_SYMBOL(): TerminalNode | undefined;
    CONNECTION_SYMBOL(): TerminalNode | undefined;
    CONSISTENT_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_CATALOG_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_NAME_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_SCHEMA_SYMBOL(): TerminalNode | undefined;
    CONTEXT_SYMBOL(): TerminalNode | undefined;
    CPU_SYMBOL(): TerminalNode | undefined;
    CURRENT_SYMBOL(): TerminalNode | undefined;
    CURSOR_NAME_SYMBOL(): TerminalNode | undefined;
    DATAFILE_SYMBOL(): TerminalNode | undefined;
    DATA_SYMBOL(): TerminalNode | undefined;
    DATETIME_SYMBOL(): TerminalNode | undefined;
    DATE_SYMBOL(): TerminalNode | undefined;
    DAY_SYMBOL(): TerminalNode | undefined;
    DEFAULT_AUTH_SYMBOL(): TerminalNode | undefined;
    DEFINER_SYMBOL(): TerminalNode | undefined;
    DEFINITION_SYMBOL(): TerminalNode | undefined;
    DELAY_KEY_WRITE_SYMBOL(): TerminalNode | undefined;
    DESCRIPTION_SYMBOL(): TerminalNode | undefined;
    DIAGNOSTICS_SYMBOL(): TerminalNode | undefined;
    DIRECTORY_SYMBOL(): TerminalNode | undefined;
    DISABLE_SYMBOL(): TerminalNode | undefined;
    DISCARD_SYMBOL(): TerminalNode | undefined;
    DISK_SYMBOL(): TerminalNode | undefined;
    DUMPFILE_SYMBOL(): TerminalNode | undefined;
    DUPLICATE_SYMBOL(): TerminalNode | undefined;
    DYNAMIC_SYMBOL(): TerminalNode | undefined;
    ENABLE_SYMBOL(): TerminalNode | undefined;
    ENCRYPTION_SYMBOL(): TerminalNode | undefined;
    ENDS_SYMBOL(): TerminalNode | undefined;
    ENFORCED_SYMBOL(): TerminalNode | undefined;
    ENGINES_SYMBOL(): TerminalNode | undefined;
    ENGINE_SYMBOL(): TerminalNode | undefined;
    ENUM_SYMBOL(): TerminalNode | undefined;
    ERRORS_SYMBOL(): TerminalNode | undefined;
    ERROR_SYMBOL(): TerminalNode | undefined;
    ESCAPE_SYMBOL(): TerminalNode | undefined;
    EVENTS_SYMBOL(): TerminalNode | undefined;
    EVERY_SYMBOL(): TerminalNode | undefined;
    EXCHANGE_SYMBOL(): TerminalNode | undefined;
    EXCLUDE_SYMBOL(): TerminalNode | undefined;
    EXPANSION_SYMBOL(): TerminalNode | undefined;
    EXPIRE_SYMBOL(): TerminalNode | undefined;
    EXPORT_SYMBOL(): TerminalNode | undefined;
    EXTENDED_SYMBOL(): TerminalNode | undefined;
    EXTENT_SIZE_SYMBOL(): TerminalNode | undefined;
    FAST_SYMBOL(): TerminalNode | undefined;
    FAULTS_SYMBOL(): TerminalNode | undefined;
    FILE_BLOCK_SIZE_SYMBOL(): TerminalNode | undefined;
    FILTER_SYMBOL(): TerminalNode | undefined;
    FIRST_SYMBOL(): TerminalNode | undefined;
    FIXED_SYMBOL(): TerminalNode | undefined;
    FOLLOWING_SYMBOL(): TerminalNode | undefined;
    FORMAT_SYMBOL(): TerminalNode | undefined;
    FOUND_SYMBOL(): TerminalNode | undefined;
    FULL_SYMBOL(): TerminalNode | undefined;
    GENERAL_SYMBOL(): TerminalNode | undefined;
    GEOMETRYCOLLECTION_SYMBOL(): TerminalNode | undefined;
    GEOMETRY_SYMBOL(): TerminalNode | undefined;
    GET_FORMAT_SYMBOL(): TerminalNode | undefined;
    GET_MASTER_PUBLIC_KEY_SYMBOL(): TerminalNode | undefined;
    GRANTS_SYMBOL(): TerminalNode | undefined;
    GROUP_REPLICATION_SYMBOL(): TerminalNode | undefined;
    HASH_SYMBOL(): TerminalNode | undefined;
    HISTOGRAM_SYMBOL(): TerminalNode | undefined;
    HISTORY_SYMBOL(): TerminalNode | undefined;
    HOSTS_SYMBOL(): TerminalNode | undefined;
    HOST_SYMBOL(): TerminalNode | undefined;
    HOUR_SYMBOL(): TerminalNode | undefined;
    IDENTIFIED_SYMBOL(): TerminalNode | undefined;
    IGNORE_SERVER_IDS_SYMBOL(): TerminalNode | undefined;
    INACTIVE_SYMBOL(): TerminalNode | undefined;
    INDEXES_SYMBOL(): TerminalNode | undefined;
    INITIAL_SIZE_SYMBOL(): TerminalNode | undefined;
    INSERT_METHOD_SYMBOL(): TerminalNode | undefined;
    INSTANCE_SYMBOL(): TerminalNode | undefined;
    INVISIBLE_SYMBOL(): TerminalNode | undefined;
    INVOKER_SYMBOL(): TerminalNode | undefined;
    IO_SYMBOL(): TerminalNode | undefined;
    IPC_SYMBOL(): TerminalNode | undefined;
    ISOLATION_SYMBOL(): TerminalNode | undefined;
    ISSUER_SYMBOL(): TerminalNode | undefined;
    JSON_SYMBOL(): TerminalNode | undefined;
    KEY_BLOCK_SIZE_SYMBOL(): TerminalNode | undefined;
    LAST_SYMBOL(): TerminalNode | undefined;
    LEAVES_SYMBOL(): TerminalNode | undefined;
    LESS_SYMBOL(): TerminalNode | undefined;
    LEVEL_SYMBOL(): TerminalNode | undefined;
    LINESTRING_SYMBOL(): TerminalNode | undefined;
    LIST_SYMBOL(): TerminalNode | undefined;
    LOCKED_SYMBOL(): TerminalNode | undefined;
    LOCKS_SYMBOL(): TerminalNode | undefined;
    LOGFILE_SYMBOL(): TerminalNode | undefined;
    LOGS_SYMBOL(): TerminalNode | undefined;
    MASTER_AUTO_POSITION_SYMBOL(): TerminalNode | undefined;
    MASTER_COMPRESSION_ALGORITHM_SYMBOL(): TerminalNode | undefined;
    MASTER_CONNECT_RETRY_SYMBOL(): TerminalNode | undefined;
    MASTER_DELAY_SYMBOL(): TerminalNode | undefined;
    MASTER_HEARTBEAT_PERIOD_SYMBOL(): TerminalNode | undefined;
    MASTER_HOST_SYMBOL(): TerminalNode | undefined;
    NETWORK_NAMESPACE_SYMBOL(): TerminalNode | undefined;
    MASTER_LOG_FILE_SYMBOL(): TerminalNode | undefined;
    MASTER_LOG_POS_SYMBOL(): TerminalNode | undefined;
    MASTER_PASSWORD_SYMBOL(): TerminalNode | undefined;
    MASTER_PORT_SYMBOL(): TerminalNode | undefined;
    MASTER_PUBLIC_KEY_PATH_SYMBOL(): TerminalNode | undefined;
    MASTER_RETRY_COUNT_SYMBOL(): TerminalNode | undefined;
    MASTER_SERVER_ID_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CAPATH_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CA_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CERT_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CIPHER_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CRLPATH_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CRL_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_KEY_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_SYMBOL(): TerminalNode | undefined;
    MASTER_SYMBOL(): TerminalNode | undefined;
    MASTER_TLS_CIPHERSUITES_SYMBOL(): TerminalNode | undefined;
    MASTER_TLS_VERSION_SYMBOL(): TerminalNode | undefined;
    MASTER_USER_SYMBOL(): TerminalNode | undefined;
    MASTER_ZSTD_COMPRESSION_LEVEL_SYMBOL(): TerminalNode | undefined;
    MAX_CONNECTIONS_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_QUERIES_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_ROWS_SYMBOL(): TerminalNode | undefined;
    MAX_SIZE_SYMBOL(): TerminalNode | undefined;
    MAX_UPDATES_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_USER_CONNECTIONS_SYMBOL(): TerminalNode | undefined;
    MEDIUM_SYMBOL(): TerminalNode | undefined;
    MEMORY_SYMBOL(): TerminalNode | undefined;
    MERGE_SYMBOL(): TerminalNode | undefined;
    MESSAGE_TEXT_SYMBOL(): TerminalNode | undefined;
    MICROSECOND_SYMBOL(): TerminalNode | undefined;
    MIGRATE_SYMBOL(): TerminalNode | undefined;
    MINUTE_SYMBOL(): TerminalNode | undefined;
    MIN_ROWS_SYMBOL(): TerminalNode | undefined;
    MODE_SYMBOL(): TerminalNode | undefined;
    MODIFY_SYMBOL(): TerminalNode | undefined;
    MONTH_SYMBOL(): TerminalNode | undefined;
    MULTILINESTRING_SYMBOL(): TerminalNode | undefined;
    MULTIPOINT_SYMBOL(): TerminalNode | undefined;
    MULTIPOLYGON_SYMBOL(): TerminalNode | undefined;
    MUTEX_SYMBOL(): TerminalNode | undefined;
    MYSQL_ERRNO_SYMBOL(): TerminalNode | undefined;
    NAMES_SYMBOL(): TerminalNode | undefined;
    NAME_SYMBOL(): TerminalNode | undefined;
    NATIONAL_SYMBOL(): TerminalNode | undefined;
    NCHAR_SYMBOL(): TerminalNode | undefined;
    NDBCLUSTER_SYMBOL(): TerminalNode | undefined;
    NESTED_SYMBOL(): TerminalNode | undefined;
    NEVER_SYMBOL(): TerminalNode | undefined;
    NEW_SYMBOL(): TerminalNode | undefined;
    NEXT_SYMBOL(): TerminalNode | undefined;
    NODEGROUP_SYMBOL(): TerminalNode | undefined;
    NOWAIT_SYMBOL(): TerminalNode | undefined;
    NO_WAIT_SYMBOL(): TerminalNode | undefined;
    NULLS_SYMBOL(): TerminalNode | undefined;
    NUMBER_SYMBOL(): TerminalNode | undefined;
    NVARCHAR_SYMBOL(): TerminalNode | undefined;
    OFFSET_SYMBOL(): TerminalNode | undefined;
    OJ_SYMBOL(): TerminalNode | undefined;
    OLD_SYMBOL(): TerminalNode | undefined;
    ONE_SYMBOL(): TerminalNode | undefined;
    ONLY_SYMBOL(): TerminalNode | undefined;
    OPEN_SYMBOL(): TerminalNode | undefined;
    OPTIONAL_SYMBOL(): TerminalNode | undefined;
    OPTIONS_SYMBOL(): TerminalNode | undefined;
    ORDINALITY_SYMBOL(): TerminalNode | undefined;
    ORGANIZATION_SYMBOL(): TerminalNode | undefined;
    OTHERS_SYMBOL(): TerminalNode | undefined;
    OWNER_SYMBOL(): TerminalNode | undefined;
    PACK_KEYS_SYMBOL(): TerminalNode | undefined;
    PAGE_SYMBOL(): TerminalNode | undefined;
    PARSER_SYMBOL(): TerminalNode | undefined;
    PARTIAL_SYMBOL(): TerminalNode | undefined;
    PARTITIONING_SYMBOL(): TerminalNode | undefined;
    PARTITIONS_SYMBOL(): TerminalNode | undefined;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    PATH_SYMBOL(): TerminalNode | undefined;
    PHASE_SYMBOL(): TerminalNode | undefined;
    PLUGINS_SYMBOL(): TerminalNode | undefined;
    PLUGIN_DIR_SYMBOL(): TerminalNode | undefined;
    PLUGIN_SYMBOL(): TerminalNode | undefined;
    POINT_SYMBOL(): TerminalNode | undefined;
    POLYGON_SYMBOL(): TerminalNode | undefined;
    PORT_SYMBOL(): TerminalNode | undefined;
    PRECEDING_SYMBOL(): TerminalNode | undefined;
    PRESERVE_SYMBOL(): TerminalNode | undefined;
    PREV_SYMBOL(): TerminalNode | undefined;
    PRIVILEGES_SYMBOL(): TerminalNode | undefined;
    PRIVILEGE_CHECKS_USER_SYMBOL(): TerminalNode | undefined;
    PROCESSLIST_SYMBOL(): TerminalNode | undefined;
    PROFILES_SYMBOL(): TerminalNode | undefined;
    PROFILE_SYMBOL(): TerminalNode | undefined;
    QUARTER_SYMBOL(): TerminalNode | undefined;
    QUERY_SYMBOL(): TerminalNode | undefined;
    QUICK_SYMBOL(): TerminalNode | undefined;
    READ_ONLY_SYMBOL(): TerminalNode | undefined;
    REBUILD_SYMBOL(): TerminalNode | undefined;
    RECOVER_SYMBOL(): TerminalNode | undefined;
    REDO_BUFFER_SIZE_SYMBOL(): TerminalNode | undefined;
    REDUNDANT_SYMBOL(): TerminalNode | undefined;
    REFERENCE_SYMBOL(): TerminalNode | undefined;
    RELAY_SYMBOL(): TerminalNode | undefined;
    RELAYLOG_SYMBOL(): TerminalNode | undefined;
    RELAY_LOG_FILE_SYMBOL(): TerminalNode | undefined;
    RELAY_LOG_POS_SYMBOL(): TerminalNode | undefined;
    RELAY_THREAD_SYMBOL(): TerminalNode | undefined;
    REMOVE_SYMBOL(): TerminalNode | undefined;
    REORGANIZE_SYMBOL(): TerminalNode | undefined;
    REPEATABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_DO_DB_SYMBOL(): TerminalNode | undefined;
    REPLICATE_DO_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_IGNORE_DB_SYMBOL(): TerminalNode | undefined;
    REPLICATE_IGNORE_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_REWRITE_DB_SYMBOL(): TerminalNode | undefined;
    REPLICATE_WILD_DO_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_WILD_IGNORE_TABLE_SYMBOL(): TerminalNode | undefined;
    USER_RESOURCES_SYMBOL(): TerminalNode | undefined;
    RESPECT_SYMBOL(): TerminalNode | undefined;
    RESTORE_SYMBOL(): TerminalNode | undefined;
    RESUME_SYMBOL(): TerminalNode | undefined;
    RETAIN_SYMBOL(): TerminalNode | undefined;
    RETURNED_SQLSTATE_SYMBOL(): TerminalNode | undefined;
    RETURNS_SYMBOL(): TerminalNode | undefined;
    REUSE_SYMBOL(): TerminalNode | undefined;
    REVERSE_SYMBOL(): TerminalNode | undefined;
    ROLE_SYMBOL(): TerminalNode | undefined;
    ROLLUP_SYMBOL(): TerminalNode | undefined;
    ROTATE_SYMBOL(): TerminalNode | undefined;
    ROUTINE_SYMBOL(): TerminalNode | undefined;
    ROW_COUNT_SYMBOL(): TerminalNode | undefined;
    ROW_FORMAT_SYMBOL(): TerminalNode | undefined;
    RTREE_SYMBOL(): TerminalNode | undefined;
    SCHEDULE_SYMBOL(): TerminalNode | undefined;
    SCHEMA_NAME_SYMBOL(): TerminalNode | undefined;
    SECONDARY_ENGINE_SYMBOL(): TerminalNode | undefined;
    SECONDARY_LOAD_SYMBOL(): TerminalNode | undefined;
    SECONDARY_SYMBOL(): TerminalNode | undefined;
    SECONDARY_UNLOAD_SYMBOL(): TerminalNode | undefined;
    SECOND_SYMBOL(): TerminalNode | undefined;
    SECURITY_SYMBOL(): TerminalNode | undefined;
    SERIALIZABLE_SYMBOL(): TerminalNode | undefined;
    SERIAL_SYMBOL(): TerminalNode | undefined;
    SERVER_SYMBOL(): TerminalNode | undefined;
    SHARE_SYMBOL(): TerminalNode | undefined;
    SIMPLE_SYMBOL(): TerminalNode | undefined;
    SKIP_SYMBOL(): TerminalNode | undefined;
    SLOW_SYMBOL(): TerminalNode | undefined;
    SNAPSHOT_SYMBOL(): TerminalNode | undefined;
    SOCKET_SYMBOL(): TerminalNode | undefined;
    SONAME_SYMBOL(): TerminalNode | undefined;
    SOUNDS_SYMBOL(): TerminalNode | undefined;
    SOURCE_SYMBOL(): TerminalNode | undefined;
    SQL_AFTER_GTIDS_SYMBOL(): TerminalNode | undefined;
    SQL_AFTER_MTS_GAPS_SYMBOL(): TerminalNode | undefined;
    SQL_BEFORE_GTIDS_SYMBOL(): TerminalNode | undefined;
    SQL_BUFFER_RESULT_SYMBOL(): TerminalNode | undefined;
    SQL_NO_CACHE_SYMBOL(): TerminalNode | undefined;
    SQL_THREAD_SYMBOL(): TerminalNode | undefined;
    SRID_SYMBOL(): TerminalNode | undefined;
    STACKED_SYMBOL(): TerminalNode | undefined;
    STARTS_SYMBOL(): TerminalNode | undefined;
    STATS_AUTO_RECALC_SYMBOL(): TerminalNode | undefined;
    STATS_PERSISTENT_SYMBOL(): TerminalNode | undefined;
    STATS_SAMPLE_PAGES_SYMBOL(): TerminalNode | undefined;
    STATUS_SYMBOL(): TerminalNode | undefined;
    STORAGE_SYMBOL(): TerminalNode | undefined;
    STRING_SYMBOL(): TerminalNode | undefined;
    SUBCLASS_ORIGIN_SYMBOL(): TerminalNode | undefined;
    SUBDATE_SYMBOL(): TerminalNode | undefined;
    SUBJECT_SYMBOL(): TerminalNode | undefined;
    SUBPARTITIONS_SYMBOL(): TerminalNode | undefined;
    SUBPARTITION_SYMBOL(): TerminalNode | undefined;
    SUSPEND_SYMBOL(): TerminalNode | undefined;
    SWAPS_SYMBOL(): TerminalNode | undefined;
    SWITCHES_SYMBOL(): TerminalNode | undefined;
    TABLES_SYMBOL(): TerminalNode | undefined;
    TABLESPACE_SYMBOL(): TerminalNode | undefined;
    TABLE_CHECKSUM_SYMBOL(): TerminalNode | undefined;
    TABLE_NAME_SYMBOL(): TerminalNode | undefined;
    TEMPORARY_SYMBOL(): TerminalNode | undefined;
    TEMPTABLE_SYMBOL(): TerminalNode | undefined;
    TEXT_SYMBOL(): TerminalNode | undefined;
    THAN_SYMBOL(): TerminalNode | undefined;
    THREAD_PRIORITY_SYMBOL(): TerminalNode | undefined;
    TIES_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_ADD_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_DIFF_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_SYMBOL(): TerminalNode | undefined;
    TIME_SYMBOL(): TerminalNode | undefined;
    TRANSACTION_SYMBOL(): TerminalNode | undefined;
    TRIGGERS_SYMBOL(): TerminalNode | undefined;
    TYPES_SYMBOL(): TerminalNode | undefined;
    TYPE_SYMBOL(): TerminalNode | undefined;
    UNBOUNDED_SYMBOL(): TerminalNode | undefined;
    UNCOMMITTED_SYMBOL(): TerminalNode | undefined;
    UNDEFINED_SYMBOL(): TerminalNode | undefined;
    UNDOFILE_SYMBOL(): TerminalNode | undefined;
    UNDO_BUFFER_SIZE_SYMBOL(): TerminalNode | undefined;
    UNKNOWN_SYMBOL(): TerminalNode | undefined;
    UNTIL_SYMBOL(): TerminalNode | undefined;
    UPGRADE_SYMBOL(): TerminalNode | undefined;
    USER_SYMBOL(): TerminalNode | undefined;
    USE_FRM_SYMBOL(): TerminalNode | undefined;
    VALIDATION_SYMBOL(): TerminalNode | undefined;
    VALUE_SYMBOL(): TerminalNode | undefined;
    VARIABLES_SYMBOL(): TerminalNode | undefined;
    VCPU_SYMBOL(): TerminalNode | undefined;
    VIEW_SYMBOL(): TerminalNode | undefined;
    VISIBLE_SYMBOL(): TerminalNode | undefined;
    WAIT_SYMBOL(): TerminalNode | undefined;
    WARNINGS_SYMBOL(): TerminalNode | undefined;
    WEEK_SYMBOL(): TerminalNode | undefined;
    WEIGHT_STRING_SYMBOL(): TerminalNode | undefined;
    WITHOUT_SYMBOL(): TerminalNode | undefined;
    WORK_SYMBOL(): TerminalNode | undefined;
    WRAPPER_SYMBOL(): TerminalNode | undefined;
    X509_SYMBOL(): TerminalNode | undefined;
    XID_SYMBOL(): TerminalNode | undefined;
    XML_SYMBOL(): TerminalNode | undefined;
    YEAR_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleKeywordContext extends ParserRuleContext {
    roleOrLabelKeyword(): RoleOrLabelKeywordContext | undefined;
    roleOrIdentifierKeyword(): RoleOrIdentifierKeywordContext | undefined;
    identifierKeywordsUnambiguous(): IdentifierKeywordsUnambiguousContext | undefined;
    identifierKeywordsAmbiguous2Labels(): IdentifierKeywordsAmbiguous2LabelsContext | undefined;
    identifierKeywordsAmbiguous4SystemVariables(): IdentifierKeywordsAmbiguous4SystemVariablesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class LValueKeywordContext extends ParserRuleContext {
    identifierKeywordsUnambiguous(): IdentifierKeywordsUnambiguousContext | undefined;
    identifierKeywordsAmbiguous1RolesAndLabels(): IdentifierKeywordsAmbiguous1RolesAndLabelsContext | undefined;
    identifierKeywordsAmbiguous2Labels(): IdentifierKeywordsAmbiguous2LabelsContext | undefined;
    identifierKeywordsAmbiguous3Roles(): IdentifierKeywordsAmbiguous3RolesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class IdentifierKeywordsAmbiguous4SystemVariablesContext extends ParserRuleContext {
    GLOBAL_SYMBOL(): TerminalNode | undefined;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    PERSIST_SYMBOL(): TerminalNode | undefined;
    PERSIST_ONLY_SYMBOL(): TerminalNode | undefined;
    SESSION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleOrIdentifierKeywordContext extends ParserRuleContext {
    ACCOUNT_SYMBOL(): TerminalNode | undefined;
    ASCII_SYMBOL(): TerminalNode | undefined;
    ALWAYS_SYMBOL(): TerminalNode | undefined;
    BACKUP_SYMBOL(): TerminalNode | undefined;
    BEGIN_SYMBOL(): TerminalNode | undefined;
    BYTE_SYMBOL(): TerminalNode | undefined;
    CACHE_SYMBOL(): TerminalNode | undefined;
    CHARSET_SYMBOL(): TerminalNode | undefined;
    CHECKSUM_SYMBOL(): TerminalNode | undefined;
    CLONE_SYMBOL(): TerminalNode | undefined;
    CLOSE_SYMBOL(): TerminalNode | undefined;
    COMMENT_SYMBOL(): TerminalNode | undefined;
    COMMIT_SYMBOL(): TerminalNode | undefined;
    CONTAINS_SYMBOL(): TerminalNode | undefined;
    DEALLOCATE_SYMBOL(): TerminalNode | undefined;
    DO_SYMBOL(): TerminalNode | undefined;
    END_SYMBOL(): TerminalNode | undefined;
    FLUSH_SYMBOL(): TerminalNode | undefined;
    FOLLOWS_SYMBOL(): TerminalNode | undefined;
    FORMAT_SYMBOL(): TerminalNode | undefined;
    GROUP_REPLICATION_SYMBOL(): TerminalNode | undefined;
    HANDLER_SYMBOL(): TerminalNode | undefined;
    HELP_SYMBOL(): TerminalNode | undefined;
    HOST_SYMBOL(): TerminalNode | undefined;
    INSTALL_SYMBOL(): TerminalNode | undefined;
    INVISIBLE_SYMBOL(): TerminalNode | undefined;
    LANGUAGE_SYMBOL(): TerminalNode | undefined;
    NO_SYMBOL(): TerminalNode | undefined;
    OPEN_SYMBOL(): TerminalNode | undefined;
    OPTIONS_SYMBOL(): TerminalNode | undefined;
    OWNER_SYMBOL(): TerminalNode | undefined;
    PARSER_SYMBOL(): TerminalNode | undefined;
    PARTITION_SYMBOL(): TerminalNode | undefined;
    PORT_SYMBOL(): TerminalNode | undefined;
    PRECEDES_SYMBOL(): TerminalNode | undefined;
    PREPARE_SYMBOL(): TerminalNode | undefined;
    REMOVE_SYMBOL(): TerminalNode | undefined;
    REPAIR_SYMBOL(): TerminalNode | undefined;
    RESET_SYMBOL(): TerminalNode | undefined;
    RESTORE_SYMBOL(): TerminalNode | undefined;
    ROLE_SYMBOL(): TerminalNode | undefined;
    ROLLBACK_SYMBOL(): TerminalNode | undefined;
    SAVEPOINT_SYMBOL(): TerminalNode | undefined;
    SECONDARY_SYMBOL(): TerminalNode | undefined;
    SECONDARY_ENGINE_SYMBOL(): TerminalNode | undefined;
    SECONDARY_LOAD_SYMBOL(): TerminalNode | undefined;
    SECONDARY_UNLOAD_SYMBOL(): TerminalNode | undefined;
    SECURITY_SYMBOL(): TerminalNode | undefined;
    SERVER_SYMBOL(): TerminalNode | undefined;
    SIGNED_SYMBOL(): TerminalNode | undefined;
    SOCKET_SYMBOL(): TerminalNode | undefined;
    SLAVE_SYMBOL(): TerminalNode | undefined;
    SONAME_SYMBOL(): TerminalNode | undefined;
    START_SYMBOL(): TerminalNode | undefined;
    STOP_SYMBOL(): TerminalNode | undefined;
    TRUNCATE_SYMBOL(): TerminalNode | undefined;
    UNICODE_SYMBOL(): TerminalNode | undefined;
    UNINSTALL_SYMBOL(): TerminalNode | undefined;
    UPGRADE_SYMBOL(): TerminalNode | undefined;
    VISIBLE_SYMBOL(): TerminalNode | undefined;
    WRAPPER_SYMBOL(): TerminalNode | undefined;
    XA_SYMBOL(): TerminalNode | undefined;
    SHUTDOWN_SYMBOL(): TerminalNode | undefined;
    IMPORT_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
export declare class RoleOrLabelKeywordContext extends ParserRuleContext {
    ACTION_SYMBOL(): TerminalNode | undefined;
    ACTIVE_SYMBOL(): TerminalNode | undefined;
    ADDDATE_SYMBOL(): TerminalNode | undefined;
    AFTER_SYMBOL(): TerminalNode | undefined;
    AGAINST_SYMBOL(): TerminalNode | undefined;
    AGGREGATE_SYMBOL(): TerminalNode | undefined;
    ALGORITHM_SYMBOL(): TerminalNode | undefined;
    ANALYSE_SYMBOL(): TerminalNode | undefined;
    ANY_SYMBOL(): TerminalNode | undefined;
    AT_SYMBOL(): TerminalNode | undefined;
    AUTHORS_SYMBOL(): TerminalNode | undefined;
    AUTO_INCREMENT_SYMBOL(): TerminalNode | undefined;
    AUTOEXTEND_SIZE_SYMBOL(): TerminalNode | undefined;
    AVG_ROW_LENGTH_SYMBOL(): TerminalNode | undefined;
    AVG_SYMBOL(): TerminalNode | undefined;
    BINLOG_SYMBOL(): TerminalNode | undefined;
    BIT_SYMBOL(): TerminalNode | undefined;
    BLOCK_SYMBOL(): TerminalNode | undefined;
    BOOL_SYMBOL(): TerminalNode | undefined;
    BOOLEAN_SYMBOL(): TerminalNode | undefined;
    BTREE_SYMBOL(): TerminalNode | undefined;
    BUCKETS_SYMBOL(): TerminalNode | undefined;
    CASCADED_SYMBOL(): TerminalNode | undefined;
    CATALOG_NAME_SYMBOL(): TerminalNode | undefined;
    CHAIN_SYMBOL(): TerminalNode | undefined;
    CHANGED_SYMBOL(): TerminalNode | undefined;
    CHANNEL_SYMBOL(): TerminalNode | undefined;
    CIPHER_SYMBOL(): TerminalNode | undefined;
    CLIENT_SYMBOL(): TerminalNode | undefined;
    CLASS_ORIGIN_SYMBOL(): TerminalNode | undefined;
    COALESCE_SYMBOL(): TerminalNode | undefined;
    CODE_SYMBOL(): TerminalNode | undefined;
    COLLATION_SYMBOL(): TerminalNode | undefined;
    COLUMN_NAME_SYMBOL(): TerminalNode | undefined;
    COLUMN_FORMAT_SYMBOL(): TerminalNode | undefined;
    COLUMNS_SYMBOL(): TerminalNode | undefined;
    COMMITTED_SYMBOL(): TerminalNode | undefined;
    COMPACT_SYMBOL(): TerminalNode | undefined;
    COMPLETION_SYMBOL(): TerminalNode | undefined;
    COMPONENT_SYMBOL(): TerminalNode | undefined;
    COMPRESSED_SYMBOL(): TerminalNode | undefined;
    COMPRESSION_SYMBOL(): TerminalNode | undefined;
    CONCURRENT_SYMBOL(): TerminalNode | undefined;
    CONNECTION_SYMBOL(): TerminalNode | undefined;
    CONSISTENT_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_CATALOG_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_SCHEMA_SYMBOL(): TerminalNode | undefined;
    CONSTRAINT_NAME_SYMBOL(): TerminalNode | undefined;
    CONTEXT_SYMBOL(): TerminalNode | undefined;
    CONTRIBUTORS_SYMBOL(): TerminalNode | undefined;
    CPU_SYMBOL(): TerminalNode | undefined;
    CURRENT_SYMBOL(): TerminalNode | undefined;
    CURSOR_NAME_SYMBOL(): TerminalNode | undefined;
    DATA_SYMBOL(): TerminalNode | undefined;
    DATAFILE_SYMBOL(): TerminalNode | undefined;
    DATETIME_SYMBOL(): TerminalNode | undefined;
    DATE_SYMBOL(): TerminalNode | undefined;
    DAY_SYMBOL(): TerminalNode | undefined;
    DEFAULT_AUTH_SYMBOL(): TerminalNode | undefined;
    DEFINER_SYMBOL(): TerminalNode | undefined;
    DELAY_KEY_WRITE_SYMBOL(): TerminalNode | undefined;
    DES_KEY_FILE_SYMBOL(): TerminalNode | undefined;
    DESCRIPTION_SYMBOL(): TerminalNode | undefined;
    DIAGNOSTICS_SYMBOL(): TerminalNode | undefined;
    DIRECTORY_SYMBOL(): TerminalNode | undefined;
    DISABLE_SYMBOL(): TerminalNode | undefined;
    DISCARD_SYMBOL(): TerminalNode | undefined;
    DISK_SYMBOL(): TerminalNode | undefined;
    DUMPFILE_SYMBOL(): TerminalNode | undefined;
    DUPLICATE_SYMBOL(): TerminalNode | undefined;
    DYNAMIC_SYMBOL(): TerminalNode | undefined;
    ENCRYPTION_SYMBOL(): TerminalNode | undefined;
    ENDS_SYMBOL(): TerminalNode | undefined;
    ENUM_SYMBOL(): TerminalNode | undefined;
    ENGINE_SYMBOL(): TerminalNode | undefined;
    ENGINES_SYMBOL(): TerminalNode | undefined;
    ERROR_SYMBOL(): TerminalNode | undefined;
    ERRORS_SYMBOL(): TerminalNode | undefined;
    ESCAPE_SYMBOL(): TerminalNode | undefined;
    EVENTS_SYMBOL(): TerminalNode | undefined;
    EVERY_SYMBOL(): TerminalNode | undefined;
    EXCLUDE_SYMBOL(): TerminalNode | undefined;
    EXPANSION_SYMBOL(): TerminalNode | undefined;
    EXPORT_SYMBOL(): TerminalNode | undefined;
    EXTENDED_SYMBOL(): TerminalNode | undefined;
    EXTENT_SIZE_SYMBOL(): TerminalNode | undefined;
    FAULTS_SYMBOL(): TerminalNode | undefined;
    FAST_SYMBOL(): TerminalNode | undefined;
    FOLLOWING_SYMBOL(): TerminalNode | undefined;
    FOUND_SYMBOL(): TerminalNode | undefined;
    ENABLE_SYMBOL(): TerminalNode | undefined;
    FULL_SYMBOL(): TerminalNode | undefined;
    FILE_BLOCK_SIZE_SYMBOL(): TerminalNode | undefined;
    FILTER_SYMBOL(): TerminalNode | undefined;
    FIRST_SYMBOL(): TerminalNode | undefined;
    FIXED_SYMBOL(): TerminalNode | undefined;
    GENERAL_SYMBOL(): TerminalNode | undefined;
    GEOMETRY_SYMBOL(): TerminalNode | undefined;
    GEOMETRYCOLLECTION_SYMBOL(): TerminalNode | undefined;
    GET_FORMAT_SYMBOL(): TerminalNode | undefined;
    GRANTS_SYMBOL(): TerminalNode | undefined;
    GLOBAL_SYMBOL(): TerminalNode | undefined;
    HASH_SYMBOL(): TerminalNode | undefined;
    HISTOGRAM_SYMBOL(): TerminalNode | undefined;
    HISTORY_SYMBOL(): TerminalNode | undefined;
    HOSTS_SYMBOL(): TerminalNode | undefined;
    HOUR_SYMBOL(): TerminalNode | undefined;
    IDENTIFIED_SYMBOL(): TerminalNode | undefined;
    IGNORE_SERVER_IDS_SYMBOL(): TerminalNode | undefined;
    INVOKER_SYMBOL(): TerminalNode | undefined;
    INDEXES_SYMBOL(): TerminalNode | undefined;
    INITIAL_SIZE_SYMBOL(): TerminalNode | undefined;
    INSTANCE_SYMBOL(): TerminalNode | undefined;
    INACTIVE_SYMBOL(): TerminalNode | undefined;
    IO_SYMBOL(): TerminalNode | undefined;
    IPC_SYMBOL(): TerminalNode | undefined;
    ISOLATION_SYMBOL(): TerminalNode | undefined;
    ISSUER_SYMBOL(): TerminalNode | undefined;
    INSERT_METHOD_SYMBOL(): TerminalNode | undefined;
    JSON_SYMBOL(): TerminalNode | undefined;
    KEY_BLOCK_SIZE_SYMBOL(): TerminalNode | undefined;
    LAST_SYMBOL(): TerminalNode | undefined;
    LEAVES_SYMBOL(): TerminalNode | undefined;
    LESS_SYMBOL(): TerminalNode | undefined;
    LEVEL_SYMBOL(): TerminalNode | undefined;
    LINESTRING_SYMBOL(): TerminalNode | undefined;
    LIST_SYMBOL(): TerminalNode | undefined;
    LOCAL_SYMBOL(): TerminalNode | undefined;
    LOCKED_SYMBOL(): TerminalNode | undefined;
    LOCKS_SYMBOL(): TerminalNode | undefined;
    LOGFILE_SYMBOL(): TerminalNode | undefined;
    LOGS_SYMBOL(): TerminalNode | undefined;
    MAX_ROWS_SYMBOL(): TerminalNode | undefined;
    MASTER_SYMBOL(): TerminalNode | undefined;
    MASTER_HEARTBEAT_PERIOD_SYMBOL(): TerminalNode | undefined;
    MASTER_HOST_SYMBOL(): TerminalNode | undefined;
    MASTER_PORT_SYMBOL(): TerminalNode | undefined;
    MASTER_LOG_FILE_SYMBOL(): TerminalNode | undefined;
    MASTER_LOG_POS_SYMBOL(): TerminalNode | undefined;
    MASTER_USER_SYMBOL(): TerminalNode | undefined;
    MASTER_PASSWORD_SYMBOL(): TerminalNode | undefined;
    MASTER_PUBLIC_KEY_PATH_SYMBOL(): TerminalNode | undefined;
    MASTER_SERVER_ID_SYMBOL(): TerminalNode | undefined;
    MASTER_CONNECT_RETRY_SYMBOL(): TerminalNode | undefined;
    MASTER_RETRY_COUNT_SYMBOL(): TerminalNode | undefined;
    MASTER_DELAY_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CA_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CAPATH_SYMBOL(): TerminalNode | undefined;
    MASTER_TLS_VERSION_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CERT_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CIPHER_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CRL_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_CRLPATH_SYMBOL(): TerminalNode | undefined;
    MASTER_SSL_KEY_SYMBOL(): TerminalNode | undefined;
    MASTER_AUTO_POSITION_SYMBOL(): TerminalNode | undefined;
    MAX_CONNECTIONS_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_QUERIES_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_STATEMENT_TIME_SYMBOL(): TerminalNode | undefined;
    MAX_SIZE_SYMBOL(): TerminalNode | undefined;
    MAX_UPDATES_PER_HOUR_SYMBOL(): TerminalNode | undefined;
    MAX_USER_CONNECTIONS_SYMBOL(): TerminalNode | undefined;
    MEDIUM_SYMBOL(): TerminalNode | undefined;
    MEMORY_SYMBOL(): TerminalNode | undefined;
    MERGE_SYMBOL(): TerminalNode | undefined;
    MESSAGE_TEXT_SYMBOL(): TerminalNode | undefined;
    MICROSECOND_SYMBOL(): TerminalNode | undefined;
    MIGRATE_SYMBOL(): TerminalNode | undefined;
    MINUTE_SYMBOL(): TerminalNode | undefined;
    MIN_ROWS_SYMBOL(): TerminalNode | undefined;
    MODIFY_SYMBOL(): TerminalNode | undefined;
    MODE_SYMBOL(): TerminalNode | undefined;
    MONTH_SYMBOL(): TerminalNode | undefined;
    MULTILINESTRING_SYMBOL(): TerminalNode | undefined;
    MULTIPOINT_SYMBOL(): TerminalNode | undefined;
    MULTIPOLYGON_SYMBOL(): TerminalNode | undefined;
    MUTEX_SYMBOL(): TerminalNode | undefined;
    MYSQL_ERRNO_SYMBOL(): TerminalNode | undefined;
    NAME_SYMBOL(): TerminalNode | undefined;
    NAMES_SYMBOL(): TerminalNode | undefined;
    NATIONAL_SYMBOL(): TerminalNode | undefined;
    NCHAR_SYMBOL(): TerminalNode | undefined;
    NDBCLUSTER_SYMBOL(): TerminalNode | undefined;
    NESTED_SYMBOL(): TerminalNode | undefined;
    NEVER_SYMBOL(): TerminalNode | undefined;
    NEXT_SYMBOL(): TerminalNode | undefined;
    NEW_SYMBOL(): TerminalNode | undefined;
    NO_WAIT_SYMBOL(): TerminalNode | undefined;
    NODEGROUP_SYMBOL(): TerminalNode | undefined;
    NULLS_SYMBOL(): TerminalNode | undefined;
    NOWAIT_SYMBOL(): TerminalNode | undefined;
    NUMBER_SYMBOL(): TerminalNode | undefined;
    NVARCHAR_SYMBOL(): TerminalNode | undefined;
    OFFSET_SYMBOL(): TerminalNode | undefined;
    OLD_SYMBOL(): TerminalNode | undefined;
    OLD_PASSWORD_SYMBOL(): TerminalNode | undefined;
    ONE_SYMBOL(): TerminalNode | undefined;
    OPTIONAL_SYMBOL(): TerminalNode | undefined;
    ORDINALITY_SYMBOL(): TerminalNode | undefined;
    ORGANIZATION_SYMBOL(): TerminalNode | undefined;
    OTHERS_SYMBOL(): TerminalNode | undefined;
    PACK_KEYS_SYMBOL(): TerminalNode | undefined;
    PAGE_SYMBOL(): TerminalNode | undefined;
    PARTIAL_SYMBOL(): TerminalNode | undefined;
    PARTITIONING_SYMBOL(): TerminalNode | undefined;
    PARTITIONS_SYMBOL(): TerminalNode | undefined;
    PASSWORD_SYMBOL(): TerminalNode | undefined;
    PATH_SYMBOL(): TerminalNode | undefined;
    PHASE_SYMBOL(): TerminalNode | undefined;
    PLUGIN_DIR_SYMBOL(): TerminalNode | undefined;
    PLUGIN_SYMBOL(): TerminalNode | undefined;
    PLUGINS_SYMBOL(): TerminalNode | undefined;
    POINT_SYMBOL(): TerminalNode | undefined;
    POLYGON_SYMBOL(): TerminalNode | undefined;
    PRECEDING_SYMBOL(): TerminalNode | undefined;
    PRESERVE_SYMBOL(): TerminalNode | undefined;
    PREV_SYMBOL(): TerminalNode | undefined;
    THREAD_PRIORITY_SYMBOL(): TerminalNode | undefined;
    PRIVILEGES_SYMBOL(): TerminalNode | undefined;
    PROCESSLIST_SYMBOL(): TerminalNode | undefined;
    PROFILE_SYMBOL(): TerminalNode | undefined;
    PROFILES_SYMBOL(): TerminalNode | undefined;
    QUARTER_SYMBOL(): TerminalNode | undefined;
    QUERY_SYMBOL(): TerminalNode | undefined;
    QUICK_SYMBOL(): TerminalNode | undefined;
    READ_ONLY_SYMBOL(): TerminalNode | undefined;
    REBUILD_SYMBOL(): TerminalNode | undefined;
    RECOVER_SYMBOL(): TerminalNode | undefined;
    REDO_BUFFER_SIZE_SYMBOL(): TerminalNode | undefined;
    REDOFILE_SYMBOL(): TerminalNode | undefined;
    REDUNDANT_SYMBOL(): TerminalNode | undefined;
    RELAY_SYMBOL(): TerminalNode | undefined;
    RELAYLOG_SYMBOL(): TerminalNode | undefined;
    RELAY_LOG_FILE_SYMBOL(): TerminalNode | undefined;
    RELAY_LOG_POS_SYMBOL(): TerminalNode | undefined;
    RELAY_THREAD_SYMBOL(): TerminalNode | undefined;
    REMOTE_SYMBOL(): TerminalNode | undefined;
    REORGANIZE_SYMBOL(): TerminalNode | undefined;
    REPEATABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_DO_DB_SYMBOL(): TerminalNode | undefined;
    REPLICATE_IGNORE_DB_SYMBOL(): TerminalNode | undefined;
    REPLICATE_DO_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_IGNORE_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_WILD_DO_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_WILD_IGNORE_TABLE_SYMBOL(): TerminalNode | undefined;
    REPLICATE_REWRITE_DB_SYMBOL(): TerminalNode | undefined;
    USER_RESOURCES_SYMBOL(): TerminalNode | undefined;
    RESPECT_SYMBOL(): TerminalNode | undefined;
    RESUME_SYMBOL(): TerminalNode | undefined;
    RETAIN_SYMBOL(): TerminalNode | undefined;
    RETURNED_SQLSTATE_SYMBOL(): TerminalNode | undefined;
    RETURNS_SYMBOL(): TerminalNode | undefined;
    REUSE_SYMBOL(): TerminalNode | undefined;
    REVERSE_SYMBOL(): TerminalNode | undefined;
    ROLLUP_SYMBOL(): TerminalNode | undefined;
    ROTATE_SYMBOL(): TerminalNode | undefined;
    ROUTINE_SYMBOL(): TerminalNode | undefined;
    ROW_COUNT_SYMBOL(): TerminalNode | undefined;
    ROW_FORMAT_SYMBOL(): TerminalNode | undefined;
    RTREE_SYMBOL(): TerminalNode | undefined;
    SCHEDULE_SYMBOL(): TerminalNode | undefined;
    SCHEMA_NAME_SYMBOL(): TerminalNode | undefined;
    SECOND_SYMBOL(): TerminalNode | undefined;
    SERIAL_SYMBOL(): TerminalNode | undefined;
    SERIALIZABLE_SYMBOL(): TerminalNode | undefined;
    SESSION_SYMBOL(): TerminalNode | undefined;
    SHARE_SYMBOL(): TerminalNode | undefined;
    SIMPLE_SYMBOL(): TerminalNode | undefined;
    SKIP_SYMBOL(): TerminalNode | undefined;
    SLOW_SYMBOL(): TerminalNode | undefined;
    SNAPSHOT_SYMBOL(): TerminalNode | undefined;
    SOUNDS_SYMBOL(): TerminalNode | undefined;
    SOURCE_SYMBOL(): TerminalNode | undefined;
    SQL_AFTER_GTIDS_SYMBOL(): TerminalNode | undefined;
    SQL_AFTER_MTS_GAPS_SYMBOL(): TerminalNode | undefined;
    SQL_BEFORE_GTIDS_SYMBOL(): TerminalNode | undefined;
    SQL_CACHE_SYMBOL(): TerminalNode | undefined;
    SQL_BUFFER_RESULT_SYMBOL(): TerminalNode | undefined;
    SQL_NO_CACHE_SYMBOL(): TerminalNode | undefined;
    SQL_THREAD_SYMBOL(): TerminalNode | undefined;
    SRID_SYMBOL(): TerminalNode | undefined;
    STACKED_SYMBOL(): TerminalNode | undefined;
    STARTS_SYMBOL(): TerminalNode | undefined;
    STATS_AUTO_RECALC_SYMBOL(): TerminalNode | undefined;
    STATS_PERSISTENT_SYMBOL(): TerminalNode | undefined;
    STATS_SAMPLE_PAGES_SYMBOL(): TerminalNode | undefined;
    STATUS_SYMBOL(): TerminalNode | undefined;
    STORAGE_SYMBOL(): TerminalNode | undefined;
    STRING_SYMBOL(): TerminalNode | undefined;
    SUBCLASS_ORIGIN_SYMBOL(): TerminalNode | undefined;
    SUBDATE_SYMBOL(): TerminalNode | undefined;
    SUBJECT_SYMBOL(): TerminalNode | undefined;
    SUBPARTITION_SYMBOL(): TerminalNode | undefined;
    SUBPARTITIONS_SYMBOL(): TerminalNode | undefined;
    SUPER_SYMBOL(): TerminalNode | undefined;
    SUSPEND_SYMBOL(): TerminalNode | undefined;
    SWAPS_SYMBOL(): TerminalNode | undefined;
    SWITCHES_SYMBOL(): TerminalNode | undefined;
    TABLE_NAME_SYMBOL(): TerminalNode | undefined;
    TABLES_SYMBOL(): TerminalNode | undefined;
    TABLE_CHECKSUM_SYMBOL(): TerminalNode | undefined;
    TABLESPACE_SYMBOL(): TerminalNode | undefined;
    TEMPORARY_SYMBOL(): TerminalNode | undefined;
    TEMPTABLE_SYMBOL(): TerminalNode | undefined;
    TEXT_SYMBOL(): TerminalNode | undefined;
    THAN_SYMBOL(): TerminalNode | undefined;
    TIES_SYMBOL(): TerminalNode | undefined;
    TRANSACTION_SYMBOL(): TerminalNode | undefined;
    TRIGGERS_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_ADD_SYMBOL(): TerminalNode | undefined;
    TIMESTAMP_DIFF_SYMBOL(): TerminalNode | undefined;
    TIME_SYMBOL(): TerminalNode | undefined;
    TYPES_SYMBOL(): TerminalNode | undefined;
    TYPE_SYMBOL(): TerminalNode | undefined;
    UDF_RETURNS_SYMBOL(): TerminalNode | undefined;
    UNBOUNDED_SYMBOL(): TerminalNode | undefined;
    UNCOMMITTED_SYMBOL(): TerminalNode | undefined;
    UNDEFINED_SYMBOL(): TerminalNode | undefined;
    UNDO_BUFFER_SIZE_SYMBOL(): TerminalNode | undefined;
    UNDOFILE_SYMBOL(): TerminalNode | undefined;
    UNKNOWN_SYMBOL(): TerminalNode | undefined;
    UNTIL_SYMBOL(): TerminalNode | undefined;
    USER_SYMBOL(): TerminalNode | undefined;
    USE_FRM_SYMBOL(): TerminalNode | undefined;
    VARIABLES_SYMBOL(): TerminalNode | undefined;
    VCPU_SYMBOL(): TerminalNode | undefined;
    VIEW_SYMBOL(): TerminalNode | undefined;
    VALUE_SYMBOL(): TerminalNode | undefined;
    WARNINGS_SYMBOL(): TerminalNode | undefined;
    WAIT_SYMBOL(): TerminalNode | undefined;
    WEEK_SYMBOL(): TerminalNode | undefined;
    WORK_SYMBOL(): TerminalNode | undefined;
    WEIGHT_STRING_SYMBOL(): TerminalNode | undefined;
    X509_SYMBOL(): TerminalNode | undefined;
    XID_SYMBOL(): TerminalNode | undefined;
    XML_SYMBOL(): TerminalNode | undefined;
    YEAR_SYMBOL(): TerminalNode | undefined;
    SHUTDOWN_SYMBOL(): TerminalNode | undefined;
    CUBE_SYMBOL(): TerminalNode | undefined;
    IMPORT_SYMBOL(): TerminalNode | undefined;
    FUNCTION_SYMBOL(): TerminalNode | undefined;
    ROWS_SYMBOL(): TerminalNode | undefined;
    ROW_SYMBOL(): TerminalNode | undefined;
    EXCHANGE_SYMBOL(): TerminalNode | undefined;
    EXPIRE_SYMBOL(): TerminalNode | undefined;
    ONLY_SYMBOL(): TerminalNode | undefined;
    VALIDATION_SYMBOL(): TerminalNode | undefined;
    WITHOUT_SYMBOL(): TerminalNode | undefined;
    ADMIN_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MultiQueryMySQLParserListener): void;
    exitRule(listener: MultiQueryMySQLParserListener): void;
}
