<?php
/**
 * vuejs wordpress functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package vuejs_wordpress
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function vuejs_wordpress_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on vuejs wordpress, use a find and replace
		* to change 'vuejs-wordpress' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'vuejs-wordpress', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );


	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'vuejs-wordpress' ),
		)
	);
}
add_action( 'after_setup_theme', 'vuejs_wordpress_setup' );

/**
 * Enqueue scripts and styles.
 */
function vuejs_wordpress_scripts() {
	wp_enqueue_style( 'vuejs-wordpress-style', get_template_directory_uri(). '/dist/css/app.css', array(), _S_VERSION );
	wp_enqueue_style( 'vuejs-wordpress-style-chunk-vendors', get_template_directory_uri(). '/dist/css/chunk-vendors.css', array(), _S_VERSION );
	//wp_style_add_data( 'vuejs-wordpress-style', 'rtl', 'replace' );

	wp_enqueue_script( 'vuejs-wordpress-app', get_template_directory_uri() . '/dist/js/app.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'vuejs-wordpress-chunk-vendors', get_template_directory_uri() . '/dist/js/chunk-vendors.js', array(), _S_VERSION, true );

}
add_action( 'wp_enqueue_scripts', 'vuejs_wordpress_scripts' );
