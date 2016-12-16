<?php get_header(); ?>
	<div class="main">
		<div class="shell">
			<div class="content">
				<?php 
				crb_the_title( '<h3 class="page-title">', '</h3>' );
				
				get_template_part( 'loop' ); 
				?>
				<div class="content-image">
					<img src="<?php bloginfo('template_directory'); ?>/images/footer-image.png" alt="">
				</div><!-- /.content-image -->
			</div><!-- /.content -->
		</div><!-- /.shell -->
	</div><!-- /.main -->
<?php get_footer(); ?>