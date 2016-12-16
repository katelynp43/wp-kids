<?php
/*
Template Name: Apps Games
*/
?>

<?php get_header(); ?>

<?php
	crb_render_fragment( 'slider/index' );
	crb_render_fragment( 'apps-games/stores' );
	crb_render_fragment( 'apps-games/slider' );
	crb_render_fragment( 'apps-games/map' );
?>

<?php get_footer(); ?>