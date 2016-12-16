<?php
/*
Template Name: Home
*/
?>

<?php get_header(); ?>

<?php
	crb_render_fragment( 'home/intro' );
	crb_render_fragment( 'slider/index' );
	crb_render_fragment( 'home/books' );
	crb_render_fragment( 'home/videos' );
	crb_render_fragment( 'home/game' );
?>

<?php get_footer(); ?>