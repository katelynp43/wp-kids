<?php

/**
 * Books
 */
register_post_type( 'crb_book', array(
	'labels' => array(
		'name' => __( 'Books', 'crb' ),
		'singular_name' => __( 'Book', 'crb' ),
		'add_new' => __( 'Add New', 'crb' ),
		'add_new_item' => __( 'Add new Book', 'crb' ),
		'view_item' => __( 'View Book', 'crb' ),
		'edit_item' => __( 'Edit Book', 'crb' ),
		'new_item' => __( 'New Book', 'crb' ),
		'view_item' => __( 'View Book', 'crb' ),
		'search_items' => __( 'Search Books', 'crb' ),
		'not_found' =>  __( 'No Books found', 'crb' ),
		'not_found_in_trash' => __( 'No Books found in trash', 'crb' ),
	),
	'public' => true,
	'exclude_from_search' => true,
	'show_ui' => true,
	'capability_type' => 'post',
	'hierarchical' => false,
	'_edit_link' => 'post.php?post=%d',
	'rewrite' => array(
		'slug' => 'books',
		'with_front' => false,
	),
	'query_var' => true,
	'menu_icon' => 'dashicons-book-alt',
	'supports' => array( 'title', 'editor', 'thumbnail' ),
));

/**
 * Activities
 */
register_post_type( 'crb_activity', array(
	'labels' => array(
		'name' => __( 'Activities', 'crb' ),
		'singular_name' => __( 'Activity', 'crb' ),
		'add_new' => __( 'Add New', 'crb' ),
		'add_new_item' => __( 'Add new Activity', 'crb' ),
		'view_item' => __( 'View Activity', 'crb' ),
		'edit_item' => __( 'Edit Activity', 'crb' ),
		'new_item' => __( 'New Activity', 'crb' ),
		'view_item' => __( 'View Activity', 'crb' ),
		'search_items' => __( 'Search Activities', 'crb' ),
		'not_found' =>  __( 'No Activities found', 'crb' ),
		'not_found_in_trash' => __( 'No Activities found in trash', 'crb' ),
	),
	'public' => false,
	'exclude_from_search' => true,
	'show_ui' => true,
	'capability_type' => 'post',
	'hierarchical' => false,
	'_edit_link' => 'post.php?post=%d',
	'rewrite' => false,
	'query_var' => true,
	'menu_icon' => 'dashicons-admin-customizer',
	'supports' => array( 'title', 'editor', 'thumbnail' ),
));

/**
 * Authors
 */
register_post_type( 'crb_author', array(
	'labels' => array(
		'name' => __( 'Authors', 'crb' ),
		'singular_name' => __( 'Author', 'crb' ),
		'add_new' => __( 'Add New', 'crb' ),
		'add_new_item' => __( 'Add new Author', 'crb' ),
		'view_item' => __( 'View Author', 'crb' ),
		'edit_item' => __( 'Edit Author', 'crb' ),
		'new_item' => __( 'New Author', 'crb' ),
		'view_item' => __( 'View Author', 'crb' ),
		'search_items' => __( 'Search Authors', 'crb' ),
		'not_found' =>  __( 'No Authors found', 'crb' ),
		'not_found_in_trash' => __( 'No Authors found in trash', 'crb' ),
	),
	'public' => false,
	'exclude_from_search' => true,
	'show_ui' => true,
	'capability_type' => 'post',
	'hierarchical' => false,
	'_edit_link' => 'post.php?post=%d',
	'rewrite' => false,
	'query_var' => true,
	'menu_icon' => 'dashicons-universal-access',
	'supports' => array( 'title', 'editor', 'thumbnail' ),
));
