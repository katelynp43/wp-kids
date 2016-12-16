<?php

use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
	->add_tab( __( 'Header', 'crb' ), array(
		Field::make( 'text', 'crb_socials_text' )
			->set_default_value( 'Share this' ),
		Field::make( 'complex', 'crb_socials' )
			->add_fields( array(
				Field::make( 'image', 'image' )
					->help_text( 'Recommended image size: 33x33px' )
					->set_required( true ),
				Field::make( 'text', 'link' )
					->set_required( true )
			) ),
	) )
	->add_tab( __( 'Twitter Credentials' ), array(
		Field::make( 'text', 'crb_twitter_consumer_key', __( 'Consumer Key', 'crb' ) ),
		Field::make( 'text', 'crb_twitter_consumer_secret', __( 'Consumer Secret', 'crb' ) ),
		Field::make( 'text', 'crb_twitter_oauth_access_token', __( 'Access Token', 'crb' ) ),
		Field::make( 'text', 'crb_twitter_oauth_access_token_secret', __( 'Access Token Secret', 'crb' ) )
	) )
	->add_tab( __( 'Misc', 'crb' ), array(
		Field::make( 'header_scripts', 'crb_header_script', __( 'Header Script', 'crb' ) ),
		Field::make( 'footer_scripts', 'crb_footer_script', __( 'Footer Script', 'crb' ) ),
	) );
