<?php
/*
Plugin Name: Boombox Shortcode Plugin
Description: Boombox helps serious publishers, brands and agencies create stunning interactive content (quizzes, polls, etc) and drive engagement.
Version: 1.0.0
License: GPL
Author: Boombox
Author URI: http://boombox.com
*/

function createBoomboxEmbedJS($atts, $content = null) {
	extract(shortcode_atts(array(
		'widget'   => '',
		'id'     => '',
		'height'     => 'auto',
		'width'     => '100%',
		'offset'     => ''
	), $atts));

	if (!$widget) {

		$error = "
		<div style='border-radius: 2px;background-color: #192129; padding: 40px; margin: 50px 0 70px; color:white;'>
			<h3 style='color:white;  font-size: 2em;font-weight: 300;'>Uh oh!</h3>
			<p style='margin: 0;'>Something is wrong with your Boombox shortcode. If you copy and paste it from the Boombox share screen, you should be good.</p>
		</div>";

		return $error;
	} else if ($widget == 'quiz') {

		wp_enqueue_script( 'boombox', '//dcc4iyjchzom0.cloudfront.net/widget/loader.js',  array(), false, false );

		$boomboxHook = "<div class=\"quizz-container\" data-quiz=\"$id\" data-width=\"$width\" data-height=\"$height\"";

		if ($offset){
			$boomboxHook .= " data-offset=\"$offset\"";
		}

		$boomboxHook .= "></div>";

		return $boomboxHook;

	} else {

		wp_enqueue_script( 'boombox', '//d6launbk5pe1s.cloudfront.net/widget.js',  array(), false, false );

		$boomboxHook = "<div class=\"mv-widget\" data-widget=\"$widget\" data-id=\"$id\" data-width=\"$width\" data-height=\"$height\"></div>";

		return $boomboxHook;

	}
}

add_shortcode('boombox', 'createBoomboxEmbedJS');

?>