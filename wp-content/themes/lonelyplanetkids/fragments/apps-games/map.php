<?php
	$image = carbon_get_the_post_meta( 'crb_map_image' );

	if ( !$image ) {
		return;
	}

	$text = carbon_get_the_post_meta( 'crb_map_text' );
	$image_src = wp_get_attachment_image_src( $image, 'slider' );
	$image_link = $image_src[0];
?>

<section class="section-map" style="background-image: url(<?php echo $image_link; ?>)">
	<div class="shell shell-small">
		<img src="<?php bloginfo('template_directory'); ?>/images/map-img.png" alt="">

		<?php if ( $text ): ?>
			<h4><?php echo esc_html( $text ); ?></h4>
		<?php endif ?>

		<img src="<?php bloginfo('template_directory'); ?>/images/decoration-map.png" alt="" class="section-image-decoration">
	</div><!-- /.shell shell-small -->
</section><!-- /.section-map -->