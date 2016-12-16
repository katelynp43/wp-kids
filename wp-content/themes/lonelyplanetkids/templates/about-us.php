<?php
/*
Template Name: About Us
*/
?>

<?php get_header(); ?>

<?php
	crb_render_fragment( 'slider/index' );
	crb_render_fragment( 'about/sections' );
	crb_render_fragment( 'about/authors' );
?>

<?php get_footer(); ?>