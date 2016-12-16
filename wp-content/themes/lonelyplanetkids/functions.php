<?php
define( 'CRB_THEME_DIR', dirname( __FILE__ ) . DIRECTORY_SEPARATOR );

# Enqueue JS and CSS assets on the front-end
add_action( 'wp_enqueue_scripts', 'crb_wp_enqueue_scripts' );
function crb_wp_enqueue_scripts() {
	$template_dir = get_template_directory_uri();

	# Enqueue jQuery
	wp_enqueue_script( 'jquery' );

	# Enqueue Custom JS files
	# @crb_enqueue_script attributes -- id, location, dependencies, in_footer = false
	crb_enqueue_script( 'theme-functions', $template_dir . '/js/functions.js', array( 'jquery' ) );
	crb_enqueue_script( 'theme-tweenmax', $template_dir . '/js/TweenMax.js', array( 'jquery' ) );
	crb_enqueue_script( 'theme-timelinemax', $template_dir . '/js/TimelineMax.js', array( 'jquery' ) );
	crb_enqueue_script( 'theme-magnific', $template_dir . '/js/jquery.magnific-popup.js', array( 'jquery' ) );
	crb_enqueue_script( 'theme-turn', $template_dir . '/js/turn.js', array( 'jquery' ) );
	crb_enqueue_script( 'theme-slick', $template_dir . '/js/slick.js', array( 'jquery' ) );


	# Enqueue Custom CSS files
	# @crb_enqueue_style attributes -- id, location, dependencies, media = all
	crb_enqueue_style( 'theme-magnific', $template_dir . '/assets/magnific-popup.css' );
	crb_enqueue_style( 'theme-slick', $template_dir . '/assets/slick.css' );
	crb_enqueue_style( 'theme-custom-styles', $template_dir . '/assets/bundle.css' );
	crb_enqueue_style( 'theme-styles', $template_dir . '/style.css' );

	# Enqueue Comments JS file
	if ( is_singular() ) {
		wp_enqueue_script( 'comment-reply' );
	}
}

# Enqueue JS and CSS assets on admin pages
add_action( 'admin_enqueue_scripts', 'crb_admin_enqueue_scripts' );
function crb_admin_enqueue_scripts() {
	$template_dir = get_template_directory_uri();

	# Enqueue Scripts
	# @crb_enqueue_script attributes -- id, location, dependencies, in_footer = false
	# crb_enqueue_script( 'theme-admin-functions', $template_dir . '/js/admin-functions.js', array( 'jquery' ) );

	# Enqueue Styles
	# @crb_enqueue_style attributes -- id, location, dependencies, media = all
	# crb_enqueue_style( 'theme-admin-styles', $template_dir . '/css/admin-style.css' );
}

# Attach Custom Post Types and Custom Taxonomies
add_action( 'init', 'crb_attach_post_types_and_taxonomies', 0 );
function crb_attach_post_types_and_taxonomies() {
	# Attach Custom Post Types
	include_once( CRB_THEME_DIR . 'options/post-types.php' );

	# Attach Custom Taxonomies
	include_once( CRB_THEME_DIR . 'options/taxonomies.php' );
}

add_action( 'after_setup_theme', 'crb_setup_theme' );

# To override theme setup process in a child theme, add your own crb_setup_theme() to your child theme's
# functions.php file.
if ( ! function_exists( 'crb_setup_theme' ) ) {
	function crb_setup_theme() {
		# Make this theme available for translation.
		load_theme_textdomain( 'crb', get_template_directory() . '/languages' );

		# Autoload dependencies
		$autoload_dir = CRB_THEME_DIR . 'vendor/autoload.php';
		if ( ! is_readable( $autoload_dir ) ) {
			wp_die( __( 'Please, run <code>composer install</code> to download and install the theme dependencies.', 'crb' ) );
		}
		include_once( $autoload_dir );

		# Additional libraries and includes
		include_once( CRB_THEME_DIR . 'includes/comments.php' );
		include_once( CRB_THEME_DIR . 'includes/title.php' );
		include_once( CRB_THEME_DIR . 'includes/gravity-forms.php' );
		include_once( CRB_THEME_DIR . 'includes/import.php' );

		# Theme supports
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'menus' );
		add_theme_support( 'html5', array( 'gallery' ) );

		# Image sizes
		add_image_size( 'socials', 33, 33, true );
		add_image_size( 'slider', 2027, 820, true );
		add_image_size( 'home-video', 600, 318, true );
		add_image_size( 'home-game', 545, 377, true );
		add_image_size( 'book', 444, 0, true );
		add_image_size( 'book-thumbnail', 170, 0, true );
		add_image_size( 'book-preview', 450, 0, true );
		add_image_size( 'box', 192, 275, true );
		add_image_size( 'app-slider', 327, 244, true );
		add_image_size( 'region-icon', 30, 30, true );
		add_image_size( 'downloads', 300, 300, true );
		add_image_size( 'sections', 540, 0, true );
		add_image_size( 'author', 470, 350, true );
		add_image_size( 'author-thumbnail', 78, 78, true );
		add_image_size( 'blog-post-thumbnail', 647, 328, true );
		add_image_size( 'post-widget-thumbnail', 114, 110, true );

		# Register Theme Menu Locations
		register_nav_menus(array(
			'main-menu'     => __( 'Main Menu', 'crb' ),
			'category-menu' => __( 'Category Menu', 'crb' ),
		));

		# Attach custom widgets
		include_once( CRB_THEME_DIR . 'options/widgets.php' );

		# Attach custom shortcodes
		include_once( CRB_THEME_DIR . 'options/shortcodes.php' );

		# Add Actions
		add_action( 'widgets_init', 'crb_widgets_init' );
		add_action( 'carbon_register_fields', 'crb_attach_theme_options' );

		# Add Filters
		add_filter( 'excerpt_more', 'crb_excerpt_more' );
		add_filter( 'excerpt_length', 'crb_excerpt_length', 999 );
		add_filter( 'jpeg_quality', 'crb_jpeg_quality' );
	}
}

# Register Sidebars
# Note: In a child theme with custom crb_setup_theme() this function is not hooked to widgets_init
function crb_widgets_init() {

	# Footer Sidebar
	register_sidebar( array(
		'name' => __( 'Footer Sidebar', 'crb' ),
		'id'   => 'footer-sidebar',
		'before_widget' => '<div id="%1$s" class="footer-col %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h6 class="widgettitle">',
		'after_title'   => '</h6>',
	) );

	# Blog Sidebar
	register_sidebar( array(
		'name' => __( 'Blog Sidebar', 'crb' ),
		'id'   => 'blog-sidebar',
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget'  => '</li>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	# Single Post Sidebar
	register_sidebar( array(
		'name' => __( 'Single Sidebar', 'crb' ),
		'id'   => 'single-sidebar',
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget'  => '</li>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	# Kids Zone Sidebar
	register_sidebar( array(
		'name' => __( 'Kids Zone Sidebar', 'crb' ),
		'id'   => 'kids-zone-sidebar',
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget'  => '</li>'
	) );
}

function crb_attach_theme_options() {
	# Attach fields
	include_once( CRB_THEME_DIR . 'options/theme-options.php' );
	include_once( CRB_THEME_DIR . 'options/post-meta.php' );
}

function crb_excerpt_more() {
	return '...';
}

function crb_excerpt_length() {
	return 21;
}

function crb_excerpt_length_short() {
	return 8;
}

function crb_jpeg_quality() {
	return 100;
}

function crb_get_menus() {
	$menus = array();
	$terms = get_terms( 'nav_menu', array( 'hide_empty' => true ) );

	foreach ($terms as $term) {
		$menus[$term->term_id] = $term->name;
	}

	return $menus;
}

function crb_get_page_by_template( $template ) {
	$pages = get_pages( array(
		'number' => 1,
		'meta_key' => '_wp_page_template',
		'meta_value' => $template,
	) );

	return $pages ? $pages[0] : null;
}

function crb_get_formatted_file_size( $file, $decimals = 0 ) {
	return size_format( filesize($file), $decimals );
}

function crb_get_elapsed_time( $time ) {
    $total_delay = time() - strtotime( $time );
    if ( $total_delay <= 0 ) {
        return '';
    } else {
        if ( $days = floor( $total_delay / 86400 ) ) {
            $total_delay = $total_delay % 86400;
            return sprintf( _n( '%s day ago', '%s days ago', $days ), $days );
        }
        if( $hours = floor( $total_delay / 3600 ) ) {
            $total_delay = $total_delay % 3600;
            return sprintf( _n( '%s hour ago', '%s hours ago', $hours ), $hours );
        }
        if( $mins = floor( $total_delay / 60 ) ) {
            $total_delay = $total_delay % 60;
            return sprintf( _n( '%s min ago', '%s mins ago', $mins ), $mins );
        }
    }
}