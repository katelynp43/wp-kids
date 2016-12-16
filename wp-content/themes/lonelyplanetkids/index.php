<?php get_header(); ?>

<?php 
get_template_part( 'fragments/blog-intro' );

$class = ( is_category( 'kids-zone' ) || in_category( 'kids-zone' ) ) ? 'main-alt' : '';  
?>

<div class="main <?php echo $class; ?>">
	<div class="shell">
		<div class="content">
			<?php		
			if ( is_single() ) {
				get_template_part( 'loop-single' );
			} else {
				if ( !is_home() && !is_category() ) {
					crb_the_title( '<h3 class="page-title">', '</h3>' );
				}

				get_template_part( 'loop' );
			}
			?>
			<div class="content-image">
				<img src="<?php bloginfo('template_directory'); ?>/images/footer-image.png" alt="">
			</div><!-- /.content-image -->
		</div><!-- /.content -->

		<?php get_template_part( 'sidebar' ); ?>
	</div><!-- /.shell -->
</div><!-- /.main -->

<?php get_footer(); ?>