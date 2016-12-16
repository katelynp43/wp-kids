<?php
	$stores = carbon_get_the_post_meta( 'crb_stores', 'complex' );

	if ( ! $stores ) {
		return;
	}
?>

<section class="section-shops">
	<img src="<?php bloginfo('template_directory'); ?>/images/left-cloud.png" alt="" class="left-cloud decoration">

	<div class="shell">
		<?php if ( $section_title = carbon_get_the_post_meta( 'crb_stores_title' ) ): ?>
			<h4><?php echo esc_html( $section_title ); ?></h4>
		<?php endif ?>

		<ul>
			<?php foreach ( $stores as $store): ?>
				<li>
					<a href="<?php echo esc_url( $store['link'] ) ?>">
						<?php echo wp_get_attachment_image( $store['image'], 'app-slider' ); ?>
					</a>
				</li>
			<?php endforeach ?>
		</ul>
	</div><!-- /.shell -->

	<img src="<?php bloginfo('template_directory'); ?>/images/right-cloud.png" alt="" class="right-cloud decoration">
</section><!-- /.section-shops -->
