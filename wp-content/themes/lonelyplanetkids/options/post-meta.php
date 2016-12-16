<?php

use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

/**
 * Returns a slider complex field.
 *
 * @param  string $key
 * @param  string $label
 * @return object
 */

/**
 * Video Posts
 */
Container::make( 'post_meta', __( 'Post Options', 'crb' ) )
	->show_on_post_type( 'post' )
	->show_on_category( 'videos' )
	->add_fields( array(
		Field::make( 'text', 'crb_video_link' ),
	) );

/**
 * Pages
 */
Container::make( 'post_meta', __( 'Slider', 'crb' ) )
	->show_on_post_type( 'page' )
	->add_fields( array(
		Field::make( 'complex', 'crb_slider', '' )
			->add_fields( array(
				Field::make( 'image', 'image' )
					->help_text( 'Recommended image size: 2027x820px' )
					->set_required(true),
				Field::make( 'text', 'title' ),
				Field::make( 'textarea', 'text' )
					->set_rows(3),
				Field::make( 'text', 'button_text' )
					->set_width(50),
				Field::make( 'text', 'button_link' )
					->set_width(50),
			) )
			->setup_labels( array(
				'plural_name'   => __( 'Slides', 'crb' ),
				'singular_name' => __( 'Slide', 'crb' ),
			) ),
	) );
/**
 * Home Template
 */
Container::make( 'post_meta', __( 'Home Options', 'crb' ) )
	->show_on_post_type( 'page' )
	->show_on_template( 'templates/home.php' )
	->add_tab( __( 'Books', 'crb' ), array(
		Field::make( 'text', 'crb_books_title', __( 'Section Title', 'crb' ) )
			->set_default_value( "What's new" ),
		Field::make( 'text', 'crb_books_button_text', __( 'Button Text', 'crb' ) )
			->set_width(50)
			->set_default_value( 'Browse books' ),
		Field::make( 'text', 'crb_books_button_link', __( 'Button Link', 'crb' ) )
			->set_width(50),
		Field::make( 'textarea', 'crb_books_ads_code', __( 'Ads Code', 'crb' ) ),
	) )
	->add_tab( __( 'Videos', 'crb' ), array(
		Field::make( 'text', 'crb_videos_title', __( 'Section Title', 'crb' ) )
			->set_default_value( 'Kick-start the travel bug with our videos' ),
		Field::make( 'complex', 'crb_videos' )
			->add_fields( array(
				Field::make( 'text', 'title' )
					->set_required(true),
				Field::make( 'image', 'image' )
					->help_text('Recommended image size: 600x318px')
					->set_required(true),
				Field::make( 'text', 'video_link' )
					->help_text('Youtube or Vimeo links are supported')
					->set_required(true),
				Field::make( 'text', 'text' ),
				Field::make( 'text', 'button_text' )
					->set_width(50),
				Field::make( 'text', 'button_link' )
					->set_width(50),
			) ),
	) )
	->add_tab( __( 'Game', 'crb' ), array(
		Field::make( 'text', 'crb_game_title', __( 'Section Title', 'crb' ) )
			->set_default_value( 'Play the Amazing World Atlas Game' ),
		Field::make( 'textarea', 'crb_game_text' )
			->set_default_value( 'Become a super-explorer of continents, countries and cities with the Amazing World Atlas app for your phone or tablet.' )
			->set_rows(3),
		Field::make( 'image', 'crb_game_image', __( 'Image', 'crb' ) )
			->help_text('Recommended image size: 545x377px'),
		Field::make( 'text', 'crb_game_button_text', __( 'Button Text', 'crb' ) )
			->set_width(50)
			->set_default_value('Learn More'),
		Field::make( 'text', 'crb_game_button_link', __( 'Button Link', 'crb' ) )
			->set_width(50),
		Field::make( 'text', 'crb_game_download_text', __( 'Download Text', 'crb' ) )
			->set_default_value('Download'),
		Field::make( 'complex', 'crb_game_download_options', __( 'Download Options', 'crb' ) )
			->add_fields( array(
				Field::make( 'text', 'label' )
					->set_required(true),
				Field::make( 'text', 'link' )
					->set_required(true),
			) ),
	) );

/**
 * Apps & Games Template
 */
Container::make( 'post_meta', __( 'Apps & Games Options', 'crb' ) )
	->show_on_post_type( 'page' )
	->show_on_template( 'templates/apps-games.php' )
	->add_tab( __( 'App Stores', 'crb' ), array(
		Field::make( 'text', 'crb_stores_title', __( 'Section Title', 'crb' ) )
			->set_default_value( 'Available now on your phone and tablet' ),
		Field::make( 'complex', 'crb_stores' )
			->add_fields( array(
				Field::make( 'text', 'link' )
					->set_required(true),
				Field::make( 'image', 'image' )
					->set_required(true),
			) )
	) )
	->add_tab( __( 'App Slider', 'crb' ), array(
		Field::make( 'complex', 'crb_app_slider' )
			->add_fields( array(
				Field::make( 'text', 'text' )
					->set_required(true),
				Field::make( 'image', 'image' )
					->set_required(true),
				Field::make( 'select', 'icon' )
					->set_required(true)
					->add_options( array(
						'planet' => 'Planet',
						'marker' => 'Marker',
						'pet'    => 'Pet',
						'star'   => 'Star',
					) )
			) )
	) )
	->add_tab( __( 'Map', 'crb' ), array(
		Field::make( 'text', 'crb_map_text'),
		Field::make( 'image', 'crb_map_image'),
	) );

/**
 * Bookseller Template
 */
Container::make( 'post_meta', __( 'Booksellers Options', 'crb' ) )
	->show_on_post_type( 'page' )
	->show_on_template( 'templates/booksellers.php' )
	->add_tab( __( 'Regions', 'crb' ), array(
		Field::make( 'complex', 'crb_regions', '' )
			->add_fields( array(
				Field::make( 'text', 'name' )
					->set_width(50)
					->set_required(true),
				Field::make( 'gravity_form', 'form' )
					->set_width(50)
					->set_required(true),
				Field::make( 'image', 'image' )
					->help_text('Recommended image size: 30x30px')
					->set_required(true),
			) ),
	) )
	->add_tab( __( 'Downloads', 'crb' ), array(
		Field::make( 'text', 'crb_downloads_title', __( 'Title', 'crb' ) ),
		Field::make( 'text', 'crb_downloads_text', __( 'Text', 'crb' ) ),
		Field::make( 'image', 'crb_downloads_image', __( 'Image', 'crb' ) )
			->help_text('Recommended image size: 300x300px'),
		Field::make( 'complex', 'crb_downloads', __( 'Downloads', 'crb' ) )
			->add_fields( array(
				Field::make( 'text', 'label' )
					->set_required(true),
				Field::make( 'attachment', 'file' )
					->set_required(true),
			) ),
	) )
	->add_tab( __( 'Posters', 'crb' ), array(
		Field::make( 'text', 'crb_posters_title', __( 'Title', 'crb' ) )
			->set_default_value( 'Posters' ),
		Field::make( 'complex', 'crb_posters', __( 'Posters', 'crb' ) )
			->add_fields( 'file', array(
				Field::make( 'text', 'title' )
					->set_required(true),
				Field::make( 'text', 'type' )
					->set_required(true),
				Field::make( 'image', 'image' )
					->set_required(true),
				Field::make( 'attachment', 'file' )
					->set_required(true),
			) )
			->add_fields( 'link', array(
				Field::make( 'text', 'title' )
					->set_required(true),
				Field::make( 'image', 'image' )
					->set_required(true),
				Field::make( 'text', 'link' )
					->set_required(true),
			) ),
	) );

/**
 * About Template
 */
Container::make( 'post_meta', __( 'About Options', 'crb' ) )
	->show_on_post_type( 'page' )
	->show_on_template( 'templates/about-us.php' )
	->add_tab( __( 'Sections', 'crb' ), array(
		Field::make( 'complex', 'crb_about_sections', '' )
			->add_fields( array(
				Field::make( 'rich_text', 'text' )
					->set_required(true),
				Field::make( 'image', 'image' )
					->set_required(true),
			) ),
	) )
	->add_tab( __( 'Authors', 'crb' ), array(
		Field::make( 'text', 'crb_authors_title', 'Title' )
			->set_default_value( 'Meet our Authors and Illustrators' )
	) );

/**
 * Books Post Type
 */
Container::make( 'post_meta', __( 'Book Options', 'crb' ) )
	->show_on_post_type( 'crb_book' )
	->add_tab( 'General', array(
		Field::make( 'rich_text', 'crb_book_information', __( 'Additional Information', 'crb' ) ),
		Field::make( 'text', 'crb_book_video', __( 'Video', 'crb' ) ),
		Field::make( 'text', 'crb_book_available_on', __( 'Available on', 'crb' ) ),
		Field::make( 'checkbox', 'crb_new_book', 'New book?' ),
	) )
	->add_tab( 'Purchase', array(
		Field::make( 'text', 'crb_book_purchase_link', __( 'Purchase Link', 'crb' ) ),
		Field::make( 'complex', 'crb_book_prices', __( 'Prices', 'crb') )
			->add_fields( array(
				Field::make( 'text', 'currency_code' )
					->set_width(50)
					->set_required(true),
				Field::make( 'text', 'price' )
					->set_width(50)
					->set_required(true),
			) ),
	) )
	->add_tab( 'Preivew', array(
		Field::make( 'complex', 'crb_book_preview', '' )
			->add_fields( array(
				Field::make( 'image', 'image' )
					->set_required(true),
			) ),
	) );

/**
 * Activities Post Type
 */
Container::make( 'post_meta', __( 'Activity Options', 'crb' ) )
	->show_on_post_type( 'crb_activity' )
	->add_fields( array(
		Field::make( 'attachment', 'crb_activity_download_file', __( 'Download File', 'crb') )
			->set_required(true),
	) );

/**
 * Authors Post Type
 */
Container::make( 'post_meta', __( 'Author Options', 'crb' ) )
	->show_on_post_type( 'crb_author' )
	->add_fields( array(
		Field::make( 'text', 'crb_author_role', __( 'Role', 'crb') )
			->set_required(true),
		Field::make( 'text', 'crb_author_books_text', __( 'Books Text', 'crb') )
			->set_required(true),
		Field::make( 'relationship', 'crb_author_featured_book', __( 'Featured Book', 'crb') )
			->set_post_type('crb_book')
			->set_max(1)
			->set_required(true),
	) );
