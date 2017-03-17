<?php
require_once(__DIR__ . "/../vendor/autoload.php");
(new \Dotenv\Dotenv(__DIR__."/../"))->load();

define("WP_CONTENT_DIR", dirname( __FILE__ ) . "/wp-content");
define("WP_CONTENT_URL", "/wp-content");

define("DB_NAME", getenv("DB_NAME"));
define("DB_USER", getenv("DB_USER"));
define("DB_PASSWORD", getenv("DB_PASS"));
define("DB_HOST", getenv("DB_HOST"));

/**
 * uncomment for Multisite
 */
//define( "WP_ALLOW_MULTISITE", true );
//define("MULTISITE", true);
// set this in your .env
//define('DOMAIN_CURRENT_SITE', getenv('DOMAIN_CURRENT_SITE') );
//define("PATH_CURRENT_SITE", "/" );
//define('SITE_ID_CURRENT_SITE', 1);
//define('BLOGID_CURRENT_SITE', '1' );
//define( 'WP_NETWORK_URL',  DOMAIN_CURRENT_SITE . '/wordpress');


/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = getenv("DB_PREFIX");

/** Absolute path to the WordPress directory. */
if ( !defined("ABSPATH") )
    define("ABSPATH", dirname(__FILE__) . "/");

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . "wp-settings.php");
