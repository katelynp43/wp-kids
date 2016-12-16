<?php 
$class = ( is_category( 'kids-zone' ) || in_category( 'kids-zone' ) ) ? 'intro-alt' : '';
$category_id = get_cat_ID( "KIDS’ ZONE" );
?>
<div class= "intro <?php echo $class; ?>">
	<div class="intro-image">
		<?php if ( is_category( 'kids-zone' ) || ( is_single() && in_category( 'kids-zone' ) ) ): ?>
			<a href="<?php echo get_category_link( $category_id ); ?>">
				<img src="<?php bloginfo('template_directory'); ?>/images/intro-orange.png" alt="">
			</a>
		<?php else: ?>
			<a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>">
				<img src="<?php bloginfo('template_directory'); ?>/images/haeder-image-retina.png" alt="">
			</a>
		<?php endif ?>
	</div><!-- /.intro-image -->

	<?php 
	if ( has_nav_menu( 'category-menu' ) ): ?>
		<div class="nav-bar">
			<nav class="nav-primary">
			    <?php 
			    wp_nav_menu( array( 
			        'theme_location' => 'category-menu'
			    ) ); 
	    		?>
	    	</nav><!-- /.nav-primary -->
		</div><!-- /.nav-bar -->
	<?php endif; ?>
</div><!-- /.intro intro-alt-->