<?php
/*
Template Name: Booksellers
*/
?>

<?php get_header(); ?>

<?php the_post(); ?>

<?php crb_render_fragment( 'slider/index' ); ?>

<section class="section-booksellers-form">
	<div class="shell shell-small">
		<?php the_content(); ?>

		<?php crb_render_fragment( 'booksellers/regions' ); ?>
	</div><!-- /.shell -->
</section><!-- /.section-booksellers -->

<?php
	crb_render_fragment( 'booksellers/downloads' );
	crb_render_fragment( 'booksellers/posters' );
?>

<?php get_footer(); ?>