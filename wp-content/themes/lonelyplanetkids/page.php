<?php get_header(); ?>

<?php the_post(); ?>

<?php crb_render_fragment( 'slider/index' ); ?>

<section class="section-page">
	<div class="shell shell-small">
		<?php the_content(); ?>
	</div><!-- /.shell shell-small -->
</section><!-- /.section-page -->

<?php get_footer(); ?>