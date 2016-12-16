<?php
	$slide = $slider[0];
	$image_src = wp_get_attachment_image_src( $slide['image'], 'slider' );
	$image_url = $image_src[0];
?>
<div class="intro-primary" style="background-image: url(<?php echo $image_url; ?>)">
	<div class="intro-content">
		<div class="shell shell-small">
			<?php crb_render_fragment( 'slider/content', array( 'slide' => $slide ) ); ?>
		</div><!-- /.shell shell-small -->
	</div><!-- /.intro-content -->
</div><!-- /.intro -->